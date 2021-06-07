import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService, ExternalAPIService } from '../../services';

import { first } from 'rxjs/operators';


@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  providerList:any;
  ModuleID:any;

  status:any;
  Profit:any;
  TransactionType:any;
  Mobile:any;
  pvid:any;

 CustomerNumber:any;
 Amount:any;

 operatorType:any;

  
  ProviderId:any;

  MobileNumber : any;

  EmailID:any;

  RetCommPert : any;
  AdminCommPert : any;

  DistCommPert:any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService) { }

  ngOnInit(): void {

    this.exAPIService.getGasList().subscribe(categoryData => {
      this.providerList = categoryData;
    });


    // this.exAPIService.getProviders().subscribe((e:any) => 
   
    // {
    //  console.log(e);
    //   let pList = e.providers.filter((item:any) => {

    //     return item.service_id == 8
    //   })
    //   this.providerList =pList;
      
    // })
  }

  getProviderName(pv: any)
  {
    debugger;
     this.operatorType = pv.target.options[pv.target.selectedIndex].text; 
     this.pvid = pv.target.options[pv.target.selectedIndex].value;

     this.fetchCommission(this.pvid); 
  }

  fetchCommission(prid:any)
  {
  
    this.accountService.getGasCommission(parseInt(prid))
    
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

  get f() { return this.form.controls; }

  getProvider(item:any)
  {
    debugger;
      alert(item);
  }

  onSubmit() 
  {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.exAPIService.GasBill(this.ProviderId, this.Amount, this.CustomerNumber, this.MobileNumber, this.EmailID, this.operatorType).subscribe
    (
      (f:any) =>
      {
            console.log(f);
            debugger;
            this.status = f.status;
            window.alert(f.message);
            this.TransactionType = "Gas Bill";

            this.ModuleID = 7;

            this.Mobile = this.CustomerNumber;

            this.exAPIService.SaveRechargeTranx(this.ProviderId, parseFloat(this.Amount) , this.Mobile,this.operatorType,this.TransactionType , this.status, this.Profit, this.ModuleID, this.RetCommPert, this.AdminCommPert, this.DistCommPert).subscribe((f:any) =>
            {

                  console.log(f);
            });

           
       }, 
       error => 
       {
            console.log(error.message); //error you get from server     
       });   
    }

}
