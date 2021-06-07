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

import {Product} from '../sidebar/product';

import {from} from 'rxjs';
//import { AnyNsRecord } from 'dns';

//import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';

@Injectable({ providedIn: 'root' })
export class ExternalAPIService {
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


    KYCDetails(userimage:any, aadharfrontimage:any, aadharbackimage:any, panimage:any)
    {
      let item = { UserImage:userimage, AadharfrontImage:aadharfrontimage, AadharBackImage:aadharbackimage, PanImage:panimage}
      debugger;
      return this.CC.AVPostWithParamandreturn2('api/common','SaveKycDetails',item);
    }
  

  getCircles() 
  {
  //  return this.CC.AVgetWithoutParam2('api/externalapi','getCircleDetails');

    const balanceUrl = 'https://www.pay2all.in/web-api/get-circle?api_token= AkkPUPDJE5hWmZKdzk2msIY9vmrxzJW5p4F71gLghXviceJDDZc6XYNp2pvp';
  
    return this.http.get(balanceUrl);

  
  }

  getTransactionDetailWithComm() 
  {
    
  
    // const balanceUrl = 'https://www.pay2all.in/web-api/get-report?api_token=AkkPUPDJE5hWmZKdzk2msIY9vmrxzJW5p4F71gLghXviceJDDZc6XYNp2pvp';
  
    // return this.http.get(balanceUrl, httpOptions2);
    return this.CC.AVgetWithoutParam('api/externalapi','getTransactionReport'); 
  
  }


  getTransactionReport() 
  {
   // return this.CC.AVgetWithoutParam2('api/externalapi','getTransactionReport');  
    
    return this.CC.AVPostWithoutParamandreturn('api/externalapi','GetTransactionReportByUserID');   
  }
  
  getBankDetails()
  {
      return this.CC.AVPostWithoutParam('api/moneyapi','getBankDetails');

     // const url = "https://www.pay2all.in/api/dmr/v2/bank_list";
     // return this.http.post(url,{headers: this.getCommonHeaders()});

      //return this.http.get(url);  
  }

  getMobileList()
  {
      return this.CC.AVPostWithoutParamandreturn('api/externalapi','GetMobileList');
  }

  getDthList()
  {
      return this.CC.AVPostWithoutParamandreturn('api/externalapi','GetDthList');
  }

  getInsuranceList()
  {
      return this.CC.AVPostWithoutParamandreturn('api/externalapi','GetInsuranceList');
  }

  getElectricityList()
  {
      return this.CC.AVPostWithoutParamandreturn('api/externalapi','GetElectricityList');
  }

  getGasList()
  {
      return this.CC.AVPostWithoutParamandreturn('api/externalapi','GetGasList');
  }







  getProviders() 
  {
   // return this.CC.AVgetWithoutParam3('api/externalapi','getProviderDetails');
    debugger;
   const balanceUrl = 'https://www.pay2all.in/web-api/get-provider?api_token= AkkPUPDJE5hWmZKdzk2msIY9vmrxzJW5p4F71gLghXviceJDDZc6XYNp2pvp';
  
    return this.http.get(balanceUrl);
  }

  SaveRechargeTranx(providerid:any, amount:any, mobileNumber:any, operatortype:any,transtype:any, status:any, profit:any, moduleid:any, retCommPert:any, adminCommPert:any, distCommPert)
  {
    
      let item = { MobileNumber:mobileNumber, Amount:amount, ProviderID:providerid, 
        OperatorType:operatortype, TransactionType:transtype, Status:status, 
        Profit:profit, ModuleID:moduleid, RetCommPert:retCommPert,
        AdminCommPert:adminCommPert, DistCommPert:distCommPert  }
      debugger;
      return this.CC.AVPostWithParamandreturn('api/externalapi','SaveRechargeTranx',item);
  
   }

  Recharge(providerid:any, amount:any, mobileNumber:any, operatortype:any)
  {
    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwZDVkNjBhNzAwYWQyYzA0YzgxOTYwNzFhNjdmMDRiMzVhMjY1NDJlMzFkMTQ5M2EwOTMwYjIyOTRkNTdiNGI0MGIxNzc5YjdjMTUyZjRkOSIsImlhdCI6MTYyMDAyNTQwNS4yODM3NDY5NTc3Nzg5MzA2NjQwNjI1LCJuYmYiOjE2MjAwMjU0MDUuMjgzNzUwMDU3MjIwNDU4OTg0Mzc1LCJleHAiOjE2MzU5MjMwMDUuMjM1MTM3OTM5NDUzMTI1LCJzdWIiOiIyODQzOSIsInNjb3BlcyI6W119.g1lKf6-uygOgwTm0FX8McodrXDITPGZ9ApztYR8h0tjqKEUSdHoRS52AdFU98NDYfRsGt8i1P2vx59Q9W4hDpk7yv5wHAmnj9qhFD-yttgJbZCJiD46dOa_ETRPiCge0-ibdKa4aH_OrDomQOwjZ0A63SbR9mcR6FI7_y-qZANI_SNBvtgYReTmIHOPfx8WYxBvlsEN_2fuIq7YfbMjUKEyuP2D1FRJyCsWs6e5wMmN3Q4vOtXzbDZ4VLezTCflne_J_6JlzTxqmB3BB_6qdjRTUyn7m0lxA7PfkRe0NXyp_FPUAvrP-REhoyaF2Un77yBUOeQrFcpdPXqtaiwXYrVU21f0-7HIp0ymuPblHJ3ZpsleoYmYEwzf_iXyOorrYFqWkYtA7g2KLFiFKrBfrq0BQKVRkaghgxxvUtM6jQTSCQZHSarGkf00Z9GxpTY1-yKtR_S2IVyZTQ-600ZwUEStulWVv6DRdH7NDaL59A-wmHHsWOqJmrGTkPWRTuSeneQO1cj9X1VuF7-oCf6c2ZohnxRp47dnEjGwgYotsCgLBW45OuP75E4ETJQoBWjVYb3RuMiWXksI8SzcCvVWerOfbhuqq2I95iTHq7zIphFOR7J0PKa5g8xd9l8l0qL8pprqJPutbh3A43wT-5f4iobFSZjakM2XhrF7BoDxGB0U'
      })
    };

      let item = { MobileNumber:mobileNumber, Amount:amount, ProviderID:providerid, OperatorType:operatortype}
      debugger;
    //  return this.CC.AVPostWithParamandreturn('api/externalapi','Recharge',item);

    //const balanceUrl = 'https://pay2all.in/api/v1/transaction?number=9306423474&provider_id=88&amount=1&client_id=1';
    const balanceUrl = 'https://pay2all.in/api/v1/transaction?number=' + mobileNumber + '&provider_id=' + providerid + '&amount=' + amount + '&client_id=' +mobileNumber;
   
    debugger;
    return this.http.post(balanceUrl, item, httpOptions2);
      
   }

  getCommonHeaders(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    headers.append('Accept','application/json');

    headers.append('Access-Control-Expose-Headers', 'allow');
    headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwZDVkNjBhNzAwYWQyYzA0YzgxOTYwNzFhNjdmMDRiMzVhMjY1NDJlMzFkMTQ5M2EwOTMwYjIyOTRkNTdiNGI0MGIxNzc5YjdjMTUyZjRkOSIsImlhdCI6MTYyMDAyNTQwNS4yODM3NDY5NTc3Nzg5MzA2NjQwNjI1LCJuYmYiOjE2MjAwMjU0MDUuMjgzNzUwMDU3MjIwNDU4OTg0Mzc1LCJleHAiOjE2MzU5MjMwMDUuMjM1MTM3OTM5NDUzMTI1LCJzdWIiOiIyODQzOSIsInNjb3BlcyI6W119.g1lKf6-uygOgwTm0FX8McodrXDITPGZ9ApztYR8h0tjqKEUSdHoRS52AdFU98NDYfRsGt8i1P2vx59Q9W4hDpk7yv5wHAmnj9qhFD-yttgJbZCJiD46dOa_ETRPiCge0-ibdKa4aH_OrDomQOwjZ0A63SbR9mcR6FI7_y-qZANI_SNBvtgYReTmIHOPfx8WYxBvlsEN_2fuIq7YfbMjUKEyuP2D1FRJyCsWs6e5wMmN3Q4vOtXzbDZ4VLezTCflne_J_6JlzTxqmB3BB_6qdjRTUyn7m0lxA7PfkRe0NXyp_FPUAvrP-REhoyaF2Un77yBUOeQrFcpdPXqtaiwXYrVU21f0-7HIp0ymuPblHJ3ZpsleoYmYEwzf_iXyOorrYFqWkYtA7g2KLFiFKrBfrq0BQKVRkaghgxxvUtM6jQTSCQZHSarGkf00Z9GxpTY1-yKtR_S2IVyZTQ-600ZwUEStulWVv6DRdH7NDaL59A-wmHHsWOqJmrGTkPWRTuSeneQO1cj9X1VuF7-oCf6c2ZohnxRp47dnEjGwgYotsCgLBW45OuP75E4ETJQoBWjVYb3RuMiWXksI8SzcCvVWerOfbhuqq2I95iTHq7zIphFOR7J0PKa5g8xd9l8l0qL8pprqJPutbh3A43wT-5f4iobFSZjakM2XhrF7BoDxGB0U');
    headers.append('access-control-allow-origin','*');
    return headers;

  
  }

  DTHRecharge(providerid:any, amount:any, customerid:any, operatortype:any)
  {
    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwZDVkNjBhNzAwYWQyYzA0YzgxOTYwNzFhNjdmMDRiMzVhMjY1NDJlMzFkMTQ5M2EwOTMwYjIyOTRkNTdiNGI0MGIxNzc5YjdjMTUyZjRkOSIsImlhdCI6MTYyMDAyNTQwNS4yODM3NDY5NTc3Nzg5MzA2NjQwNjI1LCJuYmYiOjE2MjAwMjU0MDUuMjgzNzUwMDU3MjIwNDU4OTg0Mzc1LCJleHAiOjE2MzU5MjMwMDUuMjM1MTM3OTM5NDUzMTI1LCJzdWIiOiIyODQzOSIsInNjb3BlcyI6W119.g1lKf6-uygOgwTm0FX8McodrXDITPGZ9ApztYR8h0tjqKEUSdHoRS52AdFU98NDYfRsGt8i1P2vx59Q9W4hDpk7yv5wHAmnj9qhFD-yttgJbZCJiD46dOa_ETRPiCge0-ibdKa4aH_OrDomQOwjZ0A63SbR9mcR6FI7_y-qZANI_SNBvtgYReTmIHOPfx8WYxBvlsEN_2fuIq7YfbMjUKEyuP2D1FRJyCsWs6e5wMmN3Q4vOtXzbDZ4VLezTCflne_J_6JlzTxqmB3BB_6qdjRTUyn7m0lxA7PfkRe0NXyp_FPUAvrP-REhoyaF2Un77yBUOeQrFcpdPXqtaiwXYrVU21f0-7HIp0ymuPblHJ3ZpsleoYmYEwzf_iXyOorrYFqWkYtA7g2KLFiFKrBfrq0BQKVRkaghgxxvUtM6jQTSCQZHSarGkf00Z9GxpTY1-yKtR_S2IVyZTQ-600ZwUEStulWVv6DRdH7NDaL59A-wmHHsWOqJmrGTkPWRTuSeneQO1cj9X1VuF7-oCf6c2ZohnxRp47dnEjGwgYotsCgLBW45OuP75E4ETJQoBWjVYb3RuMiWXksI8SzcCvVWerOfbhuqq2I95iTHq7zIphFOR7J0PKa5g8xd9l8l0qL8pprqJPutbh3A43wT-5f4iobFSZjakM2XhrF7BoDxGB0U'
      })
    };

    let item = { CustomerID:customerid, Amount:amount, ProviderID:providerid, OperatorType:operatortype}
    debugger;
    //return this.CC.AVPostWithParamandreturn('api/externalapi','DTHRecharge',item);
   
    const balanceUrl='https://pay2all.in/api/v1/transaction?number='+ customerid +  '&provider_id=' + providerid + '&amount=' + amount + '&client_id=' + customerid + '&cnumber=' + customerid;
     debugger;
     return this.http.post(balanceUrl, item, httpOptions2);
      

  }

  ElectricityBill(providerid:any, amount:any, customernumber:any, operatortype:any)
  {
    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwZDVkNjBhNzAwYWQyYzA0YzgxOTYwNzFhNjdmMDRiMzVhMjY1NDJlMzFkMTQ5M2EwOTMwYjIyOTRkNTdiNGI0MGIxNzc5YjdjMTUyZjRkOSIsImlhdCI6MTYyMDAyNTQwNS4yODM3NDY5NTc3Nzg5MzA2NjQwNjI1LCJuYmYiOjE2MjAwMjU0MDUuMjgzNzUwMDU3MjIwNDU4OTg0Mzc1LCJleHAiOjE2MzU5MjMwMDUuMjM1MTM3OTM5NDUzMTI1LCJzdWIiOiIyODQzOSIsInNjb3BlcyI6W119.g1lKf6-uygOgwTm0FX8McodrXDITPGZ9ApztYR8h0tjqKEUSdHoRS52AdFU98NDYfRsGt8i1P2vx59Q9W4hDpk7yv5wHAmnj9qhFD-yttgJbZCJiD46dOa_ETRPiCge0-ibdKa4aH_OrDomQOwjZ0A63SbR9mcR6FI7_y-qZANI_SNBvtgYReTmIHOPfx8WYxBvlsEN_2fuIq7YfbMjUKEyuP2D1FRJyCsWs6e5wMmN3Q4vOtXzbDZ4VLezTCflne_J_6JlzTxqmB3BB_6qdjRTUyn7m0lxA7PfkRe0NXyp_FPUAvrP-REhoyaF2Un77yBUOeQrFcpdPXqtaiwXYrVU21f0-7HIp0ymuPblHJ3ZpsleoYmYEwzf_iXyOorrYFqWkYtA7g2KLFiFKrBfrq0BQKVRkaghgxxvUtM6jQTSCQZHSarGkf00Z9GxpTY1-yKtR_S2IVyZTQ-600ZwUEStulWVv6DRdH7NDaL59A-wmHHsWOqJmrGTkPWRTuSeneQO1cj9X1VuF7-oCf6c2ZohnxRp47dnEjGwgYotsCgLBW45OuP75E4ETJQoBWjVYb3RuMiWXksI8SzcCvVWerOfbhuqq2I95iTHq7zIphFOR7J0PKa5g8xd9l8l0qL8pprqJPutbh3A43wT-5f4iobFSZjakM2XhrF7BoDxGB0U'
      })
    };

    let item = { CustomerNumber:customernumber, Amount:amount, ProviderID:providerid, OperatorType:operatortype}
   // return this.CC.AVPostWithParamandreturn('api/externalapi','ElectricityBill',item);
  
   const balanceUrl='https://pay2all.in/api/v1/transaction?number='+ customernumber +  '&provider_id=' + providerid + '&amount=' + amount + '&client_id=' + customernumber + '&optional1=' + customernumber + '&optional2=' + customernumber + '&optional3=' + customernumber;
   debugger;
   return this.http.post(balanceUrl, item, httpOptions2);
  }

  GasBill(providerid:any, amount:any, customernumber:any, mobilenumber:any, emailid:any, operatortype:any)
  {
    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwZDVkNjBhNzAwYWQyYzA0YzgxOTYwNzFhNjdmMDRiMzVhMjY1NDJlMzFkMTQ5M2EwOTMwYjIyOTRkNTdiNGI0MGIxNzc5YjdjMTUyZjRkOSIsImlhdCI6MTYyMDAyNTQwNS4yODM3NDY5NTc3Nzg5MzA2NjQwNjI1LCJuYmYiOjE2MjAwMjU0MDUuMjgzNzUwMDU3MjIwNDU4OTg0Mzc1LCJleHAiOjE2MzU5MjMwMDUuMjM1MTM3OTM5NDUzMTI1LCJzdWIiOiIyODQzOSIsInNjb3BlcyI6W119.g1lKf6-uygOgwTm0FX8McodrXDITPGZ9ApztYR8h0tjqKEUSdHoRS52AdFU98NDYfRsGt8i1P2vx59Q9W4hDpk7yv5wHAmnj9qhFD-yttgJbZCJiD46dOa_ETRPiCge0-ibdKa4aH_OrDomQOwjZ0A63SbR9mcR6FI7_y-qZANI_SNBvtgYReTmIHOPfx8WYxBvlsEN_2fuIq7YfbMjUKEyuP2D1FRJyCsWs6e5wMmN3Q4vOtXzbDZ4VLezTCflne_J_6JlzTxqmB3BB_6qdjRTUyn7m0lxA7PfkRe0NXyp_FPUAvrP-REhoyaF2Un77yBUOeQrFcpdPXqtaiwXYrVU21f0-7HIp0ymuPblHJ3ZpsleoYmYEwzf_iXyOorrYFqWkYtA7g2KLFiFKrBfrq0BQKVRkaghgxxvUtM6jQTSCQZHSarGkf00Z9GxpTY1-yKtR_S2IVyZTQ-600ZwUEStulWVv6DRdH7NDaL59A-wmHHsWOqJmrGTkPWRTuSeneQO1cj9X1VuF7-oCf6c2ZohnxRp47dnEjGwgYotsCgLBW45OuP75E4ETJQoBWjVYb3RuMiWXksI8SzcCvVWerOfbhuqq2I95iTHq7zIphFOR7J0PKa5g8xd9l8l0qL8pprqJPutbh3A43wT-5f4iobFSZjakM2XhrF7BoDxGB0U'
      })
    };

    let item = { CustomerNumber:customernumber, Amount:amount, ProviderID:providerid, MobileNumber:mobilenumber, EmailID:emailid, OperatorType:operatortype}
    //return this.CC.AVPostWithParamandreturn2('api/externalapi','GasBill',item);
  
    const balanceUrl='https://pay2all.in/api/v1/transaction?number='+ mobilenumber +  '&provider_id=' + providerid + '&amount=' + amount + '&client_id=' + customernumber + '&cnumber=' + customernumber + '&cemail=' + emailid;

    debugger;
    return this.http.post(balanceUrl, item, httpOptions2);

  }

  InsuranceBill(providerid:any, amount:any, customernumber:any, mobilenumber:any, emailid:any, operatortype:any)
  {
    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwZDVkNjBhNzAwYWQyYzA0YzgxOTYwNzFhNjdmMDRiMzVhMjY1NDJlMzFkMTQ5M2EwOTMwYjIyOTRkNTdiNGI0MGIxNzc5YjdjMTUyZjRkOSIsImlhdCI6MTYyMDAyNTQwNS4yODM3NDY5NTc3Nzg5MzA2NjQwNjI1LCJuYmYiOjE2MjAwMjU0MDUuMjgzNzUwMDU3MjIwNDU4OTg0Mzc1LCJleHAiOjE2MzU5MjMwMDUuMjM1MTM3OTM5NDUzMTI1LCJzdWIiOiIyODQzOSIsInNjb3BlcyI6W119.g1lKf6-uygOgwTm0FX8McodrXDITPGZ9ApztYR8h0tjqKEUSdHoRS52AdFU98NDYfRsGt8i1P2vx59Q9W4hDpk7yv5wHAmnj9qhFD-yttgJbZCJiD46dOa_ETRPiCge0-ibdKa4aH_OrDomQOwjZ0A63SbR9mcR6FI7_y-qZANI_SNBvtgYReTmIHOPfx8WYxBvlsEN_2fuIq7YfbMjUKEyuP2D1FRJyCsWs6e5wMmN3Q4vOtXzbDZ4VLezTCflne_J_6JlzTxqmB3BB_6qdjRTUyn7m0lxA7PfkRe0NXyp_FPUAvrP-REhoyaF2Un77yBUOeQrFcpdPXqtaiwXYrVU21f0-7HIp0ymuPblHJ3ZpsleoYmYEwzf_iXyOorrYFqWkYtA7g2KLFiFKrBfrq0BQKVRkaghgxxvUtM6jQTSCQZHSarGkf00Z9GxpTY1-yKtR_S2IVyZTQ-600ZwUEStulWVv6DRdH7NDaL59A-wmHHsWOqJmrGTkPWRTuSeneQO1cj9X1VuF7-oCf6c2ZohnxRp47dnEjGwgYotsCgLBW45OuP75E4ETJQoBWjVYb3RuMiWXksI8SzcCvVWerOfbhuqq2I95iTHq7zIphFOR7J0PKa5g8xd9l8l0qL8pprqJPutbh3A43wT-5f4iobFSZjakM2XhrF7BoDxGB0U'
      })
    };

    let item = { CustomerNumber:customernumber, Amount:amount, ProviderID:providerid, MobileNumber:mobilenumber, EmailID:emailid, OperatorType:operatortype}
    //return this.CC.AVPostWithParamandreturn2('api/externalapi','InsuranceBill',item);
  
    const balanceUrl='https://pay2all.in/api/v1/transaction?number='+ mobilenumber +  '&provider_id=' + providerid + '&amount=' + amount + '&client_id=' + customernumber + '&cnumber=' + customernumber + '&cemail=' + emailid;
    debugger;
    return this.http.post(balanceUrl, item, httpOptions2);
  }




  SaveSenderDetails(mobilenumber:any, firstname:any, lastname:any, otp:any)
  {
    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwMzA1NWEyNGQ5NmQyOWNmM2I2YjI2NzBjNzFmMmZiMmE0NzRhMjgzNTQxOTk0OTAxY2JkOTIyMzc2ZjNhYzZhZDJmOGU4MDdhNmQyODk4NyIsImlhdCI6MTYwODExMzI2NCwibmJmIjoxNjA4MTEzMjY0LCJleHAiOjE2Mzk2NDkyNjQsInN1YiI6IjI4NDM5Iiwic2NvcGVzIjpbXX0.Gow9gwfvjIhSTSwjBvXjbrO9hfhOgyOTWHs6d6HH7jYb9ylAh1F1LuI3emmbp1uHLwJqfnwlliTjCNsVQUFTHQpHHhzn5DMbz89jkVIz4WQae3FhnX7vPMyb-NmHvMN6na0sZgUZAbrDXCmdYWiVrPqQHM726qYbiSwM8nBO0Azu2ZtglF8o4oON0FTxNff_S9WR7aqeRpZp1Lw-R_ZGCfcjvIM9Hw_OjaSSIlKEabWsS0EmhhavEQ_LEb2E0tSf9yXBhoXGMbrnbRgtWal22W3b3Gq43IhKDOmNoADzWpnATk1H1GHEpF5WU1T3H1sFJ89WZlossHbZBAw7JH--nKC9R9Cf9oKXc8xwSaYxAg8wE6kcJO0EJvyGyIqVmSBhx3com59NJD_PcQJIqDR4u_J5CGHj38uQua2miGKsleHmQE2H7gSlYrg_QABPzd45z73CTxs5t0_R8uKCnIUhTnEZrvgPkG87TUpytIRzH3UVNdATFzO_-KKDIUXtpb7dOdon4daRdByhKpULtu54pV2jng5RZBWZ9dl3wgjLP4Y8qcRQjiHRBUW9t7Hw8TE0SxaRIAwR0VC9CAtRYY5N8ufsnHcmQ794qOA8Ee3iGxNs5IeNy1fLG4AdqsGo6gOe3isTQEQKZtuFE33ghNDsNb_jskQf9a9BAZPaXmKx2H8'
      })
    };


    let item = { MobileNumber:mobilenumber, FirstName:firstname, LastName:lastname}
  
 if(otp!=null)
 {
  const balanceUrl = 'https://www.pay2all.in/api/dmr/v2/add_sender_confirm?senderid ='+ mobilenumber + '&mobile_number=' + mobilenumber + '&otp=' + otp ;
 // return this.http.post(balanceUrl, item, httpOptions2);
  const msg =  this.http.post(balanceUrl, item, httpOptions2);
 }
 debugger;
    return this.CC.AVPostWithParamandreturn2('api/moneyapi','SaveSenderDetails',item);
}

ConfirmOTP(mobilenumber:any, otp:any)
{
  const httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwMzA1NWEyNGQ5NmQyOWNmM2I2YjI2NzBjNzFmMmZiMmE0NzRhMjgzNTQxOTk0OTAxY2JkOTIyMzc2ZjNhYzZhZDJmOGU4MDdhNmQyODk4NyIsImlhdCI6MTYwODExMzI2NCwibmJmIjoxNjA4MTEzMjY0LCJleHAiOjE2Mzk2NDkyNjQsInN1YiI6IjI4NDM5Iiwic2NvcGVzIjpbXX0.Gow9gwfvjIhSTSwjBvXjbrO9hfhOgyOTWHs6d6HH7jYb9ylAh1F1LuI3emmbp1uHLwJqfnwlliTjCNsVQUFTHQpHHhzn5DMbz89jkVIz4WQae3FhnX7vPMyb-NmHvMN6na0sZgUZAbrDXCmdYWiVrPqQHM726qYbiSwM8nBO0Azu2ZtglF8o4oON0FTxNff_S9WR7aqeRpZp1Lw-R_ZGCfcjvIM9Hw_OjaSSIlKEabWsS0EmhhavEQ_LEb2E0tSf9yXBhoXGMbrnbRgtWal22W3b3Gq43IhKDOmNoADzWpnATk1H1GHEpF5WU1T3H1sFJ89WZlossHbZBAw7JH--nKC9R9Cf9oKXc8xwSaYxAg8wE6kcJO0EJvyGyIqVmSBhx3com59NJD_PcQJIqDR4u_J5CGHj38uQua2miGKsleHmQE2H7gSlYrg_QABPzd45z73CTxs5t0_R8uKCnIUhTnEZrvgPkG87TUpytIRzH3UVNdATFzO_-KKDIUXtpb7dOdon4daRdByhKpULtu54pV2jng5RZBWZ9dl3wgjLP4Y8qcRQjiHRBUW9t7Hw8TE0SxaRIAwR0VC9CAtRYY5N8ufsnHcmQ794qOA8Ee3iGxNs5IeNy1fLG4AdqsGo6gOe3isTQEQKZtuFE33ghNDsNb_jskQf9a9BAZPaXmKx2H8'
    })
  };

debugger;
  let item = { MobileNumber:mobilenumber, OTP:otp}


const balanceUrl = 'https://www.pay2all.in/api/dmr/v2/add_sender_confirm?senderid ='+ mobilenumber + '&mobile_number=' + mobilenumber + '&otp=' + otp ;
// return this.http.post(balanceUrl, item, httpOptions2);
return  this.http.post(balanceUrl, item, httpOptions2);

}


  AddCustomer(mobilenumber:any, firstname:any, lastname:any)
  {

    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwMzA1NWEyNGQ5NmQyOWNmM2I2YjI2NzBjNzFmMmZiMmE0NzRhMjgzNTQxOTk0OTAxY2JkOTIyMzc2ZjNhYzZhZDJmOGU4MDdhNmQyODk4NyIsImlhdCI6MTYwODExMzI2NCwibmJmIjoxNjA4MTEzMjY0LCJleHAiOjE2Mzk2NDkyNjQsInN1YiI6IjI4NDM5Iiwic2NvcGVzIjpbXX0.Gow9gwfvjIhSTSwjBvXjbrO9hfhOgyOTWHs6d6HH7jYb9ylAh1F1LuI3emmbp1uHLwJqfnwlliTjCNsVQUFTHQpHHhzn5DMbz89jkVIz4WQae3FhnX7vPMyb-NmHvMN6na0sZgUZAbrDXCmdYWiVrPqQHM726qYbiSwM8nBO0Azu2ZtglF8o4oON0FTxNff_S9WR7aqeRpZp1Lw-R_ZGCfcjvIM9Hw_OjaSSIlKEabWsS0EmhhavEQ_LEb2E0tSf9yXBhoXGMbrnbRgtWal22W3b3Gq43IhKDOmNoADzWpnATk1H1GHEpF5WU1T3H1sFJ89WZlossHbZBAw7JH--nKC9R9Cf9oKXc8xwSaYxAg8wE6kcJO0EJvyGyIqVmSBhx3com59NJD_PcQJIqDR4u_J5CGHj38uQua2miGKsleHmQE2H7gSlYrg_QABPzd45z73CTxs5t0_R8uKCnIUhTnEZrvgPkG87TUpytIRzH3UVNdATFzO_-KKDIUXtpb7dOdon4daRdByhKpULtu54pV2jng5RZBWZ9dl3wgjLP4Y8qcRQjiHRBUW9t7Hw8TE0SxaRIAwR0VC9CAtRYY5N8ufsnHcmQ794qOA8Ee3iGxNs5IeNy1fLG4AdqsGo6gOe3isTQEQKZtuFE33ghNDsNb_jskQf9a9BAZPaXmKx2H8'
      })
    };

    firstname = "Safe";
    lastname = "Pay"

    let item = { MobileNumber:mobilenumber, FirstName:firstname, LastName:lastname}
   // return this.CC.AVPostWithParamandreturn2('api/moneyapi','AddCustomer',item);
    const balanceUrl = 'https://www.pay2all.in/api/dmr/v2/add_sender?mobile_number='+ mobilenumber + '&first_name=' + firstname + '&last_name=' + lastname ;
    return this.http.post(balanceUrl, item, httpOptions2);
   }

  ConfirmAccountNumber(mobilenumber:any, bankcode:any, ifsc:any, account:any)
  {
    const httpOptions2 = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMDgiLCJqdGkiOiIwMzA1NWEyNGQ5NmQyOWNmM2I2YjI2NzBjNzFmMmZiMmE0NzRhMjgzNTQxOTk0OTAxY2JkOTIyMzc2ZjNhYzZhZDJmOGU4MDdhNmQyODk4NyIsImlhdCI6MTYwODExMzI2NCwibmJmIjoxNjA4MTEzMjY0LCJleHAiOjE2Mzk2NDkyNjQsInN1YiI6IjI4NDM5Iiwic2NvcGVzIjpbXX0.Gow9gwfvjIhSTSwjBvXjbrO9hfhOgyOTWHs6d6HH7jYb9ylAh1F1LuI3emmbp1uHLwJqfnwlliTjCNsVQUFTHQpHHhzn5DMbz89jkVIz4WQae3FhnX7vPMyb-NmHvMN6na0sZgUZAbrDXCmdYWiVrPqQHM726qYbiSwM8nBO0Azu2ZtglF8o4oON0FTxNff_S9WR7aqeRpZp1Lw-R_ZGCfcjvIM9Hw_OjaSSIlKEabWsS0EmhhavEQ_LEb2E0tSf9yXBhoXGMbrnbRgtWal22W3b3Gq43IhKDOmNoADzWpnATk1H1GHEpF5WU1T3H1sFJ89WZlossHbZBAw7JH--nKC9R9Cf9oKXc8xwSaYxAg8wE6kcJO0EJvyGyIqVmSBhx3com59NJD_PcQJIqDR4u_J5CGHj38uQua2miGKsleHmQE2H7gSlYrg_QABPzd45z73CTxs5t0_R8uKCnIUhTnEZrvgPkG87TUpytIRzH3UVNdATFzO_-KKDIUXtpb7dOdon4daRdByhKpULtu54pV2jng5RZBWZ9dl3wgjLP4Y8qcRQjiHRBUW9t7Hw8TE0SxaRIAwR0VC9CAtRYY5N8ufsnHcmQ794qOA8Ee3iGxNs5IeNy1fLG4AdqsGo6gOe3isTQEQKZtuFE33ghNDsNb_jskQf9a9BAZPaXmKx2H8'
      })
    };

    let item = { MobileNumber:mobilenumber, BankCode:bankcode, IFSC:ifsc, Account:account}
    //return this.CC.AVPostWithParamandreturn2('api/moneyapi','ConfirmAccountNumber',item);
  
    const balanceUrl = 'https://www.pay2all.in/api/dmr/v2/get_name?mobile_number='+ mobilenumber + '&bankcode=' + bankcode + '&ifsc=' + ifsc + '&account_number=' + account;
    return this.http.post(balanceUrl, item, httpOptions2);

  }



  CreateCustomer(mobilenumber:any, otp:any)
  {
    let item = { MobileNumber:mobilenumber, OTP:otp}
    return this.CC.AVPostWithParamandreturn2('api/moneyapi','CreateCustomer',item);
  }

 

  checkSenderMobile(mobilenumber:any)
  {
    let item = { MobileNumber:mobilenumber}
    return this.CC.AVPostWithParamandreturn2('api/moneyapi','MatchSenderDetailMobile',item);
  }

  getBenfc(mobilenumber:any)
  {
    let item = { MobileNumber:mobilenumber}
  //  return this.CC.AVPostWithParamandreturn2('api/moneyapi','GetBeneficiaryList',item);
    return this.CC.AVPostWithParamandreturn2('api/moneyapi','GetBeneficiaryByMobile',item);
  }

  AddBeneficiary(mobilenumber:any, bankcode:any, ifsc:any, account:any, name:any, bankname:any)
  {
    debugger;
    let item = { MobileNumber:mobilenumber, BankCode1:bankcode, IFSC1:ifsc, Account1:account, Name1:name, BankName1:bankname}
    return this.CC.AVPostWithParamandreturn2('api/moneyapi','AddBeneficiary',item);
  }


  
  transferMoney(mobilenumber:any, beneficiaryid:any, account:any, amount:any )
  {
    debugger;
   // let item = { MobileNumber:mobilenumber, BenfcId:beneficiaryid, Account1:account, Amount:amount}
  
    let item = { MobileNumber:mobilenumber, BenfID:beneficiaryid, Account1:account, Amount:amount}
  
   return this.CC.AVPostWithParamandreturn2('api/moneyapi','TransferMoney',item);
  }


  getBalance()
  {
    const balanceUrl = 'https://www.pay2all.in/web-api/get-balance?api_token= AkkPUPDJE5hWmZKdzk2msIY9vmrxzJW5p4F71gLghXviceJDDZc6XYNp2pvp';
    
  //  const balanceUrl = 'https://www.pay2all.in/web-api/get-status-client_id?api_token=AkkPUPDJE5hWmZKdzk2msIY9vmrxzJW5p4F71gLghXviceJDDZc6XYNp2pvp&clientid=9306423474';
    return this.http.get(balanceUrl);
  }

    public get userValue(): User {
        return this.userSubject.value;
    }

    
}

































