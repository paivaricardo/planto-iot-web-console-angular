import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasConsultaComponent } from './areas-consulta/areas-consulta.component';
import { AreasRoutingModule } from './areas-routing.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import { AreasCadastroComponent } from './areas-cadastro/areas-cadastro.component';
import { AreasEdicaoComponent } from './areas-edicao/areas-edicao.component';
import {AppMaterialModule} from "../../shared/app-material/app-material/app-material.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AreasConsultaComponent,
    AreasCadastroComponent,
    AreasEdicaoComponent,
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class AreasModule {}
