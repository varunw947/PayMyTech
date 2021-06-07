import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-utilityrecharge',
  templateUrl: './utilityrecharge.component.html',
  styleUrls: ['./utilityrecharge.component.css']
})
export class UtilityrechargeComponent implements OnInit {

  utilityList:any;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      // this.searchCategory = data.id;
 
 debugger;
  
   });

   this.bindUtility(2);
  }

  bindUtility(submod_id:any)
  {
    this.accountService.getmodules(submod_id)
    .pipe(first()).subscribe((utilityList:any) => this.utilityList = utilityList);
  }

  gotoRecharge(id :any)
  {
        if(id ==5)
        {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/dthrecharge';
          this.router.navigateByUrl(returnUrl);
        }
        else if (id==6)
        {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/electric';
          this.router.navigateByUrl(returnUrl);
        }
        else if (id==7)
        {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/gas';
          this.router.navigateByUrl(returnUrl);
        }
        else if (id==8)
        {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/insurance';
          this.router.navigateByUrl(returnUrl);
        }
       
  }


}
