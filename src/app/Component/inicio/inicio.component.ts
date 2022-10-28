import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  Complementos = "https://i.ibb.co/WVRS39k/1-Complementos-Comprimido.jpg";
  Pizza1 = "https://i.ibb.co/CK4Ccfs/2-Pizza-1.png";
  Pizza2 = "https://i.ibb.co/CJsvGhM/3-Pizza-2.png";
  Hamburguesas = "https://i.ibb.co/q541JN7/4-Hamburguesas.png";
  Boneless = "https://i.ibb.co/qBkHMwC/5-Boneless.png";
  Aderezos = "https://i.ibb.co/VvPsq3F/6-Aderezos.png";
  Pollo = "https://i.ibb.co/gDDT7xx/7-Pollo.png";

  constructor( ) { }

  ngOnInit(): void {
  }

  loadProductos(){
    
  }
}
