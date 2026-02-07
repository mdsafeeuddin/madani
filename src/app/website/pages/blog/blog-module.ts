import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRouting } from './blog-routing-module';
import { BlogList } from './blog-list/blog-list';
import { BlogDetails } from './blog-details/blog-details';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    BlogList,
    BlogDetails
  ],
  imports: [
    CommonModule,
    BlogRouting,
    SharedModule
  ]
})
export class BlogModule { }
