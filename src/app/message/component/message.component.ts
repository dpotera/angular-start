import { Component } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: 'message.component.html'
})

export class MessageComponent {

  constructor(public messagesService: MessageService) {
  }

}
