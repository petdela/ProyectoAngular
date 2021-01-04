import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegociacionesComponent } from './negociaciones.component';
import { TitleModule } from 'src/app/@subComponent/title/title.module';
import { BarModule } from 'src/app/@subComponent/bar/bar.module';



@NgModule({
  declarations: [NegociacionesComponent],
  imports: [
    CommonModule,
    TitleModule,
    BarModule
  ]
})
export class NegociacionesModule { }
