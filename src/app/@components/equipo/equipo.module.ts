import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from './equipo.component';
import { TitleModule } from 'src/app/@subComponent/title/title.module';
import { BarModule } from 'src/app/@subComponent/bar/bar.module';



@NgModule({
  declarations: [EquipoComponent],
  imports: [
    CommonModule,
    TitleModule,
    BarModule
  ]
})
export class EquipoModule { }
