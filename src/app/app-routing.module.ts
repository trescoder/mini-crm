import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./modules/clients/clients.module').then((c) => c.ClientsModule),
  // },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((l) => l.LoginModule),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
