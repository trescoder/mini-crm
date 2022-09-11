import { Injectable } from '@angular/core';
import { StorageService } from '../global/storage.service';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(private storageService: StorageService) {}

  logOut() {
    this.storageService.removeToken('token');
  }

  isLoggedIn() {
    return !!this.storageService.getToken('token');
  }

  getJWT() {
    return this.storageService.getToken('token') || '';
  }

  saveToken(token: string) {
    this.storageService.saveToken('token', token);
  }
}
