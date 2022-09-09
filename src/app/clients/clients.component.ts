import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  public clients$: any = [];
  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.clients$ = this.clientsService.getAllClients();
  }
}
