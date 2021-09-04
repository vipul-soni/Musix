import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var KlService = /** @class */ (function () {
    function KlService(http) {
        this.http = http;
    }
    KlService.prototype.getalldata = function () {
        return this.http.get('http://localhost:4000/data');
    };
    KlService.prototype.getalltdata = function () {
        return this.http.get('http://localhost:4000/tdata');
    };
    KlService.prototype.getallsdata = function () {
        return this.http.get('http://localhost:4000/sdata');
    };
    KlService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], KlService);
    return KlService;
}());
export { KlService };
//# sourceMappingURL=kl.service.js.map