import { Component, OnInit, Input  } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { first } from 'rxjs/operators';

import { from } from 'rxjs';

import * as $ from 'jquery';

import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


import {AccountService} from '../../services';

import { Product } from '../product';

import {Category} from '../../sidebar/category';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  
  searchCategory : any;

  productList : any;

  constructor(private activatedRoute: ActivatedRoute, 
    private productsService:AccountService,private router: Router) { }
 
  ngOnInit(): void 
  {

     //Toggle Click Function
     $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

  }


  gotoRecharge(id :any)
  {
        if(id ==1)
        {
          const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'sidebar/home/mobrecharge';
          this.router.navigateByUrl(returnUrl);
        }
        else if (id==2)
        {
          const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'sidebar/home/dthrecharge';
          this.router.navigateByUrl(returnUrl);
        }
        else if (id==3)
        {
          const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'sidebar/home/money';
          this.router.navigateByUrl(returnUrl);
        }
        else if (id==4)
        {
          const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || 'sidebar/home/travel';
          this.router.navigateByUrl(returnUrl);
        }
  }
}
