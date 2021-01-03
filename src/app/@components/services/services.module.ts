import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { TitleModule } from 'src/app/@subComponent/title/title.module';
import { FServModule } from 'src/app/@subComponent/f-serv/f-serv.module';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    TitleModule,
    FServModule
  ],
  exports: [ServicesComponent]
})
export class ServicesModule { }
