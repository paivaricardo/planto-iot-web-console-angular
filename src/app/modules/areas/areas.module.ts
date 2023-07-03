import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasConsultaComponent } from './areas-consulta/areas-consulta.component';
import { AreasRoutingModule } from './areas-routing.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [AreasConsultaComponent],
  imports: [
    CommonModule,
    AreasRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
})
export class AreasModule {}
