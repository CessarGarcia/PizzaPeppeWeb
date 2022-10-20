import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthErrorService } from 'src/app/services/auth-error.service';
import { CloudFirestoreService } from 'src/app/services/cloud-firestore.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*Links de imagenes*/
  Pizza1 = "https://i.ibb.co/CK4Ccfs/2-Pizza-1.png";
  Boneless = "https://i.ibb.co/qBkHMwC/5-Boneless.png";
  Complementos = "https://i.ibb.co/WVRS39k/1-Complementos-Comprimido.jpg";
  googleIcon = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png";
  login_img = "https://cdn-icons-png.flaticon.com/512/2250/2250207.png";
  errorIcon = "https://cutt.ly/TVNjRs3";

  
  loginUsuario : FormGroup;
  loading: boolean = false;
  showButtonLog: boolean = true;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private routes: Router,
    private authErrorService: AuthErrorService,
    public FirestoreCloud : CloudFirestoreService,
    private auth: AuthService){ 
      this.loginUsuario = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      })
    }

  ngOnInit(): void {
  }

  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    this.loading = true;

    this.afAuth.signInWithEmailAndPassword(email, password).then((user)=>{
      console.log(user);
      if(user.user?.emailVerified){
        localStorage.setItem('token', JSON.stringify(this.afAuth.user));
        this.routes.navigate(['/MenuWithLogin'])
      }else{
        this.routes.navigate(['/VerificarCorreo'])
      }
    }).catch((error)=>{
      this.loading = false;
      this.toastr.error(this.authErrorService.firebaseError(error.code), 'Error');
    })
    if(this.afAuth.user){
      this.showButtonLog = false; //Ya hizo el registro y no se mostrará el btn
    }else{
      this.showButtonLog= true; //El user aun no se registra, se mostrará el btn
    }
  }

  signInWithGoogle(){
    this.auth.googleSignIn();
    if(localStorage.getItem("token") != null){
      return JSON.parse(localStorage.getItem("token")!);
    }
  }
}
