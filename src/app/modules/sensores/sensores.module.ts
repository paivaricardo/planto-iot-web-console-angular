import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensoresConsultaComponent } from './sensores-consulta/sensores-consulta.component';
import { SensoresRoutingModule } from './sensores-routing.module';
import { AppMaterialModule } from '../../shared/app-material/app-material/app-material.module';

@NgModule({
  declarations: [SensoresConsultaComponent],
  imports: [CommonModule, SensoresRoutingModule, AppMaterialModule],
})
export class SensoresModule {}
