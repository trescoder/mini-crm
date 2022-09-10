import { Client } from './client';

export interface RegisterClient {
  success: boolean;
  newClient: Client;
}
