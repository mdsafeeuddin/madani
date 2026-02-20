import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogModule } from './pages/blog/blog-module';
import { Website } from './website';
import { WebHome } from './pages/home/home';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layout/navbar';
import { FooterComponent } from './layout/footer';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './pages/home/hero';

@NgModule({
  declarations: [
    Website,
    WebHome,
    NavbarComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    BlogModule,
    RouterModule,
    SharedModule
  ]
})
export class WebsiteModule { }
