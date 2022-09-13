import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { RemoveClient } from 'src/app/interfaces/remove-user';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  public clients$!: Client[];
  public clientsCopy!: Client[];

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.getAllClients().subscribe((data: any) => {
      this.clients$ = data.data;
      this.clientsCopy = data.data;
    });
  }

  filterClients(property: string, value: string | number) {
    this.clients$ = [...this.clientsCopy];
    if (property !== undefined) {
      this.clients$ = this.clients$.filter((client: any) =>
        client[property].includes(value)
      );
    }
  }

  removeClient(clientId: string) {
    this.clientsService
      .removeClient(clientId)
      .subscribe((data: RemoveClient) => {
        if (data.success) {
          this.clientsService.getAllClients().subscribe((data: any) => {
            this.clients$ = data.data;
          });
        }
      });
  }
}
