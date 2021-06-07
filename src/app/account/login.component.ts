import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService , ExternalAPIService} from '../services';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
styleUrls:['login.component.css'] })
export class LoginComponent implements OnInit {
    
    form: FormGroup;
    loading = false;
    submitted = false;
    msg:any;
    productList : any[];
    isType=false;

    constructor(        
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService, private extrnalService:ExternalAPIService) 
        {

        this.form = this.formBuilder.group({
            mobile: ['', Validators.required],
            password: ['', Validators.required]
        });
        }

    ngOnInit() 
    {
       // this.route.params.subscribe(data => {

      //  this.accountService.GetUsers().pipe(first()).subscribe((productList:any) => 
        
       // this.productList = productList),
       //  error:any => {
         //   this.alertService.error(error);
           // this.loading = false;
       // };
        //;
        //this.msg = "Tom";
   // });

        
      //  debugger;
      //  this.accountService.GetUsers().subscribe((data: {}) => 
      
       // {
         //   console.error(data);
           // this.msg = "Tom";
           
                  //  alert('s');
        //  })
            
     }

    // convenience getter for easy access to form fields
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

        //otp

      //  this.extrnalService.AddCustomer(this.f.mobile.value, "Safe", "Pay").subscribe((f:any) =>
      //  {
        //      console.log(f);            
          //    alert(f.message);             
       //})


        
        debugger;
        this.accountService.login(this.f.mobile.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                   
                    // get return url from query parameters or default to home page
                   // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/category';
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin/ad/reportRetailer';
                    this.router.navigateByUrl(returnUrl);
                },
                error: error => {
                   // this.alertService.error(error);

                    window.alert('Invalid Mobile No. or Password');
                    this.loading = false;
                }
            });

            
    }
}