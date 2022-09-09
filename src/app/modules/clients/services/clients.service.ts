import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/interfaces/client.interface';

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
    return this.http.post(this.url, client);
  }

  removeClient(clientId: string) {
    return this.http.delete(this.url + '/' + clientId);
  }

  searchClientsByName(name: string) {
    return this.http.get<Client[]>(this.url + '/' + name);
  }
}
