import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Login } from "./auth/login/login";
import { Admin } from "./admin";
import { AuthGuard } from "./auth/auth.guard";
import { AdminHome } from "./pages/home/admin-home";
import { LoginGuard } from "./auth/login.guard";

const routes: Routes = [
  {
    path: '',
    component: Admin,
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        component: AdminHome
      }
    ]
  },
  {
    path: 'login', 
    component: Login,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRouting{}