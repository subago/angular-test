import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-app';
  searchCriteria: any;
  constructor() {  }

 onFilterProducts(criteria:any) {
   // this.searchCriteria = criteria;
  }
}
