import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBcComponent } from './contact-bc.component';



@NgModule({
  declarations: [ContactBcComponent],
  imports: [
    CommonModule
  ],
  exports:[ContactBcComponent]
})
export class ContactBCModule { }
