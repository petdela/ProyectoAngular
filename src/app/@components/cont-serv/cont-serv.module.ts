import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContServComponent } from './cont-serv.component';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { SubHeaderModule } from '../sub-header/sub-header.module';
import { SideBarModule } from '../side-bar/side-bar.module';
import { AnadirModule } from '../anadir/anadir.module';
import { ModificarModule } from '../modificar/modificar.module';
import { EliminarModule } from '../eliminar/eliminar.module';
import { ConsultaModule } from '../consulta/consulta.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [ContServComponent],
  imports: [
    CommonModule,
    ProgressBarModule,
    SubHeaderModule,
    SideBarModule,
    AnadirModule,
    ModificarModule,
    ConsultaModule,
    EliminarModule,
    AppRoutingModule
  ],
  exports:[ContServComponent]
})
export class ContServModule { }
