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
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  newsList:any;
  submitted = false;

  form: FormGroup;

  form2: FormGroup;

   submitted2 = false;
  loading = false;

  model:any={NewsID:0};

  selectedNews: any ={newsID:'',targetUser:'', news:'',reqDate:''  };
 
  display: boolean = false;
  displayNew: boolean = false;


  constructor(private accountService: AccountService,private adminDistributorService: AdminDistributorService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private alertService: AlertService , private config:AppConfig) {

      
      // this.user = this.accountService.userValue;
      // this.accountService.user.subscribe(x => this.user = x);
     
     }

  ngOnInit(): void {
    this.bindNews();

  }

  bindNews()
  {
    this.adminDistributorService.getNewsDetails()
    .pipe(first()).subscribe((newsList:any) => this.newsList = newsList);
  }

  editNews(row:any)
  {
    debugger;

      this.selectedNews = row;
      this.display = true;
  }

  onSubmit(form:any) {
    this.submitted = true;
    this.alertService.clear();

    this.adminDistributorService.updateNewsDetails(
      this.selectedNews.newsID, this.selectedNews.news).subscribe((f:any) =>
    {
      
          console.log(f);
        
          this.display = false;
          this.bindNews();
        
          alert("Data is updated Successfuly");
        
   })
  }

  closePopup()
  {
    
    this.display = false;

  }



}
