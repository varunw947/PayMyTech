import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ElementRef , HostBinding, HostListener} from '@angular/core'; 


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  searchCategory : any;
  constructor(
    private route: ActivatedRoute,
    private router: Router)  { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.searchCategory = data.id;
    });
  }

}
