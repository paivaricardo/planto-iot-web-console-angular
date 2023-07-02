import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosConsultaComponent } from './usuarios-consulta/usuarios-consulta.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';

@NgModule({
  declarations: [UsuariosConsultaComponent],
  imports: [CommonModule, UsuariosRoutingModule],
})
export class UsuariosModule {}
