export class MenuItems {
public itemName : string;
public itemPath : string;

constructor(private _menuItemName : string, private _menuItemPath : string )
{
    this.itemName = _menuItemName;
    this.itemPath = _menuItemPath;
}

}
