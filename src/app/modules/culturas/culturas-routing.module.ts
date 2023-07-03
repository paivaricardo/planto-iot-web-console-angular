import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CulturasConsultaComponent } from './culturas-consulta/culturas-consulta.component';
import { CulturasCadastroComponent } from './culturas-cadastro/culturas-cadastro.component';
import { CulturasEdicaoComponent } from './culturas-edicao/culturas-edicao.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CulturasConsultaComponent },
  { path: 'cadastro', pathMatch: 'full', component: CulturasCadastroComponent },
  { path: 'edicao/:id', pathMatch: 'full', component: CulturasEdicaoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CulturasRoutingModule {}
