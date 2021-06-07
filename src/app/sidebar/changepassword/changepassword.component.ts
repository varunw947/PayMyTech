import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService, ExternalAPIService } from '../../services';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  Password : any;

  OldPassword : any;
  
  ConfirmPassword:any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService, private userService:UserService) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();    

    

     this.userService.changePassword(this.OldPassword, this.Password).subscribe((f:any) =>
      {
       
            console.log(f);
         
            alert(f.status);
         
     })
    // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '../login';
    // this.router.navigateByUrl(returnUrl);     
     }


}
