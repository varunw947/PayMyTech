import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService, AlertService, ExternalAPIService } from '../../services';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  reportList:any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private exAPIService: ExternalAPIService,
    private alertService: AlertService) { }

  ngOnInit(): void 
  {

    //  this.exAPIService.getTransactionDetailWithComm().subscribe
    //  ( 
    //       (e:any) => 
    //       {
    //         debugger;
    //               console.log(e);
      
    //               this.reportList =e.reports;  
                
    //       }
    //   )


 debugger;
     this.exAPIService.getTransactionReport()
     .pipe(first()).subscribe
     ((reportList:any) =>
    
    
     this.reportList = reportList);
    }

  

}
