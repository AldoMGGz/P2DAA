import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ReservarComponent } from './reservar/reservar.component';

const routes: Routes = [
  { path: '',  component: InicioComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'reservar',  component: ReservarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
