import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin } from './admin';
import { AdminRouting } from './admin-routing.module';
import { Login } from './auth/login/login';
import { AdminHome } from './pages/home/admin-home';

@NgModule({
  declarations: [
    Admin,
    Login,
    AdminHome
  ],
  imports: [
    CommonModule,
    AdminRouting
  ],
  exports:[]
})
export class AdminModule { }
