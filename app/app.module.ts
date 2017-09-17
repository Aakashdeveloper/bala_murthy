import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {BookComponent} from './book.component';
import { ProductListComponent } from "./products/product.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BookComponent,
    ProductListComponent
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
