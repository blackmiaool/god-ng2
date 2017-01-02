import {
    Component,
    Input,
    EventEmitter,
    Output,
    ElementRef
}
from '@angular/core';

const $ = require("jquery");

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
    constructor(private elRef: ElementRef) {
        const $dom = $(elRef.nativeElement);
        const $$ = $dom.find.bind($dom);

        setTimeout(function () {
            const $scroll = $$(".message-wrap");
            console.log($scroll)
                // create an observer instance
            const observer = new MutationObserver(function (mutations) {
                $scroll.scrollTop(100000);
                mutations.forEach(function (mutation) {
                    console.log(mutation.type, mutation);
                });
            });

            // configuration of the observer:
            const config = {
                childList: true,
            };
            observer.observe($scroll[0], config);
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
