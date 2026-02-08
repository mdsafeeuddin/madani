import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Website } from './website/website';
import { WebHome } from './website/pages/home/home';
import { Admin } from './admin/admin';
import { Login } from './admin/auth/login/login';

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
    children:[
      // {path: 'login', component: Login},
      {
        path: '',
        loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
      }
      
    ] 
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
