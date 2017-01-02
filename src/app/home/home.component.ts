import {
    Component
}
from '@angular/core';

import {
    XLarge
}
from './x-large';
import {
    MessageType
} from './message/message.component.ts'

import {
    Room
} from './room/room.component.ts'

import {
    NgZone
} from '@angular/core';

console.log(Room);

@Component({
    selector: 'home', // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.

    // Our list of styles in our component. We may add more to compose many styles together
    //  styles: [ require('./home.component.less') ],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler

    templateUrl: './home.component.html',
})
class HomeComponent {
    // Set our default values
    localState = {
        value: ''
    };
    // TypeScript public modifiers
    constructor(private _ngZone: NgZone) {

    }
    rooms: Room[];
    imgPath = "assets/img"
    messageHooks: Function[] = [];
    ngOnInit() {
        this.rooms = [{
                    name: "MDZZ",
                    messages: [{
                        name: "blackmiaool",
                        time: Date.now() + "",
                        type: MessageType.Text,
                        content: "这个风格怎么样2"
                }, {
                        name: "blackmiaool",
                        time: Date.now() + "",
                        type: MessageType.Text,
                        content: "这个风格怎么样3"
                }]
            },
                {
                    name: "god",
                    messages: [{
                        name: "blackmiaool",
                        time: Date.now() + "",
                        type: MessageType.Text,
                        content: "这个风格怎么样4"
                }, {
                        name: "blackmiaool",
                        time: Date.now() + "",
                        type: MessageType.Text,
                        content: "这个风格怎么样5"
                }]
            }]
            // this.title.getData().subscribe(data => this.data = data);

        const that = this;
        window['onMessage'] = function (cb) {
            that.messageHooks.push(cb);
        }
        window['mockMessage'] = function (name, type, content, roomName) {
            const message = {
                name,
                type,
                content,
                time: Date.now() + ""
            };

            that._ngZone.run(function () {
                that.rooms.forEach(function (room) {
                    if (room.name === roomName) {
                        room.messages.push(message);
                    }
                });

            });
        }
    }
    onRoomSend(message, room) {
        //        console.log(message, room, this);
        room.messages.push(message);

        this.messageHooks.forEach(function (cb) {
            cb(message, room);
        });
    }
    submitState(value: string) {
        console.log('submitState', value);
        this.localState.value = '';
    }
}
export {
    HomeComponent
};
