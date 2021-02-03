import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBmComponent } from './contact-bm.component';



@NgModule({
  declarations: [ContactBmComponent],
  imports: [
    CommonModule
  ],
  exports:[ContactBmComponent]
})
export class ContactBMModule { }
