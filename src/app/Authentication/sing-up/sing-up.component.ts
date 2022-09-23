import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  Pizza1 = "https://i.ibb.co/CK4Ccfs/2-Pizza-1.png";
  Boneless = "https://i.ibb.co/qBkHMwC/5-Boneless.png";
  Complementos = "https://i.ibb.co/WVRS39k/1-Complementos-Comprimido.jpg";

  biGoogle = "https://cdn.icon-icons.com/icons2/1011/PNG/512/Google_Chrome_icon-icons.com_75711.png";
  constructor() { }

  ngOnInit(): void {
  }

}
