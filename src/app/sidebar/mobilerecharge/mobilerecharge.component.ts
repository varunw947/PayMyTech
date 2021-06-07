import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService, ExternalAPIService } from '../../services';

import { first } from 'rxjs/operators';

import {Circle} from '../circle';
import { pid } from 'process';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mobilerecharge',
  templateUrl: './mobilerecharge.component.html',
  styleUrls: ['./mobilerecharge.component.css']
})
export class MobilerechargeComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  isPlan = false;
  spresp:any;
  display: boolean = false;
status:any;
transid:any;
  pvid:any;
  TransactionType:any;

  ModuleID:any;

  mob:any;

  circleList:any;

  bankList:any;

  msg:any;

 providerList:any;

 planList:any;

 commission:any;

 operatorType:any;
 showLink:any;

 Mobile:any;
 Amount:any;

 BankId:any;
 Profit:any;

 RetCommPert:any;
 AdminCommPert:any;
 DistCommPert:any;


  CircleId:any;
  prvid:any;

  ProviderId:any;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService,private http: HttpClient) {

    //   this.form = this.formBuilder.group({
    //     mobilenumber: ['', Validators.required],
    //     amount: ['', Validators.required]
    // });
     }




  ngOnInit(): void {

   
    // this.exAPIService.getCircles().subscribe(( e:any) => {
      // console.log(e);
      // this.circleList =e.circles;
     
    // })

this.bindProviders();

this.bindPlans(1);
this.display = false;
//this.isPlan = false;
this.showLink = true;
    
  }

 
  getAmount(report:any)
  {
    this.display = false;
    this.Amount = report.amount;
    this.showLink = true;
  }

 

  bindProviders()
  {
    

    this.exAPIService.getMobileList().subscribe(categoryData => {
      this.providerList = categoryData;
    });


    // this.exAPIService.getProviders().subscribe((e:any) => 
   
    // {
    //  console.log(e);
    //   let pList = e.providers.filter((item:any) => {

    //     return item.service_id == 1
    //   })
    //   this.providerList =pList;
      
    // })
  
  }

  showPlan()
  {
    this.display = true;
     // this.isPlan = true;
      this.showLink = false;
  }

  getProviderName(pv: any)
{
  
   this.operatorType = pv.target.options[pv.target.selectedIndex].text; 

   this.pvid = pv.target.options[pv.target.selectedIndex].value;

  
//this.prvid = pv.providerID;
  this.bindPlans(this.pvid);

  this.fetchCommission(this.pvid);
 
}

fetchCommission(prid:any)
{

  this.accountService.getCommission(parseInt(prid))
  
   .pipe(first()).subscribe
   (
     (e:any) =>
   {
   //this.commission = e;
   debugger;
   this.Profit = e[0].commission;
   this.RetCommPert = e[0].retCommPert;
   this.AdminCommPert = e[0].adminCommPert;
   this.DistCommPert = e[0].distCommPert;

   }
   );

}

bindPlans(pid:any)
{
  
  if(pid=="1" || pid=="88" || pid=="2" || pid=="7" || pid =="8")
  {
  this.accountService.getPlans(parseInt(pid))
 // this.accountService.getPlans(pid)
  .pipe(first()).subscribe((categoryList:any) => this.planList = categoryList);
  
  }
  else
  {
    this.accountService.getPlans(7)
    .pipe(first()).subscribe((categoryList:any) => this.planList = categoryList);
  }

}

 

// convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  getProvider(item:any)
  {
   
      alert(item);

   // alert(MobileId);

  }

  onSubmit() 
  {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        this.exAPIService.Recharge(this.ProviderId, parseFloat(this.Amount) , this.Mobile,this.operatorType).subscribe
        (
              (f:any) =>
              {
                    console.log(f);
                    debugger;
                    this.status = f.status;
                    window.alert(f.message);
                    this.TransactionType = "Mobile Recharge";
                    this.ModuleID = 1;

                    this.exAPIService.SaveRechargeTranx(this.ProviderId, parseFloat(this.Amount) , this.Mobile,this.operatorType,this.TransactionType, this.status, this.Profit, this.ModuleID, this.RetCommPert, this.AdminCommPert, this.DistCommPert).subscribe((f:any) =>
                    {
       
                          console.log(f);
                    });

                   
               }, 
               error => 
               {
                    console.log(error.message); //error you get from server     
               }
          );
    
   
// debugger;
//  this.exAPIService.SaveRechargeTranx(this.ProviderId, parseFloat(this.Amount) , this.Mobile,this.operatorType, this.status, this.Profit).subscribe((f:any) =>
//      {
       
//        console.log(f);
     
                
//      });

    }
            



  
}


