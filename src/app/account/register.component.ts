import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../services';

@Component({ templateUrl: 'register.component.html',
styleUrls:['login.component.css'] })
export class RegisterComponent implements OnInit {
   // form: FormGroup;
    loading = false;
    submitted = false;

    FirstName:any;
    LastName:any;
    Mobile:any;
    EmailAddress:any;
    Password:any;
    ConfirmPassword:any;
    Username:any;
    OTP:any;
  
  

    constructor( private route: ActivatedRoute, 
        private router: Router,private accountService: AccountService,
        private alertService: AlertService) 
    {
       
     }

    ngOnInit() 
    {       
       
    }

    // convenience getter for easy access to form fields
   // get f() { return this.form.controls; }

    onSubmit()
     {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        // if (this.form.invalid) {
        //     return;
        // }

       // this.loading = true;
        debugger;
        this.accountService.register(this.Username, this.FirstName, this.LastName, this.Mobile, this.EmailAddress, this.Password)
            .pipe(first())
            .subscribe({
                next: (data:any) => {

                    debugger;
                    if(data.message=="Exists")
                    {
                        window.alert('Mobile No. Already Exists');
                       // this.alertService.error('Mobile No. Already Exists');    
                    }else{
                        this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                        this.router.navigate(['../login'], { relativeTo: this.route });

                    }

                   
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}