import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuCompleto = "https://i.ibb.co/MC0tQbr/Men-Completo.png";

      /*******************************
      *      MENU 1. DE PIZZAS       *
      *******************************/
  /* Iconos de NavMenu */
  Pizza = "https://cdn-icons-png.flaticon.com/512/1031/1031743.png";
         /* Pizza 1 Igrediente */
    AP1IgJamon = "https://i.ibb.co/NZt2my6/1a-Pizza-1-Ingrediente-Jamon.jpg";
    AP1IgPepperoni = "https://i.ibb.co/5GrqSLf/1a-Pizza-1-Ingrediente-Pepperoni.jpg";
    AP1IgQueso = "https://i.ibb.co/2tphSK9/1a-Pizza-1-Ingrediente-Queso.jpg";
        /* Pizza B Especialidad */
    BPEVegetariana = "https://i.ibb.co/MfWZZFd/1b-Pizza-Especialidad-Vegetariana.jpg";
    BPE3Carnes = "https://i.ibb.co/b1JssSL/1b-Pizza-Especialidad-3-Carnes.jpg";
    BPEHawaiana = "https://i.ibb.co/8rB8TRp/1b-Pizza-Especialidad-Hawaiana.jpg";
    BPEMexicana = "https://i.ibb.co/j30Lbvr/1b-Pizza-Especialidad-Mexicana.jpg";
        /* Pizza C Especialidad */
    CPESuprema = "https://i.ibb.co/kQsdtDM/1c-Pizza-Especialidad-Suprema.jpg";
    CPETropical = "https://i.ibb.co/T8jxktt/1c-Pizza-Especialidad-Tropical.jpg";

            /*******************************
           *      MENU 2.   REFRESCOS     *
          *******************************/
  Refrescos = "https://i.ibb.co/HNMdgcY/Menu-Refresco.png";
      RefrescosCocaCola = "https://img2.freepng.es/20171219/e8c/coca-cola-bottle-png-image-5a38c18bf0bc35.4573310315136690039861.jpg";
      RefrescosLata = "https://img2.freepng.es/20180310/wqw/kisspng-soft-drink-coca-cola-juice-aluminum-can-beverage-bottles-5aa390d886df53.8326897615206688885525.jpg";
      AguaCielSabores = "https://mexbai.com/170-large_default/agua-saborizada-ciel-exprim-12-pzas-de-1-l.jpg";
      AguaCiel = "https://th.bing.com/th/id/OIP.kJoBh_Eof1qImfLPFqXSlgHaHa?pid=ImgDet&rs=1";
      FuzeTea = "https://th.bing.com/th/id/OIP.njGq57uaFSHVEBNXmReF3QHaIc?pid=ImgDet&rs=1";
      JugosDelValle = "https://th.bing.com/th/id/OIP.kFdV7nZqlDti5d5PhlHSPgHaIz?pid=ImgDet&rs=1";

        
            /*******************************
           *      MENU 3.   COMBOS        *
          *******************************/
  Combos = "https://image.freepik.com/free-vector/fried-chicken-combo-fast-food-cartoon_18591-23252.jpg";
  
           /********************************
          *      MENU 4.   ADEREZOS       *
         *******************************/
  Aderezos = "https://cdn-icons-png.flaticon.com/512/575/575496.png";
   
        /**********************************
        *      MENU 5.   COMPLEMENTOS    *
       *********************************/
  Complementos = "https://cdn-icons-png.flaticon.com/512/1828/1828817.png";
    CAAlitas = "https://i.ibb.co/wy9PhpX/5-C-Alitas.jpg";
    CBBoneless = "https://i.ibb.co/Tkhb3HP/5b-Complentos-Boneless.jpg";
    CCPapasEnGajo = "https://i.ibb.co/KxGGDQS/5c-Complentos-Papas-con-Gajo.jpg";
    CDConopapa = "https://i.ibb.co/KxGGDQS/5c-Complentos-Papas-con-Gajo.jpg";
    CEPapasCriscut = "https://i.ibb.co/kDsvZWF/5e-Complentos-Papas-criscut.jpg";
    CFDedosDeQueso = "https://i.ibb.co/nMrsFkd/5f-Complentos-Dedos-de-Queso.jpg";
    CGEspagueti = "https://i.ibb.co/3hLs4NY/5g-Complentos-Espagueti.jpg";
    CHPanConAjo = "https://i.ibb.co/jTbhW51/5h-Complentos-Papa-con-Ajo.jpg";
    CITenders = "https://i.ibb.co/bQDwgF2/5i-Complentos-Tenders.jpg";

    Menu:Array<any> =[
      {Id: "Combo 1", Precio: "$130", Descripcion: "1 Pizza Familiar (De 1 Igrediente) y 1 Orden de Espagueti"},
      {Id: "Combo 2", Precio: "$190", Descripcion: "1 Pizza Familiar (De 1 Igrediente) y 1 Orden de Alitas"},
      {Id: "Combo 3", Precio: "$199", Descripcion: "2 Pizzas Familiares (Hasta 2 Igredientes, no aplica piña)"},
      {Id: "Combo 4", Precio: "$255", Descripcion: "2 Pizzas Familiares (De 1 Igrediente), 1 Orden de espagueti y coca cola 2 Lts"},
      {Id: "Combo 5", Precio: "$250", Descripcion: "1 pizza Familiar (De 1 Igrediente), 1 Orden de alitas, 1 orden de espagueti y Coca Cola 2 Lts"},
      {Id: "Combo 6", Precio: "$210", Descripcion: "2 Pizzas Familiares (De 1 Igrediente) y Coca Cola 2 Lts"},
      {Id: "Combo 7", Precio: "$299", Descripcion: "2 Pizzas Familiares (De 1 Igrediente), una orden de alitas y Coca Cola 2 Lts"}
    ];

    

    constructor() {
  }

  ngOnInit(): void {
  }

}
