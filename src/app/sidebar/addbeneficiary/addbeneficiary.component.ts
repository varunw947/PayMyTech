import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService, ExternalAPIService } from '../../services';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-addbeneficiary',
  templateUrl: './addbeneficiary.component.html',
  styleUrls: ['./addbeneficiary.component.css']
})
export class AddbeneficiaryComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  msg=false;

  BankId:any;
  bankList:any;
  bankData:any;
  tempList:any;
  MobileNumber : any;
  BankCode:any;
  IFSC:any;
  Account:any;
  Name:any;
  BankName:any;

  bnf_id:any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService) { 

     // this.bindBankList();
    }

  ngOnInit(): void {

    this.bindBankList();

    this.exAPIService.getBankDetails().subscribe((e:any) =>
    {
       console.log(e);
        debugger;
        this.bankList =e.banks;
        
      })

     
  }

  bindBankList()
  {
  //  this.accountService.getBankList()
  // .pipe(first()).subscribe((banks:any) => this.banks = banks);

    debugger;
   this.accountService.getBankList().subscribe(categoryData => {
     this.bankData = categoryData;
   });
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

  onSubmit() 
  {
    debugger;
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();    

    //this.loading = true;

    this.exAPIService.AddBeneficiary(this.MobileNumber, this.BankCode, this.IFSC, this.Account, this.Name, this.BankName).subscribe((f:any) =>
    {
          console.log(f);
         
          alert(f.message);

          this.msg= true;

          this.bnf_id = f.beneficiary_id;


         
   })

   const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/money';
   this.router.navigateByUrl(returnUrl);
     
    }


}
