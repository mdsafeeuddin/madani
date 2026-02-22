import { Component } from '@angular/core';
import { AdminLayoutService } from '../admin-layout.service';

@Component({
  selector: 'admin-sidebar',
  standalone: false,
  templateUrl: './admin-sidebar.html'
})
export class AdminSidebar {
  collapsed$:any;
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
}
