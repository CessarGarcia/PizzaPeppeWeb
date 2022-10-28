import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Authentication/service/auth.service';
import { productos } from 'src/app/utils/productos';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-menu-private',
  templateUrl: './menu-private.component.html',
  styleUrls: ['./menu-private.component.scss', './encabezado.component.scss']
})
export class MenuPrivateComponent implements OnInit {
  dataUser: any;
  loading: boolean = false;
  productos = productos;
  menuCompleto = "https://i.ibb.co/MC0tQbr/Men-Completo.png";
   

    constructor(private afAuth: AngularFireAuth,
                private routes: Router,
                public auth: AuthService,
                private toastr: ToastrService,
                private carritoService: CarritoService) { }
  
    ngOnInit(): void {   
      /* Se puede comentar para que el inicio de seccion no sea requerido */
      this.islogin();
    }
    
    islogin(){
      this.afAuth.currentUser.then(user => {
        if(user && user.emailVerified){
          this.dataUser = user;
        }else{
          this.routes.navigate(['/LogIn']);
          this.toastr.error('Favor de registrar una cuenta', 'Error');
        }
      })
    }

    gotoPerfil(){
      this.routes.navigate(['/perfil']);
    }
    logOut(){
      this.auth.logout();
      this.toastr.success('Se ha cerrado la sesión correctamente', 'Sección Cerrada');
    }

    addCart(){
      this.toastr.success('El producto ha sido añadido correctamente al carrito', 'Producto Agregado')
    }
    // downQuantity(productos : productos): void{
    //   if(productos.items > 0) {
    //     productos.items --;
    //     this.carritoService.addCart(productos);
    //   }
    // }

    // upQuantity(productos : productos): void{
    //   if(productos.stock > productos.items) {
    //     productos.items ++;
    //     this.carritoService.addCart(productos);
    //   }
    // }

    // verifyBeerQuantity(productos : productos): void {
    //   if(productos.stock < productos.items) {
    //     alert("No se pueden pedir más de las cervezas que hay en stock");
    //     productos.items = productos.stock;
    //   }
  
    //   if(productos.items< 0) {
    //     alert("No se pueden pedir menos que 0 cervezas");
    //     productos.items = 0;
    //   }
    // }
}
