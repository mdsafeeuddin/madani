import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogModule } from './pages/blog/blog-module';
import { WebHeader } from './layout/header/web-header';
import { Website } from './website';
import { WebHome } from './pages/home/home';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WebHeader,
    Website,
    WebHome
  ],
  imports: [
    CommonModule,
    BlogModule,
    RouterModule
  ],
  exports: [
  ]
})
export class WebsiteModule { }
