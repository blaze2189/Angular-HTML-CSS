import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { AuthHttp, AuthConfig } from 'angular2-jwt-session';
import { HomeComponent } from './pages/home/home.component';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ActorsComponent } from './pages/actors/actors.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InitPageComponent,
    PersonalComponent,
    VideosComponent,
    ActorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
