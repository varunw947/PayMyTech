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
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  ApiName:any;
  UserName:any;
  Amount:any;
  Comment:any;

  Balance:any;



  data: any = [];

  selected: any;
  alwaysShowCalendars: boolean;
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],    
    'In Last Week': [moment().subtract(7, 'days'), moment().subtract(1, 'days')],  
    'In This Month': [moment().startOf('month'), moment().endOf('month')],
    'In Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
    'In Last 3 Months':[moment().subtract(3, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  invalidDates: moment.Moment[] = [moment().add(0, 'days'), moment().add(0, 'days'), moment().add(0, 'days')];
  
  isInvalidDate = (m: moment.Moment) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') )
  }

  dateFrom:any;
  dateTo:any;
  

  reportName="";

  colms =  [
    // { field: 'uniqueCode', header: 'Distributor Code', filterMatchMode: 'contains' },
    // { field: 'distributorName', header: 'Dist Outlet Name', filterMatchMode: 'contains' },
    // { field: 'userName', header: 'Retailer Unique Code', filterMatchMode: 'contains' },
    { field: 'firstName', header: 'Name', filterMatchMode: 'contains' },
    { field: 'outletName', header: 'Outlet', filterMatchMode: 'contains' } ,
    // { field: 'location', header: 'Location', filterMatchMode: 'contains' },
    { field: 'state', header: 'State', filterMatchMode: 'contains' },
    { field: 'salesPerson', header: 'Agent', filterMatchMode: 'contains' },
    { field: 'mobileTotal', header: 'T.Mob Trans', filterMatchMode: 'contains' } ,
    { field: 'mobileValue', header: 'T.Mob Value', filterMatchMode: 'contains' ,type:'currency'} ,
    { field: 'dmtTotal', header: 'T.DMT Trans', filterMatchMode: 'contains'  } ,
    { field: 'dmtValue', header: 'T.DMT Value', filterMatchMode: 'contains',type:'currency' },
    { field: 'billTotal', header: 'T.Bill Trans', filterMatchMode: 'contains' },
    { field: 'billValue', header: 'T.Bill Value', filterMatchMode: 'contains' ,type:'currency'} ,
    { field: 'packageType', header: 'Package', filterMatchMode: 'contains' }
    
      
];

search()
{
  this.bindRetailerReportByDate();

}


  

  constructor(private reportService: ReportService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.getApi();
    this.getUser();
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

  ngOnInit(): void {
    this.reportName = "BillingReport_" + this.dateFormat(new Date(),true)+"_"+Guid.newGuid();
  }

  onSubmit()
  {
    window.alert('Amount is Credited !');
  }

  onSubmit2()
  {
    window.alert('Admin Balance is Updated Successfully !');
  }


  bindRetailerReportByDate()
  {
    let dateFrom = this.dateFormat(this.selected.startDate);
    let dateTo = this.dateFormat(this.selected.endDate) ;

     this.reportService.GetRetailerReportByDate(dateFrom,dateTo)
   .pipe(first()).subscribe((retailerList:any) => this.data = retailerList);
    
   
  }

  dateFormat(date:any,isFirst=false){
    var dt = date;
    if(dt){
      var d;
        if(!isFirst)
          d = dt._d; 
        else
          d = dt; 
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();
        
         return  curr_month +"-" +curr_date + "-"  +curr_year;
    }else{
        return dt;
    }
  }




}
