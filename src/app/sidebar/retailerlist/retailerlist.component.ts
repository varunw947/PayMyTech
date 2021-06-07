import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models';
import {Guid} from '../../GridComponent/gridcomponent.component';

@Component({
  selector: 'app-retailerlist',
  templateUrl: './retailerlist.component.html',
  styleUrls: ['./retailerlist.component.css']
})
export class RetailerlistComponent implements OnInit {

  retailerList: any ;
  distid:any;
  user: User ;

  reportName="";

  colms =  [
    { field: 'uniqueCode', header: 'Distributor Code', filterMatchMode: 'contains' },
    { field: 'distributorName', header: 'Dist Outlet Name', filterMatchMode: 'contains' },
    { field: 'userName', header: 'Retailer Unique Code', filterMatchMode: 'contains' },
    { field: 'firstName', header: 'Customer Name', filterMatchMode: 'contains' },
    { field: 'outletName', header: 'Outlet Name', filterMatchMode: 'contains' } ,
    { field: 'location', header: 'Location', filterMatchMode: 'contains' },
    { field: 'state', header: 'State', filterMatchMode: 'contains' },
    { field: 'salesPerson', header: 'Sales Person', filterMatchMode: 'contains' },
    { field: 'address', header: 'Address', filterMatchMode: 'contains' } ,
    { field: 'pinCode', header: 'PinCode', filterMatchMode: 'contains' } ,
    { field: 'city', header: 'City', filterMatchMode: 'contains'  } ,
    { field: 'mobile', header: 'Mobile No.', filterMatchMode: 'contains' },
    { field: 'emailAddress', header: 'Email Address', filterMatchMode: 'contains' },
    { field: 'panCard', header: 'PanCard', filterMatchMode: 'contains'} 
    
    
      
];

search()
{}

  constructor(private accountService: AccountService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

      this.user = this.accountService.userValue;
      this.accountService.user.subscribe(x => this.user = x);

     // this.bindRetailers(this.user.DistributerID);

     this.bindRetailers();
     }


    ngOnInit(): void {
      this.reportName = "RetailerList" + this.dateFormat(new Date())+"_"+Guid.newGuid();

      this.route.params.subscribe(data => {
         this.distid = data.id;
   
   debugger;
   
    
     });
  
     
    }

    bindRetailers()
    {
      debugger;
      this.accountService.getRetailers()
    .pipe(first()).subscribe((retailerList:any) => this.retailerList = retailerList);
    }

   

    dateFormat(date:Date){
      var d = date;
      if(d){
          var curr_date = d.getDate();
          var curr_month = d.getMonth() + 1; //Months are zero based
          var curr_year = d.getFullYear();
          return curr_month + "-" + curr_date +"-" +curr_year;
      }else{
          return d;
      }
    //  document.write(curr_year + "-" + curr_month + "-" + curr_date);
    }

}
