import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RocketService } from '../services/rocket.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(rocketService) {
        this.rocketService = rocketService;
    }
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.rocketService.getRockets().subscribe(function (result) {
            _this.rockets = result;
        });
        setTimeout(function () {
            _this.observableRockets = _this.rocketService.getRockets();
        }, 2000);
    };
    Tab1Page.prototype.buttonClick = function (rocketId) {
        console.log(rocketId);
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: './tab1.page.html',
            styleUrls: ['./tab1.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [RocketService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map