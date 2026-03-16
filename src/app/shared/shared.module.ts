import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './pipe/safeHtml.pipe';
import { SectionComponent } from './section/section';
import { CardComponent } from './card/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterCrudComponent } from './md-crud/md-crud';

@NgModule({
  declarations: [
    SectionComponent,
    CardComponent,
    MasterCrudComponent
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
    ReactiveFormsModule
  ]

})
export class SharedModule { }
