import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from './add-client/add-client.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';

import { AddClientRoutingModule } from './add-client-routing.module';

@NgModule({
  declarations: [AddClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddClientRoutingModule,
    MatInputModule,
  ],
})
export class AddClientModule {}
