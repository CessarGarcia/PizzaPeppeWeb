import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/utils/productos';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productos = productos;
  total: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.productos.forEach(productos =>{
      this.total += productos.items*productos.precio
    })
  }

}
