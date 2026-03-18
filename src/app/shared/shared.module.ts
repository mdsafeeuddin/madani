import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './pipe/safeHtml.pipe';
import { SectionComponent } from './section/section';
import { CardComponent } from './card/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterCrudComponent } from './md-crud/md-crud';
import { YoutubeIframe } from './yframe/yframe';

@NgModule({
  declarations: [
    SectionComponent,
    CardComponent,
    MasterCrudComponent,
    YoutubeIframe
  ],
  imports: [
    CommonModule,
    SafeHtmlPipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SafeHtmlPipe,
    SectionComponent,
    CardComponent,
    CommonModule,
    MasterCrudComponent,
    ReactiveFormsModule,
    YoutubeIframe
  ]

})
export class SharedModule { }
