import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../../services';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  msg:any;

  constructor(        
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) 
    {

    this.form = this.formBuilder.group({
        mobile: ['', Validators.required],
        password: ['', Validators.required]
    });
    }

  ngOnInit(): void {
  }

  get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        // if (this.form.invalid) {
        //     return;
        // }

        this.loading = true;
debugger;

this.accountService.adminLogin(this.f.mobile.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                   
                    // get return url from query parameters or default to home page
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin/ad/dashboard';
                  //  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/category/1';
                    this.router.navigateByUrl(returnUrl);
                },
                error: error => {
                   // this.alertService.error(error);

                    window.alert('Invalid Mobile No. or Password');
                    this.loading = false;
                }
            });

      //  if(this.f.mobile.value == "9306423474" && this.f.password.value == "Jaimatadi@123")
        //{
       
          //          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin/home';
                  
            //        this.router.navigateByUrl(returnUrl);
      //  }
       // else
       // {
                  

                 //   window.alert('Invalid Mobile No. or Password');
                   // this.loading = false;
               // }
            

            
    
              }
}
