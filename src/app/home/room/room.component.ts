import {
    Component,
    Input,
    EventEmitter,
    Output
}
from '@angular/core';

import {
    Message,
    MessageType
}
from '../message';

export class Room {
    name: string;
    messages: Message[];
}

@Component({
    selector: 'room',
    templateUrl: './room.component.html'
})
export class RoomComponent {
    @Input()
    room: Room;
    @Output()
    onSend = new EventEmitter < Message > ();
    input: string;
    imgPath = "assets/img";
    constructor() {

    }

    send() {
        this.onSend.emit({
            name: 'blackmiaool',
            time: Date.now() + '',
            type: MessageType.Text,
            content: this.input
        });
        //        this.onSend &&
        //            this.onSend({
        //                name: 'blackmiaool',
        //                time: Date.now() + '',
        //                type: MessageType.Text,
        //                content: this.input
        //            }, this.room.name);
    }

    ngOnInit() {

    }
}
