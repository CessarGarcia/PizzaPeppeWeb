import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {

  Historia="https://i.ibb.co/XXLGQN3/Historia.jpg";
  MisionYVision = "https://i.ibb.co/wggjyRN/Mision-y-Vision.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
