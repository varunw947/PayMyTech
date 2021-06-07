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
export class AccountService {
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

  
    GetUsers()
    {
        debugger;
       return this.CC.AVgetWithoutParam2('api/user','GetUsers');
    }

  getmodules(submoduleid:any)
  {
    debugger;
   let item = {SubModuleID:submoduleid}
    return this.CC.AVPostWithParamandreturn2('api/user','GetModules',item);
  }

  getRetailers()
  {
    debugger;
    
    return this.CC.AVPostWithoutParamandreturn('api/user','GetRetailers');
   
  }

  
  getBankList()
  {
    //const bankUrl = 'http://localhost:3000/banks';
    //return this.http.get<Bank[]>(bankUrl);

    return this.CC.AVPostWithoutParamandreturn('api/account','GetBankList');
  }

  getPlans(provider_id:any)
  {
    // const categoriesUrl = 'http://localhost:3000/plans';
    // return this.http.get<Plan[]>(categoriesUrl);

    
    debugger;
   let item = {ProviderID:provider_id}
    return this.CC.AVPostWithParamandreturn2('api/account','GetMobilePlan',item);
  }

  getCommission(provider_id:any)
  {
    
    debugger;
   let item = {ProviderID:provider_id}
    return this.CC.AVPostWithParamandreturn2('api/account','GetMobileProviderByProviderID',item);
  }

  getDTHCommission(provider_id:any)
  {
    
    debugger;
   let item = {ProviderID:provider_id}
    return this.CC.AVPostWithParamandreturn2('api/account','GetDTHProviderByProviderID',item);
  }

  getElectricityCommission(provider_id:any)
  {
    
    debugger;
   let item = {ProviderID:provider_id}
    return this.CC.AVPostWithParamandreturn2('api/account','GetElectricityProviderByProviderID',item);
  }

  getGasCommission(provider_id:any)
  {
    
    debugger;
   let item = {ProviderID:provider_id}
    return this.CC.AVPostWithParamandreturn2('api/account','GetGasProviderByProviderID',item);
  }

  getInsuranceCommission(provider_id:any)
  {
    
    debugger;
   let item = {ProviderID:provider_id}
    return this.CC.AVPostWithParamandreturn2('api/account','GetInsuranceProviderByProviderID',item);
  }


  getJPlans()
  {
    const categoriesUrl = 'http://localhost:3000/Jioplans';
    return this.http.get<Plan[]>(categoriesUrl);
  }

  getVPlans()
  {
    const categoriesUrl = 'http://localhost:3000/Viplans';
    return this.http.get<Plan[]>(categoriesUrl);
  }

  getBPlans()
  {
    const categoriesUrl = 'http://localhost:3000/Bplans';
    return this.http.get<Plan[]>(categoriesUrl);
  }


  getMPlans()
  {
    const categoriesUrl = 'http://localhost:3000/Mplans';
    return this.http.get<Plan[]>(categoriesUrl);
  }

    public get userValue(): User {
        return this.userSubject.value;
    }

  
    retailerLogin(mobile:any, password:any) {
      debugger;
      return this.http.post(this.config.apiUrl + '/api/user/authenticate', {Username:mobile, Mobile:mobile, Password:password,IP:'IP', LoginType:3 })
   //  return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })    
     .pipe(map(user => {
              debugger;
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
              this.userSubject.next(user);
              return user;
          }));
  }

  adminLogin(mobile:any, password:any) {
    debugger;
    return this.http.post(this.config.apiUrl + '/api/user/authenticate', {Username:mobile, Mobile:mobile, Password:password,IP:'IP', LoginType:1 })
 //  return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })    
   .pipe(map(user => {
            debugger;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
}
    login(mobile:any, password:any) {
        debugger;
        return this.http.post(this.config.apiUrl + '/api/user/authenticate', {Username:mobile, Mobile:mobile, Password:password,IP:'IP', LoginType:2 })
     //  return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })    
       .pipe(map(user => {
                debugger;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null as any);
        this.router.navigate(['/account/login']);
    }

    forgetPassword(mobile:any)
    {
        let item = {Mobile:mobile}
       return this.CC.AVPostWithParamandreturn2('api/user','ForgetPassword',item);
    }

    sendOTP(mobile:any)
    {
        let item = {Mobile:mobile}
       //return this.CC.AVPostWithParamandreturn2('api/user','GenerateOTP',item); 
		return this.CC.AVPostWithParamandreturn2('api/user','OTPSent',item);     	   
    }

    resetPassword(mobile:any, password:any)
    {
        debugger;
        let item = {Mobile:mobile, Password:password}
     
       return this.CC.AVPostWithParamandreturn2('api/user','SetNewPassword',item);
    }

    register(username:any, firstname:any, lastname:any, mobile:any, emailaddress:any, password:any) {

        const httpOptions = {
            headers: new HttpHeaders({
                         'Content-Type': 'application/json',
                         'Access-Control-Allow-Origin': '*',
                         'Access-Control-Allow-Credentials': 'true'
            })
          };
      //  return this.http.post(`${environment.apiUrl}/users/register`, user);
      let item = {Username:username, FirstName:firstname, LastName:lastname,Mobile:mobile, EmailAddress:emailaddress, Password:password}
       return this.CC.AVPostWithParamandreturn2('api/user','register',item);
    }


    getCommReport() 
    {
      return this.CC.AVgetWithoutParam2('api/user','getCommissionDetails');   
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id:any, params:any) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }



}

































