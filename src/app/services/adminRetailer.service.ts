import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config'; 

import { environment } from '../../environments/environment';
import { User } from '../models';

import { CommanComponent } from '../Shared/comman.component';

import {Category} from '../sidebar/category';

import {Circle} from '../sidebar/circle';

import {Bank} from '../sidebar/Bank';

import {Product} from '../sidebar/product';

import {Utility} from '../sidebar/utility';

import {Plan} from '../sidebar/Plan';

import {from} from 'rxjs';

//import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';

@Injectable({ providedIn: 'root' })
export class AdminRetailerService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
    constructor(
        private router: Router,
        private http: HttpClient, private CC:CommanComponent, private config: AppConfig
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    
  getRetailerDetails()
  {   

    return this.CC.AVPostWithoutParamandreturn('api/AdminRetailer','GetRetailerDetails');
    
  }

  updateRetailerDetails(id:any, firstName:any,location:any,state:any,address:any,pincode:any,city:any,  mobile:any, email:any, outletname:any)
  {
      debugger;
      let item = {Id:id,FirstName:firstName, Location:location,State:state,
       Address:address,PinCode:pincode, City:city, Mobile:mobile,EmailAddress:email, OutletName:outletname}
   
     return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateUserDetails',item);
  }
    
 
}

































