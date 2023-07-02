import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensoresConsultaComponent } from './sensores-consulta/sensores-consulta.component';
import {SensoresRoutingModule} from "./sensores-routing.module";



@NgModule({
  declarations: [
    SensoresConsultaComponent
  ],
  imports: [
    CommonModule,
    SensoresRoutingModule
  ]
})
export class SensoresModule { }
