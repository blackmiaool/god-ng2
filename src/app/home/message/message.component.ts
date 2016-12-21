import { Component } from '@angular/core';


@Component({
  selector: 'message',
  templateUrl: './message.component.html'
})
export class MessageComponent {
  constructor() {

  }
  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
