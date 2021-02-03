import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from './sub-header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [SubHeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[SubHeaderComponent]
})
export class SubHeaderModule { }
