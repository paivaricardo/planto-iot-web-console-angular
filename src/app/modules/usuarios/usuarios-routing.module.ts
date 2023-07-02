import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosConsultaComponent } from './usuarios-consulta/usuarios-consulta.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: UsuariosConsultaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
