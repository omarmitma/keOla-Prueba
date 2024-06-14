import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoucherPageComponent } from './pages/voucher-page.component';
import { VoucherRoutingModule } from './voucher-routing.module';



@NgModule({
  declarations: [
    VoucherPageComponent
  ],
  imports: [
    CommonModule,
    VoucherRoutingModule
  ]
})
export class VoucherModule { }
