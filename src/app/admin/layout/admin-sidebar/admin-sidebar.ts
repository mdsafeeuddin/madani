import { Component } from '@angular/core';
import { AdminLayoutService } from '../admin-layout.service';
import { ADMIN_MENU, AdminMenuItem } from '../admin-menu.config';

@Component({
  selector: 'admin-sidebar',
  standalone: false,
  templateUrl: './admin-sidebar.html'
})
export class AdminSidebar {
  collapsed$:any;
  menu: AdminMenuItem[] = ADMIN_MENU;
  openMenus: Record<string, boolean> = {};

  constructor(
    public layout: AdminLayoutService) 
  {
    this.collapsed$ = this.layout.collapsed$;
  }

  toggle() {
    this.layout.toggleSidebar();
  }

  close() {
    this.layout.closeSidebar();
  }

  toggleMenu(label: string) {
    this.openMenus[label] = !this.openMenus[label];
  }

  isOpen(label: string) {
    return this.openMenus[label];
  }
}
