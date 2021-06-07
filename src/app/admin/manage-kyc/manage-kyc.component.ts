import { Component, OnInit } from '@angular/core';

import {AccountService} from '../../services';
import { ReportService} from '../../services/report.service';
import { AdminKycService} from '../../services/adminKyc.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models';

import {AppConfig} from '../../app.config';

import {Guid} from '../../GridComponent/gridcomponent.component';

@Component({
  selector: 'app-manage-kyc',
  templateUrl: './manage-kyc.component.html',
  styleUrls: ['./manage-kyc.component.css']
})
export class ManageKYCComponent implements OnInit {

  kycList: any ;

  selectedKyc: any ={note:''};

  activeTab:any ='1';

  dateFrom:any;
  display: boolean = false;



  
  dateTo:any;
  
  user: User ;

  reportName="";

  docURL:any;

  

search()
{}


  constructor(private accountService: AccountService,private adminKycService: AdminKycService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private config:AppConfig) {

      this.docURL=  this.config.apiUrl+"/DocFolder/";

      this.user = this.accountService.userValue;
      this.accountService.user.subscribe(x => this.user = x);

     // this.bindRetailers(this.user.DistributerID);

    
     }


  ngOnInit(): void {

    this.bindKYCReport();
  }

  bindKYCReport()
    {
      debugger;
      
      this.adminKycService.getKycDetails()
    .pipe(first()).subscribe((kycList:any) => this.kycList = kycList);
      
    debugger;
  
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

    reviewKYC(row:any)
    {
      debugger;
        this.selectedKyc = row;
        this.display = true;
    }


    verifyKyc(isApproved)
    {
        this.selectedKyc.isApproved = isApproved;
      //  alert(isApproved);
        this.adminKycService.reviewKycReport(this.selectedKyc)
        .pipe(first()).subscribe((kycList:any) => {
          this.display = false;
          this.bindKYCReport();

        });

       
    }
}
