import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
var RocketService = /** @class */ (function () {
    function RocketService(http) {
        this.http = http;
        this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
    }
    RocketService.prototype.getRockets = function () {
        var requestEndpoint = this.apiBaseUrl + 'rockets';
        return this.http.get(requestEndpoint).pipe(
        // finalize(() => this.loader.stop()),
        map(function (rockets) {
            console.log(rockets);
            return rockets;
        }));
    };
    RocketService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RocketService);
    return RocketService;
}());
export { RocketService };
//# sourceMappingURL=rocket.service.js.map