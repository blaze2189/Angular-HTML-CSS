import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {InitPageComponent} from './pages/init-page/init-page.component';
import {AppComponent} from './app.component';
import {VideosComponent} from './pages/videos/videos.component';
import {ActorsComponent} from './pages/actors/actors.component';

//RouteConfiguration
export const routes:Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path: 'init',
        component:InitPageComponent,
        outlet:'home-router'
      },
      {
        path:'videos',
        component:VideosComponent,
        outlet:'home-router'
      },
      {
        path:'actors',
        component:ActorsComponent,
        outlet:'home-router'
      }
    ]
  }
];

export const routing: ModuleWithProviders=RouterModule.forRoot(routes);
