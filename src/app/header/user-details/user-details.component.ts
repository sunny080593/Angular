import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userName:string;
  corporateName:string;
  constructor() {
   
   }

  ngOnInit() {
    this.userName='Sunny';
    this.corporateName ='Reliance';

  }

}
