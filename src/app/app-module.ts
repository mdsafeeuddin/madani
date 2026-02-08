import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../envs/environment';

import { AppRouting } from './app-routing-module';
import { App } from './app';
import { SharedModule } from './shared/shared.module';
import { WebsiteModule } from './website/website-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRouting,
    SharedModule,
    WebsiteModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    provideFirestore(()=>getFirestore()),
    provideAuth(()=>getAuth())
  ],
  bootstrap: [App]
})
export class AppModule { }
