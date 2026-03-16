import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './pipe/safeHtml.pipe';
import { SectionComponent } from './section/section';
import { CardComponent } from './card/card';

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
