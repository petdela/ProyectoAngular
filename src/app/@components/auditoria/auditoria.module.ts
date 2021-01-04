import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditoriaComponent } from './auditoria.component';
import { TitleModule } from 'src/app/@subComponent/title/title.module';
import { BarModule } from 'src/app/@subComponent/bar/bar.module';



@NgModule({
  declarations: [AuditoriaComponent],
  imports: [
    CommonModule,
    TitleModule,
    BarModule
  ]
})
export class AuditoriaModule { }
