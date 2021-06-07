import { Component, OnInit } from '@angular/core';

import {AccountService} from '../../services';
import {ReportService} from '../../services/report.service';
import {AdminDistributorService} from '../../services/adminDistributor.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models';

@Component({
  selector: 'app-view-distributor',
  templateUrl: './view-distributor.component.html',
  styleUrls: ['./view-distributor.component.css']
})
export class ViewDistributorComponent implements OnInit {

  distList:any;
  distid:any;
  user: User ;

  constructor(private accountService: AccountService, private adminDistributorService: AdminDistributorService,private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {

      this.user = this.accountService.userValue;
      this.accountService.user.subscribe(x => this.user = x);

     // this.bindRetailers(this.user.DistributerID);

     this.bindDistributors(1);
     }


  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.distid = data.id;
    });
  }

  bindDistributors( did:any)
    {
      debugger;
      this.adminDistributorService.getDistributorsByDistID(did)
    .pipe(first()).subscribe((distList:any) => this.distList = distList);
    }


}
