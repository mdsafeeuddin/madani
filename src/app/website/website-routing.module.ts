import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Website } from './website';

const routes: Routes = [
  {
    path: '', 
    component: Website,
    children:[
      {
        path: 'blogs', loadChildren: () => import('./blog/blog-module').then(m => m.BlogModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRouting { }
