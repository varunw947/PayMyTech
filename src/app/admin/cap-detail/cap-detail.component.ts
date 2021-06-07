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
  selector: 'app-cap-detail',
  templateUrl: './cap-detail.component.html',
  styleUrls: ['./cap-detail.component.css']
})
export class CapDetailComponent implements OnInit {

  capList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={CapID:0};

  selectedCap: any ={capID:'',userName:'', ownerName:'',firmName:'' , capAmount:'' };
 
  display: boolean = false;

  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig) {

      
     
     
     }

  ngOnInit(): void {
    this.bindCap();
  }


  bindCap()
  {
    this.adminDistributorService.getCapBalanceDetails()
    .pipe(first()).subscribe((capList:any) => this.capList = capList);
  }

  editCap(row:any)
  {
    debugger;

      this.selectedCap = row;
      this.display = true;
  }

  onSubmit(form:any) {
    this.submitted = true;
    this.alertService.clear();

    this.adminDistributorService.updateCapBalanceDetails(
      this.selectedCap.capID, this.selectedCap.userName, this.selectedCap.ownerName,
      this.selectedCap.firmName, this.selectedCap.capAmount).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindCap();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    this.display = false;
  }





}
