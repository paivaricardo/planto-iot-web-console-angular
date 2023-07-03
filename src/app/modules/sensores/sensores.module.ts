import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensoresConsultaComponent } from './sensores-consulta/sensores-consulta.component';
import { SensoresRoutingModule } from './sensores-routing.module';
import { AppMaterialModule } from '../../shared/app-material/app-material/app-material.module';
import { SensoresPreCadastroComponent } from './sensores-pre-cadastro/sensores-pre-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SensoresConsultaComponent, SensoresPreCadastroComponent],
  imports: [
    CommonModule,
    SensoresRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SensoresModule {}
