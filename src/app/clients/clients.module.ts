import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ClientsRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
  ],
})
export class ClientsModule {}
