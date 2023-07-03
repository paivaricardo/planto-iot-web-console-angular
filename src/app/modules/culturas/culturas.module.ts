import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CulturasConsultaComponent } from './culturas-consulta/culturas-consulta.component';
import { CulturasRoutingModule } from './culturas-routing.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [CulturasConsultaComponent],
  imports: [
    CommonModule,
    CulturasRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
})
export class CulturasModule {}
