import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrComponent } from './copyr.component';



@NgModule({
  declarations: [CopyrComponent],
  imports: [
    CommonModule
  ],
  exports: [CopyrComponent]
})
export class CopyrModule { }
