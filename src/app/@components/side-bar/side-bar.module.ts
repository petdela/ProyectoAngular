import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[SideBarComponent]
})
export class SideBarModule { }
