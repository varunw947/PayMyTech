import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../../models';

import { AccountService, AlertService, ExternalAPIService } from '../../services';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-distributorregister',
  templateUrl: './distributorregister.component.html',
  styleUrls: ['./distributorregister.component.css']
})
export class DistributorregisterComponent implements OnInit {
  loading = false;
    submitted = false;
    IsStep1:boolean=true;
    IsStep2:boolean=false;
    IsStep3:boolean=false;

    IsStep4:boolean=false;
    model:any={DistID:0};
 
    DistributorList:any=[];
 

   // distid:any

  constructor(private route: ActivatedRoute, 
    private router: Router,private accountService: AccountService,private userService:UserService,
    private alertService: AlertService, private extrnalService:ExternalAPIService) { }

  ngOnInit(): void {

this.bindDistributorList();
  }

  bindDistributorList()
  {
    
      this.userService.getDistributorDetails().subscribe((e:any) =>
      {
         console.log(e);
          debugger;
          this.DistributorList =e;
          
        })
  }

  

  onNext(form:any)
  {
    this.IsStep1=false;
    this.IsStep2 =false;
    this.IsStep3 =true;
    this.IsStep4 =false;
  }
    
  Step2(form:any){     
     
        this.loading=true;
        this.IsStep1=false;
        this.IsStep2 =false;
        this.IsStep3 =false;
        this.IsStep4 =true;

        this.extrnalService.ConfirmOTP(this.model.Mobile, this.model.OTPCode).subscribe((f:any)=>{
          console.log(f);
          window.alert(f.message);
        })

        // debugger;
        // this.userService.checkOTPCode(this.model).subscribe((data:any)=>{   
        //  debugger;    
        //      if(data.message == "MATCHED"){ 
        //       this.IsStep1=false;
        //       this.IsStep2 =false;
        //       this.IsStep3 =true;              
             
        //      } else if(data.message == "EXPIRED"){
        //       alert("This code has now expired.  Please click below to request a new registration code.");
        //      }else{
        //       alert("This is an invalid code. Please check your registration email and try again.");
        //      }

               this.loading =false;             
        }
        //),error=>console.log(error);
       
   
  Register(form:any){
    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        this.loading = true;
        debugger;
        this.userService.DistRegister(this.model)
            .pipe(first())
            .subscribe({
                next: (data:any) => {

                    debugger;
                    if(data.message=="Exists")
                    {
                        window.alert('Mobile No. Already Exists');
                       // this.alertService.error('Mobile No. Already Exists');    
                    }else{
                        alert('Registration successful');
                        this.router.navigate(['../login'], { relativeTo: this.route });

                    }

                    this.loading = false;
                }
                ,
                error: error => {
                  //  this.alertService.error(error);
                    window.alert(error);
                    this.loading = false;
                }
            });

  }

  ReGenerateCodeViaSMS(){

    this.extrnalService.AddCustomer(this.model.Mobile, "Safe", "Pay").subscribe((f:any) =>
    {
      debugger;
                 
          alert("OTP is Resent");             
   })
   
   
  //  this.userService.resendCode(this.model).subscribe((data:any)=>{   
  //     debugger;  
  //           alert(data.message); 
  //    }),error=>console.log(error);
    

  }

  onSubmit(form:any) {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    let isValid=true; 
    if(this.model.DistID==0){
        form.controls["distributorname"].markAsPristine();
        form.controls["distributorname"].markAsTouched();
        form.controls["distributorname"].setErrors({'incorrect': true});
        isValid =false;
    }

   // this.loading = true;
    debugger;
    if(isValid)
    {
      this.model.DistID= parseInt(this.model.DistID);
      this.userService.checkCode(this.model)  
      .pipe(first())
         .subscribe({
             next: (data:any) => {
 
                 debugger;
                // if(data.message == "Success")
                // {
                  if(data.message == "Exists")
                  {
                    alert("It looks like you have already registered for the PayMyTech programme.  Please login to your account now");
                                    
                  }  
                  else
                  {
                    this.extrnalService.AddCustomer(this.model.Mobile, "Safe", "Pay").subscribe((f:any) =>
        {
          debugger;
              console.log(f);            
              alert(f.message);             
       })
                    this.IsStep1=false;
                   
                    this.IsStep4 =false;
                    this.IsStep2 =true;               
                  this.IsStep3 =false;

                 //this.IsStep4 =true;
                 // this.IsStep2 =false;               
                 // this.IsStep3 =false;
                  } 
                 
                 
                  //}
                //  else{
                    
                  //  alert("Sorry! We do not recognise your detail. Please Try Again");
                 // }
 
                
             }
             ,
             error: error => {
               
                 window.alert(error);
                 this.loading = false;
             }
         });
    }
    
}

}
