import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasConsultaComponent } from './areas-consulta/areas-consulta.component';
import { AreasRoutingModule } from './areas-routing.module';

@NgModule({
  declarations: [AreasConsultaComponent],
  imports: [CommonModule, AreasRoutingModule],
})
export class AreasModule {}
