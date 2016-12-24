import {
    Component
}
from '@angular/core';

import {
    XLarge
}
from './x-large';


export class Message {
  id: number;
  name: string;
}



@
Component({
    selector: 'home', // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.

    // Our list of styles in our component. We may add more to compose many styles together
    //  styles: [ require('./home.component.less') ],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './home.component.html'
})
export class HomeComponent {
    // Set our default values
    localState = {
        value: ''
    };
    // TypeScript public modifiers
    constructor() {

    }
    imgPath = "assets/img"
    ngOnInit() {
        console.log('hello `Home` component');
        this.rooms = [{
                name: "MDZZ",
                messages: [{
                    name: "blackmiaool",
                    time: "16:36",
                    type: "normal",
                    content: "这个风格怎么样"
                }]
            }]
            // this.title.getData().subscribe(data => this.data = data);
    }

    submitState(value: string) {
        console.log('submitState', value);
        //    this.appState.set('value', value);
        this.localState.value = '';
    }
}