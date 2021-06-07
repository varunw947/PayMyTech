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
  selector: 'app-dth-recharge-commission',
  templateUrl: './dth-recharge-commission.component.html',
  styleUrls: ['./dth-recharge-commission.component.css']
})
export class DthRechargeCommissionComponent implements OnInit {

  dthList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={DthID:0};

  selectedDth: any ={dthID:'',providerID:'', providerName:'',commission:'', retCommPert:'', adminCommPert:'', distCommPert:''  };
 
  display: boolean = false;
  displayNew: boolean = false;


  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,private exAPIService: ExternalAPIService,
    private router: Router,private alertService: AlertService , private config:AppConfig) {

      
      // this.user = this.accountService.userValue;
      // this.accountService.user.subscribe(x => this.user = x);
     
     }

  ngOnInit(): void {
    this.bindDth();

  }

  bindDth()
  {
    this.exAPIService.getDthList()
    .pipe(first()).subscribe((dthList:any) => this.dthList = dthList);
  }


  onChangeEvent1(event: any)
  {
    console.log(event.target.value);

   // this.selectedDth.retCommPert = 100 - this.selectedDth.adminCommPert;
  }


  onChangeEvent2(event: any)
  {
    console.log(event.target.value);

  //  this.model.retCommPert = 100 - this.model.adminCommPert;
  }


  editDth(row:any)
  {
    debugger;

      this.selectedDth = row;
      this.display = true;
  }

  onSubmit(form:any) {
    this.submitted = true;
    this.alertService.clear();

    this.adminDistributorService.updateDthDetails(
      this.selectedDth.dthID, this.selectedDth.retCommPert, this.selectedDth.adminCommPert, this.selectedDth.distCommPert).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindDth();
        
          alert("Data is updated Successfuly");
        
   })
  }


  addDth()
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
         this.adminDistributorService.DthRegister(this.model)
        .subscribe
        (
          (data:any) => 
            {                
                    alert('Dth Provider Added Successfully !');
                    this.displayNew = false;
                    this.model.ProviderID="";
                    this.model.ProviderName="";
                    this.model.Commission="";
                    this.model.RetCommPert="";
                    this.model.AdminCommPert="";
                    this.bindDth();
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
                    this.displayNew = false;
   
  }


}
