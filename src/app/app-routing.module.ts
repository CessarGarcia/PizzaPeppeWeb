import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

//Componentes 
// import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './Component/inicio/inicio.component';
import { SobreNosotrosComponent } from './Component/sobre-nosotros/sobre-nosotros.component';
import { UbicaTuSucursalComponent } from './Component/ubica-tu-sucursal/ubica-tu-sucursal.component';
import { MenuComponent } from './Component/menu/menu.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrarUsuarioComponent } from './Authentication/registrar-usuario/registrar-usuario.component';
import { Error404Component } from './error404/error404.component';
import { PaycardComponent } from './paycard/paycard.component';
// import { SpinnerComponent } from './spinner/spinner.component';
import { RecoveryPasswordComponent } from './Authentication/recovery-password/recovery-password.component';
import { VerificarCorreoComponent } from './Authentication/verificar-correo/verificar-correo.component';
import { MenuPrivateComponent } from './component/menu-private/menu-private.component';
import { PerfilComponent } from './Authentication/perfil/perfil.component';

const routes: Routes = [
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'About', component: SobreNosotrosComponent },
    { path: 'Menu', component: MenuComponent },
    { path: 'UbicaTuSucursal', component: UbicaTuSucursalComponent },
    { path: 'Home', component: InicioComponent },
    {path: 'LogIn', component: LoginComponent},
    {path: 'Registrate', component: RegistrarUsuarioComponent},
    {path: 'Carrito', component: PaycardComponent},
    {path: 'VerificarCorreo', component: VerificarCorreoComponent},
    {path: 'RecoveryPassword', component: RecoveryPasswordComponent},
    {path: 'MenuWithLogin', component: MenuPrivateComponent},
    {path: 'User', component: PerfilComponent},
   //Wild Card Route for 404 request
    { path: '**', pathMatch: 'full', component: Error404Component },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
