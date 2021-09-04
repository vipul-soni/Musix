import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { SINGERSComponent } from './singers/singers.component';
import { SONGSComponent } from './songs/songs.component';
import { TRAILERComponent } from './trailer/trailer.component';
import { TrendingComponent } from './trending/trending.component';
var routes = [
    { path: '', component: HomeComponent },
    { path: 'shows', component: ShowsComponent },
    { path: 'singers', component: SINGERSComponent },
    { path: 'songs', component: SONGSComponent },
    { path: 'trailers', component: TRAILERComponent },
    { path: 'trending', component: TrendingComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map