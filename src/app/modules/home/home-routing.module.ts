import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  // login/sign-up form will be shown inside the home component
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../login/login.module').then((l) => l.LoginModule),
  },
  // the clients view will be outside the home component
  {
    path: 'clients',
    loadChildren: () =>
      import('../clients/clients.module').then((c) => c.ClientsModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
