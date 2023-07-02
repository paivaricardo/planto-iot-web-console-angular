import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioMainComponent } from './inicio-main/inicio-main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: InicioMainComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioRoutingModule {}
