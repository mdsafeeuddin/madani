import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { Admin } from './admin';
import { AdminRouting } from './admin-routing.module';
import { Login } from './auth/login/login';
import { AdminHome } from './pages/home/admin-home';
import { AdminHeader } from './layout/admin-header/admin-header';
import { AdminSidebar } from './layout/admin-sidebar/admin-sidebar';
import { VideosAdmin } from './pages/videos/videos-admin';
import { VideoMasters } from './pages/videos/vmasters/video-masters';

@NgModule({
  declarations: [
    Admin,
    Login,
    AdminHome,
    AdminHeader,
    AdminSidebar,
    VideosAdmin,
    VideoMasters
  ],
  imports: [
    CommonModule,
    AdminRouting,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[]
})
export class AdminModule { }
