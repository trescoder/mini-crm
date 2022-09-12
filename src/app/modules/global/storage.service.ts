import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  prefix = environment.production ? 'mini_crm_prod' : 'mini_crm_dev';
  constructor() {}

  saveToken(key: string, token: string) {
    localStorage.setItem(this.getKey(key), token);
  }

  getToken(key: string): string | null {
    return localStorage.getItem(this.getKey(key));
  }

  removeToken(key: string) {
    localStorage.removeItem(this.getKey(key));
  }

  private getKey(key: string): string {
    return `${this.prefix}_${key}`;
  }
}
