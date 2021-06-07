import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

import {AccountService, AlertService} from '../../services';

import {ReportService} from '../../services/report.service';
import {AdminDistributorService} from '../../services/adminDistributor.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {AccordionModule} from 'node_modules/primeng/accordion';
import {MenuItem} from 'primeng/api';
import {AppConfig} from '../../app.config';
import { User } from '../../models';
import {Guid} from '../../GridComponent/gridcomponent.component';

@Component({
  selector: 'app-distributerdetail',
  templateUrl: './distributerdetail.component.html',
  styleUrls: ['./distributerdetail.component.css']
})
export class DistributerdetailComponent implements OnInit {

  distList:any;
  submitted = false;
  user: User ;
  
  selectedUser: any ={id:'',location:'', firstName:'',state:'' , address:'', pincode:'', city:'',
  mobile:'', emailAddress:'',outletName:'' };
 
  display: boolean = false;

  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig) {

      this.user = this.accountService.userValue;
      this.accountService.user.subscribe(x => this.user = x);

     
     
     }

  ngOnInit(): void {
    this.bindDistributers();
  }

  editUser(row:any)
  {
    debugger;
      this.selectedUser = row;
      this.display = true;
  }

  bindDistributers()
  {
    debugger;
 // this.accountService.getDistributorReport(null, null)

  this.adminDistributorService.getDistributorDetails()
  .pipe(first()).subscribe((distList:any) => this.distList = distList);
 
  debugger;
}

  
  onSubmit(form:any) {
    this.submitted = true;
    this.alertService.clear();

    this.adminDistributorService.updateUserDetails(
      this.selectedUser.id, this.selectedUser.firstName, this.selectedUser.location,
      this.selectedUser.state, this.selectedUser.address, this.selectedUser.pinCode,
      this.selectedUser.city,this.selectedUser.mobile,this.selectedUser.emailAddress,
      this.selectedUser.outletName).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindDistributers();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }

}
