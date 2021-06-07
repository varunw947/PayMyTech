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
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {

  schemeList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={SchemeID:0};

  selectedScheme: any ={schemeID:'',schemeName:'', schemeDesc:'',addDate:'' , editDate:'' };
 
  display: boolean = false;
  displayNew: boolean = false;

  SchemeName:any;
  SchemeDesc:any;
  AddDate:any;
  EditDate:any;

  user: User ;
  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig) {

      
      this.user = this.accountService.userValue;
      this.accountService.user.subscribe(x => this.user = x);
     
     }


  ngOnInit(): void {
    this.bindScheme();
  }



  bindScheme()
  {
    this.adminDistributorService.getSchemeDetails()
    .pipe(first()).subscribe((schemeList:any) => this.schemeList = schemeList);
  }

  editScheme(row:any)
  {
    debugger;

      this.selectedScheme = row;
      this.display = true;
  }

  addScheme()
  {
    debugger;
    
     // this.selectedScheme = row;
      this.displayNew = true;
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
   // if(this.model.SchemeName!=null)
   // {
         this.adminDistributorService.SchemeRegister(this.model)
        .subscribe
        (
          (data:any) => 
            {                
                    alert('Scheme Added Successfully !');
                    this.displayNew = false;
                  //  this.model = null;
                  this.model.SchemeName="";
                    this.model.SchemeDesc="";
                    this.model.AddDate="";
                    this.model.EditDate="";
                    this.bindScheme();
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

    this.adminDistributorService.updateSchemeDetails(
      this.selectedScheme.schemeID, this.selectedScheme.schemeName, this.selectedScheme.schemeDesc,
      this.selectedScheme.addDate, this.selectedScheme.editDate).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindScheme();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }

  closePopup2()
  {
    this.model.SchemeName="";
                    this.model.SchemeDesc="";
                    this.model.AddDate="";
                    this.model.EditDate="";
    this.displayNew = false;
   // this.model=null;
  }


}
