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
  selector: 'app-api-forward',
  templateUrl: './api-forward.component.html',
  styleUrls: ['./api-forward.component.css']
})
export class ApiForwardComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  ProviderName:any;
  ServiceName:any;
  ApiName:any;

  constructor() 
  { 
    this.getProviders();
    this.getServices();
    this.getApi();
  }

  ngOnInit(): void 
  {
  }

  getApi() 
  {  
          
    return this.ApiProviderHeader;  
 }  


  getProviders() 
  {  
          
    return this.ProviderHeader;  
 }  

 getServices() 
  {  
          
    return this.ServiceHeader;  
 }  

  public ProviderHeader = [{ providerName: 'Jio' }, { providerName: 'Airtel'}, { providerName: 'VodaIdea' }, { providerName: 'BSNL' },  { providerName: 'MTNL' }];  

  public ServiceHeader = [{ serviceName: 'Mobile' }, { serviceName: 'DTH'}, { serviceName: 'Wallet' }, { serviceName: 'PastPaid' },  { serviceName: 'Landline' }];  
 
  public ApiProviderHeader = [{ apiName: 'IndiCore' }, { apiName: 'MoneyArt'}, { apiName: 'Wallet' }];  

  getProviderName(pv:any)
  {

  }

  getServiceName(pv:any)
  {

  }

  getAPIName(pv:any)
  {

  }



  onSubmit()
  {
    window.alert('API Settings Updated Successfully !');
  }

}
