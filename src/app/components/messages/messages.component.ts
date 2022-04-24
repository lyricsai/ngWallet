import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  messages: string[] = ['First Message', 'Second One'];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  addMessage(newMessage: string) {
    this.messages.push(newMessage);
  }
}
