import { Injectable } from '@angular/core';
import { MenuItems } from './menu-items';
import { MenuHeader } from './menu-header';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { 
    console.log("Service Constructor Menu ");

  }

  getmenu()
  {
    console.log("Creating Menu ");
   var items1o1 =new MenuItems("File List","/fileManager");
   var items1o2 =new MenuItems("File Accept","/FileList");
   var items2o1 =new MenuItems("Show Master1","/Master");
   var items2o2 =new MenuItems("Show Master2","/FileList");
  
   var menuHeader1 = new MenuHeader("File","/File",[items1o1,items1o2]);
   var menuHeader2 = new MenuHeader("Master","/Master",[items2o1,items2o2]);
   var menuHeader3 = new MenuHeader("Settings","/Settings",null);
   
    var menu =new Menu([menuHeader1,menuHeader2,menuHeader3]);

    return menu;

  }

}
