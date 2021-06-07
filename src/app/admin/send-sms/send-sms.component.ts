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
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css']
})
export class SendSMSComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  
  ApiName:any;
  Message:any;

  Message1:any;
  Number:any;

  constructor() { 
    this.getApi();
  }

  ngOnInit(): void {
  }

  getApi() 
  {  
          
    return this.ApiProviderHeader;  
 }  

 public ApiProviderHeader = [{ apiName: 'API' }];  

 getAPIName(pv:any)
 {

 }

 onSubmit()
  {
    window.alert('SMS is Sent !');
  }

  onSubmit2()
  {
    window.alert('SMS is Sent !');
  }

}
