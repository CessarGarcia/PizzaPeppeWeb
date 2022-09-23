import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  imgLogo = './assets/img/Logo.png';
  logoFb = 'https://th.bing.com/th/id/R.51ae405e1b464603ee8ac65599eb5c95?rik=WR5BGUHuMfpD9A&pid=ImgRaw&r=0';
  logoIg = 'https://th.bing.com/th/id/R.15e8b022174ae135cbaf377c955aa6ef?rik=63qIxCoQ5H6%2b6Q&riu=http%3a%2f%2fwww.masdebaumes.com%2fwp-content%2fuploads%2f2018%2f02%2flogo-instagram.jpg&ehk=St29eIESx%2fVps8mc%2bBH5uBAycJ3j1lyma34ZzuvdbqA%3d&risl=&pid=ImgRaw&r=0';
  logoTw = 'https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0';
  constructor() { }

  ngOnInit(): void {
  }

}
