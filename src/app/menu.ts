import { MenuHeader } from './menu-header';

export class Menu 
{
public menuHeaders = [];
constructor(private _menuHeaders: MenuHeader[])
{
this.menuHeaders = this._menuHeaders
}

}
