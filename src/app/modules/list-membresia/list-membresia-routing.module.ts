import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMembresiaPageComponent } from './pages/list-membresia-page/list-membresia-page.component';

const routes: Routes = [ 
  { path:'', component: ListMembresiaPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMembresiaRoutingModule { }
