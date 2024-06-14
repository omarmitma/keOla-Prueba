import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './core/guards/session.guard';

const routes: Routes = [ 
  { path: 'login', loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule) },
  { path: 'home', loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule), canActivate: [SessionGuard]},
  { path:'**', redirectTo : 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
