import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMembresiaPageComponent } from './pages/list-membresia-page/list-membresia-page.component';
import { ListMembresiaRoutingModule } from './list-membresia-routing.module';



@NgModule({
  declarations: [
    ListMembresiaPageComponent
  ],
  imports: [
    CommonModule,
    ListMembresiaRoutingModule
  ]
})
export class ListMembresiaModule { }
