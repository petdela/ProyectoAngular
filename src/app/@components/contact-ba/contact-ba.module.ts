import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBaComponent } from './contact-ba.component';



@NgModule({
  declarations: [ContactBaComponent],
  imports: [
    CommonModule
  ],
  exports:[ContactBaComponent]
})
export class ContactBAModule { }
