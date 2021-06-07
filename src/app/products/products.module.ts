import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {ProductsRoutingModule} from './products-routing.module';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';


@NgModule({
  declarations: [ ViewAllProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
