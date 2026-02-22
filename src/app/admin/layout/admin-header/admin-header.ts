import { Component, HostListener } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { AdminLayoutService } from "../admin-layout.service";

@Component({
  selector: 'admin-header',
  templateUrl: 'admin-header.html',
  standalone: false
})

export class AdminHeader{
  menuOpen = false;

  constructor(
    public auth: AuthService,
    private layout: AdminLayoutService
  ) {}

  toggleSidebar() {
    this.layout.toggleSidebar();
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click')
  closeMenu() {
    this.menuOpen = false;
  }

  handleAvatarError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/avatar.png';
  }

  goToProfile() {
    this.menuOpen = false;
    console.log('Profile');
  }

  goToSettings() {
    this.menuOpen = false;
    console.log('Settings');
  }

  logout() {
    this.menuOpen = false;
    this.auth.logOut();
  }
}