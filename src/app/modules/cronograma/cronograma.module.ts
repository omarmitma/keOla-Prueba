import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CronogramaPageComponent } from './pages/cronograma-page.component';
import { CronogramaRoutingModule } from './cronograma-routing.module';



@NgModule({
  declarations: [
    CronogramaPageComponent
  ],
  imports: [
    CommonModule,
    CronogramaRoutingModule
  ]
})
export class CronogramaModule { }
