import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'

      },
      {
        path: 'Missions',
        loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
      },
      {
        path: 'LandingPads',
        loadChildren: '../landing-pads/landing-pads.module#LandingPadsPageModule'
      },
      {
        path: 'LandingPads/:id',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'capsules',
        loadChildren: '../capsules/capsules.module#CapsulesPageModule'
      },
      {
        path: 'cores', 
        loadChildren: '../cores/cores.module#CoresPageModule' 

      },
      {
        path: 'LunchPads',
        loadChildren: '../second/second.module#SecondPageModule'
      },
      { 
        path: 'dragons', 
        loadChildren: '../dragons/dragons.module#DragonsPageModule' 
      },
      { 
        path: 'dragons/:id', 
        loadChildren: '../details-dragon/details-dragon.module#DetailsDragonPageModule' 
      },
      {
         path: 'history',
          loadChildren: '../history/history.module#HistoryPageModule' 
      },
      {
         path: 'info',
        loadChildren: '../info/info.module#InfoPageModule' 
      },
      {
         path: 'launches', 
         loadChildren: '../launches/launches.module#LaunchesPageModule' 
      },
      {
         path: 'payload', 
         loadChildren: '../payload/payload.module#PayloadPageModule' 
        },
      {
         path: 'rockets', 
         loadChildren: '../rockets/rockets.module#RocketsPageModule' 
        },
      {
         path: 'roadster', 
         loadChildren: '../roadster/roadster.module#RoadsterPageModule' 
        },
      {
         path: 'ships', 
         loadChildren: '../ships/ships.module#ShipsPageModule' 
        },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
