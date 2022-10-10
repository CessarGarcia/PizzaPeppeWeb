import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthErrorService } from 'src/app/services/auth-error.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: string;
  nombre: string;
  apellido: string;
  ChangePassword: FormGroup;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private routes: Router,
    private authErrorService: AuthErrorService){
      this.ChangePassword = this.fb.group({
      })
     }

  ngOnInit(): void {
  }
 recovery(){
    const email = this.ChangePassword.value.email;
    if(email === ''){
      this.toastr.error('No se ha escrito algun correo', 'Error')
      return;
    }
    this.afAuth.sendPasswordResetEmail(email).then(()=>{
      this.toastr.info('Se ha enviado un correo para cambiar su contraseña', 'Correo enviado')
    }).catch((error) =>{
      this.toastr.error(this.authErrorService.firebaseError(error.code), 'Error');
    })
  }
}
