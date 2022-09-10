import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { NewClient } from 'src/app/interfaces/new-client';
import { RegisterClient } from 'src/app/interfaces/registered-client';
import { RemoveClient } from 'src/app/interfaces/remove-user';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  readonly url = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  getAllClients() {
    return this.http.get<Client[]>(this.url);
  }

  registerNewClient(client: Client) {
    return this.http.post<RegisterClient>(this.url, client);
  }

  removeClient(clientId: string) {
    return this.http.delete<RemoveClient>(this.url + '/' + clientId);
  }

  searchClientsByName(name: string) {
    return this.http.get<Client[]>(this.url + '/' + name);
  }
}
