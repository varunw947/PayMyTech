import { Component, OnInit } from '@angular/core';

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
  selector: 'app-user-tokens',
  templateUrl: './user-tokens.component.html',
  styleUrls: ['./user-tokens.component.css']
})
export class UserTokensComponent implements OnInit {

  sessionList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={SessionID:0};

  selectedSession: any ={sessionID:'',ipAddress1:'', ipAddress2:'', ipAddress3:''};
 
  display: boolean = false;
  displayNew: boolean = false;


  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig){ }

  ngOnInit(): void {
    this.bindSession();
  }

  bindSession()
  {
    this.adminDistributorService.getSessionDetails()
    .pipe(first()).subscribe((sessionList:any) => this.sessionList = sessionList);
  }

  editSession(row:any)
  {
    debugger;

      this.selectedSession = row;
      this.display = true;
  }

  addSession()
  {
    debugger;
    
     // this.selectedSession = row;

      this.displayNew = true;
  }

  get f() { return this.form.controls; }

 // get f1() { return this.form2.controls; }

  onSubmit2()
  {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.loading = true;
    debugger;
   // if(this.model.SessionName!=null)
   // {
         this.adminDistributorService.SessionRegister(this.model)
        .subscribe
        (
          (data:any) => 
            {                
                    alert('Session Added Successfully !');
                    this.displayNew = false;
                  //  this.model = null;
                  this.model.userName="";
                    this.model.userToken="";

                    this.model.ipAddress1="";
                    this.model.ipAddress2="";
                    this.model.ipAddress3="";
                    
                   
                    this.bindSession();
              }

           
        )

      // }
      // else
      // {
      //           alert("Enter All Details");
      // }

        this.loading = false;
      
  }


  onSubmit(form:any) {
    this.submitted = true;
    this.alertService.clear();

    this.adminDistributorService.updateSessionDetails(
      this.selectedSession.sessionID, this.selectedSession.ipAddress1, this.selectedSession.ipAddress2,this.selectedSession.ipAddress3).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindSession();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }

  closePopup2()
  {
    
    this.model.userName="";
                    this.model.userToken="";

                    this.model.ipAddress1="";
                    this.model.ipAddress2="";
                    this.model.ipAddress3="";
                    this.alertService.clear();
    this.displayNew = false;
   // this.model=null;
  }


}
