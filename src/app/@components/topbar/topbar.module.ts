import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [TopbarComponent]
})
export class TopbarModule { }
