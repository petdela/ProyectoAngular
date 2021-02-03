import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoBComponent } from './contacto-b.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SideBarModule } from '../side-bar/side-bar.module';
import { ContactBAModule } from '../contact-ba/contact-ba.module';
import { ContactBMModule } from '../contact-bm/contact-bm.module';
import { ContactBCModule } from '../contact-bc/contact-bc.module';



@NgModule({
  declarations: [ContactoBComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SideBarModule,
    ContactBAModule,
    ContactBMModule,
    ContactBCModule
  ],
  exports:[ContactoBComponent]
})
export class ContactoBModule { }
