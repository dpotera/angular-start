import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: String[] = [];

  add(message: String) {
    this.messages.unshift(message);
  }

  clear() {
    this.messages.length = 0;
  }
}
