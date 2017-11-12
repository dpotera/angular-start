import { Component } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.scss']
})

export class MessageComponent {
  private title: String = 'Messages';

  constructor(public messagesService: MessageService) {
  }

}
