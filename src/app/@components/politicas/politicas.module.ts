import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticasComponent } from './politicas.component';
import { TitleModule } from 'src/app/@subComponent/title/title.module';
import { BarModule } from 'src/app/@subComponent/bar/bar.module';



@NgModule({
  declarations: [PoliticasComponent],
  imports: [
    CommonModule,
    TitleModule,
    BarModule
  ]
})
export class PoliticasModule { }
