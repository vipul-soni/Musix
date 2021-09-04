import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { KlService } from '../kl.service';
var TRAILERComponent = /** @class */ (function () {
    function TRAILERComponent(api) {
        this.api = api;
    }
    TRAILERComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getalltdata().subscribe(function (res) {
            _this.items = res;
        }, function (error) {
        });
    };
    TRAILERComponent = tslib_1.__decorate([
        Component({
            selector: 'app-trailer',
            templateUrl: './trailer.component.html',
            styleUrls: ['./trailer.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [KlService])
    ], TRAILERComponent);
    return TRAILERComponent;
}());
export { TRAILERComponent };
//# sourceMappingURL=trailer.component.js.map