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
    constructor() {

    }
    rooms: Room[];
    imgPath = "assets/img"
    ngOnInit() {
        this.rooms = [{
                name: "MDZZ",
                messages: [{
                    name: "blackmiaool",
                    time: Date.now(),
                    type: MessageType.Text,
                    content: "这个风格怎么样2"
                }, {
                    name: "blackmiaool",
                    time: Date.now(),
                    type: MessageType.Text,
                    content: "这个风格怎么样3"
                }]
            }]
            // this.title.getData().subscribe(data => this.data = data);
    }
    onRoomSend(message, room) {
        //        const roomName = this.room.name;
        console.log(message, room, this);
        room.messages.push(message);
        //        this.rooms.filter(function (room) {
        //            //            if (room.name === roomName) {
        //            //
        //            //            }
        //        }).forEach(function () {
        //
        //        });
        //        //        messages.push(message);
        //
        //        console.log("1", message, room);
        //        console.log(this);
    }
    submitState(value: string) {
        console.log('submitState', value);
        //    this.appState.set('value', value);
        this.localState.value = '';
    }
}
export {
    HomeComponent
};
