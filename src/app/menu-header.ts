import { MenuItems } from './menu-items';

export class MenuHeader {
public name:string;
public path:string;

public menuItems = [];


    constructor(private _headerName:string, private _headerPath: string,  private _menuItems: MenuItems[])
    {
        this.menuItems = _menuItems;
        this.name = _headerName;
        this.path = _headerPath;

    }
}
