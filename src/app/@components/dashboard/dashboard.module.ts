import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SideBarModule } from '../side-bar/side-bar.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SideBarModule
  ]
})
export class DashboardModule { }
