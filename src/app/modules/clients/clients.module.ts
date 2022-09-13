import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients-list/clients.component';
import { ClientComponent } from './client/client.component';

import { AddClientComponent } from './add-client/add-client.component';
import { GlobalModule } from '../global/global.module';
import { ClientsViewComponent } from './clients-view/clients-view.component';

@NgModule({
  declarations: [
    ClientsComponent,
    ClientComponent,
    AddClientComponent,
    ClientsViewComponent,
  ],
  imports: [CommonModule, GlobalModule, ClientsRoutingModule],
})
export class ClientsModule {}
