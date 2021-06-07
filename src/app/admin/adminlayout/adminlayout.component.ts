import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute  } from '@angular/router';

import { User } from '../../models';

import { AccountService } from '../../services';

import { ElementRef , HostBinding, HostListener} from '@angular/core'; 

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

    user: User ;
    searchCategory : any;

    role:any;
    showAdmin = false;
    showDist = false;

  constructor
  (
      private router: Router,private route: ActivatedRoute,
      private accountService: AccountService, private _el: ElementRef
  ) 
  {
      
      // redirect to home if already logged in
      debugger;
      this.user = this.accountService.userValue;
      this.accountService.user.subscribe(x => this.user = x);

      this.role = this.user.role;
      if(this.role== "Admin")
      {
        this.showAdmin = true;
        this.showDist = false;
      }
      else if(this.role== "Distributor")
      {
        this.showAdmin = false;
        this.showDist = true;
      }
     
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
        this.searchCategory = data.id;
    });
  }

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') closeOpen() {
      this.isOpen = !this.isOpen;
      this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
  }

  toogleOpen() {
      this.isOpen = !this.isOpen;
      this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show')
  }

 // IsOpen:false
  clickMobmode()
  {
      this._el.nativeElement.querySelector('.navbar-collapse').classList.toggle('show')

  }

  creditTransfer()
  {
    window.location.href = "https://payu.in/pay/E05E725C3A3E10D582F951BD31ECA66D";
  }

  logout() {
    this.accountService.logout();
}

}
