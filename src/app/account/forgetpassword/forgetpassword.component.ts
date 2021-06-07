import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService, ExternalAPIService } from '../../services';



import { first } from 'rxjs/operators';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  isForget = false;
  isOTP = false;

  Password : any;
  OTP:any;
  
  ConfirmPassword:any;

  Mobile: any;

  commList:any;
  g:any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService) { }


  ngOnInit(): void {

    this.isForget = true;
    this.isOTP = false;

  //  this.bindCommission();
  }

  bindCommission()
  {
    
    // this.accountService.getCommReport().subscribe( e => {
    //   console.log(e);
    //   this.commList =e.commission;
      
    // })

  }
  

  get f() { return this.form.controls; }

  

  onResetPassword() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();    

    this.accountService.resetPassword(this.Mobile, this.Password).subscribe((f:any) =>
     {
       
           console.log(f);
         
           alert(f.message);
         
    })
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '../login';
    this.router.navigateByUrl(returnUrl);     
    }

  onSubmit() 
  {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();    

     this.accountService.forgetPassword(this.Mobile)
    // .pipe(first())
            .subscribe
            (
                  { 
                      next: 
                      (data:any) => 
                      {

                          debugger;
                          if(data.message=="Exists")
                          {
                             this.accountService.sendOTP(this.Mobile).subscribe((f:any) =>
                             {
                                console.log(f);
                                window.alert("OTP sent Successfully");
                             
                            })
                                    
                              this.isForget = false;
                              this.isOTP = true;
                                           
                          }
                          else
                          {
                      
                              window.alert('This Mobile Number is not in our Database');
                          }
             
                      },
                      error: error => 
                      {
                            this.alertService.error(error);
                            this.loading = false;
                      }
                }
                );
        
  }

 
      
     
    }

