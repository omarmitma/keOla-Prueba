import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronogramaPageComponent } from './pages/cronograma-page.component';

const routes: Routes = [ 
  { path:'', component: CronogramaPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CronogramaRoutingModule { }
