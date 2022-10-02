import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Componentes 
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { SobreNosotrosComponent } from './Component/sobre-nosotros/sobre-nosotros.component';
import { UbicaTuSucursalComponent } from './Component/ubica-tu-sucursal/ubica-tu-sucursal.component';
import { MenuComponent } from './Component/menu/menu.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SingUpComponent } from './Authentication/sing-up/sing-up.component';
import { LogoutComponent } from './Authentication/logout/logout.component';
import { Error404Component } from './error404/error404.component';
import { PaycardComponent } from './paycard/paycard.component';
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  { path: 'About', component: SobreNosotrosComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'UbicaTuSucursal', component: UbicaTuSucursalComponent },
  { path: 'Home', component: InicioComponent },
  {path: 'LogIn', component: LoginComponent},
  {path: 'SignUp', component: SingUpComponent},
  {path: 'Carrito', component: PaycardComponent},

 //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: Error404Component }
];


@NgModule({
  declarations: [AppComponent,
    NavBarComponent, 
    FooterComponent, 
    InicioComponent, 
    SobreNosotrosComponent, 
    MenuComponent,
    UbicaTuSucursalComponent,
    LoginComponent,
    SingUpComponent,
    LogoutComponent,
    Error404Component,
    PaycardComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
