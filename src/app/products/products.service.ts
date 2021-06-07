import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { from, Observable } from 'rxjs';

import {Product} from './product';

import {Category} from '../sidebar/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  searchCategoryProducts(categoryId:any):Observable<Product>
  {
    const productUrl = 'http://localhost:3000/products?category_id='+ categoryId;
    return this.httpClient.get<Product>(productUrl);
  }
}
