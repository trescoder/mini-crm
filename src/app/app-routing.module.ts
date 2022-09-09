import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  {
    path: 'clients',
    loadChildren: () =>
      import('./modules/clients/clients.module').then((c) => c.ClientsModule),
  },
  { path: '**', redirectTo: '/clients', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
