import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
var routes = [
    {
        path: '',
        component: MenuPage,
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule'
            },
            {
                path: 'first',
                loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
            },
            {
                path: 'second',
                loadChildren: '../second/second.module#SecondPageModule'
            },
            {
                path: 'second/details',
                loadChildren: '../details/details.module#DetailsPageModule'
            }
        ]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib_1.__decorate([
        NgModule({
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
    ], MenuPageModule);
    return MenuPageModule;
}());
export { MenuPageModule };
//# sourceMappingURL=menu.module.js.map