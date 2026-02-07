import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin } from './admin';
import { AdminRouting } from './admin-routing.module';

@NgModule({
  declarations: [
    Admin
  ],
  imports: [
    CommonModule,
    AdminRouting
  ],
  exports:[]
})
export class AdminModule { }
