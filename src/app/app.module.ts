import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarModule } from './@components/topbar/topbar.module';
import { ServicesModule } from './@components/services/services.module';
import { HeroModule } from './@components/hero/hero.module';
import { HeaderModule } from './@components/header/header.module';
import { FooterModule } from './@components/footer/footer.module';
import { FeaturedSerModule } from './@components/featured-ser/featured-ser.module';
import { CopyrModule } from './@components/copyr/copyr.module';
import { ContactModule } from './@components/contact/contact.module';
import { AboutModule } from './@components/about/about.module';
import { AuditoriaModule } from './@components/auditoria/auditoria.module';
import { ConsultoriaModule } from './@components/consultoria/consultoria.module';
import { EquipoModule } from './@components/equipo/equipo.module';
import { InicioModule } from './@components/inicio/inicio.module';
import { NegociacionesModule } from './@components/negociaciones/negociaciones.module';
import { PoliticasModule } from './@components/politicas/politicas.module';
import { BoletinModule } from './@components/boletin/boletin.module';
import { ContServModule } from './@components/cont-serv/cont-serv.module';
import { ReportesModule } from './@components/reportes/reportes.module';
import { LogModule } from './@components/log/log.module';
import { RegModule } from './@components/reg/reg.module';
import { ContactoBModule } from './@components/contacto-b/contacto-b.module';
import { EliminarModule } from './@components/eliminar/eliminar.module';
import { ModificarModule } from './@components/modificar/modificar.module';
import { AnadirModule } from './@components/anadir/anadir.module';
import { ConsultaModule } from './@components/consulta/consulta.module';
import { ContactBMModule } from './@components/contact-bm/contact-bm.module';
import { ContactBCModule } from './@components/contact-bc/contact-bc.module';
import { ContactBAModule } from './@components/contact-ba/contact-ba.module';
import { LogoutModule } from './@components/logout/logout.module';


@NgModule({
  declarations: [
    AppComponent
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
    AboutModule,
    AuditoriaModule,
    ConsultoriaModule,
    EquipoModule,
    InicioModule,
    NegociacionesModule,
    PoliticasModule,
    BoletinModule,
    ContServModule,
    ReportesModule,
    LogModule,
    RegModule,
    ContactoBModule,
    EliminarModule,
    ModificarModule,
    AnadirModule,
    ConsultaModule,
    ContactBMModule,
    ContactBCModule,
    ContactBAModule,
    LogoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
