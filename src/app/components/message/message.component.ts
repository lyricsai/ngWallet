import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Output() newMessageEvent = new EventEmitter<string>();
  message: FormControl = new FormControl('');
  constructor() {}

  ngOnInit(): void {}

  addNewMessage(value:string): void {
    this.newMessageEvent.emit(value);
  }

  onInput(message: string) {
    this.message!.setValue(message);
    console.log(this.message.value);
  }
}
