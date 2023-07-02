import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { AppMaterialModule } from '../../shared/app-material/app-material/app-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardMainComponent],
  exports: [DashboardMainComponent],
  imports: [CommonModule, AppMaterialModule, DashboardRoutingModule],
})
export class DashboardModule {}

