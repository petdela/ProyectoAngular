import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from './reportes.component';
import { LittleCardModule } from 'src/app/@subComponent/little-card/little-card.module';
import { SubHeaderModule } from '../sub-header/sub-header.module';
import { SideBarModule } from '../side-bar/side-bar.module';
import { InfoCardModule } from 'src/app/@subComponent/info-card/info-card.module';



@NgModule({
  declarations: [ReportesComponent],
  imports: [
    CommonModule,
    LittleCardModule,
    InfoCardModule,
    SubHeaderModule,
    SideBarModule
  ],
  exports:[ReportesComponent]
})
export class ReportesModule { }
