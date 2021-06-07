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
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css']
})
export class BankDetailComponent implements OnInit {

  bankList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={BankID:0};

  selectedBank: any ={bankID:'',bankName:'', holderName:'', accountNo:'',ifsc:'',branchName:'', status:'' };
 
  display: boolean = false;
  displayNew: boolean = false;


  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig){ }

  ngOnInit(): void {
    this.bindBank();
  }

  bindBank()
  {
    this.adminDistributorService.getBankDetails()
    .pipe(first()).subscribe((bankList:any) => this.bankList = bankList);
  }

  editBank(row:any)
  {
    debugger;

      this.selectedBank = row;
      this.display = true;
  }

  addBank()
  {
    debugger;
    
     // this.selectedBank = row;
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
   // if(this.model.BankName!=null)
   // {
         this.adminDistributorService.BankRegister(this.model)
        .subscribe
        (
          (data:any) => 
            {                
                    alert('Bank Added Successfully !');
                    this.displayNew = false;
                  //  this.model = null;
                  this.model.bankName="";
                    this.model.holderName="";

                    this.model.accountNo="";
                    this.model.ifsc="";
                    this.model.branchName="";
                    
                   
                    this.bindBank();
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

    this.adminDistributorService.updateBankDetails(
      this.selectedBank.bankID, this.selectedBank.bankName, this.selectedBank.holderName,this.selectedBank.accountNo, this.selectedBank.ifsc, this.selectedBank.branchName,  this.selectedBank.status).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindBank();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }

  closePopup2()
  {
    
    this.model.bankName="";
    this.model.holderName="";

    this.model.accountNo="";
    this.model.ifsc="";
    this.model.branchName="";
                    
    this.displayNew = false;
   // this.model=null;
  }


}
