import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients-list/clients.component';
import { ClientComponent } from './client/client.component';

import { MatInputModule } from '@angular/material/input';
import { AddClientComponent } from './add-client/add-client.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientsComponent, ClientComponent, AddClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientsRoutingModule,
    MatInputModule,
  ],
})
export class ClientsModule {}
