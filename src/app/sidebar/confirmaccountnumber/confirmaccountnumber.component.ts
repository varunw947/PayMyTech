import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService, ExternalAPIService } from '../../services';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-confirmaccountnumber',
  templateUrl: './confirmaccountnumber.component.html',
  styleUrls: ['./confirmaccountnumber.component.css']
})
export class ConfirmaccountnumberComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  BankId:any;
  bankList:any;
  tempList:any;

  MobileNumber : any;
  BankCode:any;
  IFSC:any;
  Account:any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService) { }

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

    this.exAPIService.ConfirmAccountNumber(this.MobileNumber, this.BankCode, this.IFSC, this.Account).subscribe((f:any) =>
    {
          console.log(f);
         
          alert(f.message);
         
   })
     
    }

}
