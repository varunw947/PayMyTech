import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService, ExternalAPIService } from '../../services';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-moneytransfer',
  templateUrl: './moneytransfer.component.html',
  styleUrls: ['./moneytransfer.component.css']
})
export class MoneytransferComponent implements OnInit {

  form: FormGroup;

  form1: FormGroup;
  loading = false;
  submitted = false;

  showBenfList = false;

  AddSender=false;
  showSbmt = false;

  isCreate = false;
  isAdd = false;
  isConfirm = false;

  isAddBenf = false;

  Amount:any;
 mob:any;

  Account1:any;

  BeneficiaryID:any;
  BenfID:any;
  BenfcId:any;

  BankId:any;
  bankList:any;
  bnfcList:any;
  bnfcList1:any;
  tempList:any;

  FirstName:any;
  LastName:any;

  BankName1:any;

  
  BankName:any;
  AccR:any;
  bnf_id:any;

  BankId1:any;
  BankCode1:any;
  IFSC1:any;
 // Account1:any;
  Name1:any;
  bankData:any;
 
 

  MobileNumber : any;
  OTP:any;

  

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService)
    {
      this.AddSender=false;
      this.showSbmt=true;
      this.isAddBenf = false;
      this.showBenfList = false;

     // this.isCreate = true;
     // this.isAdd = false;
     // this.isConfirm = false;
     }

  ngOnInit(): void {

//this.bindBankDetails();

this.bindBankList();
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

  showAddCust()
  {
    this.isCreate = false;
    this.isAdd = true;
    this.isConfirm = false;
  }


  bindBankDetails()
  {

  
  this.exAPIService.getBankDetails().subscribe((e:any) =>
  {
     console.log(e);
      debugger;
      this.bankList =e.banks;
      
    })
  }

  getBankDetails(bank_code:any, ifsc:any, bank_name:any)
  {
    this.BankCode1 = bank_code;
    this.IFSC1 = ifsc;
    
    this.BankName1 = bank_name;
  }

  changeBank(e:any) {
    debugger;
    const value = e.target.value;

    this.BankId1 = value;
    this.exAPIService.getBankDetails().subscribe((f:any) =>
    {
       console.log(f);
       let pList = f.banks.filter((item:any) => {

        return item.id == value;
      })
      this.tempList =pList;
      this.BankCode1 = this.tempList[0].bank_code;
      this.IFSC1 = this.tempList[0].ifsc;
        
      })

    

  }

  showAddBenf()
  {
    if(this.MobileNumber==null)
    {
      alert('Please Enter Sender Mobile Number First');
    }
    else
    {
      this.isAddBenf = true;
    }
  }

  hideAddBenf()
  {
    this.isAddBenf = false;
  }

  onAddBenf()
  {
    debugger;
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();    

    //this.loading = true;

    this.exAPIService.AddBeneficiary(this.MobileNumber, this.BankCode1, this.IFSC1, this.Account1, this.Name1, this.BankName1).subscribe((f:any) =>
    {
          console.log(f);
         
         // alert(f.message);
          window.alert("Beneficiary is added Successfully");
        //  this.msg= true;

        this.getBenfList(); 

          this.bnf_id = f.beneficiary_id;

          this.BankCode1="";
          this.IFSC1 = "";
          this.Account1 = "", 
          this.Name1 = "";

   })

   
   this.isAddBenf = false;


  }
  onChangeEvent(event: any)
  {

    debugger;
    console.log(event.target.value);
  
 this.exAPIService.getBenfc(this.MobileNumber).subscribe((e:any) =>
  {
     console.log(e);
      debugger;
      this.bnfcList =e.data;
      
    })
  }

  getBenfList()
  {
    this.exAPIService.getBenfc(this.MobileNumber).subscribe((e:any) =>
    {
       console.log(e);
        debugger;
      //  this.bnfcList1 =e.data;

        this.bnfcList1 =e;
        
      })
  }

  onChangeEvent1(event: any)
  {

    debugger;
    console.log(event.target.value);

    this.exAPIService.checkSenderMobile(this.MobileNumber).subscribe
    (
      (data:any) =>
      {
        if(data.message=="Mob Exists")
        {
          window.alert('Sender already exists');
          this.AddSender=false;
          this.showSbmt=true;  
          this.showBenfList = true;
          this.getBenfList(); 

          
        }
        else
        {
          window.alert('Add Sender Details');
          this.AddSender=true;
          this.showSbmt=false;
          this.bnfcList1 = null;
           this.showBenfList = false;

           this.exAPIService.AddCustomer(this.MobileNumber, this.FirstName, this.LastName).subscribe((f:any) =>
           {
                 console.log(f);
              
                 alert(f.message);
              
          })
        }
      }
    )
    
  
   }

   cancel()
   {
    this.AddSender=false;
    this.showSbmt=true;
    this.MobileNumber = "";
    this.bnfcList1 = null;

   }


 // get f() { return this.form.controls; }

 // get f1() { return this.form1.controls; }

  changeBeneficiary(e:any)
  {
    const value = e.target.value;

    this.exAPIService.getBenfc(this.MobileNumber).subscribe((f:any) =>
  {
     console.log(f);
     let pList = f.data.filter((item:any) => {

      return item.beneficiaryid == value;
    })

    this.tempList =pList;
    this.BankName = this.tempList[0].bank;
    this.AccR = this.tempList[0].account;
      
    })

  }

  clickCreateCustomer()
  {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/create_customer';
        this.router.navigateByUrl(returnUrl);
  }

  clickAddBeneficiary()
  {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/add_beneficiary';
        this.router.navigateByUrl(returnUrl);
  }

  getBeneficiary(bnfc1:any)
  {
    // this.BenfcId =   bnfc1.beneficiaryid;
    // this.Account = bnfc1.account;
    debugger;
    this.BenfID =   bnfc1.benfId;
    this.Account1 = bnfc1.account1;
  }

  onSubmit1() 
  {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();  
    
    this.exAPIService.SaveSenderDetails(this.MobileNumber, this.FirstName, this.LastName, this.OTP).subscribe((f:any) =>
     {
           console.log(f);
         
           alert(f.message);
         
    })

  }

  verifyAccount() 
  {
   // this.submitted = true;

    // reset alerts on submit
   // this.alertService.clear();  
    debugger;
    this.exAPIService.ConfirmAccountNumber(this.MobileNumber, this.BankCode1, this.IFSC1, this.Account1).subscribe((f:any) =>
     {
           console.log(f);
         
           alert(f.message);
         
    })

  }

  
  onTransfer() {
    this.submitted = true;

    // reset alerts on submit
   // this.alertService.clear();    
   // alert("Due to some Technical Issues, Money Transfer Service will be Deactivated for 2 days");
    
    //debugger;
   this.exAPIService.transferMoney(this.MobileNumber, this.BenfID.value, this.Account1, this.Amount)
   .subscribe((f:any) =>
    {
          console.log(f);
         
        //  alert(f.message);

          alert("Due to some modifications in API, Money Transfer Service will be Deactivated for 2 days");
   })
     
    }

   
  }



