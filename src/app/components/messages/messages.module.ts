import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DragDropModule } from "@angular/cdk/drag-drop";

import { MessagesRoutingModule } from "./messages-routing.module";
import { MessagesComponent } from "./messages.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageComponent } from "../message/message.component";

@NgModule({
    declarations: [MessagesComponent, MessageComponent],
    imports: [
        CommonModule,
        MessagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
    ],
})
export class MessagesModule {}
