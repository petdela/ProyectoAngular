import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedSerComponent } from './featured-ser.component';
import { ServicesModule } from 'src/app/@subComponent/services/services.module';



@NgModule({
  declarations: [FeaturedSerComponent],
  imports: [
    CommonModule,
    ServicesModule
  ],
  exports: [FeaturedSerComponent]
})
export class FeaturedSerModule { }
