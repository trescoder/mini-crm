import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((c) => c.ClientsModule),
  },
  {
    path: 'add-client',
    loadChildren: () =>
      import('./add-client/add-client.module').then((ac) => ac.AddClientModule),
  },
  { path: '**', redirectTo: '/clients', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
