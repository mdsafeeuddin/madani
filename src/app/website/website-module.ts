import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogModule } from './blog/blog-module';
import { WebsiteRouting } from './website-routing.module';
import { WebHeader } from './layout/header/web-header';

@NgModule({
  declarations: [
    WebHeader
  ],
  imports: [
    CommonModule,
    BlogModule,
    WebsiteRouting,
    
  ]
})
export class WebsiteModule { }
