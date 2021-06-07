import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../services';

import { ElementRef , HostBinding, HostListener} from '@angular/core'; 

@Component({ templateUrl: 'layout.component.html',
styleUrls:['layout.component.css'] })
export class LayoutComponent {

    
    constructor
    (
        private router: Router,
        private accountService: AccountService, private _el: ElementRef
    ) 
    {
        
        // redirect to home if already logged in
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
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
}