import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogModule } from './blog/blog-module';
import { WebsiteRouting } from './website-routing.module';
import { WebHeader } from './layout/header/web-header';
import { Website } from './website';

@NgModule({
  declarations: [
    WebHeader,
    Website
  ],
  imports: [
    CommonModule,
    BlogModule,
    WebsiteRouting,
  ],
  exports: [
  ]
})
export class WebsiteModule { }
