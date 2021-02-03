import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnadirComponent } from './@components/anadir/anadir.component';
import { AuditoriaComponent } from './@components/auditoria/auditoria.component';
import { BoletinComponent } from './@components/boletin/boletin.component';
import { ConsultaComponent } from './@components/consulta/consulta.component';
import { ConsultoriaComponent } from './@components/consultoria/consultoria.component';
import { ContServComponent } from './@components/cont-serv/cont-serv.component';
import { ContactBaComponent } from './@components/contact-ba/contact-ba.component';
import { ContactBcComponent } from './@components/contact-bc/contact-bc.component';
import { ContactBmComponent } from './@components/contact-bm/contact-bm.component';
import { ContactoBComponent } from './@components/contacto-b/contacto-b.component';
import { EliminarComponent } from './@components/eliminar/eliminar.component';
import { EquipoComponent } from './@components/equipo/equipo.component';
import { InicioComponent } from './@components/inicio/inicio.component';
import { LogComponent } from './@components/log/log.component';
import { LogoutComponent } from './@components/logout/logout.component';
import { ModificarComponent } from './@components/modificar/modificar.component';
import { NegociacionesComponent } from './@components/negociaciones/negociaciones.component';
import { PoliticasComponent } from './@components/politicas/politicas.component';
import { RegComponent } from './@components/reg/reg.component';
import { ReportesComponent } from './@components/reportes/reportes.component';

const routes: Routes = [
  {path: 'Auditoria', component: AuditoriaComponent},
  {path: 'Consultorias', component: ConsultoriaComponent },
  {path: 'Negociaciones', component: NegociacionesComponent},
  {path: 'DiseñoPoliticas', component: PoliticasComponent },
  {path: 'EquipoDes',component: EquipoComponent},
  {path: '', component: InicioComponent},
  {path: 'Admin',component:ReportesComponent},
  {
    path: 'AdminContenido', component: ContServComponent, 
    children:[
      {path: 'Consultar', component: ConsultaComponent},
      {path: 'Eliminar', component: EliminarComponent},
      {path: 'Anadir', component: AnadirComponent},
      {path: 'Modificar', component: ModificarComponent}
  ]},
  {path: 'AdminContacto', component: ContactoBComponent, children:[
    {path: 'Consultar', component: ContactBcComponent},
    {path: 'Anadir', component: ContactBaComponent},
    {path: 'Modificar', component: ContactBmComponent}
  ]},
  {path: 'AdminBoletin', component: BoletinComponent},
  {path: 'Login', component: LogComponent},
  {path: 'Registro', component: RegComponent},
  {path: 'Logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
