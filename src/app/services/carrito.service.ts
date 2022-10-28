import { Injectable } from '@angular/core';
import { productos } from 'src/app/utils/productos';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos = productos;
  items:any = [];
  // private _productos : producto[] = [];
  // private _beersSubjects : BehaviorSubject<producto[]> = new BehaviorSubject(this._productos);
  // public beers : Observable<producto[]> = this._beersSubjects.asObservable();
  
  constructor() { }

  // addCart(Productos: productos){
  //   let index = this._productos.findIndex(b => b.name === Productos.name);
  //   if(index === -1){
  //     this._productos.push()
  //   }else{
  //     this._productos[index].items = Productos.items;
  //   }if(Productos.items ==0){
  //     this._productos.splice(index, 1);
  //   }
  // }

  cleanCart(){
    this.items=[];
    return this.items;
  }

  listCart(){

  }


}
