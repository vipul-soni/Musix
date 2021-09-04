import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { HttpClientModule } from '@angular/common/http';
import { KlService } from './kl.service';
import { SINGERSComponent } from './singers/singers.component';
import { TRAILERComponent } from './trailer/trailer.component';
import { SONGSComponent } from './songs/songs.component';
import { TrendingComponent } from './trending/trending.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                ShowsComponent,
                SINGERSComponent,
                TRAILERComponent,
                SONGSComponent,
                TrendingComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule
            ],
            providers: [KlService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map