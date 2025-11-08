import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogList } from './blog-list/blog-list';
import { BlogDetails } from './blog-details/blog-details';

const routes: Routes = [
  {path: '', component: BlogList},
  {path: 'blog/:slug', component: BlogDetails}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
