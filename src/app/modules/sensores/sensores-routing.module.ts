import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensoresConsultaComponent } from './sensores-consulta/sensores-consulta.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SensoresConsultaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensoresRoutingModule {}
