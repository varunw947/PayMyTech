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
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.component.html',
  styleUrls: ['./operator-detail.component.css']
})
export class OperatorDetailComponent implements OnInit {

  operatorList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={OperatorID:0};

  selectedOperator: any ={operatorID:'',operatorName:'', service:'', operatorType:'',minAmount:'',maxAmount:'',
  minLength:'', maxLength:'',rejectAmount:'', status:'' };
 
  display: boolean = false;
  displayNew: boolean = false;


  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig){ }

  ngOnInit(): void {
    this.bindOperator();
  }

  bindOperator()
  {
    this.adminDistributorService.getOperatorDetails()
    .pipe(first()).subscribe((operatorList:any) => this.operatorList = operatorList);
  }

  editOperator(row:any)
  {
    debugger;

      this.selectedOperator = row;
      this.display = true;
  }

  addOperator()
  {
    debugger;
    
     // this.selectedOperator = row;
      this.displayNew = true;
      this.model.status="Active";
      this.model.operatorType="P2P";
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
   // if(this.model.OperatorName!=null)
   // {
         this.adminDistributorService.OperatorRegister(this.model)
        .subscribe
        (
          (data:any) => 
            {                
                    alert('Operator Added Successfully !');
                    this.displayNew = false;
                  //  this.model = null;
                  this.model.operatorName="";
    this.model.service="";

    this.model.minAmount="";
    this.model.maxAmount="";
    this.model.minLength="";

    this.model.maxLength="";
    this.model.rejectAmount="";
    
                    
                   
                    this.bindOperator();
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

    this.adminDistributorService.updateOperatorDetails(
      this.selectedOperator.operatorID, this.selectedOperator.operatorName, this.selectedOperator.service,this.selectedOperator.operatorType, this.selectedOperator.minAmount, this.selectedOperator.maxAmount, 
      this.selectedOperator.minLength, this.selectedOperator.maxLength,this.selectedOperator.rejectAmount,
      this.selectedOperator.status).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindOperator();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }

  closePopup2()
  {
    
    this.model.operatorName="";
    this.model.service="";

    this.model.minAmount="";
    this.model.maxAmount="";
    this.model.minLength="";

    this.model.maxLength="";
    this.model.rejectAmount="";
    
                    
    this.displayNew = false;
   // this.model=null;
  }


}
