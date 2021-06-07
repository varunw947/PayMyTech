import { Component } from '@angular/core';

import * as $ from 'jquery';

import { User } from '../models';
import { AccountService, ExternalAPIService } from '../services';

import { first } from 'rxjs/operators';

import { Product } from './product';

import {Category} from './category';

import 'bootstrap/dist/js/bootstrap.bundle';

import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ElementRef , HostBinding, HostListener} from '@angular/core'; 

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']  })
export class HomeComponent {
    user: User ;

    distid:any;

    categoryList:any;
    
    categoryId=0;
    showSidebar = false;

    role:any;
    showRetailers = false;

    searchCategory : any;
    balance:any = {};

    searchCategory2 : any;
isProduct = false;

  productList : Product[];

    constructor(private accountService: AccountService, private exAPIService: ExternalAPIService, private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router, private _el: ElementRef) {

          
          
        this.user = this.accountService.userValue;
        this.accountService.user.subscribe(x => this.user = x);
        debugger;
        this.distid = this.user.mobile;
        this.role = this.user.role;
        if(this.role== "Retailer")
        {
          this.showRetailers = false;
        }
        else
        {
          this.showRetailers = true;
        }
    }

    ngOnInit(): void 
    {

      //Toggle Click Function
     $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
      $(".fa-arrow-left").toggleClass("fa-arrow-right");
    });
    //  debugger;

        this.route.params.subscribe(data => {
            this.searchCategory = data.id;

              this.bindModules(0);
       // this.accountService.getmodules(0)
       // .pipe(first()).subscribe((categoryList:any) => this.categoryList = categoryList);
        });

        
        this.isProduct= true;
        this.showSidebar = true;

        this.getBalance();
    }

    bindModules(submod_id:any)
    {
      debugger;
      this.accountService.getmodules(submod_id)
      .pipe(first()).subscribe(
        
        (categoryList:any) => this.categoryList = categoryList);

    }

    @HostBinding('class.show') isOpen = false;

    @HostListener('click') closeOpen() {
        this.isOpen = !this.isOpen;
        this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
    }

    toogleOpen() {
        this.isOpen = !this.isOpen;
        this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show')
    }

   // IsOpen:false
    clickMobmode()
    {
        this._el.nativeElement.querySelector('.navbar-collapse').classList.toggle('show')

    }

    getBalance()
    {
      this.exAPIService.getBalance().subscribe( e => {
      console.log(e);
     debugger;
      this.balance = e;
      
      
    })
  
  }

    gotoRecharge(id :any)
    {    
          if(id ==1)
          {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/mobrecharge';
           // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/category/id';
            this.router.navigateByUrl(returnUrl);
          }
          else if (id==2)
          {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/utility';
           // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/category/id';
            this.router.navigateByUrl(returnUrl);
          }
          else if (id==3)
          {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/money';
           // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/category/id';
            this.router.navigateByUrl(returnUrl);
          }
          else if (id==4)
          {
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/travel';
            this.router.navigateByUrl(returnUrl);
          }

         
          
    }

    
   

    hideSidebar()
    {
      this.showSidebar = !this.showSidebar;

    }

      logout() {
        this.accountService.logout();
    }

    
}