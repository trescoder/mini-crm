import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly url = environment.apiURL + '/user';
  public defaultHeaders = new HttpHeaders();
  constructor(private http: HttpClient) {}

  login(body: Login) {
    let headers = this.defaultHeaders;
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post<{ token: string }>(this.url + '/login', body, {
      headers,
    });
  }

  signUp(body: Login) {
    let headers = this.defaultHeaders;
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.url + '/sign-up', body, {
      headers,
    });
  }
}
