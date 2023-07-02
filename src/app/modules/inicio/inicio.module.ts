import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioMainComponent } from './inicio-main/inicio-main.component';
import {InicioRoutingModule} from "./inicio-routing.module";



@NgModule({
  declarations: [
    InicioMainComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
