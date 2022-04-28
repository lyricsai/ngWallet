import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    SimpleChanges,
    OnChanges,
    Input,
    ChangeDetectorRef,
} from "@angular/core";

@Component({
    selector: "app-message",
    templateUrl: "./message.component.html",
    styleUrls: ["./message.component.scss"],
})
export class MessageComponent implements OnInit, OnChanges {
    @Input() messageCount!: number;
    @Output() newMessageEvent = new EventEmitter<string>();
    message: string = "";

    constructor(private ref: ChangeDetectorRef) {}

    ngOnInit(): void {}

    ngOnChanges(data: SimpleChanges) {
        console.log(data);
        this.ref.detach();
    }

    addNewMessage(value: string): void {
        this.newMessageEvent.emit(value);
        this.message = "";
        this.ref.reattach();
    }

    onInput(message: string) {
        this.message = message;
    }
}
