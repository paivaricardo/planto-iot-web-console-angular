import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosConsultaComponent } from './usuarios-consulta/usuarios-consulta.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [UsuariosConsultaComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
})
export class UsuariosModule {}
