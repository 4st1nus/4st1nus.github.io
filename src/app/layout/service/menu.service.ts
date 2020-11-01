import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menu-item';
import { menuItems } from './menu-items';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  constructor() { }

  /**
   * Method to return the navigation links for the top navbar.
   * It can be customized and retrieved from REST if needed. as of now
   * it is from a constant.
   * @returns Array<{@link MenuItem}>
   */
  getMenus(): MenuItem[] {
    return menuItems;
  }
}
