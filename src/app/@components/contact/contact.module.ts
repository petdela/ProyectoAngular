import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TitleModule } from 'src/app/@subComponent/title/title.module';
import { InfoComponent } from 'src/app/@subComponent/info/info.component';
import { InfoModule } from 'src/app/@subComponent/info/info.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    TitleModule,
    InfoModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
