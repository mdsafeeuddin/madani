import { Component, HostListener } from "@angular/core";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'admin-header',
  templateUrl: 'admin-header.html',
  styleUrl: 'admin-header.css',
  standalone: false
})

export class AdminHeader{
  isCollapsed = true;
  menuOpen = false;
  username = 'John Doe';

  constructor(public auth: AuthService){}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation(); // 🔑 critical
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click')
  closeMenu() {
    this.menuOpen = false;
  }

  goToProfile() {
    console.log('Profile');
    this.menuOpen = false;
  }

  goToSettings() {
    console.log('Settings');
    this.menuOpen = false;
  }

  logout() {
    this.menuOpen = false;
    this.auth.logOut();
  }

}