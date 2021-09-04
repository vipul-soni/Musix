import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { KlService } from '../kl.service';
var SONGSComponent = /** @class */ (function () {
    function SONGSComponent(api) {
        this.api = api;
    }
    SONGSComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getallsdata().subscribe(function (res) {
            _this.items = res;
        }, function (error) {
        });
    };
    SONGSComponent = tslib_1.__decorate([
        Component({
            selector: 'app-songs',
            templateUrl: './songs.component.html',
            styleUrls: ['./songs.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [KlService])
    ], SONGSComponent);
    return SONGSComponent;
}());
export { SONGSComponent };
//# sourceMappingURL=songs.component.js.map