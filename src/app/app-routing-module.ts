import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Website } from './website/website';
import { WebHome } from './website/pages/home/home';

const routes: Routes = [
  {
   path: '',
    component: Website,
    children: [
      { path: '', component: WebHome },
      {
        path: 'blogs',
        loadChildren: () =>
          import('./website/pages/blog/blog-module').then(m => m.BlogModule)
      }
    ]
  },
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
