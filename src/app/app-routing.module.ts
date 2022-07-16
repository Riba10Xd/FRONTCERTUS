import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletepersonaComponent } from './deletepersona/deletepersona.component';
import { ListarpersonaComponent } from './listarpersona/listarpersona.component';
import { ModificarpersonaComponent } from './modificarpersona/modificarpersona.component';
import { RegistrarpersonaComponent } from './registrarpersona/registrarpersona.component';

const routes: Routes = [
  {path: 'personas' ,component:ListarpersonaComponent},
  {path: '', redirectTo: 'personas', pathMatch: 'full'},
  {path: 'registropersona' ,component:RegistrarpersonaComponent},
  {path: 'modificarpersona', component:ModificarpersonaComponent},
  {path: 'deletepersona', component:DeletepersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
