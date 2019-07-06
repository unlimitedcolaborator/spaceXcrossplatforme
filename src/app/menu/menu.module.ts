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
        loadChildren: '../landing-pads/landing-pads.module#LandingPadsageModule'
      },
      {
        path: 'LandingPads/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'capsules',
        loadChildren: '../capsules/capsules.module'
      },
      {
        path: 'LunchPads',
        loadChildren: '../second/second.module#SecondPageModule'
      }
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
