import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CulturasConsultaComponent } from './culturas-consulta/culturas-consulta.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CulturasConsultaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturasRoutingModule {}
