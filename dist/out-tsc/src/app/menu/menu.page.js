import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgress } from '@ngx-progressbar/core';
var MenuPage = /** @class */ (function () {
    function MenuPage(router, progress) {
        var _this = this;
        this.router = router;
        this.progress = progress;
        this.pages = [
            {
                title: 'Home',
                url: '/menu/home'
            },
            {
                title: 'Missions',
                url: '/menu/Missions'
            },
            {
                title: 'LunchPads',
                url: '/menu/LunchPads'
            },
            {
                title: 'LandingPads',
                url: '/menu/LandingPads'
            },
            {
                title: 'capsules',
                url: '/menu/capsules'
            },
        ];
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.progress.start();
        setTimeout(function () {
            /** progress ends after 2 seconds */
            _this.progress.done();
        }, 10000);
    };
    MenuPage = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.page.html',
            styleUrls: ['./menu.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NgProgress])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.page.js.map