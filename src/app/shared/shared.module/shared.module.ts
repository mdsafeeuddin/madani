import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../safeHtml.pipe';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SafeHtmlPipe
  ],
  exports: [
    SafeHtmlPipe
  ]

})
export class SharedModule { }
