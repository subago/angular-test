import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProdTableComponent } from './prod-table/prod-table.component';
import { ProductData } from './services/productData.service';
import { FormsModule } from '@angular/forms';
import { ProdCategoryComponent } from './prod-category/prod-category.component';
import { ProdRowComponent } from './prod-row/prod-row.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProdTableComponent,
    ProdCategoryComponent,
    ProdRowComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers:[{provide:"productData",useClass:ProductData}],
  bootstrap: [AppComponent]
})
export class AppModule { }
