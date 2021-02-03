import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[LogComponent]
})
export class LogModule { }
