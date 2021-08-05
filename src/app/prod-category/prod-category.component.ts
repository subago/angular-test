import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ProdRowComponent } from '../prod-row/prod-row.component';

@Component({
  selector: 'app-prod-category',
  templateUrl: './prod-category.component.html',
  styleUrls: ['./prod-category.component.css']
})
export class ProdCategoryComponent implements OnInit {

  @Input()
  categoryName: string;

  @Input()
  rowData: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.categoryName = "";
    this.rowData = {};
  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ProdRowComponent);
    const containerRef = this.viewContainerRef;
    containerRef.clear();
    for (let rowItem of this.rowData) {
      const componentRef = containerRef.createComponent(componentFactory);
      componentRef.instance.rowData = rowItem;
    }
  }

}
