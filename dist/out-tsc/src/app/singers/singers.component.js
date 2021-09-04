import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { KlService } from '../kl.service';
var SINGERSComponent = /** @class */ (function () {
    function SINGERSComponent(api) {
        this.api = api;
    }
    SINGERSComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getalldata().subscribe(function (res) {
            _this.items = res;
        }, function (error) {
        });
    };
    SINGERSComponent = tslib_1.__decorate([
        Component({
            selector: 'app-singers',
            templateUrl: './singers.component.html',
            styleUrls: ['./singers.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [KlService])
    ], SINGERSComponent);
    return SINGERSComponent;
}());
export { SINGERSComponent };
//# sourceMappingURL=singers.component.js.map