import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Website } from './website/website';
import { WebHome } from './website/pages/home/home';
import { WebTeachings } from './website/pages/tngs/tngs';

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
      },
      {
        path:'teachings', component: WebTeachings
      }
    ]
  },
  {
    path: 'admin',
    children:[
      // {path: 'login', component: Login},
      {
        path: '',
        loadChildren: () => 
          import('./admin/admin-module').then(m => m.AdminModule)
      }
      
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
