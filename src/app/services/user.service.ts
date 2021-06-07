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
export class UserService {
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

  
    UploadFile(formData:any)
    {
      return this.CC.AVPostWithParamandreturn2('api/common','UploadFile',formData);
    }

    searchCategoryProducts(categoryId:any):Observable<Product>
  {
    const productUrl = 'http://localhost:3000/products?category_id='+ categoryId;
    return this.http.get<Product>(productUrl);
  }

  getUserByUniqueID()
  {
    debugger;
    
    return this.CC.AVPostWithoutParamandreturn('api/user','GetUserByUniqueID');
  }

  getUtilities()
  {
   // const categoriesUrl = 'http://localhost:3000/utilities';
   // return this.http.get<Utility[]>(categoriesUrl);
  }

  getDistributorDetails()
  {  
    //Account_Controller
    return this.CC.AVgetWithoutParam2('api/account','GetDistributors');
  }

  getDistributorDetailsForRetailer()
  {
   // A.C.
    return this.CC.AVgetWithoutParam2('api/account','GetDistributorsForRetailer');
  }

  checkCode(item:any)
    {
      //A.C.
    debugger;
      return this.CC.AVPostWithParamandreturn2('api/account','ValidateRegisterDistributor',item);
    //  return this.CC.AVgetWithParam('api/user','CheckDistByCode',item);
    }

    checkRetailerCode(item:any)
    {
      //A.C.
    debugger;
      return this.CC.AVPostWithParamandreturn2('api/account','ValidateRegisterRetailer',item);
    
    }

    resendCode(item:any)
    {
    //A.C.
    debugger;
    return this.CC.AVPostWithParamandreturn2('api/account','ResendOTPCode',item);
    }

    checkOTPCode(item:any)
    {
      //A.C.
    debugger;
      return this.CC.AVPostWithParamandreturn2('api/account','MatchDistributorOTPCode',item);
    }

    checkRetailerOTPCode(item:any)
    {
      //A.C.
    debugger;
      return this.CC.AVPostWithParamandreturn2('api/account','MatchRetailerOTPCode',item);
    //  return this.CC.AVgetWithParam('api/user','CheckDistByCode',item);
    }

    DistRegister(param:any) 
    {
      //A.C.
      const httpOptions = {
          headers: new HttpHeaders({
                       'Content-Type': 'application/json',
                       'Access-Control-Allow-Origin': '*',
                       'Access-Control-Allow-Credentials': 'true'
          })
        };
      
     return this.CC.AVPostWithParamandreturn2('api/account','DistRegister',param);
  }

  updateUserDetails( firstName:any,location:any,state:any,address:any,pincode:any,city:any,  mobile:any, email:any, outletname:any)
 {
     debugger;
     let item = {FirstName:firstName, Location:location,State:state,
      Address:address,PinCode:pincode, City:city, Mobile:mobile,EmailAddress:email, OutletName:outletname}
  
    return this.CC.AVPostWithParamandreturn2('api/user','UpdateUserDetails',item);
 }


  RetailerRegister(param:any) 
  {
    //A.C.
    const httpOptions = {
        headers: new HttpHeaders({
                     'Content-Type': 'application/json',
                     'Access-Control-Allow-Origin': '*',
                     'Access-Control-Allow-Credentials': 'true'
        })
      };
    
   return this.CC.AVPostWithParamandreturn2('api/account','RetailerRegister',param);
}

changePassword(oldPassword:any, password:any)
    {
        debugger;
        let item = {OldPassword:oldPassword, Password:password}
     
       return this.CC.AVPostWithParamandreturn2('api/user','ChangePassword',item);
    }


}

































