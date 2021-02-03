import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LittleCardComponent } from './little-card.component';



@NgModule({
  declarations: [LittleCardComponent],
  imports: [
    CommonModule
  ],
  exports:[LittleCardComponent]
})
export class LittleCardModule { }
