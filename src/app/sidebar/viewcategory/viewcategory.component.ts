import { Component, OnInit } from '@angular/core';

import {AccountService} from '../../services';
import { first } from 'rxjs/operators';



import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {

  categoryList:any;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(data => {
     // this.searchCategory = data.id;


  this.accountService.getmodules(0)
  .pipe(first()).subscribe((categoryList:any) => this.categoryList = categoryList);
  });
  }

  gotoRecharge(id :any)
  {
        if(id ==1)
        {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/mobrecharge';
          this.router.navigateByUrl(returnUrl);
        }
        else if (id==2)
        {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/utility';
          this.router.navigateByUrl(returnUrl);
        }
        else if (id==3)
        {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/money';
          this.router.navigateByUrl(returnUrl);
        }
        else if (id==4)
        {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'sidebar/home/travel';
          this.router.navigateByUrl(returnUrl);
        }
       
  }

}
