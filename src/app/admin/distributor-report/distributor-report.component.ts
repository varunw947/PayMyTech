import { Component, OnInit } from '@angular/core';

import {ReportService} from '../../services/report.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { User } from '/all_project/safe_project_15/safePayProject 6/safePay/src/app/models';
import {Guid} from '../../GridComponent/gridcomponent.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import * as moment from 'moment';

@Component({
  selector: 'app-distributor-report',
  templateUrl: './distributor-report.component.html',
  styleUrls: ['./distributor-report.component.css']
})
export class DistributorReportComponent implements OnInit {

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
  
  //user: User ;

  reportName="";

  colms =  [
    { field: 'uniqueCode', header: 'DistCode', filterMatchMode: 'contains' },
    { field: 'distributorName', header: 'DistName', filterMatchMode: 'contains' },
    { field: 'userName', header: 'UniqueCode', filterMatchMode: 'contains' },
    { field: 'firstName', header: 'D.Name', filterMatchMode: 'contains' },
    { field: 'outletName', header: 'DistOutlet', filterMatchMode: 'contains' } ,
   // { field: 'location', header: 'Location', filterMatchMode: 'contains' },
    { field: 'state', header: 'State', filterMatchMode: 'contains' },
    { field: 'salesPerson', header: 'Agent', filterMatchMode: 'contains' },
    { field: 'mobileTotal', header: 'T.MobTrans', filterMatchMode: 'contains' } ,
    { field: 'mobileValue', header: 'T.MobValue', filterMatchMode: 'contains' ,type:'currency'} ,
    { field: 'dmtTotal', header: 'T.DMTrans', filterMatchMode: 'contains'  } ,
    { field: 'dmtValue', header: 'T.DMTValue', filterMatchMode: 'contains',type:'currency' },
    { field: 'billTotal', header: 'T.BillTrans', filterMatchMode: 'contains' },
    { field: 'billValue', header: 'T.BillValue', filterMatchMode: 'contains' ,type:'currency'} ,
    { field: 'packageType', header: 'PackType', filterMatchMode: 'contains' }
    
      
];

search()
{

  this.bindDistributorReportByDate();
}


  constructor(private reportService: ReportService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

      //this.user = this.accountService.userValue;
      //this.accountService.user.subscribe(x => this.user = x);

     // this.bindRetailers(this.user.DistributerID);

    
     }

     ngOnInit(): void {

      this.reportName = "DistributorReport_" + this.dateFormat(new Date(),true)+"_"+Guid.newGuid();
    }

    bindDistributorReportByDate()
    {
     // let dateFrom = this.dateFormat(this.dateFrom);
   // let dateTo = this.dateFormat(this.dateTo) ;
      
     // this.accountService.getDistributorReport(dateFrom,dateTo )
     let dateFrom = this.dateFormat(this.selected.startDate);
     let dateTo = this.dateFormat(this.selected.endDate) ;

      this.reportService.GetDistributorReportByDate(dateFrom,dateTo)
    .pipe(first()).subscribe((distList:any) => this.data = distList);
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
