import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[ConsultaComponent]
})
export class ConsultaModule { }
