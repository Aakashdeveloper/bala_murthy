import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {BookComponent} from './book.component';
import { ProductListComponent } from "./products/product.component";
import {ProductFilterPipe} from './products/product-filter.pipe'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BookComponent,
    ProductListComponent,
    ProductFilterPipe
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
