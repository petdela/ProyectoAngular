import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyRComponent } from './@components/copy-r/copy-r.component';
import { TopbarModule } from './@components/topbar/topbar.module';
import { ServicesModule } from './@components/services/services.module';
import { HeroModule } from './@components/hero/hero.module';
import { HeaderModule } from './@components/header/header.module';
import { FooterModule } from './@components/footer/footer.module';
import { FeaturedSerModule } from './@components/featured-ser/featured-ser.module';
import { CopyrModule } from './@components/copyr/copyr.module';
import { ContactModule } from './@components/contact/contact.module';
import { AboutModule } from './@components/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    CopyRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopbarModule,
    ServicesModule,
    HeroModule,
    HeaderModule,
    FooterModule,
    FeaturedSerModule,
    CopyrModule,
    ContactModule,
    AboutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
