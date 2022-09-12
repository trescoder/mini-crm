import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients-list/clients.component';
import { ClientComponent } from './client/client.component';

// import { MatInputModule } from '@angular/material/input';
import { AddClientComponent } from './add-client/add-client.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { GlobalModule } from '../global/global.module';

@NgModule({
  declarations: [ClientsComponent, ClientComponent, AddClientComponent],
  imports: [CommonModule, GlobalModule, ClientsRoutingModule],
})
export class ClientsModule {}
