import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin } from './admin';
import { AdminRouting } from './admin-routing.module';
import { Login } from './auth/login/login';
import { AdminHome } from './pages/home/admin-home';
import { AdminHeader } from './layout/admin-header/admin-header';
import { RouterModule } from '@angular/router';
import { AdminSidebar } from './layout/admin-sidebar/admin-sidebar';


@NgModule({
  declarations: [
    Admin,
    Login,
    AdminHome,
    AdminHeader,
    AdminSidebar
  ],
  imports: [
    CommonModule,
    AdminRouting
  ],
  exports:[]
})
export class AdminModule { }
