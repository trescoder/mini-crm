import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { RegisterClient } from 'src/app/interfaces/registered-client';
import { RemoveClient } from 'src/app/interfaces/remove-user';
import { environment } from 'src/environments/environment';
import { JwtService } from '../../auth/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  readonly url = environment.apiURL;
  readonly usersUrl = this.url + '/user';
  readonly clientsUrl = this.url + '/clients';

  constructor(private http: HttpClient) {}

  getAllClients() {
    return this.http.get<Client[]>(this.clientsUrl);
  }

  registerNewClient(client: Client) {
    return this.http.post<RegisterClient>(this.clientsUrl, client);
  }

  removeClient(clientId: string) {
    return this.http.delete<RemoveClient>(this.clientsUrl + '/' + clientId);
  }
}
