import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './clients/add-client/add-client.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: '**', redirectTo: '/clients', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
