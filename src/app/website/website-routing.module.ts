import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Website } from './website';

const routes: Routes = [
  {path: '', component: Website}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRouting { }
