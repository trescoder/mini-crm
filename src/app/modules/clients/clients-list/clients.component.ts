import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/interfaces/client';
import { RemoveClient } from 'src/app/interfaces/remove-user';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  public clients$!: Observable<Client[]>;
  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clientsService.getAllClients().subscribe((data: any) => {
      this.clients$ = of(data.data);
    });
  }

  removeClient(clientId: string) {
    this.clientsService
      .removeClient(clientId)
      .subscribe((data: RemoveClient) => {
        if (data.success) {
          this.clientsService.getAllClients().subscribe((data: any) => {
            this.clients$ = of(data.data);
          });
        }
      });
  }
}
