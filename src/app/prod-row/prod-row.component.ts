import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-row',
  templateUrl: './prod-row.component.html',
  styleUrls: ['./prod-row.component.css']
})
export class ProdRowComponent implements OnInit {

  @Input()
  rowData:any;

  constructor() { 
    this.rowData = {};
    this.rowData.name="default";
  }

  ngOnInit(): void {
  }

}
