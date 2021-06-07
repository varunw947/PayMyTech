import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-low-balance',
  templateUrl: './low-balance.component.html',
  styleUrls: ['./low-balance.component.css']
})
export class LowBalanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  addAlert()
  {

    window.alert('Are you sure? you want perform action..');
  }

}
