import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { StepModule } from 'src/app/@subComponent/step/step.module';



@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule,
    StepModule
  ],
  exports:[ProgressBarComponent]
})
export class ProgressBarModule { }
