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
  selector: 'app-cipl-detail',
  templateUrl: './cipl-detail.component.html',
  styleUrls: ['./cipl-detail.component.css']
})
export class CiplDetailComponent implements OnInit {

  planList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={PlanID:0};

  selectedPlan: any ={planID:'',planName:'', price:'',status:'' };
 
  display: boolean = false;
  displayNew: boolean = false;


  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig){ }

  ngOnInit(): void {
    this.bindPlan();
  }

  bindPlan()
  {
    this.adminDistributorService.getPlanDetails()
    .pipe(first()).subscribe((planList:any) => this.planList = planList);
  }

  editPlan(row:any)
  {
    debugger;

      this.selectedPlan = row;
      this.display = true;
  }

  addPlan()
  {
    debugger;
    
     // this.selectedPlan = row;
      this.displayNew = true;
      this.model.status="Active";
     // this.model=null;
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
   // if(this.model.PlanName!=null)
   // {
         this.adminDistributorService.PlanRegister(this.model)
        .subscribe
        (
          (data:any) => 
            {                
                    alert('Plan Added Successfully !');
                    this.displayNew = false;
                  //  this.model = null;
                  this.model.planName="";
                    this.model.price="";
                   
                    this.bindPlan();
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

    this.adminDistributorService.updatePlanDetails(
      this.selectedPlan.planID, this.selectedPlan.planName, this.selectedPlan.price,this.selectedPlan.status).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindPlan();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }

  closePopup2()
  {
    
                    this.model.planName="";
                    this.model.price="";
                    
    this.displayNew = false;
   // this.model=null;
  }


}
