import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherPageComponent } from './pages/voucher-page.component';

const routes: Routes = [ 
  { path:'', component: VoucherPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VoucherRoutingModule { }
