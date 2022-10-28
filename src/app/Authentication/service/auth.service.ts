import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthErrorService } from 'src/app/services/auth-error.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    constructor(private fireauth : AngularFireAuth,
                private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private authErrorService: AuthErrorService) { 
                this.loginUsuario = this.fb.group({
                        email: ['', [Validators.required, Validators.email]],
                        password: ['', [Validators.required, Validators.minLength(6)]],
                      })
                    this.getUid();
                }
    loading: boolean = false;
    loginUsuario : FormGroup;
    registrarUsuario: FormGroup;

    //Iniciar Sección
    login(){
        const email = this.loginUsuario.value.email;
        const password = this.loginUsuario.value.password;
        this.loading = true;
    
        this.fireauth.signInWithEmailAndPassword(email, password).then((user)=>{
          console.log(user);
          if(user.user?.emailVerified){
            this.router.navigate(['/MenuWithLogin'])
          }else{
            this.router.navigate(['/VerificarCorreo'])
          }
        }).catch((error)=>{
          this.loading = false;
          this.toastr.error(this.authErrorService.firebaseError(error.code), 'Error');
        }) 
    }

    // login(email: string, password: string){
    //     return this.fireauth.signInWithEmailAndPassword(email, password);
    // }
    
    // registrar(email: string, password: string){
    //   return this.fireauth.createUserWithEmailAndPassword(email, password)
    // }

    //authLogin
    authLogin(provider: any){
        return this.fireauth.signInWithPopup(provider).then(res => {
          this.toastr.success('Se ha ingresado correctamente', 'Login Correcto');
          this.router.navigate(['/MenuWithLogin']);
          localStorage.setItem('token',JSON.stringify(res.user?.uid));
        }).catch((error)=> {
          this.toastr.error(this.authErrorService.firebaseError(error.code), 'Error');
        })
    }

    //logout
    logout(){
        return this.fireauth.signOut().then(() => this.router.navigate(['/LogIn']));
        
    }

   

    //Verificar Correo
    verificarCorreo() {
        this.fireauth.currentUser.then((user) => user?.sendEmailVerification()).then(() => {
        this.toastr.info('Le hemos enviado un correo electronico para verificar su cuenta', 'Verificar Correo');
        this.router.navigate(['/LogIn']);
        });
    } 

    //Registrar Con Google
    googleSignIn(){
        return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res =>{
            this.router.navigate(['/MenuWithLogin']);
            // localStorage.setItem('token', JSON.stringify(res.user?.uid));
            localStorage.setItem('token', res.user!.uid);
            
            // if(localStorage.getItem("token") != null){
            //     return JSON.parse(localStorage.getItem("token")!);
            // }
        }, error => {
            this.toastr.error(this.authErrorService.firebaseError(error.code), 'Error');
        })
    }

    async getUid(){
        const user = await this.fireauth.currentUser;
        if(user === null){
            return null;
        }else{
            return user.uid;
        }
    }

    stateAuth(){
        return this.fireauth.authState;
    }

}