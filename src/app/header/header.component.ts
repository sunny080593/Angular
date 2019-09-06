import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../menu-service.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menu:Menu;
  public nameTest:'Sunny';
  constructor(private _menuService  :MenuServiceService) 
  {
    console.log("Constructor of Header Component");
    
  }
  ngOnInit() {
    console.log("Init of Header Component");
    
    this.menu=this._menuService.getmenu();

    console.log(this.menu);
  }

}
