import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasConsultaComponent } from './areas-consulta/areas-consulta.component';
import { AreasCadastroComponent } from './areas-cadastro/areas-cadastro.component';
import { AreasEdicaoComponent } from './areas-edicao/areas-edicao.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AreasConsultaComponent },
  { path: 'cadastro', pathMatch: 'full', component: AreasCadastroComponent },
  { path: 'edicao/:id', pathMatch: 'full', component: AreasEdicaoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreasRoutingModule {}
