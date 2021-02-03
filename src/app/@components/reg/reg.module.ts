import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [RegComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[RegComponent]
})
export class RegModule { }
