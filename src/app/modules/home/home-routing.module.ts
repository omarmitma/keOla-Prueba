import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [ 
    { path:'', component: HomePageComponent, children:[
      { path:'listMembresia', loadChildren: () => import('@modules/list-membresia/list-membresia.module').then(m => m.ListMembresiaModule) },
      { path:'cronograma/:idMembresia', loadChildren: () => import('@modules/cronograma/cronograma.module').then(m => m.CronogramaModule) },
      { path:'cronograma/voucher/:idMembresia/:idPayment', loadChildren: () => import('@modules/voucher/voucher.module').then(m => m.VoucherModule) },
      { path:'**', redirectTo : 'listMembresia' }
    ]},
    { path:'**', redirectTo : '' }
  ];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
