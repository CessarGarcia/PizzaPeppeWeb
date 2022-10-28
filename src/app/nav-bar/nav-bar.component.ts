import { Component,  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-NavBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  imgLogo = 'https://i.ibb.co/BCJTQNB/Logo.png';
  showButtonLog : boolean = false;

  constructor(private afAuth: AngularFireAuth){}

  ngOnInit(): void {
    this.islogin();
  }

  islogin(){
    if(this.afAuth.user){
      if(localStorage.getItem("token") != null){
        return JSON.parse(localStorage.getItem("token")!);
      }
      this.showButtonLog = true; //Ya hizo el registro y no se mostrará el btn
    }else{
      this.showButtonLog= false; //El user aun no se registra, se mostrará el btn
    }
  }
}
