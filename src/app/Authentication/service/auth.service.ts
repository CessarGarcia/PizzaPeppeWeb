import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthErrorService } from 'src/app/services/auth-error.service';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    constructor(private fireauth : AngularFireAuth,
                private router : Router,
                private toastr: ToastrService,
                private authErrorService: AuthErrorService) { }

    googleSignIn(){
        return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res =>{
            this.router.navigate(['/MenuWithLogin']);
            localStorage.setItem('token', JSON.stringify(res.user?.uid));
            if(localStorage.getItem("token") != null){
                return JSON.parse(localStorage.getItem("token")!);
              }
        }, error => {
            this.toastr.error(this.authErrorService.firebaseError(error.code), 'Error');
        })
    }
}