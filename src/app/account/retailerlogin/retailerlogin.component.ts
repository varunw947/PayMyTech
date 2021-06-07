import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../../services';

@Component({
  selector: 'app-retailerlogin',
  templateUrl: './retailerlogin.component.html',
  styleUrls: ['./retailerlogin.component.css']
})
export class RetailerloginComponent implements OnInit {

  form: FormGroup;
    loading = false;
    submitted = false;
    msg:any;
    productList : any[];

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) {
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

    

    this.loading = true;
    debugger;
    this.accountService.retailerLogin(this.f.mobile.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: () => {
               
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/category';
              //  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/category/1';
                this.router.navigateByUrl(returnUrl);
            },
            error: error => {
               // this.alertService.error(error);
               alert('Not Registered as Retailer');
                this.loading = false;
            }
        });

        
}

}
