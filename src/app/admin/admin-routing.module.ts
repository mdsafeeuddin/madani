import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Login } from "./auth/login/login";
import { Admin } from "./admin";
import { AuthGuard } from "./auth/auth.guard";
import { AdminHome } from "./pages/home/admin-home";
import { VideosAdmin } from "./pages/videos/videos-admin";

const routes: Routes = [
  {
    path: '',
    component: Admin,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'home',
        component: AdminHome
      },
      {
        path:'videos',
        component: VideosAdmin
      }
    ]
  },
  {
    path: 'login', 
    component: Login
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRouting{}