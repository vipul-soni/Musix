import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { KlService } from '../kl.service';
var ShowsComponent = /** @class */ (function () {
    function ShowsComponent(api) {
        this.api = api;
    }
    ShowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getalldata().subscribe(function (res) { _this.items = res; }, function (error) { });
    };
    ShowsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-shows',
            templateUrl: './shows.component.html',
            styleUrls: ['./shows.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [KlService])
    ], ShowsComponent);
    return ShowsComponent;
}());
export { ShowsComponent };
//# sourceMappingURL=shows.component.js.map