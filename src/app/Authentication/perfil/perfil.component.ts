import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
   cliente: Cliente ={
      uid: '',
      nombre: 'Jose Juan',
      avatar: 'https://th.bing.com/th/id/OIP.VQeCBzJyv7dwSqO9T3IR4QHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7',
      email: 'jose123@hotmail.com',
      celular: 8123456982,
      password: '',
      ubicacion: 'Luis Mateo #521 col. Guadalajara',
    };

    newFile: any;

  constructor(public auth: AuthService) { }
  
  async ngOnInit() {
    const uid = await this.auth.getUid();
    console.log(uid);
  }

  async logOut(){
    // const uid = await this.auth.getUid();
    // console.log(uid);
    this.auth.logout();
  }

  async newImgUpload(event: any){
    if(event.target.files && event.target.files[0]){
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image) => {
          this.cliente.avatar = image.target?.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
