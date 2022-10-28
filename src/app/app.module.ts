//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

//Componentes 
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { SobreNosotrosComponent } from './Component/sobre-nosotros/sobre-nosotros.component';
import { UbicaTuSucursalComponent } from './Component/ubica-tu-sucursal/ubica-tu-sucursal.component';
import { MenuComponent } from './Component/menu/menu.component';
import { LoginComponent } from './Authentication/login/login.component';
import { Error404Component } from './error404/error404.component';
import { PaycardComponent } from './paycard/paycard.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RecoveryPasswordComponent } from './Authentication/recovery-password/recovery-password.component';
import { VerificarCorreoComponent } from './Authentication/verificar-correo/verificar-correo.component';
import { RegistrarUsuarioComponent } from './Authentication/registrar-usuario/registrar-usuario.component';
import { PerfilComponent } from './Authentication/perfil/perfil.component';
import { MenuPrivateComponent } from './component/menu-private/menu-private.component';
import { CartComponent } from './Component/cart/cart.component';

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
    Error404Component,
    PaycardComponent,
    SpinnerComponent,
    RecoveryPasswordComponent,
    VerificarCorreoComponent,
    RegistrarUsuarioComponent,
    PerfilComponent,
    MenuPrivateComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
