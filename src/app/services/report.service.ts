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
export class ReportService {
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

  
    GetDistributorReportByDate(dateFrom:any,dateTo:any) {
      let obj ={DateFrom:dateFrom,DateTo:dateTo};
      //debugger;
      return this.CC.AVPostWithParamandreturn2('api/AdminReport', 'GetDistributorReportByDate',obj);
    }

    GetRetailerReportByDate(dateFrom:any,dateTo:any) {
      let obj ={DateFrom:dateFrom,DateTo:dateTo};
      //debugger;
      return this.CC.AVPostWithParamandreturn2('api/AdminReport', 'GetRetailerReportByDate',obj);
    }

    GetRechargeTransactionReportByDate(dateFrom:any,dateTo:any, selection:any) {
     
      let obj ={DateFrom:dateFrom,DateTo:dateTo, Selection:selection};
      //debugger;
      return this.CC.AVPostWithParamandreturn2('api/AdminReport', 'GetRechargeTransactionReportByDate',obj);
    }

    GetLiveRechargeTransactionReportByDate(dateFrom:any,dateTo:any, selection:any) {
     
      let obj ={DateFrom:dateFrom,DateTo:dateTo, Selection:selection};
      //debugger;
      return this.CC.AVPostWithParamandreturn2('api/AdminReport', 'GetLiveRechargeTransactionReportByDate',obj);
    }

    GetMobileRechargeTransactionReportByDate(dateFrom:any,dateTo:any, selection:any, provider:any) {
     
      let obj ={DateFrom:dateFrom,DateTo:dateTo, Selection:selection, Provider:provider};
      //debugger;
      return this.CC.AVPostWithParamandreturn2('api/AdminReport', 'GetMobileRechargeTransactionReportByDate',obj);
    }

    GetDthRechargeTransactionReportByDate(dateFrom:any,dateTo:any, selection:any, provider:any) {
     
      let obj ={DateFrom:dateFrom,DateTo:dateTo, Selection:selection, Provider:provider};
      //debugger;
      return this.CC.AVPostWithParamandreturn2('api/AdminReport', 'GetDthRechargeTransactionReportByDate',obj);
    }


  

  
}

































