import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthErrorService } from 'src/app/services/auth-error.service';
import { GoogleAuthProvider } from '@firebase/auth';
import { AuthService } from '../service/auth.service';
import { Cliente } from 'src/app/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestorageService } from 'src/app/services/firestorage.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  Pizza1 = "https://i.ibb.co/CK4Ccfs/2-Pizza-1.png";
  Boneless = "https://i.ibb.co/qBkHMwC/5-Boneless.png";
  Complementos = "https://i.ibb.co/WVRS39k/1-Complementos-Comprimido.jpg";
  googleIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png";
  login_img = "https://cdn-icons-png.flaticon.com/512/2250/2250207.png";
  errorIcon = "https://th.bing.com/th/id/R.40fb3813542c1bbff7a524bad59a4999?rik=Ievcg1pQngo5XQ&riu=http%3a%2f%2ffree-designer.net%2fdesign_img%2f0315064006.jpg&ehk=Ez49HBBenFoo8B9jFyAxA9ai1p%2fQWYFfJIy0cz3jkcg%3d&risl=&pid=ImgRaw&r=0";

  registrarUsuario: FormGroup;
  loading: boolean = false;
  usuario: string;
  nombre: string;
  apellido: string;
  newFile: string;

  cliente: Cliente ={
    uid: '',
    nombre: '',
    avatar: '',
    email: '',
    password: '',
    celular: 0,
    ubicacion: '',
  };

  constructor(private fb: FormBuilder,
    public afAuth: AngularFireAuth, //afAuth metodo para autentificar desde AngularFireAuth
    public firestoreService : FirestoreService,
    public firestorageService: FirestorageService,
    private toastr: ToastrService,
    private routes: Router,
    private authErrorService: AuthErrorService,
    public auth:AuthService
) { 
this.registrarUsuario = this.fb.group({
email: ['', [Validators.required, Validators.email]],
password: ['', [Validators.required, Validators.minLength(6)]],
repetirPassword: ['', [Validators.required, Validators.minLength(6)]],
})
}

async ngOnInit() {
  const uid = await this.auth.getUid();
  console.log(uid);
  
}

    //Auth con Google
  signInWithGoogle(){
    this.auth.googleSignIn();
  }

authLogin(provider: any){
  this.auth.authLogin(provider);
}

  //  async registrarse(){
  //     const credenciales ={
  //       email: this.cliente.email,
  //       password: this.cliente.password
  //     };
  //     const res = await this.auth.registrar(credenciales.email, credenciales.password).catch(err =>{
  //       console.log('error', err);
        
  //     });
  //     console.log(res);
      
  //   }

    logOut(){
      this.auth.logout();
    }



      //Registro con Email y contraseña
      async registrar(){
        const email = this.registrarUsuario.value.email;
        const password = this.registrarUsuario.value.password;
        const repetirPassword = this.registrarUsuario.value.repetirPassword;
    
        /* Verificar Passwords */
        if (password !== repetirPassword) {
            this.toastr.error('Las contraseñas no son las mismas', "Error");
            return;
        }
        this.loading = true;
    
        /* Creación de usuarios por Email y contraseña */
        const res = await this.afAuth.createUserWithEmailAndPassword(email, password).then(() => {
        this.verificarCorreo();
        localStorage.setItem(email, password);
        }).catch((error) => {
        this.loading = false;
        console.log(error);
        this.toastr.error(this.authErrorService.firebaseError(error.code), 'Error');
        })
        const uid = await this.auth.getUid();
        // this.cliente.uid = uid;
        // this.guardarUser();
        console.log(uid);
      }

   //Verificar Correo
   verificarCorreo() {
    this.auth.verificarCorreo();
   } 

   //Guardar usuarios en la BDFirebase
  // async guardarUser(){
  //   const path = 'Clientes';
  //   const name = this.cliente.nombre;
  //   if(this.newFile !== undefined){
  //     const res = await this.firestorageService.uploadImage(this.newFile, path, name);
  //     this.cliente.avatar = res;
  //   }
  //   this.firestoreService.createDoc(this.cliente, path, this.cliente.uid).then(res =>{
  //     console.log('Guardado con exito');
      
  //   }).catch(error =>{

  //   });
  // }

}
