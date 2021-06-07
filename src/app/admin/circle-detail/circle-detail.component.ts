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
  selector: 'app-circle-detail',
  templateUrl: './circle-detail.component.html',
  styleUrls: ['./circle-detail.component.css']
})
export class CircleDetailComponent implements OnInit {


  circleList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={CircleID:0};

  selectedCircle: any ={circleID:'',circleName:''};
 
  display: boolean = false;
  displayNew: boolean = false;

  CircleName:any;

  user: User ;

  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig) 
    {
      this.user = this.accountService.userValue;
      this.accountService.user.subscribe(x => this.user = x);

    }
  
       ngOnInit(): void {
        this.bindCircle();
  }


  bindCircle()
  {
    this.adminDistributorService.getCircleDetails()
    .pipe(first()).subscribe((circleList:any) => this.circleList = circleList);
  }

  editCircle(row:any)
  {
    debugger;

      this.selectedCircle = row;
      this.display = true;
  }

  addCircle()
  {
    debugger;   
    
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
   
         this.adminDistributorService.CircleRegister(this.CircleName)
        .subscribe
        (
          (data:any) => 
            {                
                    alert('Circle Added Successfully !');
                    this.displayNew = false;
                  
                 // this.model.CircleName="";
                 this.CircleName="";
                    
                    this.bindCircle();
              })
    
        this.loading = false;
      
  }


  onSubmit(form:any) {
    this.submitted = true;
    this.alertService.clear();

    this.adminDistributorService.updateCircleDetails(
      this.selectedCircle.circleID, this.selectedCircle.circleName).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindCircle();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }

  closePopup2()
  {
    //this.model.CircleName="";
    this.CircleName="";
    this.displayNew = false;   
  }


}
