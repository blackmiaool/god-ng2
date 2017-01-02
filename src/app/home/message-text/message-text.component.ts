import {
    Component
} from '@angular/core';

//export class TextMessageType {
//    name: string;
//    time: string;
//    type: MessageType;
//    content: any;
//}
export enum inlineType {
    text,
    image
}
export type textMessageType = [{
    type: inlineType
}];
@Component({
    selector: 'message-text',
    templateUrl: './message-text.component.html'
})
export class MessageTextComponent {
    constructor() {

    }
    ngOnInit() {

    }
}
