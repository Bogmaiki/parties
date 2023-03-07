import { Component } from '@angular/core';
import { PartiesDataService } from './parties-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service: PartiesDataService) {
  }
  addNewParty() {
    const newParty = prompt("אנא הזן שם של מפלגה");
    if (newParty != null) {
      this.service.addParty(newParty);
    }
  }
}
