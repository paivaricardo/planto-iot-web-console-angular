import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasConsultaComponent } from './areas-consulta/areas-consulta.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AreasConsultaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreasRoutingModule {}
