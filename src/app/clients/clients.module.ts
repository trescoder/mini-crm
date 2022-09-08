import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { AddClientComponent } from './add-client/add-client.component';



@NgModule({
  declarations: [
    ClientsComponent,
    AddClientComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
