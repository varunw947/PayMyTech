import { Component, OnInit } from '@angular/core';

import {AccountService, AlertService, ExternalAPIService} from '../../services';

import {ReportService} from '../../services/report.service';
import {AdminDistributorService} from '../../services/adminDistributor.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {AccordionModule} from 'node_modules/primeng/accordion';
import {MenuItem} from 'primeng/api';
import {AppConfig} from '../../app.config';
import { User } from '../../models';
import {Guid} from '../../GridComponent/gridcomponent.component';


@Component({
  selector: 'app-mobile-recharge-commission',
  templateUrl: './mobile-recharge-commission.component.html',
  styleUrls: ['./mobile-recharge-commission.component.css']
})
export class MobileRechargeCommissionComponent implements OnInit {

  mobileList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={MobileID:0};

  selectedMobile: any ={mobileID:'',providerID:'', providerName:'',commission:'', retCommPert:'', adminCommPert:'', distCommPert:''  };
 
  display: boolean = false;
  displayNew: boolean = false;


  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,private exAPIService: ExternalAPIService,
    private router: Router,private alertService: AlertService , private config:AppConfig) {

      
      // this.user = this.accountService.userValue;
      // this.accountService.user.subscribe(x => this.user = x);
     
     }

  ngOnInit(): void {
    this.bindMobile();

  }

  bindMobile()
  {
    this.exAPIService.getMobileList()
    .pipe(first()).subscribe((mobileList:any) => this.mobileList = mobileList);
  }


  onChangeEvent1(event: any)
  {
    console.log(event.target.value);

   // this.selectedMobile.retCommPert = 100 - this.selectedMobile.adminCommPert;
  }


  onChangeEvent2(event: any)
  {
    console.log(event.target.value);

   // this.model.retCommPert = 100 - this.model.adminCommPert;
  }


  editMobile(row:any)
  {
    debugger;

      this.selectedMobile = row;
      this.display = true;
  }

  onSubmit(form:any) {
    this.submitted = true;
    this.alertService.clear();

    this.adminDistributorService.updateMobileDetails(
      this.selectedMobile.mobileID, this.selectedMobile.retCommPert, this.selectedMobile.adminCommPert, this.selectedMobile.distCommPert).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindMobile();
        
          alert("Data is updated Successfuly");
        
   })
  }


  addMobile()
  {
    debugger;
    
     // this.selectedScheme = row;
      this.displayNew = true;
     // this.model=null;
  }

  onSubmit2()
  {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.loading = true;
    debugger;
   // if(this.model.SchemeName!=null)
   // {
         this.adminDistributorService.MobileRegister(this.model)
        .subscribe
        (
          (data:any) => 
            {                
                    alert('Mobile Provider Added Successfully !');
                    this.displayNew = false;
                    this.model.ProviderID="";
                    this.model.ProviderName="";
                    this.model.Commission="";
                    this.model.RetCommPert="";
                    this.model.AdminCommPert="";
                    this.model.DistCommPert="";
                    this.bindMobile();
              }

           
        )

      // }
      // else
      // {
      //           alert("Enter All Details");
      // }

        this.loading = false;
      
  }


  closePopup()
  {
    
    this.display = false;

  }

  closePopup2()
  {
                    this.model.ProviderID="";
                    this.model.ProviderName="";
                    this.model.Commission="";
                    this.model.RetCommPert="";
                    this.model.AdminCommPert="";
                    this.model.DistCommPert="";
                    this.displayNew = false;
   
  }

}
