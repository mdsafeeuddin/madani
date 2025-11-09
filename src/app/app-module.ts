import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../envs/environment';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BlogModule } from './blog/blog-module';
import { SharedModule } from './shared/shared.module/shared.module';
import { Header } from './layout/header/header';

@NgModule({
  declarations: [
    App,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    SharedModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore())
  ],
  bootstrap: [App]
})
export class AppModule { }
