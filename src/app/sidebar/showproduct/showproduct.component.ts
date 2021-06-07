import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import { AccountService,ExternalAPIService } from '../../services';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {
  categoryId = 0;
 
  isMobile=false;
  isDTH = false;
  isMoney = false;
  isTravel = false;
  circleList:any;


  constructor(private activatedRoute : ActivatedRoute,private exAPIService: ExternalAPIService,private accountService: AccountService) { }

  ngOnInit(): void {

    this.getCircles();

    this.activatedRoute.params.subscribe
    (data => 
    {
       // this.categoryId = data.category_id;
       this.categoryId = data.id;

     //  this.categoryId =1;

  if(this.categoryId ==1)
  {
  
    this.isMobile=true;
    this.isDTH = false;
    this.isMoney = false;
    this.isTravel = false;
  
  }
  else if(this.categoryId ==2)
  {
  
    this.isMobile=false;
    this.isDTH = true;
    this.isMoney = false;
    this.isTravel = false;
  }
  
  else if(this.categoryId ==3)
  {
  
    this.isMobile=false;
    this.isDTH = false;
    this.isMoney = true;
    this.isTravel = false;
  }
  
  else if(this.categoryId ==4)
  {
  
    this.isMobile=false;
    this.isDTH = false;
    this.isMoney = false;
    this.isTravel = true;
  }
  
       // this.productsService.viewProduct(this.categoryId).subscribe(productData => {
         // this.productDetails = productData;
  
          //console.log(this.productDetails);
        //});
      });


  }

  getCircles()
  {
    this.activatedRoute.params.subscribe(data => {
      // this.searchCategory = data.id;

     this.exAPIService.getCircles()
     .pipe(first()).subscribe((circleList:any) => 
          this.circleList = circleList);
          debugger;
     });
  }

}
