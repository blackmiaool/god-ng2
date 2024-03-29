import {
    Component,
    Input
}
from '@angular/core';
export enum MessageType {
    Text,
    Code,
    Image,
    Iframe
}
export class Message {
    name: string;
    time: string;
    type: MessageType;
    content: any;
}

@Component({
    selector: 'message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input()
    message: Message;
    constructor() {

    }
    private messageType = MessageType;
    imgPath = "assets/img";
    ngOnInit() {
        // this.title.getData().subscribe(data => this.data = data);
    }
}
