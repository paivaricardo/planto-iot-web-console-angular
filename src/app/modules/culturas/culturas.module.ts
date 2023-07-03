import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CulturasConsultaComponent } from './culturas-consulta/culturas-consulta.component';
import { CulturasRoutingModule } from './culturas-routing.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { CulturasCadastroComponent } from './culturas-cadastro/culturas-cadastro.component';
import { CulturasEdicaoComponent } from './culturas-edicao/culturas-edicao.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    CulturasConsultaComponent,
    CulturasCadastroComponent,
    CulturasEdicaoComponent,
  ],
  imports: [
    CommonModule,
    CulturasRoutingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class CulturasModule {}
