import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from "@angular/core";
import { Subscription, timer } from "rxjs";

@Component({
    selector: "app-messages",
    templateUrl: "./messages.component.html",
    styleUrls: ["./messages.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent implements OnInit, OnDestroy {
    messages: string[] = ["Welcome to our app"];
    messageCount: number = this.messages.length;
    ticks = 0;
    private timer: any;
    private sub!: Subscription;

    constructor(private ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.timer = timer(1000, 5000);
        this.sub = this.timer.subscribe((t: any) => this.tickerFunc(t));
    }

    ngOnDestroy(): void {
        console.log("destroied timer");
        this.sub.unsubscribe();
    }

    addMessage(newMessage: string) {
        if (newMessage) {
            this.messages.push(newMessage);
        }
        this.messageCount = this.messages.length;
    }

    tickerFunc(tick: number) {
        this.ticks = tick;
        this.ref.markForCheck();
    }
}
