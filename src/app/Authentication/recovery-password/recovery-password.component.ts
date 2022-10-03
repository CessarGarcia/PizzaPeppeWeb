import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
// import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {
  recovery_icon ="https://cdn2.iconfinder.com/data/icons/business-1-colored/100/icon-recover-password-512.png";
  errorIcon = "https://cutt.ly/TVNjRs3";
  
  recoveryPassword: FormGroup;
  loading: boolean = false;

  // constructor(private fb: FormBuilder,
  //   private afAuth: AngularFireAuth,
  //   private toastr: ToastrService,
  //   private routes: Router,
  //   private authErrorService: AuthErrorService){
  //     this.recoveryPassword = this.fb.group({
  //       email: ['', [Validators.required, Validators.email]]
  //     })
  //    }

  ngOnInit(): void {
  }

}
