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
export class AdminDistributorService {
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

    
 getDistributorDetails()
 {
  
   return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetDistributorDetails');   
   
 }


 updateUserDetails(id:any, firstName:any,location:any,state:any,address:any,pincode:any,city:any,  mobile:any, email:any, outletname:any)
 {
     debugger;
     let item = {Id:id,FirstName:firstName, Location:location,State:state,
      Address:address,PinCode:pincode, City:city, Mobile:mobile,EmailAddress:email, OutletName:outletname}
  
    return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateUserDetails',item);
 }

 

 getUserDetails()
 {
  
   return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetUserDetails');   
   
 }

 saveDistributorList(distname:any, uniquecode:any)
 {
   let item = {DistributorName:distname, UniqueCode:uniquecode}
 
   return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','SaveDistributorList',item);
 //  return this.CC.AVgetWithParam('api/user','CheckDistByCode',item);
 }


  getDistributorsByDistID(distid:any)
  {
    debugger;
    let item = {DistID:distid}
    return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','GetDistributorsByDistID',item);
   
    
  }





  updateSchemeDetails(schemeid:any, schemeName:any,schemeDesc:any,addDate:any,editDate:any)
 {
     debugger;
     let item = {SchemeID:schemeid,SchemeName:schemeName, SchemeDesc:schemeDesc,AddDate:addDate,
      EditDate:editDate}
  
    return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateSchemeDetails',item);
 }

 SchemeRegister(param:any) 
 {
      return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','SchemeRegister',param);
 }

  getSchemeDetails()
  {
   
    return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetSchemeDetails');   
    
  }


  updateCircleDetails(circleid:any, circleName:any)
 {
     debugger;
     let item = {CircleID:circleid,CircleName:circleName}
  
    return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateCircleDetails',item);
 }

 CircleRegister(circleName:any) 
 {
  let item = {CircleName:circleName}
      return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','CircleRegister',item);
 }

  getCircleDetails()
  {
   
    return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetCircleDetails');   
    
  }





  updateNewsDetails(newsid:any, news:any)
 {
     debugger;
     let item = {NewsID:newsid,News:news}
  
    return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateNewsDetails',item);
 }

//  SchemeRegister(param:any) 
//  {
//       return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','SchemeRegister',param);
//  }

  getNewsDetails()
  {
   
    return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetNewsDetails');   
    
  }






  updateCapBalanceDetails(capid:any, username:any,ownername:any, firmname:any, capamount:any)
 {
     debugger;
     let item = {CapID:capid,UserName:username, OwnerName:ownername, FirmName:firmname, CapAmount:capamount}
  
    return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateCapBalanceDetails',item);
 }



  getCapBalanceDetails()
  {
   
    return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetCapBalanceDetails');   
    
  }








  updateSmsDetails(smsid:any, api:any,username:any,password:any,senderid:any, status:any, balance:any)
  {
      debugger;
      let item = {SmsID:smsid,API:api, UserName:username,Password:password,
       SenderID:senderid, Status:status, Balance:balance}
   
     return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateSmsDetails',item);
  }
 
  SmsRegister(param:any) 
  {
      debugger;
       return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','SmsRegister',param);
  }
 
   getSmsDetails()
   {
    
     return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetSmsDetails');   
     
   }






   updateBannerDetails(bannerid:any, bannerdetails:any,bannerurl:any,status:any)
  {
      debugger;
      let item = {BannerID:bannerid,BannerDetails:bannerdetails, BannerURL:bannerurl, Status:status}
   
     return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateBannerDetails',item);
  }
 
  BannerRegister(param:any) 
  {
      debugger;
       return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','BannerRegister',param);
  }
 
   getBannerDetails()
   {
    
     return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetBannerDetails');   
     
   }






   updatePlanDetails(planid:any, planname:any,price:any,status:any)
   {
       debugger;
       let item = {PlanID:planid,PlanName:planname, Price:price, Status:status}
    
      return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdatePlanDetails',item);
   }
  
   PlanRegister(param:any) 
   {
       debugger;
        return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','PlanRegister',param);
   }
  
    getPlanDetails()
    {
     
      return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetPlanDetails');   
      
    }
  
 
 




    updateBankDetails(bankid:any, bankname:any,holdername:any,accountno:any,ifsc:any, branchname:any, status:any)
    {
        debugger;
        let item = {BankID:bankid,BannerDetails:bankname, BannerURL:holdername,AccountNo:accountno,IFSC:ifsc,BranchName:branchname, Status:status}
     
       return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateBankDetails',item);
    }
   
    BankRegister(param:any) 
    {
        debugger;
         return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','BankRegister',param);
    }
   
     getBankDetails()
     {
      
       return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetBankDetails');   
       
     }











     updateOperatorDetails(operatorid:any, operatorname:any,service:any,operatortype:any,minamount:any, maxamount:any, 
      
      minlength:any, maxlength:any, rejectamount, status:any)
     {
         debugger;
         let item = {OperatorID:operatorid,OperatorName:operatorname, Service:service,OperatorType:operatortype,MinAmount:minamount,MaxAmount:maxamount, 
          MinLength:minlength, MaxLength:maxlength, RejectAmount:rejectamount,Status:status}
      
        return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateOperatorDetails',item);
     }
    
     OperatorRegister(param:any) 
     {
         debugger;
          return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','OperatorRegister',param);
     }
    
      getOperatorDetails()
      {
       
        return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetOperatorDetails');   
        
      }
   
  
  


 
 





      updateMobileDetails(mobileid:any, retcommpert:any,admincommpert:any, distcommpert:any)
   {
       debugger;
       let item = {MobileID:mobileid,RetCommPert:retcommpert, AdminCommPert:admincommpert, DistCommPert:distcommpert}
    
      return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateMobileDetails',item);
   }
  
   MobileRegister(param:any) 
   {
       debugger;
        return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','MobileRegister',param);
   }



   updateDthDetails(dthid:any, retcommpert:any,admincommpert:any, distcommpert:any)
   {
       debugger;
       let item = {DthID:dthid,RetCommPert:retcommpert, AdminCommPert:admincommpert, DistCommPert:distcommpert }
    
      return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateDthDetails',item);
   }
  
   DthRegister(param:any) 
   {
       debugger;
        return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','DthRegister',param);
   }
  

   

   updateSessionDetails(sessionid:any, ipaddress1:any,ipaddress2:any,ipaddress3:any)
   {
       debugger;
       let item = {SessionID:sessionid,IPAddress1:ipaddress1, IPAddress2:ipaddress2,IPAddress3:ipaddress3}
    
      return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateSessionDetails',item);
   }
  
   SessionRegister(param:any) 
   {
       debugger;
        return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','SessionRegister',param);
   }
  
    getSessionDetails()
    {
     
      return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetSessionDetails');   
      
    }












    updateApiDetails(apiid:any, apiname:any,apicode:any,username:any, password:any, balance:any)
    {
        debugger;
        let item = {ApiID:apiid,ApiName:apiname, ApiCode:apicode,UserName:username, Password:password, Balance:balance}
     
       return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','UpdateApiDetails',item);
    }
   
    ApiRegister(param:any) 
    {
        debugger;
         return this.CC.AVPostWithParamandreturn2('api/AdminDistributor','ApiRegister',param);
    }
   
     getApiDetails()
     {
      
       return this.CC.AVPostWithoutParamandreturn('api/AdminDistributor','GetApiDetails');   
       
     }
 


}

































