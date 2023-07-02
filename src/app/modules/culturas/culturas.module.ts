import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CulturasConsultaComponent } from './culturas-consulta/culturas-consulta.component';
import { CulturasRoutingModule } from './culturas-routing.module';

@NgModule({
  declarations: [CulturasConsultaComponent],
  imports: [CommonModule, CulturasRoutingModule],
})
export class CulturasModule {}
