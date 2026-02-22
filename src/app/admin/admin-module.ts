import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { Admin } from './admin';
import { AdminRouting } from './admin-routing.module';
import { Login } from './auth/login/login';
import { AdminHome } from './pages/home/admin-home';
import { AdminHeader } from './layout/admin-header/admin-header';
import { AdminSidebar } from './layout/admin-sidebar/admin-sidebar';
import { VideosAdmin } from './pages/videos/videos-admin';


@NgModule({
  declarations: [
    Admin,
    Login,
    AdminHome,
    AdminHeader,
    AdminSidebar,
    VideosAdmin
  ],
  imports: [
    CommonModule,
    AdminRouting,
    ReactiveFormsModule
  ],
  exports:[]
})
export class AdminModule { }
