import {
    Component,
    Input
}
from '@angular/core';

class Room() {
    name: string;
    time: string;
    type: string;
    content: string;
}

@Component({
    selector: 'room',
    templateUrl: './room.component.html'
})
export class RoomComponent {
    constructor() {

    }

    @Input()
    room;
    imgPath = "assets/img";
    ngOnInit() {

    }
}