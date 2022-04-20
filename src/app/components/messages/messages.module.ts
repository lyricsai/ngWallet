import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from '../message/message.component';

@NgModule({
  declarations: [MessagesComponent, MessageComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MessagesModule {}
