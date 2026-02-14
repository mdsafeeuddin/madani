import { AfterViewInit, Component } from "@angular/core";

import * as bootstrap from 'bootstrap';
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'admin-header',
  templateUrl: 'admin-header.html',
  styleUrl: 'admin-header.css',
  standalone: false
})

export class AdminHeader implements AfterViewInit{
  isCollapsed = true;

  constructor(public auth: AuthService){}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngAfterViewInit() {
    const tooltipTriggerList =document.querySelectorAll('[data-bs-toggle="tooltip"]');
    
    tooltipTriggerList.forEach(el =>{
      new bootstrap.Tooltip(el);
    })
  }
}