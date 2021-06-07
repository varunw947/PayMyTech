import { Component, OnInit } from '@angular/core';

import {AccountService, AlertService} from '../../services';

import {ReportService} from '../../services/report.service';
import {AdminDistributorService} from '../../services/adminDistributor.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {AccordionModule} from 'node_modules/primeng/accordion';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  submitted = false;
  distList:any;
  selectedUser: any ={id:'',location:'', firstName:'',state:'' , address:'', pincode:'', city:'',
  mobile:'', emailAddress:'',outletName:'' };
 
  display: boolean = false;

  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService) {

    //  this.user = this.accountService.userValue;
     // this.accountService.user.subscribe(x => this.user = x);

     
     this.bindDistributers();
     }

  ngOnInit(): void {
  }

  editUser(row:any)
  {
    debugger;
      this.selectedUser = row;
      this.display = true;
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

  bindDistributers()
  {
    debugger;
 // this.accountService.getDistributorReport(null, null)

  this.adminDistributorService.getUserDetails()
  .pipe(first()).subscribe((distList:any) => this.distList = distList);
  }

  closePopup()
  {
    this.display = false;
  }


}
