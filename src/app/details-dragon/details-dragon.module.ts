import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsDragonPage } from './details-dragon.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsDragonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsDragonPage]
})
export class DetailsDragonPageModule {}
