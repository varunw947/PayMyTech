import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoneytransferComponent } from '../moneytransfer/moneytransfer.component';

import { AccountService, AlertService, ExternalAPIService } from '../../services';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css'],

  template: `<div>
    <p>OK</p>
  
    <button (click)="one.showAddCust()">Call Component One Method</button>
    <app-moneytransfer #one></app-moneytransfer>
   
  </div>`,
})
export class CreatecustomerComponent implements OnInit {


  form: FormGroup;
  loading = false;
  submitted = false;

  FirstName:any;
  LastName:any;

  MobileNumber2 : any;
  OTP:any;

  isCreate = false;

  isCustomer= false;
  isAddCustomer = false;
  isConfirmAccount = false;
 

  MobileNumber : any;


  BankId:any;
  bankList:any;
  tempList:any;

  MobileNumber3 : any;
  BankCode:any;
  IFSC:any;
  Account:any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService) {

      this.isCustomer = true;
      this.isAddCustomer = false;
      this.isConfirmAccount = false;
     }

  ngOnInit(): void {
    this.exAPIService.getBankDetails().subscribe((e:any) =>
    {
       console.log(e);
       this.bankList =e.banks;
        
      })
  }

  get f() { return this.form.controls; }

  changeBank(e:any) {
    debugger;
    const value = e.target.value;

    this.BankId = value;
    this.exAPIService.getBankDetails().subscribe((f:any) =>
    {
       console.log(f);
       let pList = f.banks.filter((item:any) => {

        return item.id == value;
      })
      this.tempList =pList;
      this.BankCode = this.tempList[0].bank_code;
      this.IFSC = this.tempList[0].ifsc;
        
      })

    

  }


  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();    

    

     this.exAPIService.AddCustomer(this.MobileNumber, this.FirstName, this.LastName).subscribe((f:any) =>
     {
           console.log(f);
         
           alert(f.message);
         
    })

  this.isCustomer = false;
  this.isAddCustomer = true;
  this.isConfirmAccount = false;
     
    }


    onSubmit2() {
      this.submitted = true;
  
      // reset alerts on submit
      this.alertService.clear();    
  
      //this.loading = true;
  
      this.exAPIService.CreateCustomer(this.MobileNumber, this.OTP).subscribe((f:any) =>
      {
            console.log(f);
           
            alert(f.message);
           
     })

     this.isCustomer = false;
     this.isAddCustomer = false;
     this.isConfirmAccount = true;
       
      }


      onSubmit3() {
        this.submitted = true;
    
        // reset alerts on submit
        this.alertService.clear();    
    
        this.exAPIService.ConfirmAccountNumber(this.MobileNumber, this.BankCode, this.IFSC, this.Account).subscribe((f:any) =>
        {
              console.log(f);
             
              alert(f.message);
             
       })

       this.isCustomer = true;
     this.isAddCustomer = false;
     this.isConfirmAccount = false;
         
        }
    


}
