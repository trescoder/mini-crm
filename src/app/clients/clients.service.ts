import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  readonly url = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  getAllClients() {
    return this.http.get(this.url);
  }

  registerNewClient(client: any) {
    return this.http.post(this.url, client);
  }
}
