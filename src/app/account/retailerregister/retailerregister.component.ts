import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../../models';

import { AccountService, AlertService, ExternalAPIService } from '../../services';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-retailerregister',
  templateUrl: './retailerregister.component.html',
  styleUrls: ['./retailerregister.component.css']
})
export class RetailerregisterComponent implements OnInit {
  loading = false;
    submitted = false;
    IsStep1:boolean=true;
    IsStep2:boolean=false;
    IsStep3:boolean=false;
    IsStep4:boolean=false;
    model:any={DistID:0};
 
    DistributorList:any=[];
 

  constructor(private route: ActivatedRoute, 
    private router: Router,private accountService: AccountService,
    private alertService: AlertService, private userService:UserService, private extrnalService:ExternalAPIService) { 
    
    }

  ngOnInit(): void {
    this.bindDistributorList();
  }

  bindDistributorList()
  {
    
      this.userService.getDistributorDetailsForRetailer().subscribe((e:any) =>
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
      //  this.userService.checkRetailerOTPCode(this.model).subscribe((data:any)=>{   
      //   debugger;    
      //       if(data.message == "MATCHED"){ 
      //        this.IsStep1=false;
      //        this.IsStep2 =false;
      //        this.IsStep3 =true;

             
            
      //       } else if(data.message == "EXPIRED"){
      //        alert("This code has now expired.  Please click below to request a new registration code.");
      //       }else{
      //        alert("This is an invalid code. Please check your registration email and try again.");
      //       }
             this.loading =false;
            
     //  }),error=>console.log(error);
      
    // }
    
   }

 

 Register(form:any){
   this.submitted = true;

       // reset alerts on submit
       this.alertService.clear();

       this.loading = true;
       debugger;
       this.userService.RetailerRegister(this.model)
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
               },
               error: error => {
                  // this.alertService.error(error);
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
     
     this.userService.checkRetailerCode(this.model)  
     .pipe(first())
        .subscribe({
            next: (data:any) => {

                debugger;
                if(data.message == "Success")
                {
                 this.IsStep1=false;
                 this.IsStep4 =false;
                 this.IsStep2 =true;
                 this.IsStep3 =false;

               //  this.IsStep4 =true;
                // this.IsStep2 =false;
                // this.IsStep3 =false;


                 this.extrnalService.AddCustomer(this.model.Mobile, "Safe", "Pay").subscribe((f:any) =>
                 {
                   debugger;
                   console.log(f);
                   window.alert(f.message);
                                 
                })
                   
                 } 
                 
                 else  if(data.message == "Mob Exists"){
                  alert("Mobile No. is already Registered");
                
                
                 }else{
                   alert("EmailID is already Registered");
                 }

               
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
