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
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.css']
})
export class TransactionReportComponent implements OnInit {

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

  selection:any;
  

  reportName="";

  colms =  [
    
    { field: 'total_Recharge_Transactions', header: 'Total Recharge Transactions', filterMatchMode: 'contains' },
    { field: 'total_Amount', header: 'Total Amount', filterMatchMode: 'contains' } 
    
    
];

search()
{
  this.bindTransactionReportByDate();

}

public ProductHeader = [{ name: 'All' }, { name: 'Success'}, { name: 'Pending' }, { name: 'Failure' }, { name: 'Reversal' },
{ name: 'Retry' }, { name: 'Reprocess'}, { name: 'Reprocessing Pending' }, { name: 'Refund' }, { name: 'Reversal Pending' }
];  

  constructor(private reportService: ReportService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

     
      this.getProducts();
      this.selection="All";
    
     }


     getProducts() {  
          
      return this.ProductHeader;  
   }  

     ngOnInit(): void {
      this.reportName = "RechargeTransactionReport_" + this.dateFormat(new Date(),true)+"_"+Guid.newGuid();

     
    }

    bindTransactionReportByDate()
    {
      let dateFrom = this.dateFormat(this.selected.startDate);
      let dateTo = this.dateFormat(this.selected.endDate) ;
debugger;
// if(this.selection=="Success")
// {
       this.reportService.GetRechargeTransactionReportByDate(dateFrom,dateTo,this.selection)
     .pipe(first()).subscribe((retailerList:any) => this.data = retailerList);
 //}
 
     
    }

    getName(pv: any)
{
  debugger;
   this.selection = pv.target.options[pv.target.selectedIndex].text; 

 this.bindTransactionReportByDate();

  
 
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
