import { Component, OnInit } from '@angular/core';

import {AccountService, AlertService} from '../../services';

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
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  apiList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={ApiID:0};

  selectedApi: any ={apiID:'',apiName:'', apiCode:'', userName:'', password:'', balance:''};
 
  display: boolean = false;
  displayNew: boolean = false;


  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig){ }

  ngOnInit(): void {
    this.bindApi();
  }

  bindApi()
  {
    this.adminDistributorService.getApiDetails()
    .pipe(first()).subscribe((apiList:any) => this.apiList = apiList);
  }

  editApi(row:any)
  {
    debugger;

      this.selectedApi = row;
      this.display = true;
  }

  addApi()
  {
    debugger;
    
     // this.selectedApi = row;

      this.displayNew = true;
  }

  get f() { return this.form.controls; }

 // get f1() { return this.form2.controls; }

  onSubmit2()
  {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.loading = true;
    debugger;
   // if(this.model.ApiName!=null)
   // {
         this.adminDistributorService.ApiRegister(this.model)
        .subscribe
        (
          (data:any) => 
            {                
                    alert('API Added Successfully !');
                    this.displayNew = false;
                  //  this.model = null;
                  this.model.userName="";
                    this.model.apiName="";

                    this.model.apiCode="";
                    this.model.password="";
                    this.model.balance="";
                    
                   
                    this.bindApi();
              }

           
        )

      // }
      // else
      // {
      //           alert("Enter All Details");
      // }

        this.loading = false;
      
  }


  onSubmit(form:any) {
    this.submitted = true;
    this.alertService.clear();

    this.adminDistributorService.updateApiDetails(
      this.selectedApi.apiID, this.selectedApi.apiName, this.selectedApi.apiCode,
      this.selectedApi.userName, this.selectedApi.password, this.selectedApi.balance)
      .subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindApi();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }

  closePopup2()
  {
    
    this.model.userName="";
                    this.model.apiName="";

                    this.model.apiCode="";
                    this.model.password="";
                    this.model.balance="";
                    
                    this.alertService.clear();
    this.displayNew = false;
   // this.model=null;
  }


}
