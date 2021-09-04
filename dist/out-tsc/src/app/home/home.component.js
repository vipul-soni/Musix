import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { KlService } from '../kl.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(api) {
        this.api = api;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getalltdata().subscribe(function (res) {
            _this.items = res;
        }, function (error) {
        });
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [KlService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map