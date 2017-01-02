import {
    Component,
    Input,
    EventEmitter,
    Output,
    OnChanges,
    ElementRef
}
from '@angular/core';

//var $ = require("jquery");

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
export class RoomComponent implements OnChanges {
    @Input()
    room: Room;
    @Output()
    onSend = new EventEmitter < Message > ();
    input: string;
    imgPath = "assets/img";
    constructor(private elRef: ElementRef) {


        setTimeout(function () {
            var target = elRef.nativeElement.querySelector(".message-wrap");
            console.log(target)
            console.log(target)
                // create an observer instance
            var observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    console.log(mutation.type);
                });
            });

            // configuration of the observer:
            var config = {
                attributes: true,
                childList: true,
                characterData: true
            };
        });


        // pass in the target node, as well as the observer options
        //        observer.observe(target, config);
        //
        //        // later, you can stop observing
        //        observer.disconnect();
    }
    keyPress($event) {
        if ($event.code === "Enter") {
            this.send();
            $event.preventDefault();
        }
    }
    ngOnChanges(changes) {
        console.log("changes", changes);
        // changes.prop contains the old and the new value...
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
