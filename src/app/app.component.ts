import { Component } from '@angular/core';

import { AccountService } from './services';
import { User } from './models';

import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    user?: User;

    constructor(private accountService: AccountService , private formBuilder: FormBuilder
        ,private route: ActivatedRoute
        ,private router: Router
        ) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    
}