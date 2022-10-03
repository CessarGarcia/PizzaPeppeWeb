//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
// import {AngularFireModule} from '@angular/fire/compat';

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
import { RecoveryPasswordComponent } from './Authentication/recovery-password/recovery-password.component';
import { VerificarCorreoComponent } from './Authentication/verificar-correo/verificar-correo.component';


@NgModule({
  declarations: [
    AppComponent,
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
    SpinnerComponent,
    RecoveryPasswordComponent,
    VerificarCorreoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
