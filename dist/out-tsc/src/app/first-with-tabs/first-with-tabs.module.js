import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FirstWithTabsPage } from './first-with-tabs.page';
var routes = [
    {
        path: 'tabs',
        component: FirstWithTabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: '../tab1/tab1.module#Tab1PageModule'
            },
            {
                path: 'tab2',
                loadChildren: '../tab2/tab2.module#Tab2PageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
var FirstWithTabsPageModule = /** @class */ (function () {
    function FirstWithTabsPageModule() {
    }
    FirstWithTabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FirstWithTabsPage]
        })
    ], FirstWithTabsPageModule);
    return FirstWithTabsPageModule;
}());
export { FirstWithTabsPageModule };
//# sourceMappingURL=first-with-tabs.module.js.map