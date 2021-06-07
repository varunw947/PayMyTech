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
  selector: 'app-sms-detail',
  templateUrl: './sms-detail.component.html',
  styleUrls: ['./sms-detail.component.css']
})
export class SmsDetailComponent implements OnInit {

  smsList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={SmsID:0};

  selectedSms: any ={smsID:'',api:'', userName:'',password:'' , senderID:'', status:'',balance:'' };
 
  display: boolean = false;
  displayNew: boolean = false;


  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig){ }

  ngOnInit(): void {
    this.bindSms();
  }


  bindSms()
  {
    this.adminDistributorService.getSmsDetails()
    .pipe(first()).subscribe((smsList:any) => this.smsList = smsList);
  }

  editSms(row:any)
  {
    debugger;

      this.selectedSms = row;
      this.display = true;
  }

  addSms()
  {
    debugger;
    
     // this.selectedSms = row;
      this.displayNew = true;
      this.model.status="Active";
     // this.model=null;
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
   // if(this.model.SmsName!=null)
   // {
         this.adminDistributorService.SmsRegister(this.model)
        .subscribe
        (
          (data:any) => 
            {                
                    alert('Sms Added Successfully !');
                    this.displayNew = false;
                  //  this.model = null;
                  this.model.api="";
                    this.model.userName="";
                    this.model.password="";
                    this.model.senderID="";
                    this.model.balance="";
                    this.bindSms();
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

    this.adminDistributorService.updateSmsDetails(
      this.selectedSms.smsID, this.selectedSms.api, this.selectedSms.userName,
      this.selectedSms.password, this.selectedSms.senderID,this.selectedSms.status, this.selectedSms.balance).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindSms();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }

  closePopup2()
  {
    this.model.api="";
                    this.model.userName="";
                    this.model.password="";
                    this.model.senderID="";
                    this.model.balance;
    this.displayNew = false;
   // this.model=null;
  }


}
