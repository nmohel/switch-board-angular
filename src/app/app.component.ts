import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches = [];

  ngOnInit() {
    for(let i=0; i<10; i++) {
      let switchButton = {isOn: false, state:'OFF'}
      this.switches.push(switchButton);
    }
  }

  switchClicked(i:number) {
    let button = this.switches[i];
    button.isOn = !button.isOn;
    if (button.state === 'OFF') {
      button.state = 'ON'
    } else {
      button.state = 'OFF'
    }
  }
}
