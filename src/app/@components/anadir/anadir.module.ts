import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnadirComponent } from './anadir.component';




@NgModule({
  declarations: [AnadirComponent],
  imports: [
    CommonModule
  ],
  exports:[AnadirComponent]
})
export class AnadirModule { }
