import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { ServicesModule } from '../services/services.module';
import { HeroModule } from '../hero/hero.module';
import { FeaturedSerModule } from '../featured-ser/featured-ser.module';
import { CopyrModule } from '../copyr/copyr.module';
import { ContactModule } from '../contact/contact.module';
import { AboutModule } from '../about/about.module';


@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    ServicesModule,
    HeroModule,
    FeaturedSerModule,
    CopyrModule,
    ContactModule,
    AboutModule
  ],
  exports: [InicioComponent]
})
export class InicioModule { }
