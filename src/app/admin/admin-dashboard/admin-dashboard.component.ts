import { Component, OnInit } from '@angular/core';

import {ReportService} from '../../services/report.service';
import {DashboardService} from '../../services/dashboard.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  
  selected: any;
  TotalDistributors:any;

  TotalRetailers:any;
  
//  pieChart: any={};
  pieChart3: any={};


  TotalUsers:any;
  TotalSales:any;
  VerifiedUsers:any;
  salesList:any;

  TotalProfit:any;
  RetailerProfit:any;
  AdminProfit:any;

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

  public pieChart: any = {
    chartType: 'PieChart',
    dataTable: [
      ['Service', 'Sales'],
      ['Mobile',     11],
      ['DTH',      2],
      ['Electricity Bill',  2],
      ['Insurance Bill', 2],
      ['Gas Bill',    7]
    ],
    
    options: {'title': 'Service'},
  };


  public lineChart: any = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Service', 'Tranx'],
      ['Sucess',     376],
      ['Failed',      35],
      ['Pending',  12],
      ['Reversal', 7]
      
    ],
    
    options: {'title': 'Service-Wise No. of Transactions'},
  };

  public lineChart2: any = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Service', 'Sales'],
      ['Mobile',     30450],
      ['DTH',      15670],
      ['Electricity Bill',  8000],
      ['Insurance Bill', 7500],
      ['Gas Bill', 8500]
      
    ],
    
    options: {'title': 'Service-Wise Sales Rs.'},
  };

  public lineChart3: any = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Service', 'Sales'],
      ['Airtel',     30450],
      ['Jio',      25670],
      ['VodaIdea',  18000],
      ['MTNL', 7500],
      ['BSNL', 8500]
      
    ],
    
    options: {'title': 'Recharge Sales Rs.'},
  };

  public lineChart4: any = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Service', 'Tranx'],
      ['Airtel',     165],
      ['Jio',      147],
      ['VodaIdea',  136],
      ['MTNL', 66],
      ['BSNL', 98]
      
    ],
    
    options: {'title': 'Recharge Transactions'},
  };


  public lineChart5: any = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Service', 'Tranx'],
      ['Sucess',     376],
      ['Failed',      35],
      ['Pending',  12],
      ['Reversal', 7]
      
    ],
    
    options: {'title': 'Operator-Wise No. of Transactions'},
  };

  public lineChart6: any = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Service', 'Sales'],
      ['Mobile',     30450],
      ['DTH',      15670],
      ['Electricity Bill',  8000],
      ['Insurance Bill', 7500],
      ['Gas Bill', 8500]
      
    ],
    
    options: {'title': 'Operator-Wise Sales Rs.'},
  };


  dateFrom:any;
  dateTo:any;

  //ChartType = "pie";



 constructor(private dashboardService: DashboardService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router){ }

  ngOnInit(): void {

    this.bindSalesReportByDate();

  // this.bindPieChartByDate();
  }

  bindSalesReportByDate()
  {
    let dateFrom=null,dateTo=null;
if(this.selected){
  dateFrom = this.dateFormat(this.selected.startDate);
  dateTo = this.dateFormat(this.selected.endDate) ;
}
   
     this.dashboardService.GetSalesReportByDate(dateFrom,dateTo)
     .pipe(first()).subscribe((result:any) =>{
     
      // this.TotalDistributors = result[0][0].totalDistributors;

      // this.TotalRetailers = result[0][0].totalRetailers;

      // this.TotalSales = result[0][0].totalSales;

      // this.VerifiedUsers = result[0][0].verifiedUsers;

      // this.TotalProfit = result[0][0].totalProfit;

      // this.RetailerProfit = result[0][0].retailerProfit;

      // this.AdminProfit = result[0][0].adminProfit;


       this.TotalDistributors = 50;

       this.TotalRetailers = 120;

       this.TotalSales = 876540;

       this.VerifiedUsers = 99;

       this.TotalProfit = 120500;

       this.RetailerProfit = 48200;

       this.AdminProfit = 72300;

      //this.GetLoginchart(result);
     });

  }

  bindPieChartByDate()
  {
    let dateFrom=null,dateTo=null;
if(this.selected){
 // debugger;
  dateFrom = this.dateFormat(this.selected.startDate);
  dateTo = this.dateFormat(this.selected.endDate) ;
}
   
     this.dashboardService.GetPieChartByDate(dateFrom,dateTo)
     .pipe(first()).subscribe((result:any) =>{
      // this.TotalDistributors = result[0][0].totalNumber;

      //    this.TotalRetailers = result[0][0].userType;

      // this.TotalSales = result[0][1].totalNumber;

      // this.VerifiedUsers = result[0][1].userType;

      
      this.TotalDistributors = result[0][0].totalDistributors;

      this.TotalRetailers = result[0][0].totalRetailers;

      this.TotalSales = result[0][0].totalSales;

     this.VerifiedUsers = result[0][0].verifiedUsers;

            debugger;
     // this.GetLoginchart(result);
     });

  }


 

  GetLoginchart(data:any)
    {
      let labelArray:any[] = ['user Type', 'totalNumber']
      let things:any[][] =[] ;
       if(data[1].length>0){
         things = this.getMultidimensionalArray(data[1],labelArray); 
       } 

      debugger;
      this.pieChart3 = {
        chartType: 'PieChart',
        
        dataTable:things,
       
        options: {'title': 'NUMBER OF ACTIVE USERS'}
      
      }; 
    }

getMultidimensionalArray(data:any,labels:any=null){
    let things: any[][]  = [];  
    var name, person;
    let i=0,j=0;
    if(labels!=null){
      things[i] = [];
      labels.forEach(element => {
          things[i][j] = element;
          j++;
      });
      i=1;
    }
    for (person in data) {
        things[i] = [];
        j=0; 
        for (name in data[person]) { 
            things[i][j] = data[person][name];
            j++;
        }
        i++;
    }
    
    return things;
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
