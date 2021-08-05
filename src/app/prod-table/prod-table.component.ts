import { Component, OnInit, Output, EventEmitter, Inject, Input, ComponentFactoryResolver, ViewContainerRef, OnChanges, SimpleChanges, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import *  as  productData from '../../assets/productData.json';
import { ProdCategoryComponent } from '../prod-category/prod-category.component';

@Component({
  selector: 'prod-table-comp',
  templateUrl: './prod-table.component.html',
  styleUrls: ['./prod-table.component.css']
})
export class ProdTableComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  productData: any;
  componentList: any;

  @Input()
  productJsonObj: any;

  @Input()
  searchCriteria: any;

  @ViewChild('prodcontainer', {static:false, read: ViewContainerRef }) viewContainerRef!:ViewContainerRef;

  constructor(@Inject("productData") productData: any,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.productData = productData;
    this.searchCriteria = {};
    this.productJsonObj = (productData as any).default;
    this.componentList = new Array<any>();
  }
  ngAfterViewInit(): void {
    this.searchCriteria = {};
    this.productJsonObj = (productData as any).default;
    this.onProdFilter();
  }
  ngOnDestroy(): void {
    this.componentList.map((cm: any, i: number) => {
      let tmp = this.viewContainerRef;
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(cm));
      this.viewContainerRef.remove(i);
      this.componentList.splice(i, 1);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Inside ngOnChanges");
 
  }

  ngOnInit(): void {

  }

  onProdFilter() {
    console.log(this.searchCriteria.onlyStock);
    this.productJsonObj = this.productData.filterProduct(
      this.searchCriteria.searchText, this.searchCriteria.onlyStock);

    var categories = new Set<string>();
    for (let item of this.productJsonObj) {
      categories.add(item.category);
    }

    const componentFactory = this.componentFactoryResolver.
      resolveComponentFactory(ProdCategoryComponent);
    let containerRef = this.viewContainerRef;
    containerRef.clear();
    for (let catItem of categories) {
      let componentRef = containerRef.createComponent(componentFactory);
      this.componentList.push(componentRef);
      componentRef.instance.categoryName = catItem;
      var rowDetails = this.productJsonObj.filter((obj: { [x: string]: string; }) => {
        return obj['category'] == catItem;
      }
      );
      componentRef.instance.rowData = rowDetails;
    }


  }

}
