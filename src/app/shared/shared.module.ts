import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safeHtml.pipe';
import { SectionComponent } from './section';
import { CardComponent } from './card';

@NgModule({
  declarations: [
    SectionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SafeHtmlPipe,
    CommonModule
  ],
  exports: [
    SafeHtmlPipe,
    SectionComponent,
    CardComponent,
    CommonModule
  ]

})
export class SharedModule { }
