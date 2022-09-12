import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/interfaces/client';
import { RemoveClient } from 'src/app/interfaces/remove-user';
import { JwtService } from '../../auth/jwt.service';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  public clients$!: Client[];
  public clientsCopy!: Client[];
  @Output() showLoggedMenu = new EventEmitter();

  constructor(
    private clientsService: ClientsService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientsService.getAllClients().subscribe((data: any) => {
      this.clients$ = data.data;
      this.clientsCopy = data.data;
    });
    this.showLoggedMenu.emit();
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

  logOut() {
    this.jwtService.logOut();
    this.router.navigateByUrl('/auth/login');
  }
}
