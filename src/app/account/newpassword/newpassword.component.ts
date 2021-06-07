import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService, ExternalAPIService } from '../../services';

import { first } from 'rxjs/operators';
@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  Password : any;
  OTP:any;
  Mobile:any;
  ConfirmPassword:any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.Mobile = data.mob;

 
  });
  }

  get f() { return this.form.controls; }

  onSubmit() {
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

}
