import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService } from '../../services';

import { first } from 'rxjs/operators';

import 'bootstrap/dist/js/bootstrap.bundle';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService) {

      this.form = this.formBuilder.group({
        destination: ['', Validators.required],
        persons: ['', Validators.required]
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
    if (this.form.invalid) {
        return;
    }

    this.loading = true;

   // this.accountService.login(this.f.username.value, this.f.password.value)
     //   .pipe(first())
     //   .subscribe({
       //     next: () => {
                
           //     const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/category';
             //   this.router.navigateByUrl(returnUrl);
           // },
           // error: error => {
             //   this.alertService.error(error);
               // this.loading = false;
           // }
        //});
}

}
