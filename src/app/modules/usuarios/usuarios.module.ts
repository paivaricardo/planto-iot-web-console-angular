import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosConsultaComponent } from './usuarios-consulta/usuarios-consulta.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [UsuariosConsultaComponent],
  imports: [CommonModule, UsuariosRoutingModule, MatProgressSpinnerModule],
})
export class UsuariosModule {}
