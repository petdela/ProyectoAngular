import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditoriaComponent } from './@components/auditoria/auditoria.component';
import { ConsultoriaComponent } from './@components/consultoria/consultoria.component';
import { EquipoComponent } from './@components/equipo/equipo.component';
import { InicioComponent } from './@components/inicio/inicio.component';
import { NegociacionesComponent } from './@components/negociaciones/negociaciones.component';
import { PoliticasComponent } from './@components/politicas/politicas.component';

const routes: Routes = [
  {path: 'Auditoria', component: AuditoriaComponent},
  {path: 'Consultorias', component: ConsultoriaComponent },
  {path: 'Negociaciones', component: NegociacionesComponent},
  {path: 'DiseñoPoliticas', component: PoliticasComponent },
  {path: 'EquipoDes',component: EquipoComponent},
  {path: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
