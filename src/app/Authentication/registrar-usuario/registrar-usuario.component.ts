import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthErrorService } from 'src/app/services/auth-error.service';
import { GoogleAuthProvider } from '@firebase/auth';

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

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth, //afAuth metodo para autentificar desde AngularFireAuth
    private toastr: ToastrService,
    private routes: Router,
    private authErrorService: AuthErrorService,
) { 
this.registrarUsuario = this.fb.group({
email: ['', [Validators.required, Validators.email]],
password: ['', [Validators.required, Validators.minLength(6)]],
repetirPassword: ['', [Validators.required, Validators.minLength(6)]],
})
}

  ngOnInit(): void {
  }

  //Auth con Google
googleAuth(){
  return this.authLogin(new GoogleAuthProvider())
}

authLogin(provider: any){
  return this.afAuth.signInWithPopup(provider).then(result => {
    this.toastr.success('Se ha ingresado correctamente', 'Login Correcto');
    this.routes.navigate(['/MenuWithLogin']);
  }).catch((error)=> {
    this.toastr.error(this.authErrorService.firebaseError(error.code), 'Error');
  })
}

//Registro con Email y contraseña
registrar(){
  const email = this.registrarUsuario.value.email;
  // const usuario = this.registrarUsuario.value.usuario;
  // const nombre = this.registrarUsuario.value.nombre;
  // const apellido = this.registrarUsuario.value.apellido;
  const password = this.registrarUsuario.value.password;
  const repetirPassword = this.registrarUsuario.value.repetirPassword;

    /* Verificar Passwords */
    if (password !== repetirPassword) {
      this.toastr.error('Las contraseñas no son las mismas', "Error");
      return;
    }
  this.loading = true;

    /* Creación de usuarios por Email y contraseña */
  this.afAuth.createUserWithEmailAndPassword(email, password).then(() => {
    this.verificarCorreo();
  }).catch((error) => {
    this.loading = false;
    console.log(error);
    this.toastr.error(this.authErrorService.firebaseError(error.code), 'Error');
  })
 }

   //Verificar Correo
   verificarCorreo() {
    this.afAuth.currentUser.then((user) => user?.sendEmailVerification()).then(() => {
      this.toastr.info('Le hemos enviado un correo electronico para verificar su cuenta', 'Verificar Correo');
      this.routes.navigate(['/LogIn']);
    });
  } 
}
