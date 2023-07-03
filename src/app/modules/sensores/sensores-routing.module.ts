import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensoresConsultaComponent } from './sensores-consulta/sensores-consulta.component';
import { SensoresPreCadastroComponent } from './sensores-pre-cadastro/sensores-pre-cadastro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SensoresConsultaComponent },
  {
    path: 'pre-cadastro',
    pathMatch: 'full',
    component: SensoresPreCadastroComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensoresRoutingModule {}
