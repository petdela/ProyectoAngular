import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultoriaComponent } from './consultoria.component';
import { TitleModule } from 'src/app/@subComponent/title/title.module';
import { BarModule } from 'src/app/@subComponent/bar/bar.module';



@NgModule({
  declarations: [ConsultoriaComponent],
  imports: [
    CommonModule,
    TitleModule,
    BarModule
  ]
})
export class ConsultoriaModule { }
