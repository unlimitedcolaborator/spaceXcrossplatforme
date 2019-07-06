import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from 'src/app/components/skeleton/skeleton.component';
import { IonicModule } from '@ionic/angular';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib_1.__decorate([
        NgModule({
            declarations: [SkeletonComponent],
            imports: [
                CommonModule,
                IonicModule,
            ],
            exports: [SkeletonComponent]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map