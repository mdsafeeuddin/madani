import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Admin } from "./admin";
import { Login } from "./auth/login/login";

const routes: Routes = [
  {path: '', component: Login},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRouting{}