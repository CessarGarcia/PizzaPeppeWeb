import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Pizza1 = "https://i.ibb.co/CK4Ccfs/2-Pizza-1.png";
  Boneless = "https://i.ibb.co/qBkHMwC/5-Boneless.png";
  Complementos = "https://i.ibb.co/WVRS39k/1-Complementos-Comprimido.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
