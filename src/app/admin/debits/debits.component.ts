import { Component, OnInit } from '@angular/core';

import {ReportService} from '../../services/report.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models';

import {Guid} from '../../GridComponent/gridcomponent.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import * as moment from 'moment';


@Component({
  selector: 'app-debits',
  templateUrl: './debits.component.html',
  styleUrls: ['./debits.component.css']
})
export class DebitsComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  ApiName:any;
  UserName:any;
  Amount:any;
  Comment:any;

  constructor(private reportService: ReportService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.getApi();
    this.getUser();
   }

  ngOnInit(): void {
  }

  getApi() 
  {  
          
    return this.ApiProviderHeader;  
 }  

 getUser() 
  {  
          
    return this.UserHeader;  
 } 

 public ApiProviderHeader = [{ apiName: 'API' }]; 
 
 public UserHeader = [{ userName: 'PayMyTech' }];  

 getAPIName(pv:any)
 {

 }

 getUserName(pv:any)
 {

 }


 onSubmit()
  {
    window.alert('Amount is Debited !');
  }

}
