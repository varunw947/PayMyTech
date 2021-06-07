import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {ReportService} from '../../services/report.service';
import {AdminDistributorService} from '../../services/adminDistributor.service';

import { AccountService, AlertService } from '../../services';


@Component({
  selector: 'app-edit-distributer',
  templateUrl: './edit-distributer.component.html',
  styleUrls: ['./edit-distributer.component.css']
})
export class EditDistributerComponent implements OnInit {

  model:any;

  DistributorName:any;
  UniqueCode:any;

  loading = false;
    submitted = false;

  constructor(private route: ActivatedRoute, 
    private router: Router,private accountService: AccountService,private adminDistributorService: AdminDistributorService,
    private alertService: AlertService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    debugger;
    this.adminDistributorService.saveDistributorList(this.DistributorName, this.UniqueCode)  
      .pipe(first())
         .subscribe({
             next: (data:any) => {
 
                 debugger;
                // if(data.message == "Success")
                // {
                  if(data.message == "Code Exists")
                  {
                    alert("Unique Code already Exists. Please Use Another Code");
                                      
                  }  
                  else if(data.message == "Success")
                  {
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin/ad/dist';
                    this.router.navigateByUrl(returnUrl);
                    alert("Distributor is Registered Successfully");
                  }                 
                 
                  
                  else{
                    
                    alert("Sorry! We do not recognise your detail. Please Try Again");
                  }
 
                
             }
             ,
             error: error => {
               
                 window.alert(error);
                 this.loading = false;
             }
         });

  }


}
