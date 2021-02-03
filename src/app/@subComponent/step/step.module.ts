import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step.component';



@NgModule({
  declarations: [StepComponent],
  imports: [
    CommonModule
  ],
  exports:[StepComponent]
})
export class StepModule { }
