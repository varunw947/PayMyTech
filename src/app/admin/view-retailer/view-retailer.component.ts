import { Component, OnInit } from '@angular/core';

import {AccountService, AlertService} from '../../services';
import { AdminRetailerService} from '../../services/adminRetailer.service';
import {ReportService} from '../../services/report.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models';

@Component({
  selector: 'app-view-retailer',
  templateUrl: './view-retailer.component.html',
  styleUrls: ['./view-retailer.component.css']
})
export class ViewRetailerComponent implements OnInit {

  retailerList:any;
  distid:any;
  user: User ;
  submitted = false;
  selectedUser: any ={id:'',location:'', firstName:'',state:'' , address:'', pincode:'', city:'',
  mobile:'', emailAddress:'',outletName:'' };
 
  display: boolean = false;

  constructor(private accountService: AccountService,private adminRetailerService: AdminRetailerService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService) {

      // this.user = this.accountService.userValue;
      // this.accountService.user.subscribe(x => this.user = x);

     

     this.bindRetailers();
     }


  ngOnInit(): void {
    // this.route.params.subscribe(data => {
    //   this.distid = data.id;
    // });
  }

  bindRetailers()
    {
      debugger;
      this.adminRetailerService.getRetailerDetails()
    .pipe(first()).subscribe((retailerList:any) => this.retailerList = retailerList);
    }

    editRetailer(row:any)
  {
    debugger;
      this.selectedUser = row;
      this.display = true;
  }

  onSubmit(form:any) {
    this.submitted = true;
    this.alertService.clear();

    this.adminRetailerService.updateRetailerDetails(
      this.selectedUser.id, this.selectedUser.firstName, this.selectedUser.location,
      this.selectedUser.state, this.selectedUser.address, this.selectedUser.pinCode,
      this.selectedUser.city,this.selectedUser.mobile,this.selectedUser.emailAddress,
      this.selectedUser.outletName).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindRetailers();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }

}
