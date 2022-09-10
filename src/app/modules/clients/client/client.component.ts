import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  @Input() client!: Client;
  @Output() deleteEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  emitDeleteEvent(clientID: string) {
    this.deleteEvent.emit(clientID);
  }
}
