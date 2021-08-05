import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-comp',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: any;
  stockItem: boolean;
  
  constructor() {
    this.searchText = "";
    this.stockItem = false;
  }

  ngOnInit(): void {
  }

 
}
