webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>About Component</h3>\r\n<p>This is the about component!</p>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'about',
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
        template: __webpack_require__("../../../../../src/app/about/about.component.html")
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/api-server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiServerService = (function () {
    function ApiServerService(http) {
        this.http = http;
    }
    ApiServerService.prototype.loadConfig = function () {
        var url = 'api/app-config';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ApiServerService.prototype.loadWallets = function (email) {
        var url = '/api/wallet/get/' + email;
        return this.http.post(url, { email: email }).map(function (res) { return res.json(); });
    };
    ApiServerService.prototype.saveWallets = function (payload, email) {
        if (email)
            this.email = email;
        var url = '/api/wallet/save';
        return this.http.post(url, { payload: payload, email: this.email }).map(function (res) { return res.json(); });
    };
    ApiServerService.prototype.getBalance = function (symbol, address) {
        var url = '/api/coin/balance/{{symbol}}/{{address}}';
        url = url.replace('{{symbol}}', symbol)
            .replace('{{address}}', address);
        return this.http.get(url).map(function (res) {
            // console.log(res);
            return {
                address: address,
                symbol: symbol,
                balance: res.json().result
            };
        });
    };
    ApiServerService.prototype.sendTranasaction = function (symbol, address, transaction) {
        var url = '/api/coin/sendTransaction/{{symbol}}';
        url = url.replace('{{symbol}}', symbol);
        // .replace('{{address}}', address);
        return this.http.post(url, { rawTransaction: transaction }).map(function (res) {
            console.log(res);
            return res;
        });
    };
    return ApiServerService;
}());
ApiServerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiServerService);

var _a;
//# sourceMappingURL=api-server.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<diV>\r\n    {{menu | async}}\r\n    <md-sidenav-container >\r\n        <md-sidenav #sidenav>\r\n            <md-list>\r\n\r\n                <a md-list-item routerLink='/bittrex'>Bittrex</a>\r\n                <a md-list-item routerLink='/shape-shift-market-cap'>ShapeShift MarketCap</a>\r\n\r\n                <a md-list-item routerLink='/changelly'>Changelly</a>\r\n                <a md-list-item routerLink='/poloniex'>Poloniex</a>\r\n\r\n                <hr/>\r\n                <a md-list-item routerLink='/email-service'>Email Service</a>\r\n                <a md-list-item routerLink='/ss-main'>Shapeshift Selected</a>\r\n\r\n                <div>\r\n\r\n                    <a md-list-item routerLink='/exchange-ss'>Exchange SS</a>\r\n                    <a md-list-item routerLink='/my-wallets'>My Wallets</a>\r\n                    <hr/>\r\n                </div>\r\n\r\n\r\n                <a md-list-item [routerLink]=\"['/login/sign-in']\">Login</a>\r\n                <a md-list-item [routerLink]=\"['/login/forgot-password']\">Forgot Password</a>\r\n                <a md-list-item [routerLink]=\"['/login/register']\">Register</a>\r\n                <a md-list-item [routerLink]=\"['/login/logout']\">Logout</a>\r\n\r\n            </md-list>\r\n\r\n        </md-sidenav>\r\n\r\n        <div>\r\n            <div (click)=\"sidenav.open()\" class=\"fa fa-bars\">  </div>\r\n        </div>\r\n        <div id=\"MainOutlet\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n    </md-sidenav-container>\r\n</diV>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {AuthHttp} from './libs/angular2-jwt';


var AppComponent = (function () {
    function AppComponent(http, router) {
        this.http = http;
        this.router = router;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        /*   this.http.authError.subscribe((err:any)=>{
             console.warn(err);
             this.router.navigateByUrl('/login');
           });
       */
        /*this.menu = this.http.get('http://localhost:8090/api/menu/1').map(res=>{
    
          console.log(res.json().menu);
          return res.json().menu;
        })*/
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_publishLast__ = __webpack_require__("../../../../rxjs/operator/publishLast.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_publishLast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_operator_publishLast__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__github_repo_browser_repo_browser_component__ = __webpack_require__("../../../../../src/app/github/repo-browser/repo-browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__github_repo_list_repo_list_component__ = __webpack_require__("../../../../../src/app/github/repo-list/repo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__github_repo_detail_repo_detail_component__ = __webpack_require__("../../../../../src/app/github/repo-detail/repo-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__github_shared_github_service__ = __webpack_require__("../../../../../src/app/github/shared/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ss_browse_ss_browse_module__ = __webpack_require__("../../../../../src/app/ss-browse/ss-browse.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__wallets_wallets_module__ = __webpack_require__("../../../../../src/app/wallets/wallets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__exchange_ss_exchange_ss_component__ = __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__exchange_ss_exchange_ss_service__ = __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__wallets_wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ss_browse_all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__login2_login2_component__ = __webpack_require__("../../../../../src/app/login2/login2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__bittrex_bittrex_module__ = __webpack_require__("../../../../../src/app/bittrex/bittrex.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__changelly_changelly_module__ = __webpack_require__("../../../../../src/app/changelly/changelly.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__exchange_ss_send_alert_service__ = __webpack_require__("../../../../../src/app/exchange-ss/send-alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__email_service_email_service_module__ = __webpack_require__("../../../../../src/app/email-service/email-service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__login_auth_http_service__ = __webpack_require__("../../../../../src/app/login/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shape_shift_shape_shift_module__ = __webpack_require__("../../../../../src/app/shape-shift/shape-shift.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__com_market_cap_service__ = __webpack_require__("../../../../../src/app/com/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__poloniex_poloniex_service__ = __webpack_require__("../../../../../src/app/poloniex/poloniex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__poloniex_poloniex_module__ = __webpack_require__("../../../../../src/app/poloniex/poloniex.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { TestComponent } from '../../arch/test/test.component';




//import {AuthHttp, AuthModule, provideAuth, AuthConfig} from './libs/angular2-jwt';







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            // TestComponent,
            __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__github_repo_browser_repo_browser_component__["a" /* RepoBrowserComponent */],
            __WEBPACK_IMPORTED_MODULE_14__github_repo_list_repo_list_component__["a" /* RepoListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__github_repo_detail_repo_detail_component__["a" /* RepoDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_24__exchange_ss_exchange_ss_component__["a" /* ExchangeSsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__login2_login2_component__["a" /* Login2Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_19__ss_browse_ss_browse_module__["a" /* SsBrowseModule */],
            __WEBPACK_IMPORTED_MODULE_20__material_material_app_module__["a" /* MaterialAppModule */],
            __WEBPACK_IMPORTED_MODULE_21__wallets_wallets_module__["a" /* WalletsModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_23__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_30__bittrex_bittrex_module__["a" /* BittrexModule */],
            __WEBPACK_IMPORTED_MODULE_31__changelly_changelly_module__["a" /* ChangellyModule */],
            __WEBPACK_IMPORTED_MODULE_33__email_service_email_service_module__["a" /* EmailServiceModule */],
            __WEBPACK_IMPORTED_MODULE_35__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_36__shape_shift_shape_shift_module__["a" /* ShapeShiftModule */],
            __WEBPACK_IMPORTED_MODULE_39__poloniex_poloniex_module__["a" /* PoloniexModule */],
            // AuthModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* rootRouterConfig */], { useHash: true })
        ],
        providers: [
            //AuthHttp,
            __WEBPACK_IMPORTED_MODULE_17__github_shared_github_service__["a" /* GithubService */],
            __WEBPACK_IMPORTED_MODULE_34__login_auth_http_service__["a" /* AuthHttpService */],
            __WEBPACK_IMPORTED_MODULE_18__home_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_25__exchange_ss_exchange_ss_service__["a" /* ExchangeSsService */],
            __WEBPACK_IMPORTED_MODULE_26__wallets_wallets_all_service__["a" /* WalletsAllService */],
            __WEBPACK_IMPORTED_MODULE_27__ss_browse_all_coins_service__["a" /* AllCoinsService */],
            __WEBPACK_IMPORTED_MODULE_28__api_server_service__["a" /* ApiServerService */],
            __WEBPACK_IMPORTED_MODULE_32__exchange_ss_send_alert_service__["a" /* SendAlertService */],
            __WEBPACK_IMPORTED_MODULE_37__com_market_cap_service__["a" /* MarketCapService */],
            __WEBPACK_IMPORTED_MODULE_38__poloniex_poloniex_service__["a" /* PoloniexService */]
            // provideAuth({
            // headerName: 'Authorization',
            //  headerPrefix: 'Bearer',
            //  tokenName: 'token',
            // tokenGetter: (() => localStorage.getItem('id_token')),
            //  globalHeaders: [{ 'Content-Type': 'application/json' }],
            // noJwtError: true
            // authError:(why:string)=>{ console.warn(why) }
            // })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__github_repo_browser_repo_browser_component__ = __webpack_require__("../../../../../src/app/github/repo-browser/repo-browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__github_repo_list_repo_list_component__ = __webpack_require__("../../../../../src/app/github/repo-list/repo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__github_repo_detail_repo_detail_component__ = __webpack_require__("../../../../../src/app/github/repo-detail/repo-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ss_browse_ss_main_ss_main_component__ = __webpack_require__("../../../../../src/app/ss-browse/ss-main/ss-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wallets_wallets_main_wallets_main_component__ = __webpack_require__("../../../../../src/app/wallets/wallets-main/wallets-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wallets_my_wallets_my_wallets_component__ = __webpack_require__("../../../../../src/app/wallets/my-wallets/my-wallets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exchange_ss_exchange_ss_component__ = __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bittrex_bittrex_market_bittrex_market_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-market/bittrex-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__changelly_ch_market_ch_market_component__ = __webpack_require__("../../../../../src/app/changelly/ch-market/ch-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/login/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__email_service_email_main_email_main_component__ = __webpack_require__("../../../../../src/app/email-service/email-main/email-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__email_service_email_all_coins_email_all_coins_component__ = __webpack_require__("../../../../../src/app/email-service/email-all-coins/email-all-coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__email_service_email_selected_coins_email_selected_coins_component__ = __webpack_require__("../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__email_service_create_watchdog_create_watchdog_component__ = __webpack_require__("../../../../../src/app/email-service/create-watchdog/create-watchdog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__email_service_run_watchdogs_run_watchdogs_component__ = __webpack_require__("../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__email_service_edit_script_edit_script_component__ = __webpack_require__("../../../../../src/app/email-service/edit-script/edit-script.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shape_shift_ss_coins_available_ss_coins_available_component__ = __webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__poloniex_poloniex_ticker_poloniex_ticker_component__ = __webpack_require__("../../../../../src/app/poloniex/poloniex-ticker/poloniex-ticker.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouterConfig; });






















var rootRouterConfig = [
    { path: '', redirectTo: 'ss-main', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    // { path: 'login', component: LoginMain },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_0__about_about_component__["a" /* AboutComponent */] },
    { path: 'exchange-ss', component: __WEBPACK_IMPORTED_MODULE_9__exchange_ss_exchange_ss_component__["a" /* ExchangeSsComponent */] },
    { path: 'ss-main', component: __WEBPACK_IMPORTED_MODULE_6__ss_browse_ss_main_ss_main_component__["a" /* SsMainComponent */] },
    { path: 'shape-shift-market-cap', component: __WEBPACK_IMPORTED_MODULE_20__shape_shift_ss_coins_available_ss_coins_available_component__["a" /* SSCoinsAvailableComponent */] },
    { path: 'changelly', component: __WEBPACK_IMPORTED_MODULE_11__changelly_ch_market_ch_market_component__["a" /* ChMarketComponent */] },
    { path: 'poloniex', component: __WEBPACK_IMPORTED_MODULE_21__poloniex_poloniex_ticker_poloniex_ticker_component__["a" /* PoloniexTickerComponent */] },
    { path: 'wallets', component: __WEBPACK_IMPORTED_MODULE_7__wallets_wallets_main_wallets_main_component__["a" /* WalletsMainComponent */] },
    { path: 'email-service', component: __WEBPACK_IMPORTED_MODULE_14__email_service_email_main_email_main_component__["a" /* EmailMainComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_15__email_service_email_all_coins_email_all_coins_component__["a" /* EmailAllCoinsComponent */] },
            { path: 'all-coins', component: __WEBPACK_IMPORTED_MODULE_15__email_service_email_all_coins_email_all_coins_component__["a" /* EmailAllCoinsComponent */] },
            { path: 'selected-coins', component: __WEBPACK_IMPORTED_MODULE_16__email_service_email_selected_coins_email_selected_coins_component__["a" /* EmailSelectedCoinsComponent */] },
            { path: 'create-watch-dog', component: __WEBPACK_IMPORTED_MODULE_17__email_service_create_watchdog_create_watchdog_component__["a" /* CreateWatchdogComponent */] },
            { path: 'edit-script/:uid', component: __WEBPACK_IMPORTED_MODULE_19__email_service_edit_script_edit_script_component__["a" /* EditScriptComponent */] },
            { path: 'run-watch-dog', component: __WEBPACK_IMPORTED_MODULE_18__email_service_run_watchdogs_run_watchdogs_component__["a" /* RunWatchdogsComponent */] }
        ]
    },
    { path: 'my-wallets', component: __WEBPACK_IMPORTED_MODULE_8__wallets_my_wallets_my_wallets_component__["a" /* MyWalletsComponent */] },
    { path: 'bittrex', component: __WEBPACK_IMPORTED_MODULE_10__bittrex_bittrex_market_bittrex_market_component__["a" /* BittrexMarketComponent */] },
    { path: 'login/:topic', component: __WEBPACK_IMPORTED_MODULE_12__login_login_login_component__["a" /* LoginComponent */] },
    { path: 'login-confirm', component: __WEBPACK_IMPORTED_MODULE_13__login_confirm_confirm_component__["a" /* ConfirmComponent */] },
    { path: 'github', component: __WEBPACK_IMPORTED_MODULE_2__github_repo_browser_repo_browser_component__["a" /* RepoBrowserComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__github_repo_list_repo_list_component__["a" /* RepoListComponent */] },
            { path: ':org', component: __WEBPACK_IMPORTED_MODULE_3__github_repo_list_repo_list_component__["a" /* RepoListComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__github_repo_detail_repo_detail_component__["a" /* RepoDetailComponent */] },
                    { path: ':repo', component: __WEBPACK_IMPORTED_MODULE_4__github_repo_detail_repo_detail_component__["a" /* RepoDetailComponent */] }
                ]
            }
        ]
    },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-market/bittrex-market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table td>img{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n\r\ntd{\r\n    max-width: 100px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\ntr>th{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\nh3{\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-market/bittrex-market.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div>\n        <md-card>\n            <md-card-header>\n                <md-card-title>\n                    <h3>Bittrex Summary </h3> <small *ngIf=\"summaries\"> Total {{summaries.length}}</small>\n                </md-card-title>\n            </md-card-header>\n            <md-card-content>\n\n\n            <table>\n                <tr>\n                    <th  (click)=\"onClickHeader('MarketName')\">Name</th>\n                    <th  (click)=\"onClickHeader('High')\">High</th>\n                    <th  (click)=\"onClickHeader('Low')\">Low</th>\n                    <th  (click)=\"onClickHeader('Volume')\">Volume</th>\n                    <th  (click)=\"onClickHeader('Last')\">Last</th>\n                    <th  (click)=\"onClickHeader('BaseVolume')\">Base Volume</th>\n\n                    <th  (click)=\"onClickHeader('Bid')\">Bid</th>\n                    <th  (click)=\"onClickHeader('Ask')\">Ask</th>\n\n                    <th  (click)=\"onClickHeader('OpenBuyOrders')\">To Buy</th>\n                    <th  (click)=\"onClickHeader('OpenSellOrders')\">To Sell</th>\n\n                    <th  (click)=\"onClickHeader('PrevDay')\">Prev Day</th>\n                    <th>Time</th>\n\n                  <!--  <th>Sponsored</th>\n                    <th>Created</th>\n                    <th>Notice</th>-->\n                </tr>\n                <tr *ngFor=\"let market of summaries\">\n                    <td>{{market.MarketName}}</td>\n                    <td>{{market.High}}</td>\n                    <td>{{market.Low}}</td>\n                    <td>{{market.Volume}}</td>\n                    <td>{{market.Last}}</td>\n                    <td>{{market.BaseVolume}}</td>\n\n                    <td>{{market.Bid}}</td>\n                    <td>{{market.Ask}}</td>\n\n                    <td>{{market.OpenBuyOrders}}</td>\n                    <td>{{market.OpenSellOrders}}</td>\n\n\n                    <td>{{market.PrevDay}}</td>\n                    <td><small>{{market.TimeStamp}}</small></td>\n\n                  <!--  <td>{{market.IsSponsored}}</td>\n                    <td class=\"my-timestamp\"><div>{{market.Created}}</div></td>\n                    <td class=\"notice\">{{market.Notice}}</td>-->\n                </tr>\n            </table>\n            </md-card-content>\n        </md-card>\n        <md-card>\n        </md-card>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-market/bittrex-market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bittrex_service__ = __webpack_require__("../../../../../src/app/bittrex/bittrex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexMarketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BittrexMarketComponent = (function () {
    function BittrexMarketComponent(bittrexService) {
        this.bittrexService = bittrexService;
        this.asc_desc = 'desc';
    }
    BittrexMarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this.bittrexService.getMarkets().subscribe(res=>{
          // console.log(res);
           this.marketModels1 = res;
         })
     
         this.bittrexService.getCurrencies().subscribe(res=>{
          /// console.log(res);
          // this.marketModels1 = res;
         })*/
        this.bittrexService.getMarketSummaries().subscribe(function (res) {
            // console.log(res);
            _this.doSort(res);
            // this.marketModels1 = res;
        });
    };
    BittrexMarketComponent.prototype.doSort = function (ar) {
        if (this.sortBy)
            this.summaries = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](ar, this.sortBy, this.asc_desc);
        else
            this.summaries = ar;
    };
    BittrexMarketComponent.prototype.onClickHeader = function (sortBy) {
        console.log(sortBy);
        if (this.sortBy === sortBy) {
            if (this.asc_desc === 'asc')
                this.asc_desc = 'desc';
            else
                this.asc_desc = 'asc';
        }
        else
            this.asc_desc = 'asc';
        console.log(this.asc_desc);
        this.sortBy = sortBy;
        if (this.summaries)
            this.doSort(this.summaries);
    };
    return BittrexMarketComponent;
}());
BittrexMarketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-bittrex-market',
        template: __webpack_require__("../../../../../src/app/bittrex/bittrex-market/bittrex-market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-market/bittrex-market.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bittrex_service__["a" /* BittrexService */]) === "function" && _a || Object])
], BittrexMarketComponent);

var _a;
//# sourceMappingURL=bittrex-market.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bittrex_market_bittrex_market_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-market/bittrex-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bittrex_service__ = __webpack_require__("../../../../../src/app/bittrex/bittrex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BittrexModule = (function () {
    function BittrexModule() {
    }
    return BittrexModule;
}());
BittrexModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__["a" /* MaterialAppModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__bittrex_market_bittrex_market_component__["a" /* BittrexMarketComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__bittrex_service__["a" /* BittrexService */]]
    })
], BittrexModule);

//# sourceMappingURL=bittrex.module.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BittrexService = (function () {
    function BittrexService(http) {
        this.http = http;
    }
    BittrexService.prototype.buylimit = function (market, quantity, rate) {
        var url = 'api/bittrex/market/buylimit?&market={{market}}&quantity={{quantity}}&rate={{rate}}';
        url = url
            .replace('{{market}}', market)
            .replace('{{quantity}}', quantity + '')
            .replace('{{rate}}', rate + '');
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    BittrexService.prototype.getMarketHistory = function (market) {
        var url = 'api/bittrex/public/getmarkethistory?market=' + market;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    BittrexService.prototype.getOrderBook = function (market, depthMax) {
        if (depthMax === void 0) { depthMax = '50'; }
        var url = 'api/bittrex/public/getorderbook?market=' + market + '&type=both&depth=' + depthMax;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    BittrexService.prototype.getMarketSummary = function (market) {
        var url = 'api/bittrex/public/getmarketsummary?market=' + market;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    BittrexService.prototype.getMarketSummaries = function () {
        var url = 'api/bittrex/public/getmarketsummaries';
        return this.http.get(url).map(function (res) {
            return res.json().result.map(function (item) {
                item.TimeStamp = (new Date(item.TimeStamp)).toLocaleTimeString();
                return item;
            });
        });
    };
    BittrexService.prototype.getTicker = function (market) {
        var url = 'api/bittrex/public/getticker?market=' + market;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    BittrexService.prototype.getCurrencies = function () {
        var url = 'api/bittrex/public/getcurrencies';
        return this.http.get(url).map(function (res) { return res.json().result; });
    };
    BittrexService.prototype.getMarkets = function () {
        var url = 'api/bittrex/public/getmarkets';
        return this.http.get(url).map(function (res) { return res.json().result; });
    };
    BittrexService.prototype.cerateApisecrete = function (apisecret) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('apisecret', '42e47e93bcaf4a2b995b7177d20d1d74');
    };
    return BittrexService;
}());
BittrexService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BittrexService);

var _a;
//# sourceMappingURL=bittrex.service.js.map

/***/ }),

/***/ "../../../../../src/app/changelly/ch-market/ch-market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/changelly/ch-market/ch-market.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n        <table>\n            <tr *ngFor=\"let item of counsAvailanle\">\n                <td>{{item.symbol}}</td>\n                <td>{{item.name}}</td>\n                <td>{{item.percent_change_1h}}</td>\n                <td>{{item.percent_change_24h}}</td>\n                <td>{{item.percent_change_7d}}</td>\n                <td>{{item.price_usd}}</td>\n                <td>{{item.rank}}</td>\n            </tr>\n        </table>\n    </section>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/changelly/ch-market/ch-market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__changelly_service__ = __webpack_require__("../../../../../src/app/changelly/changelly.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__com_market_cap_service__ = __webpack_require__("../../../../../src/app/com/market-cap.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChMarketComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChMarketComponent = (function () {
    function ChMarketComponent(changellyService, marketCap) {
        this.changellyService = changellyService;
        this.marketCap = marketCap;
    }
    ChMarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketCap.markets$.subscribe(function (res) {
            console.log(res);
            _this.markets = res;
            _this.megeData();
        });
        this.changellyService.getCurrencies().subscribe(function (res) {
            console.log(res);
            _this.counsAvailanle = res;
            _this.megeData();
        });
    };
    ChMarketComponent.prototype.megeData = function () {
        if (this.markets && this.counsAvailanle) {
            this.marketCap.addMarketCap(this.counsAvailanle);
        }
    };
    return ChMarketComponent;
}());
ChMarketComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-ch-market',
        template: __webpack_require__("../../../../../src/app/changelly/ch-market/ch-market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/changelly/ch-market/ch-market.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__changelly_service__["a" /* ChangellyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__changelly_service__["a" /* ChangellyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__com_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__com_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
], ChMarketComponent);

var _a, _b;
//# sourceMappingURL=ch-market.component.js.map

/***/ }),

/***/ "../../../../../src/app/changelly/changelly.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ch_market_ch_market_component__ = __webpack_require__("../../../../../src/app/changelly/ch-market/ch-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changelly_service__ = __webpack_require__("../../../../../src/app/changelly/changelly.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangellyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChangellyModule = (function () {
    function ChangellyModule() {
    }
    return ChangellyModule;
}());
ChangellyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__["a" /* MaterialAppModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__ch_market_ch_market_component__["a" /* ChMarketComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__changelly_service__["a" /* ChangellyService */]]
    })
], ChangellyModule);

//# sourceMappingURL=changelly.module.js.map

/***/ }),

/***/ "../../../../../src/app/changelly/changelly.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangellyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangellyService = (function () {
    function ChangellyService(http) {
        this.http = http;
    }
    ChangellyService.prototype.getCurrencies = function () {
        var url = '/api/exchange/changelly/getCurrencies';
        return this.http.get(url).map(function (res) {
            var data = res.json();
            console.log(data);
            return data.map(function (item) {
                return { symbol: item.toUpperCase(), label: item.toUpperCase() };
            });
        });
    };
    ChangellyService.prototype.getExchangeAmount = function (from_to, amount) {
        var url = '/api/exchange/changelly/getExchangeAmount/' + from_to + '/' + amount;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ChangellyService.prototype.getMinAmount = function (from_to) {
        var url = '/api/exchange/changelly/getMinAmount/' + from_to;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ChangellyService.prototype.generateAddress = function (from_to, address) {
        var url = '/api/exchange/changelly/generateAddress/' + from_to + '/' + address;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ChangellyService.prototype.getTransactions = function (symbol, address) {
        var url = '/api/exchange/changelly/getTransactions/' + symbol + '/' + address;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return ChangellyService;
}());
ChangellyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChangellyService);

var _a;
//# sourceMappingURL=changelly.service.js.map

/***/ }),

/***/ "../../../../../src/app/com/market-cap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketCapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import {Observable} from 'rxjs/Observable';
var MarketCapService = (function () {
    //private marketIndexed:{[s:string]:VOExchangeData};
    //private marketIndexedSub:Subject<{[s:string]:VOExchangeData}>;
    // marketIndexed$:Observable<{[s:string]:VOExchangeData}>;
    // private selectedMarketIndexed:{[s:string]:VOExchangeData};
    // private selectedMarketIndexedSub:Subject<{[s:string]:VOExchangeData}>;
    // selectedMarketIndexed$:Observable<{[s:string]:VOExchangeData}>;
    function MarketCapService(http) {
        this.http = http;
        this.timestamp = 0;
        this.allCoinsSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.allCoins$ = this.allCoinsSub.asObservable();
        this.marketsSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.markets$ = this.marketsSub.asObservable();
        this.timestampSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.timestamp$ = this.timestampSub.asObservable();
        this.totalCoinsSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.totalCoins$ = this.totalCoinsSub.asObservable();
        this.totalCoinsSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.totalCoins$ = this.totalCoinsSub.asObservable();
        this.counter = 0;
        this.loadData();
    }
    MarketCapService.prototype.start = function () {
        var _this = this;
        this.interval = setInterval(function () { return _this.loadData(); }, 60000);
        this.loadData();
    };
    MarketCapService.prototype.setData = function (data) {
        var ar = data.payload;
        this.allCoins = ar;
        this.allCoinsSub.next(this.allCoins);
        // console.log(ar);
        this.markets = __WEBPACK_IMPORTED_MODULE_4_lodash__["keyBy"](ar, 'symbol');
        // console.log(this.allCoinsIndexed);
        this.marketsSub.next(this.markets);
        this.timestamp = data.timestamp;
        this.timestampSub.next(this.timestamp);
        console.log(' allCoins   ' + this.allCoins.length);
        this.counter++;
        this.totalCoinsSub.next(this.allCoins.length);
    };
    MarketCapService.prototype.broadcastUpdate = function () {
    };
    MarketCapService.prototype.addMarketCap = function (coins) {
        var data = this.markets;
        coins.forEach(function (item) {
            var market = data[item.symbol];
            if (market)
                for (var str in market)
                    item[str] = market[str];
            else
                console.warn(' cant find symbol ' + item.symbol);
        });
    };
    MarketCapService.prototype.loadData = function (now) {
        var _this = this;
        var url = '/api/all-coins/market/minute';
        this.http.get(url).map(function (res) {
            var data = res.json();
            data.payload = data.payload.map(_this.mapExchangeData);
            return data;
        }).subscribe(function (result) {
            _this.setData(result);
        });
    };
    MarketCapService.prototype.mapExchangeData = function (obj) {
        var data = new __WEBPACK_IMPORTED_MODULE_5__models_app_models__["a" /* VOExchangeData */]();
        for (var str in obj)
            data[str] = isNaN(obj[str]) ? obj[str] : +obj[str];
        data.volume_usd_24h = +obj['24h_volume_usd'];
        delete data['24h_volume_usd'];
        return data;
    };
    MarketCapService.prototype.getCoinMarket = function (symbol) {
        return this.allCoins.find(function (item) {
            return item.symbol == symbol;
        });
    };
    MarketCapService.prototype.stop = function () {
        clearInterval(this.interval);
    };
    return MarketCapService;
}());
MarketCapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MarketCapService);

var _a;
//# sourceMappingURL=market-cap.service.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact-component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-content {\r\n  width: 90%;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n}\r\n.form-content .sd-form-control {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n.form-content textarea.sd-form-control {\r\n  max-width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Contact Reactive Form</h2>\r\n<form (ngSubmit)=\"submitForm()\" [formGroup]=\"contactForm\" novalidate>\r\n  <div class=\"form-content\">\r\n    <label>\r\n      Name:\r\n      <input type=\"text\" formControlName=\"name\" class=\"sd-form-control\" placeholder=\"Enter your name.\">\r\n    </label>\r\n    <label>\r\n      Email:\r\n      <input type=\"email\" formControlName=\"email\" class=\"sd-form-control\" placeholder=\"Enter your email.\">\r\n    </label>\r\n    <label>\r\n      Content:\r\n      <textarea formControlName=\"content\" class=\"sd-form-control\" placeholder=\"Content here.\"></textarea>\r\n    </label>\r\n    <div class=\"form-submit\">\r\n      <button type=\"submit\">Submit</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<div class=\"form-value\">\r\n  Form value:\r\n  <pre>\r\n    {{contactForm.value | json}}\r\n  </pre>\r\n  <p>\r\n    Status: {{contactForm.status}}\r\n  </p>\r\n  <p>\r\n    Valid: {{contactForm.valid}}\r\n  </p>\r\n  <p>Submit then open console to see full form.</p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_CustomValidators__ = __webpack_require__("../../../../../src/app/forms/CustomValidators.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__forms_CustomValidators__["a" /* default */].validateEmail]],
            content: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(10)]]
        });
    };
    ContactComponent.prototype.submitForm = function () {
        console.log(this.contactForm);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact-component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object])
], ContactComponent);

var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/create-watchdog/create-watchdog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-service/create-watchdog/create-watchdog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n<hr/>\n    <table>\n        <tbody>\n        <tr>\n            <td>Market Cap $US</td>\n            <td><small>%</small>1h</td>\n            <td><small>%</small>24h</td>\n            <td><small>%</small>7d</td>\n        </tr>\n        <tr  *ngIf=\"coinMarket\">\n            <td>{{coinMarket.market_cap_usd}}</td>\n            <td>{{coinMarket.percent_change_1h}}</td>\n            <td>{{coinMarket.percent_change_24h}}</td>\n            <td>{{coinMarket.percent_change_7d}}</td>\n        </tr>\n        </tbody>\n    </table>\n\n    <br/>\n    <md-input-container>\n      <small> <input [(ngModel)]=\"watchDog.uid\"  mdInput placeholder=\"ID\"  disabled name=\"uid\"></small>\n    </md-input-container>\n    <md-input-container>\n        <input [(ngModel)]=\"watchDog.label\"  mdInput placeholder=\"Dog Name\" name=\"label\">\n    </md-input-container>\n\n\n    <md-select placeholder=\"Select Coin\" (change)=\"coinSelectChanged($event)\">\n        <md-option *ngFor=\"let coin of coinsAvailable\" [value]=\"coin.symbol\">\n             {{ coin.symbol}} <small>{{ coin.name}}</small>\n        </md-option>\n    </md-select>\n\n    <button md-raised-button color=\"accent\" (click)=\"createDog($event)\">Create</button>\n\n    <hr/>\n    <div>\n        <h4> Watch Dogs </h4> <small>Total {{watchDogs.length}}</small>\n        <table>\n            <tr>\n                <th><button md-button (click)=\"onClickHeader('uid')\">ID</button></th>\n                <th><button md-button (click)=\"onClickHeader('label')\">Name</button></th>\n                <th><button md-button (click)=\"onClickHeader('symbol')\">Symbol</button></th>\n                <th><button md-button (click)=\"onClickHeader('percent_change_1h')\" >1h%</button></th>\n                <th><button md-button (click)=\"onClickHeader('percent_change_24h')\">24h%</button></th>\n                <th><button md-button (click)=\"onClickHeader('percent_change_7d')\" > 7days%</button></th>\n                <th><button md-button (click)=\"onClickHeader('price_usd')\" >$US</button></th>\n                <th><button md-button (click)=\"onClickHeader('rank')\" >Rank</button></th>\n                <td><small>Delete</small></td>\n\n               <!-- <th><button md-button (click)=\"onClickHeader('percent_change_24h')\" >24h%</button></th>\n                <th><button md-button (click)=\"onClickHeader('percent_change_7d')\">7 days%</button></th>\n\n\n                <th><button md-button (click)=\"onClickHeader('symbol')\">Symbol</button></th>-->\n\n            </tr>\n\n            <tbody *ngFor=\"let dog of watchDogs\">\n\n            <tr>\n                <td><small>{{dog.uid}}</small></td>\n                <td>{{dog.label}}</td>\n                <td><b><small>{{dog.symbol}}</small></b></td>\n                <td>{{dog.market?.percent_change_1h}}</td>\n                <td>{{dog.market?.percent_change_24h}}</td>\n                <td>{{dog.market?.percent_change_7d}}</td>\n                <td>{{dog.market?.price_usd}}</td>\n                <td>{{dog.market?.rank}}</td>\n                <td><div (click)=\"onDeleteClick(dog)\"  class=\"fa fa-close\"></div></td>\n\n               <!-- <td>{{item.percent_change_1h}}</td>\n                <td>{{item.percent_change_24h}}</td>\n                <td>{{item.percent_change_7d}}</td>\n                <td>{{item.price_usd}}</td>\n                <td>{{item.rank}}</td>\n                <td>{{item.symbol}}</td>\n                <td>{{item.name}}</td>-->\n            </tr>\n\n            </tbody>\n        </table>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/create-watchdog/create-watchdog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_service_service__ = __webpack_require__("../../../../../src/app/email-service/email-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateWatchdogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateWatchdogComponent = (function () {
    function CreateWatchdogComponent(coinsService, emailService, dialog) {
        this.coinsService = coinsService;
        this.emailService = emailService;
        this.dialog = dialog;
        this.watchDog = {
            label: '',
            uid: '',
            symbol: ''
        };
        this.sortCriteria = 'rank';
        this.asc_desc = 'asc';
    }
    CreateWatchdogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coinsService.selectedCoins$.subscribe(function (res) { return _this.setMarket(res); });
        /*this.coinsService.selectedCoins$.subscribe(res =>{
    
        } */
        this.emailService.watchDogs$.subscribe(function (res) {
            _this.setData(__WEBPACK_IMPORTED_MODULE_2_lodash__["values"](res));
        });
    };
    CreateWatchdogComponent.prototype.onDeleteClick = function (dog) {
        var _this = this;
        console.log(dog);
        var ref = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: {
                title: 'Alert',
                message: 'You want to delete watch dog ' + dog.uid + ' ' + dog.label + '?',
                buttons: ['Yes', 'No']
            } });
        ref.afterClosed().subscribe(function (res) {
            console.log(res);
            if (res === 'Yes')
                _this.emailService.deleteDog(dog);
        });
    };
    CreateWatchdogComponent.prototype.mergeData = function () {
        if (this.marketsRaw && this.watchDogs) {
            var markets_1 = this.marketsRaw;
            var ar = this.watchDogs;
            ar.forEach(function (item) {
                var market = markets_1[item.symbol];
                if (market) {
                    item.price_usd = market.price_usd;
                    item.rank = market.rank;
                    item.percent_change_1h = market.percent_change_1h;
                    item.percent_change_24h = market.percent_change_24h;
                    item.percent_change_7d = market.percent_change_7d;
                    item.market = market;
                }
            });
            this.watchDogs = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](ar, this.sortCriteria, this.asc_desc);
        }
    };
    CreateWatchdogComponent.prototype.setMarket = function (market) {
        this.marketsRaw = market;
        this.coinsAvailable = __WEBPACK_IMPORTED_MODULE_2_lodash__["values"](market);
        this.mergeData();
    };
    CreateWatchdogComponent.prototype.createDog = function () {
        this.watchDog.market = this.coinMarket;
        this.watchDog.uid = this.emailService.createUid(this.watchDog.symbol);
        this.emailService.addDog(this.watchDog);
    };
    CreateWatchdogComponent.prototype.setData = function (ar) {
        //console.log(ar);
        this.watchDogs = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](ar, this.sortCriteria, this.asc_desc);
        console.log('setData  ' + this.sortCriteria + '  ' + this.asc_desc);
        this.mergeData();
    };
    CreateWatchdogComponent.prototype.onClickHeader = function (criteria) {
        if (this.sortCriteria === criteria) {
            if (this.asc_desc === 'asc')
                this.asc_desc = 'desc';
            else
                this.asc_desc = 'asc';
        }
        else
            this.asc_desc = 'asc';
        console.log(this.asc_desc);
        this.sortCriteria = criteria;
        this.setData(this.watchDogs);
    };
    CreateWatchdogComponent.prototype.coinSelectChanged = function (evt) {
        console.log(evt.value);
        var symbol = evt.value;
        var market = this.coinsAvailable.find(function (item) {
            return item.symbol === symbol;
        });
        this.coinMarket = market;
        this.watchDog = {
            label: market.symbol,
            uid: this.emailService.createUid(symbol),
            symbol: market.symbol
        };
        /* let cfg = this.allWalletsService.getCoinConfigBySymbol(event.value);
         if(!cfg) return
         console.log(cfg);
     
         this.wallet.symbol = cfg.symbol;
         this.wallet.network = cfg.network;
         this.wallet.displayName = cfg.displayName;
         let wallets =  this.allWalletsService.getAllWallets();
     
         if(!this.wallet.label) {
     
           let exists = _.filter(wallets, {symbol:this.wallet.symbol});
           this.wallet.label = this.wallet.symbol + ' '+ exists.length;
         }
     
     
     
         if(cfg.contractAddress){
           let network = cfg.network;
           let networkWallets = this.allWalletsService.getMyWalletsBySymbol(network);
     
           if(networkWallets.length){
             let pk = networkWallets[0].privateKey;
             if(!this.wallet.privateKey) this.wallet.privateKey = pk;
     
     
     
           }else{
             this.dialog.open(DialogSimpleComponent, {data:{message:'You have to have wallet on '+ cfg.network}})
           }
     
     
           // let parent:WalletModel = this.waletsService.getWalletBySymbol(cfg.parent);
           // console.log(parent)
           //  if(parent){
     
     
     
         }else {
     
     
         }*/
        //  this.generateAddress();
    };
    return CreateWatchdogComponent;
}());
CreateWatchdogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-create-watchdog',
        template: __webpack_require__("../../../../../src/app/email-service/create-watchdog/create-watchdog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/create-watchdog/create-watchdog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__["a" /* AllCoinsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__email_service_service__["a" /* EmailServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__email_service_service__["a" /* EmailServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdDialog */]) === "function" && _c || Object])
], CreateWatchdogComponent);

var _a, _b, _c;
//# sourceMappingURL=create-watchdog.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/edit-script/edit-script.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-spinner {\r\n    float: left;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 5px 10px 0px -10px;\r\n}\r\n\r\n#ScriptContent{\r\n    background-color: white;\r\n    border: #38dc55 thin solid;\r\n    min-width: 600px;\r\n    min-height: 400px;\r\n    padding: 1em;\r\n    font-size: small;\r\n}\r\n\r\n#SelectTrigger{\r\n    width: 150px;\r\n}\r\n\r\n\r\n#ScriptContentContainer{\r\n    min-width: 600px;\r\n    min-height: 600px;\r\n}\r\n\r\n\r\n.current-changes{\r\n    margin-left: 3em;\r\n    font-family: \"Roboto Condensed\";\r\n}\r\n\r\n#ScriptContent{\r\n    font-family: \"Roboto Condensed\";\r\n    font-weight: bold;\r\n    spellcheck:false;\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-service/edit-script/edit-script.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <section>\n\n        <div style=\" display: flex; flex-direction: row\" >\n            <div id=\"ScriptContentContainer\">\n\n                <span>{{currentDog.uid}}</span>\n\n                <small>{{currentDog.label}}</small>\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n\n                <md-select  [(ngModel)]=\"currentTrigger\" id=\"SelectTrigger\" #selectedTrigger placeholder=\"Select Variable\" >\n                    <md-option [value]=\"'send_notification'\"> <span class=\"fa fa-flash\"></span> Send Notification</md-option>\n                    <md-option *ngFor=\"let myvar of variablesAvailable\" [value]=\"myvar.index\">{{myvar.label}}</md-option>\n                </md-select>\n                <span class=\"fa fa-arrow-left\"> </span>\n                <button md-raised-button color=\"primary\" (click)=\"insertTrigget(selectedTrigger)\">\n                    <span class=\"fa fa-paste\"></span>\n                    Insert\n                </button>\n                <button color=\"accent\" md-raised-button  (click)=\"runScript()\" title=\"Run Script\">\n                    <span class=\"fa fa-flash\"></span>\n                    Run\n                </button>\n                <button md-raised-button color=\"primary\" (click)=\"saveDog($event)\">\n                    <span class=\"fa fa-save\"></span>\n                    Save\n                </button>\n\n\n\n                <div id=\"ScriptContent\"\n                     #scriptContent\n                     contenteditable=\"true\"\n                     spellcheck=\"false\"\n                     (blur)=\"onScriptContentBlur(scriptContent)\"\n                     (change)=\"onScriptContentChange(scriptContent)\">\n                </div>\n            </div>\n\n            <div class=\"current-changes\">\n                <h3>Current Values</h3>\n                <table>\n                    <tbody>\n                    <tr *ngFor=\"let myvar of variablesAvailable\">\n                        <td>{{myvar.index}}</td>\n                        <td>\n                            <input style=\"width: 3em\" type=\"number\" [(ngModel)]=\"myvar.value\"  name=\"value\" />\n\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n\n\n\n\n        <!-- <button md-raised-button color=\"accent\"  (click)=\"testScript(scriptContent)\"><span class=\"fa fa-play\"></span> Test</button>\n         <button md-raised-button  (click)=\"viewSorse($event)\"><span class=\"fa fa-eye\"></span> Source</button>\n-->\n\n\n\n        <!--\n          let prev_usd_percent_change_1h:number, prev_usd_percent_change_24h:number, prev_usd_percent_change_7d:number,\nusd_percent_change_1h:number, usd_percent_change_24h:number, usd_percent_change_7d:number;\n        -->\n\n\n\n\n\n    </section>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/edit-script/edit-script.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_service_service__ = __webpack_require__("../../../../../src/app/email-service/email-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__run_watchdogs_script_analytics__ = __webpack_require__("../../../../../src/app/email-service/run-watchdogs/script-analytics.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditScriptComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditScriptComponent = (function () {
    function EditScriptComponent(coinsService, emailService, dialog, snakBar, route) {
        this.coinsService = coinsService;
        this.emailService = emailService;
        this.dialog = dialog;
        this.snakBar = snakBar;
        this.route = route;
        this.emptyDog = {
            uid: '',
            label: '',
            symbol: ''
        };
        this.variablesAvailable = [
            { label: 'percent_change_1h', index: 'percent_change_1h', value: 10 },
            { label: 'percent_change_24h', index: 'percent_change_24h', value: 6 },
            { label: 'percent_change_7d', index: 'percent_change_7d', value: 5 },
            { label: 'prev_percent_change_1h', index: 'prev_percent_change_1h', value: 3 },
            { label: 'prev_percent_change_24h', index: 'prev_percent_change_24h', value: 6 },
            { label: 'prev_percent_change_7d', index: 'prev_percent_change_7d', value: 5 }
        ];
        this.currentDog = this.emptyDog;
    }
    EditScriptComponent.prototype.ngAfterViewInit = function () {
        // console.log();
    };
    EditScriptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var uid = params['uid'];
            uid = uid.toUpperCase();
            console.log(params);
            var dog = _this.emailService.getDogByUid(uid);
            _this.setCurrentDog(dog);
        });
    };
    EditScriptComponent.prototype.runScript = function () {
        var script = this.scriptContent.nativeElement.innerText.toString();
        this.innerHTML = this.scriptContent.nativeElement.innerHTML;
        // console.log(script);
        var ar = this.variablesAvailable;
        var market = {};
        var history = {};
        ar.forEach(function (item) {
            if (item.index.indexOf('prev_') === -1)
                market[item.index] = +item.value;
            else
                history[item.index.substr(5)] = +item.value;
        });
        var dog = {
            market: market,
            marketHistory: [history]
        };
        console.log(dog);
        var results = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__run_watchdogs_script_analytics__["a" /* runDogScript */])(dog, script);
        console.log(results);
        if (results.length) {
            var message = results.join('<br/>');
            var subject = this.currentDog.uid + ' ' + this.currentDog.label + ' ' + this.currentDog.symbol;
            this.emailService.sendNotification(subject, message).subscribe(function (res) {
                console.log(res);
            });
        }
    };
    EditScriptComponent.prototype.insertTextAtCursor = function (text) {
        var sel, range, html;
        console.log(window.getSelection);
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                range.insertNode(document.createTextNode(text));
            }
        } /* else if (document.selection && document.selection.createRange) {
          document.selection.createRange().text = text;
        }*/
    };
    EditScriptComponent.prototype.onScriptContentBlur = function (content) {
        var sel, range, html;
        this.innerHTML = this.scriptContent.nativeElement.innerHTML;
        //this.scriptValue.replace("\t","");
        //this.scriptContent.nativeElement.innerHTML = this.scriptValue;
        //let scriptValue = this.scriptContent.nativeElement.innerHTML;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                this.range = range;
                //range.deleteContents();
                // range.insertNode( document.createTextNode("\t") );
            }
        }
        // console.log(content, this.range);
        // console.log(this.scriptValue);
        // console.log(this.scriptValue.indexOf("\t"));
    };
    EditScriptComponent.prototype.onScriptContentChange = function (content) {
        console.log(content);
    };
    EditScriptComponent.prototype.insertTrigget = function (selector) {
        if (this.range) {
            var action = this.currentTrigger;
            if (action.indexOf('send') !== 0)
                action = ' if (' + action + ' > 0) {     }';
            else
                action = 'send_notification ( "Text of notification goes here" )';
            this.range.insertNode(document.createTextNode(action));
        }
    };
    EditScriptComponent.prototype.setCurrentScript = function (script) {
        // console.log(script.indexOf("\n"));
        var _this = this;
        if (this.scriptContent) {
            console.log('setCurrentScript  ' + script);
            script = script.replace(new RegExp("\n", "g"), '<br/>');
            // console.log('setCurrentScript  ' + script);
            this.scriptContent.nativeElement.innerHTML = script;
        }
        else
            setTimeout(function () { return _this.setCurrentScript(script); }, 2000);
    };
    EditScriptComponent.prototype.getCurrentScript = function () {
        // console.log(this.scriptContent);
        var text = this.scriptContent.nativeElement.innerText.toString();
        //console.log(text)
        return text;
    };
    EditScriptComponent.prototype.setCurrentDog = function (dog) {
        if (dog) {
            var script = (dog && dog.scriptText) ? dog.scriptText : '';
            this.setCurrentScript(script);
            this.currentDog = dog;
        }
        else
            this.currentDog = this.emptyDog;
        console.log(' set dog ', dog);
    };
    EditScriptComponent.prototype.onEditDog = function (dog) {
        console.log(dog);
        this.setCurrentDog(dog);
    };
    EditScriptComponent.prototype.closeDog = function () {
        this.setCurrentDog(null);
    };
    EditScriptComponent.prototype.saveDog = function () {
        if (this.currentDog) {
            var text = this.getCurrentScript();
            this.currentDog.scriptText = text;
            console.log(text);
            this.emailService.saveDog(this.currentDog);
            this.snakBar.open(this.currentDog.label + " Saved!", '', { duration: 3000 });
        }
    };
    return EditScriptComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('scriptContent'),
    __metadata("design:type", Object)
], EditScriptComponent.prototype, "scriptContent", void 0);
EditScriptComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-edit-script',
        template: __webpack_require__("../../../../../src/app/email-service/edit-script/edit-script.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/edit-script/edit-script.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__["a" /* AllCoinsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__email_service_service__["a" /* EmailServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__email_service_service__["a" /* EmailServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], EditScriptComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-script.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/email-all-coins/email-all-coins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".coin-name{\r\n    width: 120px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    font-size: smaller;\r\n    text-overflow: ellipsis;\r\n}\r\n.coin-symbol{\r\n    white-space: nowrap;\r\n    font-size: smaller;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-service/email-all-coins/email-all-coins.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n          <h3>All Coins </h3><small>Total {{allCoinsData.length}}</small>\n            <table>\n                <tr>\n                    <th>#</th>\n                    <th>Symbol</th>\n                    <th>Name</th>\n                    <th (click)=\"onClickHeader('percent_change_1h')\">1h%</th>\n                    <th (click)=\"onClickHeader('percent_change_24h')\" >24h%</th>\n                    <th (click)=\"onClickHeader('percent_change_7d')\">7 days%</th>\n                    <th (click)=\"onClickHeader('price_usd')\">$US</th>\n                    <th (click)=\"onClickHeader('rank')\">Rank</th>\n                    <th (click)=\"onClickHeader('symbol')\">Symbol</th>\n\n                    <th (click)=\"onClickHeader('market_cap_usd')\">market cap usd</th>\n                </tr>\n\n                <tbody *ngFor=\"let item of allCoinsData\">\n                <tr>\n                    <td><input type=\"checkbox\"  (change)=\"onCoinSelected($event, item)\" [checked]=\"item.selected\"   name=\"selected\"/></td>\n                    <td class=\"coin-symbol\">{{item.symbol}}</td>\n                    <td class=\"coin-name\">{{item.name}}</td>\n                    <td>{{item.percent_change_1h}}</td>\n                    <td>{{item.percent_change_24h}}</td>\n                    <td>{{item.percent_change_7d}}</td>\n                    <td>{{item.price_usd}}</td>\n                    <td>{{item.rank}}</td>\n                    <td>{{item.symbol}}</td>\n                    <td>{{item.market_cap_usd}}</td>\n\n                </tr>\n\n                </tbody>\n            </table>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/email-service/email-all-coins/email-all-coins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailAllCoinsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailAllCoinsComponent = (function () {
    function EmailAllCoinsComponent(coinsService) {
        this.coinsService = coinsService;
        this.sortCriteria = 'rank';
        this.asc_desc = 'asc';
    }
    EmailAllCoinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coinsService.allCoins$.subscribe(function (res) { return _this.allCoinsData = res; });
    };
    EmailAllCoinsComponent.prototype.onCoinSelected = function (event, coin) {
        console.log(event.target.checked, coin);
        if (event.target.checked) {
            this.coinsService.addSelected(coin.symbol);
        }
        else {
            this.coinsService.removeSelected(coin.symbol);
        }
        /*
            let selectedCoinsNames = this.allCoins.reduce(function (result, item) {
              if(item.selected)  result.push(item.symbol);
              return result;
            },[]);
    
    
            this.selectedCoinsNamesChange.emit(selectedCoinsNames);*/
    };
    EmailAllCoinsComponent.prototype.onClickHeader = function (criteria) {
        console.log(criteria);
        if (this.sortCriteria === criteria) {
            if (this.asc_desc === 'asc')
                this.asc_desc = 'desc';
            else
                this.asc_desc = 'asc';
        }
        else
            this.asc_desc = 'asc';
        console.log(this.asc_desc);
        this.allCoinsData = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](this.allCoinsData, criteria, this.asc_desc);
        this.sortCriteria = criteria;
    };
    return EmailAllCoinsComponent;
}());
EmailAllCoinsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-email-all-coins',
        template: __webpack_require__("../../../../../src/app/email-service/email-all-coins/email-all-coins.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/email-all-coins/email-all-coins.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__["a" /* AllCoinsService */]) === "function" && _a || Object])
], EmailAllCoinsComponent);

var _a;
//# sourceMappingURL=email-all-coins.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/email-main/email-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-service/email-main/email-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav>\n        <md-toolbar>\n            <a md-button routerLink='/email-service/all-coins'>All Coins</a>\n            <a md-button routerLink='/email-service/selected-coins'>Seleced Coins</a>\n            <a md-button  routerLink='/email-service/create-watch-dog'>Create Watch Dog</a>\n            <a md-button routerLink='/email-service/edit-script/eth_1'>Edit Script</a>\n            <a md-button routerLink='/email-service/run-watch-dog'>Run</a>\n        </md-toolbar>\n    </nav>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/email-main/email-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailMainComponent = (function () {
    function EmailMainComponent() {
    }
    EmailMainComponent.prototype.ngOnInit = function () {
    };
    return EmailMainComponent;
}());
EmailMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-email-main',
        template: __webpack_require__("../../../../../src/app/email-service/email-main/email-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/email-main/email-main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EmailMainComponent);

//# sourceMappingURL=email-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <h4> Selected Coins </h4> <small>Total {{selectedCoins.length}}</small>\n    <table>\n        <tr>\n            <th><button md-button (click)=\"onClickHeader('market_cap_usd')\">market cap usd</button></th>\n            <th><button md-button (click)=\"onClickHeader('percent_change_1h')\">1h%</button></th>\n            <th><button md-button (click)=\"onClickHeader('percent_change_24h')\" >24h%</button></th>\n            <th><button md-button (click)=\"onClickHeader('percent_change_7d')\">7 days%</button></th>\n            <th><button md-button (click)=\"onClickHeader('price_usd')\">$US</button></th>\n            <th><button md-button (click)=\"onClickHeader('rank')\">Rank</button></th>\n            <th><button md-button (click)=\"onClickHeader('symbol')\">Symbol</button></th>\n        </tr>\n\n        <tbody *ngFor=\"let item of selectedCoins\">\n\n        <tr>\n            <td>{{item.market_cap_usd}}</td>\n            <td>{{item.percent_change_1h}}</td>\n            <td>{{item.percent_change_24h}}</td>\n            <td>{{item.percent_change_7d}}</td>\n            <td>{{item.price_usd}}</td>\n            <td>{{item.rank}}</td>\n            <td>{{item.symbol}}</td>\n            <td>{{item.name}}</td>\n        </tr>\n\n        </tbody>\n    </table>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailSelectedCoinsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailSelectedCoinsComponent = (function () {
    function EmailSelectedCoinsComponent(allCoinsService) {
        this.allCoinsService = allCoinsService;
        this.selectedCoins = [];
        this.sortCriteria = 'rank';
        this.asc_desc = 'asc';
    }
    EmailSelectedCoinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCoinsService.selectedCoins$.subscribe(function (res) { return _this.setCoins(__WEBPACK_IMPORTED_MODULE_2_lodash__["values"](res)); });
    };
    EmailSelectedCoinsComponent.prototype.setCoins = function (ar) {
        this.selectedCoins = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](ar, this.sortCriteria, this.asc_desc);
    };
    EmailSelectedCoinsComponent.prototype.onClickHeader = function (criteria) {
        console.log(criteria);
        if (this.sortCriteria === criteria) {
            if (this.asc_desc === 'asc')
                this.asc_desc = 'desc';
            else
                this.asc_desc = 'asc';
        }
        else
            this.asc_desc = 'asc';
        console.log(this.asc_desc);
        this.sortCriteria = criteria;
        this.setCoins(this.selectedCoins);
    };
    return EmailSelectedCoinsComponent;
}());
EmailSelectedCoinsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-email-selected-coins',
        template: __webpack_require__("../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__["a" /* AllCoinsService */]) === "function" && _a || Object])
], EmailSelectedCoinsComponent);

var _a;
//# sourceMappingURL=email-selected-coins.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/email-service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watch_dog_watch_dog_component__ = __webpack_require__("../../../../../src/app/email-service/watch-dog/watch-dog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watch_dog_service__ = __webpack_require__("../../../../../src/app/email-service/watch-dog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_watchdog_create_watchdog_component__ = __webpack_require__("../../../../../src/app/email-service/create-watchdog/create-watchdog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__run_watchdogs_run_watchdogs_component__ = __webpack_require__("../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__email_main_email_main_component__ = __webpack_require__("../../../../../src/app/email-service/email-main/email-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_all_coins_email_all_coins_component__ = __webpack_require__("../../../../../src/app/email-service/email-all-coins/email-all-coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__email_selected_coins_email_selected_coins_component__ = __webpack_require__("../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__email_service_service__ = __webpack_require__("../../../../../src/app/email-service/email-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_script_edit_script_component__ = __webpack_require__("../../../../../src/app/email-service/edit-script/edit-script.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailServiceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var EmailServiceModule = (function () {
    function EmailServiceModule() {
    }
    return EmailServiceModule;
}());
EmailServiceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_10__material_material_app_module__["a" /* MaterialAppModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__watch_dog_watch_dog_component__["a" /* WatchDogComponent */], __WEBPACK_IMPORTED_MODULE_4__create_watchdog_create_watchdog_component__["a" /* CreateWatchdogComponent */], __WEBPACK_IMPORTED_MODULE_5__run_watchdogs_run_watchdogs_component__["a" /* RunWatchdogsComponent */], __WEBPACK_IMPORTED_MODULE_6__email_main_email_main_component__["a" /* EmailMainComponent */], __WEBPACK_IMPORTED_MODULE_7__email_all_coins_email_all_coins_component__["a" /* EmailAllCoinsComponent */], __WEBPACK_IMPORTED_MODULE_8__email_selected_coins_email_selected_coins_component__["a" /* EmailSelectedCoinsComponent */], __WEBPACK_IMPORTED_MODULE_13__edit_script_edit_script_component__["a" /* EditScriptComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__watch_dog_service__["a" /* WatchDogService */],
            __WEBPACK_IMPORTED_MODULE_12__email_service_service__["a" /* EmailServiceService */]
        ]
    })
], EmailServiceModule);

//# sourceMappingURL=email-service.module.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/email-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_auth_http_service__ = __webpack_require__("../../../../../src/app/login/auth-http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailServiceService = (function () {
    function EmailServiceService(http) {
        var _this = this;
        this.http = http;
        this.watchDogsSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.watchDogs$ = this.watchDogsSub.asObservable();
        http.user$.subscribe(function (user) { return _this.user = user; });
        this.loadWatchDogs();
    }
    EmailServiceService.prototype.saveData = function () {
        var tosave = []; //=  _.cloneDeep(this.watchDogs);
        // console.log(dogs);
        for (var str in this.watchDogs) {
            var item = this.watchDogs[str];
            tosave.push({
                uid: str,
                label: item.label,
                description: item.description,
                symbol: item.symbol,
                scriptText: item.scriptText
            });
        }
        localStorage.setItem('watch-dogs', JSON.stringify(tosave));
    };
    EmailServiceService.prototype.loadWatchDogs = function () {
        var str = localStorage.getItem('watch-dogs');
        this.watchDogs = {};
        if (str)
            try {
                var saved = JSON.parse(str);
                this.watchDogs = __WEBPACK_IMPORTED_MODULE_2_lodash__["keyBy"](saved, 'uid');
            }
            catch (e) {
                console.error(e);
            }
        this.watchDogsSub.next(this.watchDogs);
    };
    EmailServiceService.prototype.addDog = function (dog) {
        if (!this.watchDogs[dog.uid]) {
            this.watchDogs[dog.uid] = dog;
            this.watchDogsSub.next(this.watchDogs);
            this.saveData();
        }
        else
            throw new Error(' Exists ' + dog.uid);
        // this.watchDogs.push(dog)
    };
    EmailServiceService.prototype.createUid = function (symbol) {
        var i = 0;
        while (this.watchDogs[symbol + '_' + (++i)])
            ;
        return symbol + '_' + i;
    };
    EmailServiceService.prototype.deleteDog = function (dog) {
        delete this.watchDogs[dog.uid];
        this.saveData();
        this.watchDogsSub.next(this.watchDogs);
    };
    EmailServiceService.prototype.saveDog = function (currentDog) {
        var uid = currentDog.uid;
        this.watchDogs[uid] = currentDog;
        this.saveData();
    };
    EmailServiceService.prototype.getDogByUid = function (uid) {
        if (!this.watchDogs)
            this.loadWatchDogs();
        console.log(this.watchDogs);
        return this.watchDogs[uid];
    };
    EmailServiceService.prototype.sendNotification = function (subject, message) {
        var url = '/api/send-notification';
        var payload = {
            email: this.user.email,
            subject: subject,
            message: message
        };
        console.log(' sendNotification ' + url, payload);
        return this.http.post(url, payload).map(function (res) { return res.json(); });
    };
    return EmailServiceService;
}());
EmailServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__login_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], EmailServiceService);

var _a;
//# sourceMappingURL=email-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-spinner {\r\n    float: left;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 5px 10px 0px -10px;\r\n}\r\n\r\n#ScriptContent{\r\n    background-color: white;\r\n    border: #38dc55 thin solid;\r\n    min-width: 600px;\r\n    min-height: 400px;\r\n    padding: 1em;\r\n    font-size: small;\r\n}\r\n\r\n#SelectTrigger{\r\n    width: 150px;\r\n}\r\n\r\n\r\n#ScriptContentContainer{\r\n    min-width: 600px;\r\n    min-height: 600px;\r\n}\r\n\r\n\r\n.current-changes{\r\n    margin-left: 3em;\r\n    font-family: \"Roboto Condensed\";\r\n}\r\n\r\n#ScriptContent{\r\n    font-family: \"Roboto Condensed\";\r\n    font-weight: bold;\r\n    spellcheck:false;\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n      <section>\n        <h4> Watch Dogs </h4>\n        <small>Total {{watchDogs.length}}</small>\n        <button color=\"accent\" md-raised-button  (click)=\"startRefreshTimer()\" title=\"{{start_stop}}\">\n            <span *ngIf=\"!isRunning\" class=\"fa fa-play\"></span>\n            <md-spinner *ngIf=\"isRunning\" mode=\"determinate\" value=\"+{{seconds}}\"></md-spinner>\n            <span *ngIf=\"isRunning\" class=\"fa fa-pause\"></span>\n        </button>\n\n        <table>\n            <tr>\n                <th><button md-button >Setup</button></th>\n                <th><button md-button (click)=\"onClickHeader('uid')\">ID</button></th>\n                <th><button md-button (click)=\"onClickHeader('label')\">Name</button></th>\n               <!-- <th><button md-button (click)=\"onClickHeader('symbol')\">Symbol</button></th>-->\n                <th><button md-button (click)=\"onClickHeader('percent_change_1h')\" >1h%</button></th>\n                <th><button md-button (click)=\"onClickHeader('percent_change_24h')\">24h%</button></th>\n                <th><button md-button (click)=\"onClickHeader('percent_change_7d')\" > 7days%</button></th>\n                <th><button md-button (click)=\"onClickHeader('price_usd')\" >$US</button></th>\n                <th><button md-button (click)=\"onClickHeader('rank')\" >Rank</button></th>\n            </tr>\n\n            <tbody *ngFor=\"let dog of watchDogs\">\n\n            <tr>\n                <td><div class=\"fa fa-edit\" (click)=\"onEditDog(dog)\"></div></td>\n                <td><small>{{dog.uid}}</small></td>\n                <td>{{dog.label}}</td>\n                <!--<td><b><small>{{dog.symbol}}</small></b></td>-->\n                <td>{{dog.percent_change_1h}}</td>\n                <td>{{dog.percent_change_24h}}</td>\n                <td>{{dog.percent_change_7d}}</td>\n                <td>{{dog.price_usd}}</td>\n                <td>{{dog.rank}}</td>\n            </tr>\n\n            </tbody>\n        </table>\n\n    </section>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_service_service__ = __webpack_require__("../../../../../src/app/email-service/email-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__script_analytics__ = __webpack_require__("../../../../../src/app/email-service/run-watchdogs/script-analytics.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunWatchdogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RunWatchdogsComponent = (function () {
    function RunWatchdogsComponent(coinsService, emailService, dialog, snakBar) {
        this.coinsService = coinsService;
        this.emailService = emailService;
        this.dialog = dialog;
        this.snakBar = snakBar;
        this.sortCriteria = 'rank';
        this.asc_desc = 'asc';
        this.isSource = false;
        this.start_stop = "Start Refresh Timer";
        this.errors = [];
    }
    RunWatchdogsComponent.prototype.ngAfterViewInit = function () {
        // console.log();
    };
    RunWatchdogsComponent.prototype.runAnalytics = function () {
        var ar = this.watchDogs;
        var results = [];
        ar.forEach(function (item) {
            var script = item.scriptText;
            if (script) {
                var res = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__script_analytics__["a" /* runDogScript */])(item, script);
                if (res.length)
                    results = results.concat(res);
            }
        });
    };
    RunWatchdogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coinsService.selectedCoins$.subscribe(function (res) { return _this.setMarket(res); });
        this.emailService.watchDogs$.subscribe(function (res) { return _this.setDogs(res); });
    };
    RunWatchdogsComponent.prototype.setMarket = function (markets) {
        this.markets = markets;
        this.mergeData();
    };
    RunWatchdogsComponent.prototype.setDogs = function (dogs) {
        this.dogs = dogs;
        this.watchDogs = __WEBPACK_IMPORTED_MODULE_4_lodash__["orderBy"](__WEBPACK_IMPORTED_MODULE_4_lodash__["values"](dogs), this.sortCriteria, this.asc_desc);
        this.mergeData();
    };
    RunWatchdogsComponent.prototype.startRefreshTimer = function () {
        var _this = this;
        if (this.start_stop === 'Start Refresh Timer') {
            this.start_stop = 'Stop Refresh Timer';
            this.isRunning = true;
            this.seconds = 30;
            this.interval = setInterval(function () { _this.seconds++; }, 1000);
            this.coinsService.start();
        }
        else {
            this.start_stop = 'Start Refresh Timer';
            this.seconds = 0;
            clearInterval(this.interval);
            this.isRunning = false;
            this.coinsService.stop();
        }
    };
    RunWatchdogsComponent.prototype.saveError = function (error) {
        this.errors.push(error);
    };
    RunWatchdogsComponent.prototype.mergeData = function () {
        var _this = this;
        if (this.markets && this.watchDogs) {
            var markets_1 = this.markets;
            var time_1 = new Date().toLocaleTimeString();
            var errors_1 = [];
            var ar = this.watchDogs;
            ar.forEach(function (item) {
                var market = markets_1[item.symbol];
                if (market) {
                    if (!item.marketHistory)
                        item.marketHistory = [];
                    else
                        item.marketHistory.push(item.market);
                    if (item.marketHistory.length > 100)
                        item.marketHistory.shift();
                    if (!item.price_usd_history)
                        item.price_usd_history = [];
                    else
                        item.price_usd_history.push({
                            time: item.time,
                            value: item.price_usd
                        });
                    if (item.price_usd_history.length > 100)
                        item.price_usd_history.shift();
                    item.time = time_1;
                    item.market = market;
                    item.price_usd = market.price_usd;
                    item.rank = market.rank;
                    item.percent_change_1h = market.percent_change_1h;
                    item.percent_change_24h = market.percent_change_24h;
                    item.percent_change_7d = market.percent_change_7d;
                }
                else
                    errors_1.push('Error:12345 No Marlet for ' + item.symbol);
            });
            this.seconds = 30;
            setTimeout(function () { return _this.runAnalytics(); }, 500);
            //this.watchDogs  = _.orderBy(ar, this.sortCriteria, this.asc_desc);
        }
    };
    RunWatchdogsComponent.prototype.onClickHeader = function (criteria) {
        if (this.sortCriteria === criteria) {
            if (this.asc_desc === 'asc')
                this.asc_desc = 'desc';
            else
                this.asc_desc = 'asc';
        }
        else
            this.asc_desc = 'asc';
        //console.log(this.asc_desc);
        this.sortCriteria = criteria;
        this.watchDogs = __WEBPACK_IMPORTED_MODULE_4_lodash__["orderBy"](this.watchDogs, this.sortCriteria, this.asc_desc);
    };
    return RunWatchdogsComponent;
}());
RunWatchdogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-run-watchdogs',
        template: __webpack_require__("../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ss_browse_all_coins_service__["a" /* AllCoinsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__email_service_service__["a" /* EmailServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__email_service_service__["a" /* EmailServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSnackBar */]) === "function" && _d || Object])
], RunWatchdogsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=run-watchdogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/run-watchdogs/script-analytics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = runDogScript;

function runDogScript(dog, script) {
    var results = [];
    var send_notification = function (text) {
        results.push(text);
    };
    var prev_percent_change_1h, prev_percent_change_24h, prev_percent_change_7d, percent_change_1h, percent_change_24h, percent_change_7d;
    var market = dog.market;
    var history = dog.marketHistory;
    var prev_market = __WEBPACK_IMPORTED_MODULE_0_lodash__["last"](history);
    if (prev_market) {
        prev_percent_change_1h = prev_market.percent_change_1h;
        prev_percent_change_24h = prev_market.percent_change_24h;
        prev_percent_change_7d = prev_market.percent_change_7d;
    }
    percent_change_1h = market.percent_change_1h;
    percent_change_24h = market.percent_change_24h;
    percent_change_7d = market.percent_change_7d;
    eval(script);
    return results;
}
//# sourceMappingURL=script-analytics.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/watch-dog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchDogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WatchDogService = (function () {
    function WatchDogService() {
    }
    return WatchDogService;
}());
WatchDogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WatchDogService);

//# sourceMappingURL=watch-dog.service.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/watch-dog/watch-dog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-service/watch-dog/watch-dog.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  watch-dog works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/watch-dog/watch-dog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_auth_http_service__ = __webpack_require__("../../../../../src/app/login/auth-http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchDogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WatchDogComponent = (function () {
    function WatchDogComponent(auth) {
        this.auth = auth;
    }
    WatchDogComponent.prototype.ngOnInit = function () {
        this.auth.setLastVisited();
    };
    return WatchDogComponent;
}());
WatchDogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-watch-dog',
        template: __webpack_require__("../../../../../src/app/email-service/watch-dog/watch-dog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/watch-dog/watch-dog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], WatchDogComponent);

var _a;
//# sourceMappingURL=watch-dog.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchange-ss/exchange-ss.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scrollContent{\r\n   /* background-color: #333;*/\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n.scrollContent p {\r\n    display: inline-block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px;\r\n    text-decoration: none;\r\n}\r\n\r\nmd-spinner {\r\n    float: left;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 2px 5px 0px -15px;\r\n}\r\n\r\n.green{\r\n    color: green;\r\n}\r\n.red{\r\n    color: red;\r\n}\r\n\r\n\r\ntable{\r\n    width: 100%;\r\n}\r\ntable th{\r\n    text-align: left;\r\n}\r\n\r\ntable td{\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 5px;\r\n\r\n}\r\n\r\ntable .history{\r\n    font-size: 10px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchange-ss/exchange-ss.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Exchange <small>{{counter}}</small> <button md-raised-button  (click)=\"startStop($event)\">\n        <md-spinner *ngIf=\"active\" color=\"accent\" mode=\"determinate\" value=\"{{seconds}}\"></md-spinner> {{start_stop}} </button></h2>\n\n    <div>\n        <h3>Wallets</h3>\n\n        <table>\n            <tr><th>Wallet</th><th>Amount</th><th>Price $US</th><th> History $US</th><th>Ptice mB</th><th>1h</th><th>24h</th><th>7d</th></tr>\n            <tr *ngFor=\"let wallet of myWallets\" >\n                <td>{{wallet.label}}</td>\n                <td (click)=\"onUsdClick(wallet)\">${{wallet.usd}} <span (click)=\"updateBalance(wallet)\" class=\"fa fa-refresh\"></span></td>\n                <td>{{wallet.market.price_usd.toFixed(2)}}</td>\n                <td class=\"history\">{{wallet.analitics.price_usd_historyDisplay}}</td>\n                <td>{{(wallet.market.price_btc*1000).toFixed(2)}}</td>\n                <td [style.color] = \"(wallet.market.percent_change_1h > 0)? 'green' : 'red'\">{{wallet.market.percent_change_1h}}</td>\n                <td [style.color] = \"(wallet.market.percent_change_24h > 0)? 'green' : 'red'\">{{wallet.market.percent_change_24h}}</td>\n                <td [style.color] = \"(wallet.market.percent_change_7d > 0)? 'green' : 'red'\">{{wallet.market.percent_change_7d}}</td>\n\n\n            </tr>\n        </table>\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchange-ss/exchange-ss.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ss_browse_all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__send_alert_service__ = __webpack_require__("../../../../../src/app/exchange-ss/send-alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeSsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExchangeSsComponent = (function () {
    function ExchangeSsComponent(api, allWallets, coinsService, sendAlertService) {
        this.api = api;
        this.allWallets = allWallets;
        this.coinsService = coinsService;
        this.sendAlertService = sendAlertService;
        this.start_stop = 'Start';
        this.tollerance = 5;
    }
    ExchangeSsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allWallets.myWallets$.subscribe(function (wallets) {
            _this._myWallets = wallets;
            _this.refreshData();
        });
        /*this.coinsService.selectedMarketIndexed$.subscribe(market =>{
    
          this.market = market;
          this.refreshData();
    
    
    
        })*/
        // this.exchangeService.init();
        //this.exchangeService.myWallets$.subscribe(res=>this.myWallets= res);
        //this.exchangeService.myCoins$.subscribe(res=>{
        //  console.log(res);
        // this.myCoins = res
        // });
    };
    ExchangeSsComponent.prototype.refreshData = function () {
        /* if(!this.market || !this._myWallets) return;
     
         let market = this.market;
     
         let wallets = this._myWallets;
         this.counter = this.allCoins.counter;
         this.seconds = 30;
         let tollerance = 100/this.tollerance;
         let alerts:any[] = [];
         wallets.forEach(function (wallet) {
     
           let newMarket =  market[wallet.symbol];
     
           let newUsd = newMarket.price_usd;
     
           let newBTC = (newMarket.price_btc/1000);
     
           if(!wallet.analitics) wallet.analitics={price_usd_history:[newUsd], price_btc_history:[newBTC], price_usd_historyDisplay:''};
     
           let usdHistory = wallet.analitics.price_usd_history;
           let lastUsd = usdHistory[usdHistory.length-1];
     
           let report
           if(Math.abs(newUsd - lastUsd) > lastUsd*tollerance){
             usdHistory.push(newUsd);
             //if(ar1.length>10) ar1.shift();
     
     
             wallet.analitics.price_usd_historyDisplay = usdHistory.map(function (item) {
               return item.toFixed(2);
             }).toString();
     
             report = {
               symbol:newMarket.symbol,
               history: wallet.analitics.price_usd_historyDisplay
     
             }
           }
     
     
           console.log(wallet.analitics.price_usd_history);
           wallet.market = newMarket;
     
           wallet.usd =  (wallet.market.price_usd * wallet.balanceDisplay).toFixed(2);
           if(report) {
             report.have = wallet.usd;
             alerts.push(report)
           }
     
         });
     
         if(alerts.length)this.sendAlertService.sendMarketChange(alerts)
         this.myWallets = wallets;
     */
    };
    ExchangeSsComponent.prototype.startStop = function () {
        var _this = this;
        if (this.start_stop === 'Start') {
            this.start_stop = 'Stop';
            this.active = true;
            this.seconds = 30;
            this.interval = setInterval(function () { _this.seconds++; }, 1000);
            this.coinsService.start();
        }
        else {
            this.start_stop = 'Start';
            this.seconds = 0;
            clearInterval(this.interval);
            this.active = false;
            this.coinsService.stop();
        }
    };
    ExchangeSsComponent.prototype.updateBalance = function (wallet) {
        this.api.getBalance(wallet.symbol, wallet.address).subscribe(function (balance) {
            console.log(balance);
        });
        // this.exchangeService.updateBalance(wallet);
    };
    ExchangeSsComponent.prototype.onUsdClick = function (wallet) {
    };
    return ExchangeSsComponent;
}());
ExchangeSsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-exchange-ss',
        template: __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_server_service__["a" /* ApiServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_server_service__["a" /* ApiServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ss_browse_all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ss_browse_all_coins_service__["a" /* AllCoinsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__send_alert_service__["a" /* SendAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__send_alert_service__["a" /* SendAlertService */]) === "function" && _d || Object])
], ExchangeSsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=exchange-ss.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchange-ss/exchange-ss.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ss_browse_all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeSsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExchangeSsService = (function () {
    function ExchangeSsService(allWallets, allCoinsService, api) {
        var _this = this;
        this.allWallets = allWallets;
        this.allCoinsService = allCoinsService;
        this.api = api;
        this.myWalletsSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.myWallets$ = this.myWalletsSub.asObservable();
        allWallets.myWallets$.subscribe(function (res) {
            _this.myWallets = res;
            _this.myCoinsSymbols = _this.filterWalletsSymbolsUnique(res);
            _this.myWalletsSub.next(_this.myWallets);
            _this.populateCoins();
        }); //this.walletsSub.asObservable();
        this.myCoinsSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.myCoins$ = this.myCoinsSub.asObservable();
        //allWallets.loadConfig();
        //allWallets.loadWallets()
        allCoinsService.allCoins$.subscribe(function (res) {
            _this.allCoins = res;
            _this.populateCoins();
        });
        allCoinsService.loadData();
    }
    ExchangeSsService.prototype.updateBalance = function (wallet) {
        this.api.getBalance(wallet.symbol, wallet.address).subscribe(function (res) {
            console.log(res);
        });
    };
    ExchangeSsService.prototype.populateCoins = function () {
        var coins = this.allCoins;
        if (!coins)
            return;
        var ar = [];
        var symbols = this.myCoinsSymbols;
        coins.forEach(function (coin) {
            if (symbols.indexOf(coin.symbol) !== -1)
                ar.push(coin);
        });
        this.myCoins = ar;
        this.myCoinsSub.next(this.myCoins);
    };
    ExchangeSsService.prototype.filterWalletsSymbolsUnique = function (wallets) {
        var ar = [];
        wallets.forEach(function (wallet) {
            if (ar.indexOf(wallet.symbol) === -1)
                ar.push(wallet.symbol);
        });
        return ar;
    };
    ExchangeSsService.prototype.init = function () {
    };
    return ExchangeSsService;
}());
ExchangeSsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ss_browse_all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ss_browse_all_coins_service__["a" /* AllCoinsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__api_server_service__["a" /* ApiServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_server_service__["a" /* ApiServerService */]) === "function" && _c || Object])
], ExchangeSsService);

var _a, _b, _c;
//# sourceMappingURL=exchange-ss.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchange-ss/send-alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendAlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SendAlertService = (function () {
    function SendAlertService(http) {
        this.http = http;
        this.tollerance = 5;
        this.change_1h = 10;
        this.chamge_24h = 10;
    }
    SendAlertService.prototype.comparePriceUsd = function (newVal, oldVal, tolerance) {
        var newUsd = newVal.price_usd;
        var oldUsd = oldVal.price_usd;
        return (Math.abs(newUsd - oldUsd) > oldUsd * tolerance) ? newUsd : 0;
    };
    /* comparePrice1h(newVal:VOExchangeData, oldVal:VOExchangeData, tolerance:number):number{
   
       let newV = newVal.percent_change_1h;
       let oldV= oldVal.percent_change_1h;
   
       return (Math.abs(newV - oldV) > oldUsd * tolerance) ? newUsd:0
   
     }*/
    SendAlertService.prototype.analiseData = function (newMarket) {
        if (!this.marketsHistory) {
            this.marketsHistory = [newMarket];
            return;
        }
        var alerts = [];
        var lastMarket = this.marketsHistory[this.marketsHistory.length - 1];
        var tollerance = 100 / this.tollerance;
        for (var str in newMarket) {
            var newM = newMarket[str];
            var newPrice = this.comparePriceUsd(newM, lastMarket[str], tollerance);
            if (newPrice) {
                alerts.push({
                    symbol: str,
                    lastPrice: lastMarket[str].price_usd,
                    newPrice: newMarket[str].price_usd,
                });
            }
            if (Math.abs(newM.percent_change_1h) > this.change_1h) {
                alerts.push({
                    symbol: str,
                    lastchange_1h: lastMarket[str].percent_change_1h,
                    newchange_1h: newMarket[str].percent_change_1h,
                });
            }
        }
        /*
        
            let alerts:any[] = [];
        
            newMarket.forEach(function (market) {
        
              let newMarket = market[wallet.symbol];
        
              let newUsd = newMarket.price_usd;
        
              let newBTC = (newMarket.price_btc / 1000);
        
              if (!wallet.analitics) wallet.analitics = {
                price_usd_history: [newUsd],
                price_btc_history: [newBTC],
                price_usd_historyDisplay: ''
              };
        
              let usdHistory = wallet.analitics.price_usd_history;
              let lastUsd = usdHistory[usdHistory.length - 1];
        
              let report
              if (Math.abs(newUsd - lastUsd) > lastUsd * tollerance) {
                usdHistory.push(newUsd);
                //if(ar1.length>10) ar1.shift();
        
        
                wallet.analitics.price_usd_historyDisplay = usdHistory.map(function (item) {
                  return item.toFixed(2);
                }).toString();
        
                report = {
                  symbol: newMarket.symbol,
                  history: wallet.analitics.price_usd_historyDisplay
        
                }
              }
        
        
              console.log(wallet.analitics.price_usd_history);
              wallet.market = newMarket;
        
              wallet.usd = (wallet.market.price_usd * wallet.balanceDisplay).toFixed(2);
              if (report) {
                report.have = wallet.usd;
                alerts.push(report)
              }
            })
        */
        this.marketsHistory.push(newMarket);
    };
    SendAlertService.prototype.sendMarketChange = function (data) {
    };
    return SendAlertService;
}());
SendAlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SendAlertService);

var _a;
//# sourceMappingURL=send-alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/forms/CustomValidators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CustomValidators = (function () {
    function CustomValidators() {
    }
    /**
     * sample from http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
     */
    CustomValidators.validateEmail = function (c) {
        var EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return CustomValidators;
}());
/* harmony default export */ __webpack_exports__["a"] = (CustomValidators);
//# sourceMappingURL=CustomValidators.js.map

/***/ }),

/***/ "../../../../../src/app/github/repo-browser/repo-browser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_github_service__ = __webpack_require__("../../../../../src/app/github/shared/github.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoBrowserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepoBrowserComponent = (function () {
    function RepoBrowserComponent(router, github) {
        this.router = router;
        this.github = github;
    }
    RepoBrowserComponent.prototype.searchForOrg = function (orgName) {
        var _this = this;
        this.github.getOrg(orgName)
            .subscribe(function (_a) {
            var name = _a.name;
            console.log(name);
            _this.router.navigate(['/github', orgName]);
        });
    };
    return RepoBrowserComponent;
}());
RepoBrowserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'repo-browser',
        template: "\n      <h3>GitHub Browser</h3>\n      <input type=\"text\" #repoName placeholder=\"Search Github Orgs\" value=\"angular\" />\n      <button (click)=\"searchForOrg(repoName.value)\">Search Orgs</button>\n      <router-outlet></router-outlet>  \n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_github_service__["a" /* GithubService */]) === "function" && _b || Object])
], RepoBrowserComponent);

var _a, _b;
//# sourceMappingURL=repo-browser.component.js.map

/***/ }),

/***/ "../../../../../src/app/github/repo-detail/repo-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/github/repo-detail/repo-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{ repoDetails.full_name }}</h2>\r\n\r\n<pre>this.repoDetails = {{ repoDetails | json }}</pre>\r\n"

/***/ }),

/***/ "../../../../../src/app/github/repo-detail/repo-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_github_service__ = __webpack_require__("../../../../../src/app/github/shared/github.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepoDetailComponent = (function () {
    function RepoDetailComponent(github, route) {
        this.github = github;
        this.route = route;
        this.repoDetails = {};
    }
    RepoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.org = _this.route.snapshot.parent.params['org'];
            _this.repo = params['repo'] || '';
            if (_this.repo) {
                _this.github.getRepoForOrg(_this.org, _this.repo)
                    .subscribe(function (repoDetails) {
                    _this.repoDetails = repoDetails;
                });
            }
        });
    };
    return RepoDetailComponent;
}());
RepoDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'repo-detail',
        styles: [__webpack_require__("../../../../../src/app/github/repo-detail/repo-detail.component.css")],
        template: __webpack_require__("../../../../../src/app/github/repo-detail/repo-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_github_service__["a" /* GithubService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], RepoDetailComponent);

var _a, _b;
//# sourceMappingURL=repo-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/github/repo-list/repo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/github/repo-list/repo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Repo list</h3>\r\n<ul>\r\n\t<li *ngFor=\"let repo of repos | async\">\r\n    <a [routerLink]=\"['/github', repo.owner.login, repo.name]\">\r\n      {{ repo.name }}\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/github/repo-list/repo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_github_service__ = __webpack_require__("../../../../../src/app/github/shared/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RepoListComponent = (function () {
    function RepoListComponent(github, route) {
        this.github = github;
        this.route = route;
    }
    RepoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.org = params['org'];
            if (_this.org) {
                _this.repos = _this.github.getReposForOrg(_this.org);
            }
        });
    };
    return RepoListComponent;
}());
RepoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'repo-list',
        styles: [__webpack_require__("../../../../../src/app/github/repo-list/repo-list.component.css")],
        template: __webpack_require__("../../../../../src/app/github/repo-list/repo-list.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_github_service__["a" /* GithubService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], RepoListComponent);

var _a, _b;
//# sourceMappingURL=repo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/github/shared/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
    }
    GithubService.prototype.getOrg = function (org) {
        return this.makeRequest("orgs/" + org);
    };
    GithubService.prototype.getReposForOrg = function (org) {
        return this.makeRequest("orgs/" + org + "/repos");
    };
    GithubService.prototype.getRepoForOrg = function (org, repo) {
        return this.makeRequest("repos/" + org + "/" + repo);
    };
    GithubService.prototype.makeRequest = function (path) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('per_page', '100');
        var url = "https://api.github.com/" + path;
        return this.http.get(url, { search: params })
            .map(function (res) { return res.json(); });
    };
    return GithubService;
}());
GithubService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GithubService);

var _a;
//# sourceMappingURL=github.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
        this.posts = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.posts$ =  this.homeService.getPosts()
        /* .subscribe(res=>{
          this.posts = res;
          console.log(res);
        },
        console.warn);*/
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'home',
        template: "\n  <div>\n      <h3>Home</h3>\n      <div>\n          Posts\n          <div>\n              <md-list>\n                <md-list-item *ngFor=\"let post of (posts$ | async)\">\n                    <md-icon md-list-icon class=\"fa fa-snowflake-o\"></md-icon>\n                    <md-icon md-list-avatar class=\"fa fa-area-chart\"></md-icon>\n                    <p md-line> {{ post.description }} </p>                                \n                </md-list-item>\n              </md-list>\n          </div>\n      </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {AuthHttp, getToken, getTokenExpiredDate, tokenNotExpired} from '../../../arch/angular2-jwt';
//import {Observable} from 'rxjs/Observable';

/**
 * Created by Vlad on 4/3/2017.
 */
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
    }
    return HomeService;
}());
HomeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HomeService);

var _a;
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/auth-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthHttpService = (function () {
    function AuthHttpService(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.user = null;
        this.userSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.user$ = this.userSub.asObservable();
        this.authenticatedSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.authenticated$ = this.authenticatedSub.asObservable();
        setTimeout(function () { return _this.autoLogin(); }, 2000);
    }
    AuthHttpService.prototype.login = function (email, password) {
        // let sub: Subject<VOUser> = new Subject();
        var url = '/api/login/login';
        return this.http.post(url, { email: email, password: password }).map(function (res) { return res.json(); });
        //return sub.asObservable();
    };
    AuthHttpService.prototype.register = function (email, password) {
        var url = 'api/login/register';
        return this.http.post(url, { email: email, password: password }).map(function (res) { return res.json(); });
    };
    AuthHttpService.prototype.autoLogin = function () {
        var lastVisited = this.getLastVisited();
        var user = this.getUser();
        this.user = user;
        this.dispatchUser();
        if (user && lastVisited && lastVisited !== 'undefined') {
            console.warn(lastVisited);
            //this.router.navigate([lastVisited]);
        }
    };
    AuthHttpService.prototype.dispatchUser = function () {
        this.userSub.next(this.user);
        this.authenticatedSub.next((this.user !== null));
    };
    AuthHttpService.prototype.logout = function () {
        this.user = null;
        this.dispatchUser();
    };
    AuthHttpService.prototype.getToken = function () {
        var user = this.getUser();
        return user ? user.token : null;
    };
    AuthHttpService.prototype.getUser = function () {
        if (!this.user) {
            var str = localStorage.getItem('authentication');
            try {
                if (str)
                    this.user = JSON.parse(atob(str));
                // /   new VOUser(JSON.parse(atob(str)));
            }
            catch (e) {
                console.error(e);
                //this.removeAuthentication();
            }
        }
        return this.user;
    };
    AuthHttpService.prototype.removeAuthentication = function () {
        this.logout();
        localStorage.removeItem('authentication');
    };
    AuthHttpService.prototype.saveUser = function () {
        localStorage.setItem('authentication', btoa(JSON.stringify(this.user)));
    };
    AuthHttpService.prototype.getHeaders = function () {
        if (!this.headers) {
            this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
            var token = this.getToken();
            // console.log('token' , token);
            if (token) {
                this.headers.append('Authorization', token);
                // this.headers.append('token', token);
            }
            // this.headers.append('withCredentials','true');
        }
        return this.headers;
    };
    AuthHttpService.prototype.addHeaders = function (options) {
        if (options)
            options.headers ? options.headers.append('Authorization', this.getToken()) : options.headers = this.getHeaders();
        else
            options = { headers: this.getHeaders(), withCredentials: true };
        // console.log(options);
        return options;
    };
    AuthHttpService.prototype.get = function (url, options) {
        return this.http.get(url, this.addHeaders(options));
    };
    AuthHttpService.prototype.post = function (url, body, options) {
        return this.http.post(url, body, this.addHeaders(options));
    };
    AuthHttpService.prototype.put = function (url, body, options) {
        return this.http.put(url, body, this.addHeaders(options));
    };
    AuthHttpService.prototype.delete = function (url, options) {
        return this.http.delete(url, this.addHeaders(options));
    };
    AuthHttpService.prototype.patch = function (url, body, options) {
        return this.http.patch(url, this.addHeaders(options));
    };
    AuthHttpService.prototype.head = function (url, options) {
        return this.http.head(url, this.addHeaders(options));
    };
    AuthHttpService.prototype.options = function (url, options) {
        return this.http.options(url, this.addHeaders(options));
    };
    AuthHttpService.prototype.setLastVisited = function (url) {
        if (!url)
            url = this.router.url;
        localStorage.setItem('lastVisited', url);
    };
    AuthHttpService.prototype.getLastVisited = function () {
        return localStorage.getItem('lastVisited');
    };
    AuthHttpService.prototype.setUser = function (user) {
        this.user = user;
        this.saveUser();
        this.dispatchUser();
    };
    return AuthHttpService;
}());
AuthHttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], AuthHttpService);

var _a, _b, _c;
//# sourceMappingURL=auth-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/confirm/confirm.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  confirm works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/login/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmComponent = (function () {
    function ConfirmComponent() {
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-confirm',
        template: __webpack_require__("../../../../../src/app/login/confirm/confirm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/confirm/confirm.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConfirmComponent);

//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_confirm_component__ = __webpack_require__("../../../../../src/app/login/confirm/confirm.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__["a" /* MaterialAppModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__confirm_confirm_component__["a" /* ConfirmComponent */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#LoginScreen{\r\n    width: 250px;\r\n    height: 300px;\r\n    margin: auto;\r\n    margin-top: 165px;\r\n}\r\n\r\n#LoginScreen form{\r\n    height: 300px;\r\n    margin-top: 1em;\r\n}\r\n\r\nmd-chip-list{\r\n    position: relative;\r\n}\r\n\r\nmd-chip{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0px;\r\n    width: 150px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"LoginScreen\">\n    <md-tab-group [selectedIndex]=\"selectedTab\">\n        <md-tab label=\"Login\">\n            <form  #f1=\"ngForm\" (ngSubmit)=\"signUp()\"  autocomplete=\"off\" >\n                    <md-list>\n                        <md-list-item>\n                            <md-input-container>\n                                <input #username mdInput [(ngModel)]=\"login.email\"   required\n                                       minlength=\"6\" type=\"text\"  placeholder=\"email\" name=\"email\" type=\"email\"  />\n                            </md-input-container>\n                        </md-list-item>\n\n                        <md-list-item>\n                            <md-input-container>\n                                <input mdInput\n                                       placeholder=\"Password\"\n                                       name=\"password\"\n                                       [(ngModel)]=\"login.password\"\n                                       required\n                                       minlength=\"6\"\n                                       [type]=\"showPass ? 'text': 'password'\"\n                                       style=\"width: 100%\"/>\n                            </md-input-container>\n                        </md-list-item>\n                        <md-list-item>\n                           <md-checkbox #showpass (change)=\"onShowPasswordChanged($event, showpass)\" >Show password</md-checkbox>\n                        </md-list-item>\n\n                        <md-list-item>\n                            <button md-raised-button color=\"accent\" [disabled]=\"!f1.valid\"  (click)=\"onSubmit()\">\n                                Sign In\n                            </button>\n                        </md-list-item>\n                    </md-list>\n\n            </form>\n        </md-tab>\n        <md-tab label=\"Register\">\n            <form  #f2=\"ngForm\" (ngSubmit)=\"signUp()\"  autocomplete=\"off\" >\n\n                <md-list>\n                    <md-list-item>\n                        <md-chip-list  *ngIf=\"exists\">\n                            <md-chip color=\"accent\" selected=\"true\">\n                                User with this email exists\n                                <!--  <br/>\n                                  <a  [routerLink]=\"['/login/forgot-password']\">Reset Password</a>-->\n                            </md-chip>\n\n                        </md-chip-list>\n\n                        <md-input-container>\n                            <input #username mdInput [(ngModel)]=\"login.email\"   required\n                                   minlength=\"6\" type=\"text\"  placeholder=\"email\" name=\"email\" type=\"email\"  />\n                        </md-input-container>\n\n                    </md-list-item>\n\n\n                    <md-list-item>\n                        <md-input-container>\n                            <input mdInput\n                                   placeholder=\"Password\"\n                                   name=\"password\"\n                                   [(ngModel)]=\"login.password\"\n                                   required\n                                   minlength=\"6\"\n                                   [type]=\"showPass ? 'text': 'password'\"\n                                   style=\"width: 100%\"/>\n                        </md-input-container>\n                    </md-list-item>\n                    <md-list-item>\n                        <md-input-container>\n                            <input mdInput\n                                   placeholder=\"Confirm Password\"\n                                   name=\"password\"\n                                   [(ngModel)]=\"confirmPassword\"\n                                   required\n                                   minlength=\"6\"\n                                   [type]=\"showPass ? 'text': 'password'\"\n                                   style=\"width: 100%\"/>\n                        </md-input-container>\n                    </md-list-item>\n                    <md-list-item>\n                        <md-checkbox #showpass (change)=\"onShowPasswordChanged($event, showpass)\" >Show password</md-checkbox>\n                    </md-list-item>\n\n                    <md-list-item>\n                        <button md-raised-button color=\"accent\" [disabled]=\"!f2.valid\"  (click)=\"onRegister()\">\n                            Register\n                        </button>\n                    </md-list-item>\n                </md-list>\n            </form>\n        </md-tab>\n        <md-tab label=\"Forget Password\">\n            <form  #f3=\"ngForm\" (ngSubmit)=\"signUp()\"  autocomplete=\"off\" >\n\n                <md-list>\n                    <md-list-item>\n                        <md-input-container>\n                            <input #username mdInput [(ngModel)]=\"login.email\"   required\n                                   minlength=\"6\" type=\"text\"  placeholder=\"Email\" name=\"email\" type=\"email\"  />\n                        </md-input-container>\n                    </md-list-item>\n\n                    <md-list-item>\n                        <button md-raised-button color=\"accent\" [disabled]=\"!f3.valid\"  (click)=\"onSubmit()\">\n                            Reset Password\n                        </button>\n                    </md-list-item>\n                </md-list>\n\n            </form>\n        </md-tab>\n\n    </md-tab-group>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_http_service__ = __webpack_require__("../../../../../src/app/login/auth-http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, route, authHttp) {
        this.router = router;
        this.route = route;
        this.authHttp = authHttp;
        this.login = { email: 'vladstitov@gmail.com', password: 'zaq12wsx' };
    }
    LoginComponent.prototype.onRegister = function () {
        var _this = this;
        this.exists = false;
        this.authHttp.register(this.login.email, this.login.password).subscribe(function (res) {
            console.log(res);
            if (res.error && res.error === 'exists') {
                setTimeout(function () { _this.exists = false; }, 3000);
                _this.exists = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var topic = params.topic;
            console.log(topic);
            if (topic) {
                switch (topic) {
                    case 'sign-in':
                        _this.selectedTab = 0;
                        break;
                    case 'forgot-password':
                        _this.selectedTab = 2;
                        break;
                    case 'register':
                        _this.selectedTab = 1;
                        break;
                    default:
                        _this.selectedTab = 0;
                        break;
                }
            }
            console.log(_this.selectedTab);
        });
    };
    LoginComponent.prototype.onShowPasswordChanged = function ($evt, chbox) {
        this.showPass = chbox.checked;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authHttp.login(this.login.email, this.login.password).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.authHttp.setUser(res.success);
                //let redirect =  this.authHttp.getLastVisited();// ||'/email-service/watch-dog';
                //if(redirect)this.router.navigate([redirect]);
                //this.fullName = res.firstName + ' ' + res.lastName;
                //setTimeout(()=>this.modal.closeWindow('login success'), 3000);
            }
            else
                console.error(' error login', res);
        });
    };
    LoginComponent.prototype.signUp = function () {
        console.log("Sign Up Data:", this.login);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_http_service__["a" /* AuthHttpService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login2/login2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login2/login2.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <md-card>\n        <md-card-title>\n            Login\n        </md-card-title>\n        <md-input-container>\n            <input [(ngModel)] =\"email\"  mdInput placeholder=\"Email\" type=\"email\" name=\"email\" >\n        </md-input-container>\n        <md-input-container>\n            <input [(ngModel)] =\"mypassword\"  mdInput placeholder=\"Password\" type=\"password\" name=\"mypassword\" >\n        </md-input-container>\n\n                <button  md-raised-button color=\"accent\"  (click)=\"login($event)\">Login</button>\n\n    </md-card>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login2/login2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login2Component = (function () {
    function Login2Component(allWalletsService, router, route) {
        this.allWalletsService = allWalletsService;
        this.router = router;
        this.route = route;
        this.isRemote = true;
    }
    Login2Component.prototype.ngOnInit = function () {
        var path = this.route.snapshot.url[0].path;
        if (path === 'logout') {
            this.allWalletsService.logout();
            this.router.navigate(['/my-wallets']);
        }
    };
    Login2Component.prototype.login = function () {
        if (this.mypassword)
            this.allWalletsService.login(this.email, this.mypassword, this.isRemote);
        console.log(this.mypassword);
        this.router.navigate(['/my-wallets']);
    };
    return Login2Component;
}());
Login2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-login2',
        template: __webpack_require__("../../../../../src/app/login2/login2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login2/login2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], Login2Component);

var _a, _b, _c;
//# sourceMappingURL=login2.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/material-app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialAppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Vlad on 7/3/2017.
 */


var MaterialAppModule = (function () {
    function MaterialAppModule() {
    }
    return MaterialAppModule;
}());
MaterialAppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdChipsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdChipsModule */]
        ]
    })
], MaterialAppModule);

//# sourceMappingURL=material-app.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/app-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VOExchangeData; });
/* unused harmony export UTXO */
/* unused harmony export CoinsAvailable */
/* unused harmony export VOBalance */
/* unused harmony export Analitycs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WalletModel; });
/*
 * Created by Vlad on 7/8/2017.
 */
var VOExchangeData = (function () {
    function VOExchangeData() {
    }
    return VOExchangeData;
}());

var UTXO = (function () {
    function UTXO() {
    }
    return UTXO;
}());

var CoinsAvailable = (function () {
    function CoinsAvailable() {
    }
    return CoinsAvailable;
}());

var VOBalance = (function () {
    function VOBalance() {
    }
    return VOBalance;
}());

var Analitycs = (function () {
    function Analitycs() {
    }
    return Analitycs;
}());

var WalletModel = (function () {
    function WalletModel() {
    }
    return WalletModel;
}());

//# sourceMappingURL=app-models.js.map

/***/ }),

/***/ "../../../../../src/app/poloniex/poloniex-ticker/poloniex-ticker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poloniex/poloniex-ticker/poloniex-ticker.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>Poloniex</h3>\n    <section>\n        <table>\n            <tr>\n                <th>Pair</th>\n                <th>Last</th>\n                <th>High</th>\n                <th>Low</th>\n                <th>% Change</th>\n\n            </tr>\n            <tbody>\n            <tr *ngFor=\"let item of markers\">\n                <td>{{item.pair}}</td>\n                <td>{{item.last}}</td>\n                <td>{{item.high}}</td>\n                <td>{{item.low}}</td>\n                <td>{{item.percentChange}}</td>\n\n            </tr>\n            </tbody>\n\n        </table>\n\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/poloniex/poloniex-ticker/poloniex-ticker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poloniex_service__ = __webpack_require__("../../../../../src/app/poloniex/poloniex.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoloniexTickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoloniexTickerComponent = (function () {
    function PoloniexTickerComponent(poloniex) {
        this.poloniex = poloniex;
    }
    PoloniexTickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.poloniex.getTicker().subscribe(function (res) {
            console.log(res);
            _this.markers = res;
        });
    };
    return PoloniexTickerComponent;
}());
PoloniexTickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-poloniex-ticker',
        template: __webpack_require__("../../../../../src/app/poloniex/poloniex-ticker/poloniex-ticker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/poloniex/poloniex-ticker/poloniex-ticker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__poloniex_service__["a" /* PoloniexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__poloniex_service__["a" /* PoloniexService */]) === "function" && _a || Object])
], PoloniexTickerComponent);

var _a;
//# sourceMappingURL=poloniex-ticker.component.js.map

/***/ }),

/***/ "../../../../../src/app/poloniex/poloniex.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poloniex_ticker_poloniex_ticker_component__ = __webpack_require__("../../../../../src/app/poloniex/poloniex-ticker/poloniex-ticker.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoloniexModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PoloniexModule = (function () {
    function PoloniexModule() {
    }
    return PoloniexModule;
}());
PoloniexModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__poloniex_ticker_poloniex_ticker_component__["a" /* PoloniexTickerComponent */]]
    })
], PoloniexModule);

//# sourceMappingURL=poloniex.module.js.map

/***/ }),

/***/ "../../../../../src/app/poloniex/poloniex.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_auth_http_service__ = __webpack_require__("../../../../../src/app/login/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoloniexService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PoloniexService = (function () {
    function PoloniexService(http) {
        this.http = http;
    }
    PoloniexService.prototype.getTicker = function () {
        var _this = this;
        var url = '/api/poloniex/returnTicker';
        return this.http.get(url).map(function (res) {
            var data = res.json();
            _this.marketsInd = data;
            for (var str in data)
                data[str]['pair'] = str;
            return __WEBPACK_IMPORTED_MODULE_2_lodash__["values"](data).map(function (item) {
                for (var str in item)
                    if (!isNaN(item[str]))
                        item[str] = +item[str];
                item.low = item.lowestAsk;
                item.high = item.highestBid;
                return item;
            });
        });
    };
    return PoloniexService;
}());
PoloniexService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], PoloniexService);

var _a;
//# sourceMappingURL=poloniex.service.js.map

/***/ }),

/***/ "../../../../../src/app/shape-shift/shape-shift.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ss_coins_available_ss_coins_available_component__ = __webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ss_main_ss_main_component__ = __webpack_require__("../../../../../src/app/shape-shift/ss-main/ss-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shape_shift_service__ = __webpack_require__("../../../../../src/app/shape-shift/shape-shift.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeShiftModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ShapeShiftModule = (function () {
    function ShapeShiftModule() {
    }
    return ShapeShiftModule;
}());
ShapeShiftModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__ss_coins_available_ss_coins_available_component__["a" /* SSCoinsAvailableComponent */], __WEBPACK_IMPORTED_MODULE_3__ss_main_ss_main_component__["a" /* SsMainComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shape_shift_service__["a" /* ShapeShiftService */]]
    })
], ShapeShiftModule);

//# sourceMappingURL=shape-shift.module.js.map

/***/ }),

/***/ "../../../../../src/app/shape-shift/shape-shift.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_auth_http_service__ = __webpack_require__("../../../../../src/app/login/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeShiftService; });
/* unused harmony export SSCoin */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShapeShiftService = (function () {
    function ShapeShiftService(http) {
        this.http = http;
        this.coinsAvailableSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.coinsAvailable$ = this.coinsAvailableSub.asObservable();
        this.getCoins();
    }
    ShapeShiftService.prototype.getCoins = function () {
        var _this = this;
        var url = '/api/exchange-1/getcoins';
        this.http.get(url).map(function (res) {
            return res.json();
        }).subscribe(function (res) {
            _this.coinsIndexed = res;
            _this.coinsAvailable = __WEBPACK_IMPORTED_MODULE_3_lodash__["values"](res).map(function (item) {
                item.market = {};
                return item;
            });
            _this.coinsAvailableSub.next(_this.coinsAvailable);
            console.log(res);
        });
    };
    return ShapeShiftService;
}());
ShapeShiftService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], ShapeShiftService);

var SSCoin = (function () {
    function SSCoin() {
    }
    return SSCoin;
}());

var _a;
//# sourceMappingURL=shape-shift.service.js.map

/***/ }),

/***/ "../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n        <H3>ShapeSift MarketCap</H3> <small>Total: {{consAvailable.length}}</small>\n        <table>\n            <tr>\n                <th (click)=\"onClickHeader('symbol')\">Symbol</th>\n                <th>Name</th>\n                <th (click)=\"onClickHeader('percent_change_1h')\">1h%</th>\n                <th (click)=\"onClickHeader('percent_change_24h')\" >24h%</th>\n                <th (click)=\"onClickHeader('percent_change_7d')\">7 days%</th>\n                <th (click)=\"onClickHeader('price_usd')\">$US</th>\n                <th (click)=\"onClickHeader('rank')\">Rank</th>\n\n\n                <th (click)=\"onClickHeader('market_cap_usd')\">market cap usd</th>\n            </tr>\n            <tbody>\n            <tr *ngFor=\"let item of consAvailable\">\n                <td>{{item.symbol}}</td>\n                <td>{{item.name}}</td>\n                <td>{{item.percent_change_1h}}</td>\n                <td>{{item.percent_change_24h}}</td>\n                <td>{{item.percent_change_7d}}</td>\n                <td>{{item.price_usd}}</td>\n                <td>{{item.rank}}</td>\n                <td>{{item.market_cap_usd}}</td>\n            </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shape_shift_service__ = __webpack_require__("../../../../../src/app/shape-shift/shape-shift.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__com_market_cap_service__ = __webpack_require__("../../../../../src/app/com/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SSCoinsAvailableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SSCoinsAvailableComponent = (function () {
    function SSCoinsAvailableComponent(shapeShiftService, marketCap) {
        this.shapeShiftService = shapeShiftService;
        this.marketCap = marketCap;
        this.sortCriteria = 'rank';
        this.asc_desc = 'asc';
    }
    SSCoinsAvailableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shapeShiftService.coinsAvailable$.subscribe(function (res) {
            //  console.log(res);
            _this.consAvailable = res;
            _this.merge();
        });
        this.marketCap.markets$.subscribe(function (markets) {
            // console.log(markets)
            _this.markets = markets;
            _this.merge();
        });
    };
    SSCoinsAvailableComponent.prototype.merge = function () {
        if (this.markets && this.consAvailable) {
            var all_1 = this.markets;
            // console.log(all);
            var ar = this.consAvailable;
            ar.forEach(function (item) {
                var market = all_1[item.symbol];
                if (market) {
                    item.percent_change_1h = market.percent_change_1h;
                    item.percent_change_7d = market.percent_change_7d;
                    item.percent_change_24h = market.percent_change_24h;
                    item.rank = market.rank;
                    item.price_usd = market.price_usd;
                    item.market_cap_usd = market.market_cap_usd;
                    item.market = market;
                }
                else
                    console.warn(' no coin ' + item.symbol);
            });
        }
    };
    SSCoinsAvailableComponent.prototype.sortData = function () {
        this.consAvailable = __WEBPACK_IMPORTED_MODULE_3_lodash__["orderBy"](this.consAvailable, this.sortCriteria, this.asc_desc);
    };
    SSCoinsAvailableComponent.prototype.onClickHeader = function (criteria) {
        console.log(criteria);
        if (this.sortCriteria === criteria) {
            if (this.asc_desc === 'asc')
                this.asc_desc = 'desc';
            else
                this.asc_desc = 'asc';
        }
        else
            this.asc_desc = 'asc';
        console.log(this.asc_desc);
        this.sortCriteria = criteria;
        this.sortData();
    };
    return SSCoinsAvailableComponent;
}());
SSCoinsAvailableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-ss-coins-available',
        template: __webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shape_shift_service__["a" /* ShapeShiftService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shape_shift_service__["a" /* ShapeShiftService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__com_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__com_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
], SSCoinsAvailableComponent);

var _a, _b;
//# sourceMappingURL=ss-coins-available.component.js.map

/***/ }),

/***/ "../../../../../src/app/shape-shift/ss-main/ss-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shape-shift/ss-main/ss-main.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  ss-main works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shape-shift/ss-main/ss-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SsMainComponent = (function () {
    function SsMainComponent() {
    }
    SsMainComponent.prototype.ngOnInit = function () {
    };
    return SsMainComponent;
}());
SsMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-ss-main',
        template: __webpack_require__("../../../../../src/app/shape-shift/ss-main/ss-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shape-shift/ss-main/ss-main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SsMainComponent);

//# sourceMappingURL=ss-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dialog-simple/dialog-simple.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/dialog-simple/dialog-simple.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 md-dialog-title>{{title}}</h2>\n    <md-dialog-content>{{message}}</md-dialog-content>\n    <md-dialog-actions>\n        <button md-button md-dialog-close *ngFor=\"let button of buttons\"  [md-dialog-close] = button >{{button}}</button>\n        <!-- Can optionally provide a result for the closing dialog. -->\n\n    </md-dialog-actions>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogSimpleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogSimpleComponent = (function () {
    function DialogSimpleComponent(data) {
        this.data = data;
        this.buttons = ['OK'];
        this.title = 'Alert';
        this.message = 'Message';
        if (data.buttons)
            this.buttons = data.buttons;
        if (data.title)
            this.title = data.title;
        this.message = data.message;
    }
    DialogSimpleComponent.prototype.ngOnInit = function () {
    };
    return DialogSimpleComponent;
}());
DialogSimpleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-dialog-simple',
        template: __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], DialogSimpleComponent);

//# sourceMappingURL=dialog-simple.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/generate-address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib__ = __webpack_require__("../../../../bitcoinjs-lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_wallet_core_networks_definitions__ = __webpack_require__("../../../../../src/app/wallets/wallet-core/networks-definitions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buffer__ = __webpack_require__("../../../../buffer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_buffer__);
/* harmony export (immutable) */ __webpack_exports__["a"] = generateAddressFromPrivateKey;
/* unused harmony export hexTransaction */


var etherutils = __webpack_require__("../../../../ethereumjs-util/index.js");
var ethereumtx = __webpack_require__("../../../../ethereumjs-tx/es5/index.js");

/**
 * Created by Vlad on 7/9/2017.
 */
function generateAddressFromPrivateKey(privateKey, network) {
    switch (network) {
        case 'ETH':
            console.log('ETH address');
            return etherutils.addHexPrefix(etherutils.privateToAddress(new __WEBPACK_IMPORTED_MODULE_2_buffer__["Buffer"](privateKey, 'hex')).toString('hex'));
        default:
            console.log('BTC  address');
            return __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib__["ECPair"].fromWIF(privateKey, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__wallets_wallet_core_networks_definitions__["a" /* getNetwork */])(network).mainNet).getAddress();
    }
}
// private signature:Buffer;
//private url:string = 'https://api.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex={{hex}}';
function createSignature(privateKey) {
    this.signature = new __WEBPACK_IMPORTED_MODULE_2_buffer__["Buffer"](privateKey, 'hex');
}
function setNonce(nonce) {
    this.nonce = nonce;
}
function hexTransaction(addressTo, amount) {
    var gasPrice;
    var gasLimit;
    var nonce;
    var raw = mapTransaction(web3, addressTo, amount, nonce, gasPrice, gasLimit);
    var transaction = new ethereumtx.tx(raw);
    transaction.sign(this.signature);
    var hex = transaction.serialize().toString('hex');
    var url = this.url.replace('{{hex}}', hex);
    return hex;
}
function mapTransaction(web3, addressTo, amount, nonce, gasPrice, gasLimit) {
    return {
        nonce: web3.toHex(nonce),
        gasPrice: web3.toHex(gasPrice),
        gasLimit: web3.toHex(gasLimit),
        to: addressTo,
        value: web3.toHex(amount),
    };
}
//# sourceMappingURL=generate-address.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__material_material_app_module__["a" /* MaterialAppModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/ss-browse/all-coins-table/all-coins-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table td{\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n\r\ntable th{\r\n    cursor: pointer;\r\n}\r\n\r\nh3{\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ss-browse/all-coins-table/all-coins-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <md-card>\n\n        <md-card-header>\n            <md-card-title><h3>ShapeShift </h3><small>Total {{allCoinsData.length}}</small></md-card-title>\n\n        </md-card-header>\n\n\n        <md-card-content>\n    <table>\n        <tr>\n            <th (click)=\"onClickHeader('market_cap_usd')\">market cap usd</th>\n            <th (click)=\"onClickHeader('percent_change_1h')\">1h%</th>\n            <th (click)=\"onClickHeader('percent_change_24h')\" >24h%</th>\n            <th (click)=\"onClickHeader('percent_change_7d')\">7 days%</th>\n            <th (click)=\"onClickHeader('price_usd')\">$US</th>\n            <th (click)=\"onClickHeader('rank')\">Rank</th>\n            <th (click)=\"onClickHeader('symbol')\">Symbol</th>\n            <th>#</th>\n            <th>Name</th>\n        </tr>\n\n        <tbody *ngFor=\"let item of allCoinsData\">\n            <tr>\n                <td>{{item.market_cap_usd}}</td>\n                <td>{{item.percent_change_1h}}</td>\n                <td>{{item.percent_change_24h}}</td>\n                <td>{{item.percent_change_7d}}</td>\n                <td>{{item.price_usd}}</td>\n                <td>{{item.rank}}</td>\n                <td>{{item.symbol}}</td>\n                <td><input type=\"checkbox\"  (change)=\"onCoinSelected($event, item)\" [checked]=\"item.selected\"   name=\"selected\"/></td>\n                <td>{{item.name}}</td>\n\n            </tr>\n\n        </tbody>\n    </table>\n        </md-card-content>\n    </md-card>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ss-browse/all-coins-table/all-coins-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCoinsTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllCoinsTableComponent = (function () {
    function AllCoinsTableComponent(allCoinsService) {
        this.allCoinsService = allCoinsService;
        this.asc_desc = 'asc';
    }
    // ngOnChanges(changes: any) {
    // console.log(changes);
    //this.modelCoins  = changes.allCoins.currentValue;// _.reject(changes.allCoins,'selected')
    //this.doSomething(changes.categoryId.currentValue);
    //}
    AllCoinsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCoinsService.allCoins$.subscribe(function (res) { return _this.allCoinsData = res; });
    };
    /*private changeStatus(coin:VOExchangeData):void{
  
    }
  */
    AllCoinsTableComponent.prototype.onCoinSelected = function (event, coin) {
        console.log(event.target.checked, coin);
        if (event.target.checked) {
            this.allCoinsService.addSelected(coin.symbol);
        }
        else {
            this.allCoinsService.removeSelected(coin.symbol);
        }
        /*
            let selectedCoinsNames = this.allCoins.reduce(function (result, item) {
              if(item.selected)  result.push(item.symbol);
              return result;
            },[]);
        
        
            this.selectedCoinsNamesChange.emit(selectedCoinsNames);*/
    };
    AllCoinsTableComponent.prototype.onClickHeader = function (creteria) {
        console.log(creteria);
        if (this.creteria === creteria) {
            if (this.asc_desc === 'asc')
                this.asc_desc = 'desc';
            else
                this.asc_desc = 'asc';
        }
        else
            this.asc_desc = 'asc';
        console.log(this.asc_desc);
        this.allCoinsData = __WEBPACK_IMPORTED_MODULE_1_lodash__["orderBy"](this.allCoinsData, creteria, this.asc_desc);
        this.creteria = creteria;
    };
    return AllCoinsTableComponent;
}());
AllCoinsTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-all-coins-table',
        template: __webpack_require__("../../../../../src/app/ss-browse/all-coins-table/all-coins-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ss-browse/all-coins-table/all-coins-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__all_coins_service__["a" /* AllCoinsService */]) === "function" && _a || Object])
], AllCoinsTableComponent);

var _a;
//# sourceMappingURL=all-coins-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/ss-browse/all-coins.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCoinsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllCoinsService = (function () {
    //private marketIndexed:{[s:string]:VOExchangeData};
    //private marketIndexedSub:Subject<{[s:string]:VOExchangeData}>;
    // marketIndexed$:Observable<{[s:string]:VOExchangeData}>;
    // private selectedMarketIndexed:{[s:string]:VOExchangeData};
    // private selectedMarketIndexedSub:Subject<{[s:string]:VOExchangeData}>;
    // selectedMarketIndexed$:Observable<{[s:string]:VOExchangeData}>;
    function AllCoinsService(http) {
        this.http = http;
        this.timestamp = 0;
        this.allCoinsSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.allCoins$ = this.allCoinsSub.asObservable();
        this.timestampSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.timestamp$ = this.timestampSub.asObservable();
        this.totalCoinsSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.totalCoins$ = this.totalCoinsSub.asObservable();
        this.totalCoinsSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.totalCoins$ = this.totalCoinsSub.asObservable();
        this.totalSelectedCoinsSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.totalSelectedCoins$ = this.totalCoinsSub.asObservable();
        this.selectedCoinsSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.selectedCoins$ = this.selectedCoinsSub.asObservable();
        // this.marketIndexedSub = new Subject();
        // this.marketIndexed$ = this.marketIndexedSub.asObservable();
        // this.selectedMarketIndexedSub = new Subject();
        // this.selectedMarketIndexed$ = this.selectedMarketIndexedSub.asObservable();
        this.counter = 0;
        this.loadData();
    }
    AllCoinsService.prototype.start = function () {
        var _this = this;
        this.interval = setInterval(function () { return _this.loadData(); }, 60000);
        this.loadData();
    };
    /*  getSelectedPrices():{[s:string]:number}{
        let out = {};
    
        this.selectedCoins.forEach(function (item) {
          out[item.symbol]=item.price_usd
        })
    
        return out;
      }*/
    AllCoinsService.prototype.setData = function (data) {
        var ar = data.payload;
        this.allCoins = ar;
        this.timestamp = data.timestamp;
        console.log(' allCoins   ' + this.allCoins.length);
        this.counter++;
        this.filterAllMarket();
        this.timestampSub.next(this.timestamp);
        this.allCoinsSub.next(this.allCoins);
        this.totalCoinsSub.next(this.allCoins.length);
    };
    AllCoinsService.prototype.filterAllMarket = function () {
        var ar = this.allCoins;
        var marketIndexed = {};
        // let selectedMarketIndexed = {}
        var selectedCoins = {};
        var selNames = this.getSelectedNames();
        ar.forEach(function (item) {
            marketIndexed[item.symbol] = item;
            if (selNames.indexOf(item.symbol) !== -1) {
                item.selected = true;
                selectedCoins[item.symbol] = item;
                //selectedCoins.push(item);
            }
        });
        //this.marketIndexed = marketIndexed;
        // this.selectedMarketIndexed = selectedMarketIndexed;
        this.selectedCoins = selectedCoins;
        this.selectedCoinsSub.next(this.selectedCoins);
        // this.totalSelectedCoinsSub.next(this.selectedCoins.length);
        //this.marketIndexedSub.next(this.marketIndexed);
        // this.selectedMarketIndexedSub.next(this.selectedMarketIndexed);
        console.log('selectedCoin  ' + this.selectedCoins.length);
    };
    AllCoinsService.prototype.broadcastUpdate = function () {
    };
    AllCoinsService.prototype.populateSelected = function () {
        var out = {};
        var val = this.getSelectedNames();
        this.allCoins.forEach(function (item) {
            if (val.indexOf(item.symbol) !== -1) {
                out[item.symbol] = item;
            }
        });
        this.selectedCoins = out;
    };
    AllCoinsService.prototype.getSelectedNames = function () {
        if (!this.selectedCoinsNames) {
            this.selectedCoinsNames = [];
            var str = localStorage.getItem('selectedCoinsNames');
            try {
                if (str)
                    this.selectedCoinsNames = JSON.parse(str);
            }
            catch (e) {
                console.error(e);
            }
        }
        return this.selectedCoinsNames;
    };
    AllCoinsService.prototype.addSelected = function (symbol) {
        var ar = __WEBPACK_IMPORTED_MODULE_4_lodash__["keys"](this.selectedCoins);
        if (ar.indexOf(symbol) === -1)
            ar.push(symbol);
        this.saveSelectedNames(ar);
        this.populateSelected();
        this.selectedCoinsSub.next(this.selectedCoins);
    };
    AllCoinsService.prototype.removeSelected = function (symbol) {
        var ar = this.getSelectedNames();
        for (var i = ar.length - 1; i >= 0; i--)
            if (ar[i] === symbol)
                ar.splice(i, 1);
        this.saveSelectedNames(ar);
        this.populateSelected();
        this.selectedCoinsSub.next(this.selectedCoins);
    };
    AllCoinsService.prototype.saveSelectedNames = function (val) {
        this.selectedCoinsNames = val;
        localStorage.setItem('selectedCoinsNames', JSON.stringify(val));
    };
    AllCoinsService.prototype.loadData = function (now) {
        var _this = this;
        var url = '/api/all-coins/market/minute';
        this.http.get(url).map(function (res) {
            var data = res.json();
            data.payload = data.payload.map(_this.mapExchangeData);
            return data;
        }).subscribe(function (result) {
            _this.setData(result);
        });
    };
    AllCoinsService.prototype.mapExchangeData = function (obj) {
        var data = new __WEBPACK_IMPORTED_MODULE_5__models_app_models__["a" /* VOExchangeData */]();
        for (var str in obj)
            data[str] = isNaN(obj[str]) ? obj[str] : +obj[str];
        data.volume_usd_24h = +obj['24h_volume_usd'];
        delete data['24h_volume_usd'];
        return data;
    };
    AllCoinsService.prototype.getCoinMarket = function (symbol) {
        return this.allCoins.find(function (item) {
            return item.symbol == symbol;
        });
    };
    AllCoinsService.prototype.stop = function () {
        clearInterval(this.interval);
    };
    return AllCoinsService;
}());
AllCoinsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AllCoinsService);

var _a;
//# sourceMappingURL=all-coins.service.js.map

/***/ }),

/***/ "../../../../../src/app/ss-browse/selected-coins/selected-coins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table{\r\n    width: 100%;\r\n}\r\ntable td{\r\n    border-bottom: 1px solid #ddd;\r\n}\r\ntable th{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ss-browse/selected-coins/selected-coins.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h4>Total {{selectedCoins.length}}</h4>\n    <table>\n        <tr>\n            <th><button md-button (click)=\"onClickHeader('market_cap_usd')\">market cap usd</button></th>\n            <th><button md-button (click)=\"onClickHeader('percent_change_1h')\">1h%</button></th>\n            <th><button md-button (click)=\"onClickHeader('percent_change_24h')\" >24h%</button></th>\n            <th><button md-button (click)=\"onClickHeader('percent_change_7d')\">7 days%</button></th>\n            <th><button md-button (click)=\"onClickHeader('price_usd')\">$US</button></th>\n            <th><button md-button (click)=\"onClickHeader('rank')\">Rank</button></th>\n            <th><button md-button (click)=\"onClickHeader('symbol')\">Symbol</button></th>\n        </tr>\n\n        <tbody *ngFor=\"let item of selectedCoins\">\n\n        <tr>\n            <td>{{item.market_cap_usd}}</td>\n            <td>{{item.percent_change_1h}}</td>\n            <td>{{item.percent_change_24h}}</td>\n            <td>{{item.percent_change_7d}}</td>\n            <td>{{item.price_usd}}</td>\n            <td>{{item.rank}}</td>\n            <td>{{item.symbol}}</td>\n            <td>{{item.name}}</td>\n        </tr>\n\n        </tbody>\n    </table>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ss-browse/selected-coins/selected-coins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedCoinsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectedCoinsComponent = (function () {
    function SelectedCoinsComponent(allCoinsService) {
        this.allCoinsService = allCoinsService;
        //@Input() modelCoins:VOExchangeData[];
        this.selectedCoins = [];
        this.sortCreteria = 'rank';
        this.asc_desc = 'asc';
    }
    SelectedCoinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCoinsService.selectedCoins$.subscribe(function (res) { return _this.selectedCoins = __WEBPACK_IMPORTED_MODULE_1_lodash__["values"](res); });
    };
    SelectedCoinsComponent.prototype.onClickHeader = function (creteria) {
        console.log(creteria);
        if (this.sortCreteria === creteria) {
            if (this.asc_desc === 'asc')
                this.asc_desc = 'desc';
            else
                this.asc_desc = 'asc';
        }
        else
            this.asc_desc = 'asc';
        console.log(this.asc_desc);
        this.selectedCoins = __WEBPACK_IMPORTED_MODULE_1_lodash__["orderBy"](this.selectedCoins, creteria, this.asc_desc);
        this.sortCreteria = creteria;
    };
    return SelectedCoinsComponent;
}());
SelectedCoinsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-selected-coins',
        template: __webpack_require__("../../../../../src/app/ss-browse/selected-coins/selected-coins.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ss-browse/selected-coins/selected-coins.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__all_coins_service__["a" /* AllCoinsService */]) === "function" && _a || Object])
], SelectedCoinsComponent);

var _a;
//# sourceMappingURL=selected-coins.component.js.map

/***/ }),

/***/ "../../../../../src/app/ss-browse/ss-browse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ss_main_ss_main_component__ = __webpack_require__("../../../../../src/app/ss-browse/ss-main/ss-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_coins_table_all_coins_table_component__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins-table/all-coins-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selected_coins_selected_coins_component__ = __webpack_require__("../../../../../src/app/ss-browse/selected-coins/selected-coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsBrowseModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SsBrowseModule = (function () {
    function SsBrowseModule() {
    }
    return SsBrowseModule;
}());
SsBrowseModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__material_material_app_module__["a" /* MaterialAppModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__ss_main_ss_main_component__["a" /* SsMainComponent */], __WEBPACK_IMPORTED_MODULE_3__all_coins_table_all_coins_table_component__["a" /* AllCoinsTableComponent */], __WEBPACK_IMPORTED_MODULE_4__selected_coins_selected_coins_component__["a" /* SelectedCoinsComponent */]],
        providers: []
    })
], SsBrowseModule);

//# sourceMappingURL=ss-browse.module.js.map

/***/ }),

/***/ "../../../../../src/app/ss-browse/ss-main/ss-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa.fa-close{\r\n    float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ss-browse/ss-main/ss-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<div>\n\n    <button  md-raised-button (click)=\"onRefresh()\">Refresh</button>\n    <span>{{timestamp}}</span>\n    <button  md-button (click)=\"showAllCoins()\">All Coins</button>\n\n</div>\n    <hr/>\n\n    <app-selected-coins></app-selected-coins>\n\n    <div *ngIf=\"isAllcoins\">\n        <hr/>\n        <div class=\"fa fa-close\" (click)=\"onClose()\"></div>\n        <app-all-coins-table ></app-all-coins-table>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ss-browse/ss-main/ss-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SsMainComponent = (function () {
    function SsMainComponent(allCoinsService) {
        this.allCoinsService = allCoinsService;
        this.timestamp = '';
    }
    SsMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCoinsService.allCoins$.subscribe(function (res) {
            // this.markSelected(res)
            _this.allCoins = res;
            //this.populateSelected();
        });
        this.allCoinsService.loadData();
        this.allCoinsService.timestamp$.subscribe(function (res) { return _this.timestamp = (new Date(res)).toLocaleTimeString(); });
    };
    SsMainComponent.prototype.showAllCoins = function () {
        if (this.isAllcoins)
            this.isAllcoins = false;
        else
            this.isAllcoins = true;
    };
    SsMainComponent.prototype.onClose = function () {
        this.isAllcoins = false;
    };
    /*getSelectedNames():string[]{
  
      if(!this.selectedCoinsNames) {
        this.selectedCoinsNames = []
        let str = localStorage.getItem('selectedCoinsNames');
        try {
          if (str) this.selectedCoinsNames = JSON.parse(str);
        } catch (e) {
          console.error(e);
        }
      }
  
      return this.selectedCoinsNames;
    }
  
    saveSelectedNames(val:string[]):void{
      this.selectedCoinsNames = val;
      localStorage.setItem('selectedCoinsNames', JSON.stringify(val));
    }*/
    SsMainComponent.prototype.onSelectChanged = function (val) {
        //  this.saveSelectedNames(val);
        // this.populateSelected();
    };
    SsMainComponent.prototype.onRefresh = function () {
        this.allCoinsService.loadData('now');
    };
    return SsMainComponent;
}());
SsMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-ss-main',
        template: __webpack_require__("../../../../../src/app/ss-browse/ss-main/ss-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ss-browse/ss-main/ss-main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__all_coins_service__["a" /* AllCoinsService */]) === "function" && _a || Object])
], SsMainComponent);

var _a;
//# sourceMappingURL=ss-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/my-wallets/my-wallets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wallets/my-wallets/my-wallets.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button md-raised-button color=\"primary\" (click)=\"addWallet($event)\"><div class=\"fa fa-plus\"></div></button>\n    <button md-raised-button color=\"warn\" (click)=\"editWallet($event)\"  ><div class=\"fa fa-edit\"></div></button>\n    <button md-raised-button color=\"accent\" (click)=\"deleteWallet($event)\"><div class=\"fa fa-minus\"></div></button>\n    <app-wallet-create *ngIf=\"isCreate\"></app-wallet-create>\n    <div>\n        <hr/>\n\n\n        <md-list>\n\n            <md-list-item *ngFor=\"let wallet of myWallets\" (click)=\"onWalletSelected(wallet)\"  [class.selected] = wallet.selected >\n                <app-wallet  [wallet]=\"wallet\">  </app-wallet>\n\n            </md-list-item>\n\n        </md-list>\n\n\n        <hr/>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wallets/my-wallets/my-wallets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_edit_wallet_edit_component__ = __webpack_require__("../../../../../src/app/wallets/wallet-edit/wallet-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ss_browse_all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyWalletsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyWalletsComponent = (function () {
    function MyWalletsComponent(walletsService, dialog, allCoinsService) {
        this.walletsService = walletsService;
        this.dialog = dialog;
        this.allCoinsService = allCoinsService;
    }
    MyWalletsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.walletsService.loadConfig();
        //this.walletsService.loadWallets();
        this.walletsService.myWallets$.subscribe(function (res) {
            // console.log(res);
            _this.myWallets = res;
        });
        /*this.allCoinsService.selectedMarketIndexed$.subscribe(market=>{
         // console.log(market)
    
          this.myWallets.forEach(function (wallet) {
            wallet.market =  market[wallet.symbol]
            wallet.usd =  (wallet.market.price_usd * wallet.balanceDisplay).toFixed(2);
          })
        })*/
    };
    MyWalletsComponent.prototype.addWallet = function (evt) {
        this.isCreate = !this.isCreate;
    };
    MyWalletsComponent.prototype.deleteWallet = function (evt) {
        var _this = this;
        var wallet = this.walletSelected;
        if (!wallet)
            return;
        var ref = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: {
                title: 'Alert',
                message: 'You want to delete wallet ' + wallet.label + '?',
                buttons: ['Yes', 'No']
            } });
        ref.afterClosed().subscribe(function (res) {
            console.log(res);
            if (res === 'Yes')
                _this.walletsService.deleteWallet(wallet);
        });
    };
    MyWalletsComponent.prototype.onWalletSelected = function (wallet) {
        if (this.walletSelected)
            this.walletSelected.selected = false;
        wallet.selected = true;
        this.walletSelected = wallet;
        console.log(this.walletSelected);
    };
    MyWalletsComponent.prototype.editWallet = function (event) {
        var _this = this;
        var wallet = this.walletSelected;
        if (!wallet)
            return;
        if (!wallet.label) {
            var wallets = this.walletsService.getAllWallets();
            var exists = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](wallets, { symbol: wallet.symbol });
            wallet.label = wallet.symbol + ' ' + exists.length;
        }
        var ref = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__wallet_edit_wallet_edit_component__["a" /* WalletEditComponent */], { data: wallet });
        ref.afterClosed().subscribe(function (res) {
            console.log(res);
            if (res === 'saveMe') {
                var newname = wallet.label;
                _this.walletsService.saveWallets();
            }
        });
        console.log(wallet);
    };
    return MyWalletsComponent;
}());
MyWalletsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-my-wallets',
        template: __webpack_require__("../../../../../src/app/wallets/my-wallets/my-wallets.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wallets/my-wallets/my-wallets.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_all_service__["a" /* WalletsAllService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ss_browse_all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ss_browse_all_coins_service__["a" /* AllCoinsService */]) === "function" && _c || Object])
], MyWalletsComponent);

var _a, _b, _c;
//# sourceMappingURL=my-wallets.component.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/walets-all/walets-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wallets/walets-all/walets-all.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  walets-all works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/wallets/walets-all/walets-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaletsAllComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WaletsAllComponent = (function () {
    function WaletsAllComponent() {
    }
    WaletsAllComponent.prototype.ngOnInit = function () {
    };
    return WaletsAllComponent;
}());
WaletsAllComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-walets-all',
        template: __webpack_require__("../../../../../src/app/wallets/walets-all/walets-all.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wallets/walets-all/walets-all.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WaletsAllComponent);

//# sourceMappingURL=walets-all.component.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/wallet-core/networks-definitions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DashNetwork */
/* unused harmony export BitcoinNetwork */
/* unused harmony export DogeNetwork */
/* unused harmony export LiteCoinNetwork */
/* unused harmony export ZCashNetwork */
/* unused harmony export LiskNetwork */
/* harmony export (immutable) */ __webpack_exports__["a"] = getNetwork;
/**
 * Created by Vlad on 2017-06-22.
 */
var DashNetwork = {
    mainNet: {
        messagePrefix: '\x19DarkCoin Signed Message:\n',
        bip32: {
            public: 0x02fe52cc,
            private: 0x02fe52f8
        },
        pubKeyHash: 0x4c,
        scriptHash: 0x10,
        wif: 0xcc,
        dustThreshold: 5460
    },
    testNet: {
        messagePrefix: '\x19DarkCoin Signed Message:\n',
        bip32: {
            public: 0x3a805837,
            private: 0x3a8061a0
        },
        pubKeyHash: 0x8c,
        scriptHash: 0x13,
        wif: 0xef,
        dustThreshold: 5460
    },
};
var BitcoinNetwork = {
    mainNet: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x00,
        scriptHash: 0x05,
        wif: 0x80,
        dustThreshold: 546
    },
    testNet: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x6f,
        scriptHash: 0xc4,
        wif: 0xef,
        dustThreshold: 546
    }
};
var DogeNetwork = {
    mainNet: {
        messagePrefix: '\x19Dogecoin Signed Message:\n',
        bip32: {
            public: 0x02facafd,
            private: 0x02fac398
        },
        pubKeyHash: 0x1e,
        scriptHash: 0x16,
        wif: 0x9e,
        dustThreshold: 0
    },
    testNet: {
        messagePrefix: '\x19Dogecoin Main net:\n',
        bip32: {
            public: 0x02facafd,
            private: 0x02fac398
        },
        pubKeyHash: 0x1e,
        scriptHash: 0x16,
        wif: 0x9e,
        dustThreshold: 0
    }
};
var LiteCoinNetwork = {
    mainNet: {
        messagePrefix: '\x19Litecoin Signed Message:\n',
        bip32: {
            public: 0x019da462,
            private: 0x019d9cfe
        },
        pubKeyHash: 0x30,
        scriptHash: 0x05,
        wif: 0xb0,
        dustThreshold: 0
    },
    testNet: {
        messagePrefix: '\x19Litecoin Main net:\n',
        bip32: {
            public: 0x019da462,
            private: 0x019d9cfe
        },
        pubKeyHash: 0x30,
        scriptHash: 0x05,
        wif: 0xb0,
        dustThreshold: 0
    }
};
var ZCashNetwork = {
    name: 'ZEC',
    mainNet: {
        messagePrefix: '\x19ZCash Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x1cb8,
        scriptHash: 0x1cbd,
        wif: 0x80,
        dustThreshold: 0
    },
    testNet: {
        messagePrefix: '\x19ZCash Signed Message:\n',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x1d25,
        scriptHash: 0x1cba,
        wif: 0xef,
        dustThreshold: 0
    }
};
var LiskNetwork = {
    mainNet: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x00,
        scriptHash: 0x05,
        wif: 0x80,
        dustThreshold: 546
    },
    testNet: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x6f,
        scriptHash: 0xc4,
        wif: 0xef,
        dustThreshold: 546
    }
};
function getNetwork(coin, testNet) {
    if (testNet === void 0) { testNet = false; }
    switch (coin.toUpperCase()) {
        case 'BTC':
            return BitcoinNetwork;
        case 'DASH':
            return DashNetwork;
        case 'ZEC':
            return ZCashNetwork;
        case 'DOGE':
            return DogeNetwork;
        case 'LTC':
            return LiteCoinNetwork;
        case 'LISK':
            return LiskNetwork;
        default:
            return null;
    }
}
//# sourceMappingURL=networks-definitions.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/wallet-create/wallet-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wallets/wallet-create/wallet-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <md-input-container>\n        <input [(ngModel)]=\"wallet.label\"  mdInput placeholder=\"Wallet Name\" name=\"label\">\n    </md-input-container>\n    <md-input-container>\n        <input [(ngModel)]=\"wallet.privateKey\"  mdInput placeholder=\"Private Key\" name=\"privatekey\" (blur)=\"onPrivateKeyBlur($event)\">\n    </md-input-container>\n\n    <md-select placeholder=\"Select Coin\" (change)=\"coinSelectChanged($event)\">\n        <md-option *ngFor=\"let coin of coinsAvalable\" [value]=\"coin.symbol\">\n            <small>({{coin.network}})</small> {{ coin.symbol}} {{ coin.displayName}}\n        </md-option>\n    </md-select>\n\n    <md-input-container>\n        <input [(ngModel)]=\"wallet.address\"  mdInput placeholder=\"Address\" disabled=true name=\"address\">\n    </md-input-container>\n    <button md-raised-button color=\"accent\" (click)=\"addWallet($event)\">Create</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wallets/wallet-create/wallet-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_generate_address__ = __webpack_require__("../../../../../src/app/shared/generate-address.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WalletCreateComponent = (function () {
    function WalletCreateComponent(dialog, allWalletsService) {
        this.dialog = dialog;
        this.allWalletsService = allWalletsService;
        this.created = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */](null);
        this.privateKeyETH = 'f6ebe5512937e1eea5eda7b40a497276008954ff30d48f5ff5e7873aa694fa12'; ///0xc724cb4bb59210caaf1e71c9111f191aca5f1bf9
        this.privateKeyBTC0 = 'L5ZXWJbQfrYKFcf27R9g25DTY568Hwst5ceyz8bC2J9TqxayCzdP'; //1Mfu3eqLrMAbhGGdPXiQivtRvL2s4TgybB
        this.privateKeyBTC1 = 'L2W7ENfabpwvuMRC1NJuSE8Jcw6mHp3gfXEJuWsywbLFtUgjcb8N'; //18sGMWwmTdihaPRYDY3mxY8USf4fYfSRsk
        this.privateKeyETHNotHD = '9d9b915a832d9cd957610a9c69e9d6379c2128ddbf19adfd90744ff8dc844791'; //0xbd4165aa0192ef0bb6547b9461a98468ee80765c
        this.privateKeyLTCWitBalance = 'TAp38Z7iUrm4RUbrMyGXjP5FwfhwzMUNMJtoEo1qhVtVDema4KZq'; //4.26411486 LPckv2ot7AjbWUpf47rFVQB4FXT6BdfURM
        this.privateKeyLTC0 = 'T7eQ9wfF9tseKqQs3R39bpmZxFokCw6F6UDULTRVDPMVfbKXg5YZ'; // LUhx6yurUdybU1Xxzm9qsU8NUyaYc7z8EQ
        this.wallet = new __WEBPACK_IMPORTED_MODULE_1__models_app_models__["b" /* WalletModel */]();
        console.log(this.created);
        // this.wallet.privateKey = this.privateKeyETH;
    }
    WalletCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allWalletsService.coinsAvailable$.subscribe(function (res) { return _this.coinsAvalable = res; });
    };
    WalletCreateComponent.prototype.onPrivateKeyBlur = function ($event) {
        this.generateAddress();
    };
    WalletCreateComponent.prototype.generateAddress = function () {
        if (this.wallet.privateKey && this.wallet.privateKey.length > 50 && this.wallet.network) {
            this.wallet.address = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__shared_generate_address__["a" /* generateAddressFromPrivateKey */])(this.wallet.privateKey, this.wallet.network);
        }
        console.log(this.wallet.address);
    };
    WalletCreateComponent.prototype.addWallet = function (evt) {
        var id = this.wallet.symbol + '_' + this.wallet.address;
        var exists = this.allWalletsService.getMyWalletById(id);
        if (exists) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: { title: 'ERROR', message: 'Wallet with this address and Coin exists. Please use another private key' } });
            return;
        }
        this.allWalletsService.createNewWallet(this.wallet);
    };
    WalletCreateComponent.prototype.coinSelectChanged = function (event) {
        console.log(event.value);
        var cfg = this.allWalletsService.getCoinConfigBySymbol(event.value);
        if (!cfg)
            return;
        console.log(cfg);
        this.wallet.symbol = cfg.symbol;
        this.wallet.network = cfg.network;
        this.wallet.displayName = cfg.displayName;
        var wallets = this.allWalletsService.getAllWallets();
        if (!this.wallet.label) {
            var exists = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](wallets, { symbol: this.wallet.symbol });
            this.wallet.label = this.wallet.symbol + ' ' + exists.length;
        }
        if (cfg.contractAddress) {
            var network = cfg.network;
            var networkWallets = this.allWalletsService.getMyWalletsBySymbol(network);
            if (networkWallets.length) {
                var pk = networkWallets[0].privateKey;
                if (!this.wallet.privateKey)
                    this.wallet.privateKey = pk;
            }
            else {
                this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: { message: 'You have to have wallet on ' + cfg.network } });
            }
            // let parent:WalletModel = this.waletsService.getWalletBySymbol(cfg.parent);
            // console.log(parent)
            //  if(parent){
        }
        else {
        }
        this.generateAddress();
    };
    return WalletCreateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], WalletCreateComponent.prototype, "created", void 0);
WalletCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-wallet-create',
        template: __webpack_require__("../../../../../src/app/wallets/wallet-create/wallet-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wallets/wallet-create/wallet-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__wallets_all_service__["a" /* WalletsAllService */]) === "function" && _c || Object])
], WalletCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=wallet-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/wallet-edit/wallet-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wallets/wallet-edit/wallet-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"fa fa-close\" (click)=\"onClose()\"></div>\n    <h2 md-dialog-title>Edit Wallet</h2>\n\n    <md-dialog-content>\n        <h2>Network: {{wallet.symbol}} <small>{{wallet.displayName}} </small> </h2>\n\n        <md-input-container>\n            <input [(ngModel)]=\"wallet.label\"  mdInput placeholder=\"Wallet Name\" name=\"label\">\n        </md-input-container>\n        <md-input-container>\n            <input [(ngModel)]=\"wallet.privateKey\"  mdInput placeholder=\"Private Key\" name=\"privatekey\" (blur)=\"onPrivateKeyBlur($event)\">\n        </md-input-container>\n\n        <md-input-container>\n            <input [(ngModel)]=\"wallet.address\"  mdInput placeholder=\"Address\" disabled=true name=\"address\">\n        </md-input-container>\n        <button md-raised-button color=\"accent\"  (click)=\"saveWallet($event)\">Save</button>\n    </md-dialog-content>\n    <md-dialog-actions>\n\n    </md-dialog-actions>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wallets/wallet-edit/wallet-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_generate_address__ = __webpack_require__("../../../../../src/app/shared/generate-address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var WalletEditComponent = (function () {
    function WalletEditComponent(dialogRef, data, snackBar, allWalletsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.allWalletsService = allWalletsService;
        this.wallet = data;
    }
    WalletEditComponent.prototype.ngOnInit = function () {
    };
    WalletEditComponent.prototype.onPrivateKeyBlur = function (evt) {
        var pk = this.wallet.privateKey;
        var address;
        try {
            address = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_generate_address__["a" /* generateAddressFromPrivateKey */])(pk, this.wallet.network);
        }
        catch (e) {
            console.error(e);
            console.log(pk);
            this.snackBar.open(' Error ' + e.toString(), 'Message', { duration: 3000 });
        }
        if (address) {
            var id = this.wallet.symbol + '_' + address;
            var exists = this.allWalletsService.getMyWalletById(id);
            if (!exists) {
                this.wallet.address = address;
                this.wallet.id = this.wallet.symbol + '_' + address;
                this.allWalletsService.saveWallets();
                this.allWalletsService.dispattchWalletChanges();
            }
            else {
                this.snackBar.open('This wallet exists ', 'Error', { duration: 3000 });
            }
        }
    };
    WalletEditComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    WalletEditComponent.prototype.saveWallet = function (evt) {
        this.dialogRef.close('saveMe');
    };
    return WalletEditComponent;
}());
WalletEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-wallet-edit',
        template: __webpack_require__("../../../../../src/app/wallets/wallet-edit/wallet-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wallets/wallet-edit/wallet-edit.component.css")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_app_models__["b" /* WalletModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_app_models__["b" /* WalletModel */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__wallets_all_service__["a" /* WalletsAllService */]) === "function" && _d || Object])
], WalletEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=wallet-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/wallet/wallet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wallets/wallet/wallet.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <span (click)=\"updateBalance()\">Balance: </span><strong> ${{wallet.usd}} <small>{{wallet.symbol}}:</small>{{wallet.balanceDisplay?wallet.balanceDisplay:'0'}}</strong> |\n   <span>{{wallet.label}}</span> | <span> {{wallet.address}} </span> | <span> {{wallet.symbol}} </span> - <span> {{wallet.displayName}} </span>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wallets/wallet/wallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_service__ = __webpack_require__("../../../../../src/app/wallets/wallet/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ss_browse_all_coins_service__ = __webpack_require__("../../../../../src/app/ss-browse/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WalletComponent = (function () {
    function WalletComponent(walletService, allWallets, api, allCoinsService, dialog) {
        var _this = this;
        this.walletService = walletService;
        this.allWallets = allWallets;
        this.api = api;
        this.allCoinsService = allCoinsService;
        this.dialog = dialog;
        allWallets.coinsAvailable$.subscribe(function (res) {
            _this.coinConfigs = res;
            _this.setConfig();
        });
    }
    WalletComponent.prototype.setConfig = function () {
        if (this.coinConfigs && this.wallet && this.coinConfigs.length && this.wallet.symbol) {
            var mySymbol_1 = this.wallet.symbol;
            var configs = this.coinConfigs.filter(function (item) {
                return item.symbol === mySymbol_1;
            });
            if (configs.length)
                this.walletService.setCoinConfig(configs[0]);
            else
                console.error(' no config for wallet ' + mySymbol_1);
        }
    };
    WalletComponent.prototype.ngOnInit = function () {
        // this.allCoinsService.start();
    };
    WalletComponent.prototype.ngAfterContentInit = function () {
        this.walletService.setWallet(this.wallet);
        this.setConfig();
        // console.log(this.wallet);
    };
    WalletComponent.prototype.updateBalance = function () {
        //console.log('update balance  ');
        var _this = this;
        this.api.getBalance(this.wallet.symbol, this.wallet.address).subscribe(function (res) {
            console.log(res);
            _this.wallet.balance = res.balance;
            _this.wallet.balanceDisplay = +_this.wallet.balance / 1e18;
            var market = _this.allCoinsService.getCoinMarket(_this.wallet.symbol);
            //console.log(price);
            _this.wallet.market = market;
            _this.wallet.usd = (market.price_usd * _this.wallet.balanceDisplay).toFixed(2);
            _this.allWallets.saveWallets();
        });
    };
    return WalletComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_app_models__["b" /* WalletModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_app_models__["b" /* WalletModel */]) === "function" && _a || Object)
], WalletComponent.prototype, "wallet", void 0);
WalletComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-wallet',
        template: __webpack_require__("../../../../../src/app/wallets/wallet/wallet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wallets/wallet/wallet.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__wallet_service__["a" /* WalletService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__wallet_service__["a" /* WalletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__wallet_service__["a" /* WalletService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__wallets_all_service__["a" /* WalletsAllService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__api_server_service__["a" /* ApiServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_server_service__["a" /* ApiServerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ss_browse_all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ss_browse_all_coins_service__["a" /* AllCoinsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdDialog */]) === "function" && _f || Object])
], WalletComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=wallet.component.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/wallet/wallet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletService = (function () {
    function WalletService(http) {
        this.http = http;
    }
    WalletService.prototype.setWallet = function (wallet) {
        this.wallet = wallet;
    };
    WalletService.prototype.setCoinConfig = function (config) {
        console.log(config);
        this.config = config;
        // this.loadBalance();
    };
    WalletService.prototype.loadBalance = function () {
        var url = '/api/token/balance/' + this.config.symbol + '/' + this.wallet.address;
        console.log(url);
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log(res);
        });
    };
    WalletService.prototype.senTransaction = function (amount, address) {
    };
    WalletService.prototype.buildTransactionNitcoin = function () {
    };
    WalletService.prototype.buildTransactionEther = function () {
    };
    return WalletService;
}());
WalletService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WalletService);

var _a;
//# sourceMappingURL=wallet.service.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/wallets-all.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__("../../../../crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletsAllService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WalletsAllService = (function () {
    //password:string = '';
    function WalletsAllService(api) {
        this.api = api;
        this.myWallets = [];
        this.myWalletsSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.coinsAvailableSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.password = 'my secure password';
        this.email = 'vlad@gmail.com';
        this.isRwmote = true;
        this.myWallets$ = this.myWalletsSub.asObservable();
        this.coinsAvailable$ = this.coinsAvailableSub.asObservable();
        this.loadConfig();
        // this.loadWallets();
        this.loadWallets2();
    }
    WalletsAllService.prototype.getAllWallets = function () {
        return this.myWallets;
    };
    WalletsAllService.prototype.deleteWallet = function (wallet) {
        var ar = this.myWallets;
        for (var i = ar.length - 1; i >= 0; i--)
            if (ar[i].label == wallet.label)
                ar.splice(i, 1);
        this.saveWallets();
        // this.loadWallets();
    };
    WalletsAllService.prototype.createNewWallet = function (wallet) {
        wallet = __WEBPACK_IMPORTED_MODULE_3_lodash__["clone"](wallet);
        wallet.id = wallet.symbol + '_' + wallet.address;
        // let ecrypted = CryptoJS.AES.encrypt(wallet.privateKey, this.password);
        // wallet.privateKey = ecrypted.toString();
        // console.log(ecrypted.toString());
        //let bytes  = CryptoJS.AES.decrypt(wallet.privateKey, this.password);
        //let plaintext = bytes.toString(CryptoJS.enc.Utf8);
        this.myWallets.push(wallet);
        this.myWalletsSub.next(this.myWallets);
        this.saveWallets();
    };
    WalletsAllService.prototype.dispattchWalletChanges = function () {
        this.myWalletsSub.next(this.myWallets);
    };
    WalletsAllService.prototype.loadWalletsLocaly = function () {
        console.warn('loadWalletsLocaly');
        var str = localStorage.getItem('mywallets');
        str = null;
        if (str) {
            var wallets = [];
            var crypto_1 = __WEBPACK_IMPORTED_MODULE_2_crypto_js__;
            var password_1 = this.password;
            try {
                wallets = JSON.parse(str);
                wallets.forEach(function (item) {
                    console.log('1 ' + item.privateKey);
                    item.privateKey = crypto_1.AES.decrypt(item.privateKey, password_1).toString(crypto_1.enc.Utf8);
                    console.log('2 ' + item.privateKey);
                });
                console.log(wallets);
            }
            catch (e) {
                console.log(e.toString());
                e.toString();
            }
            this.myWallets = wallets;
            this.dispattchWalletChanges();
            /* this.saveWalletes().subscribe(res=>{
               console.log(res);
             });*/
        }
    };
    WalletsAllService.prototype.saveWalletesRemote = function () {
        var password = this.password;
        if (!password) {
            throw new Error('Password required');
        }
        var crypto = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["AES"];
        var walets = __WEBPACK_IMPORTED_MODULE_3_lodash__["clone"](this.myWallets);
        walets.forEach(function (item) {
            delete item.market;
            delete item.analitics;
            // item.privateKey = crypto.encrypt(item.privateKey, password).toString();
        });
        console.log(walets);
        var payload = crypto.encrypt(JSON.stringify(walets), this.password).toString();
        console.log(payload);
        return this.api.saveWallets(payload, this.email);
    };
    WalletsAllService.prototype.loadWallets2 = function () {
        if (this.isRwmote)
            this.loadWalletsRemote();
        else
            this.loadWalletsLocaly();
    };
    WalletsAllService.prototype.saveWallets = function () {
        if (this.isRwmote)
            this.saveWalletesRemote();
        else
            this.saveWalletesLoacaly();
    };
    WalletsAllService.prototype.saveWalletesLoacaly = function () {
        console.warn('saveWalletesLoacaly');
        /*
         let password = this.password;
         if(!password) {
           throw new Error('Password required')
         }
         let crypto = CryptoJS.AES
         let walets = _.clone(this.myWallets);
     
     
     
         walets.forEach(function (item) {
           delete item.market;
           delete item.analitics;
           item.privateKey = crypto.encrypt(item.privateKey, password).toString();
         });
     
     
         let payload = crypto.encrypt(JSON.stringify(walets), this.password).toString();
         console.log(payload);
     
        localStorage.setItem('mywallets',JSON.stringify(walets));*/
    };
    /* saveWalletes():boolean{
   
       //console.log(this);
       let password = this.password;
       if(!password) {
         throw new Error('Password required')
       }
       let crypto = CryptoJS.AES
       let walets = _.clone(this.myWallets);
   
      walets.forEach(function (item) {
         delete item.market;
         item.privateKey = crypto.encrypt(item.privateKey, password).toString();
       });
       localStorage.setItem('mywallets',JSON.stringify(walets));
   
       return true;
     }*/
    WalletsAllService.prototype.login = function (email, password, isRemote) {
        this.isRwmote = isRemote;
        this.email = email;
        this.password = password;
        if (isRemote)
            this.loadWalletsRemote();
        else
            this.loadWalletsLocaly();
    };
    ;
    WalletsAllService.prototype.loadWalletsRemote = function () {
        var _this = this;
        var email = this.email;
        var password = this.password;
        var crypto = __WEBPACK_IMPORTED_MODULE_2_crypto_js__;
        this.api.loadWallets(email).subscribe(function (res) {
            var payload = res.payload;
            var result = crypto.AES.decrypt(res.payload, password).toString(crypto.enc.Utf8);
            var wallets = JSON.parse(result);
            wallets.forEach(function (wallet) {
                wallet.privateKey = crypto.AES.decrypt(wallet.privateKey, password).toString(crypto.enc.Utf8);
            });
            //  console.log(res);
            //  console.log(result)
            //  console.log(result)
            //  console.log(result)
            _this.myWallets = wallets;
            // console.log(wallets);
            _this.dispattchWalletChanges();
            // this.saveWalletesRemote();
        });
    };
    WalletsAllService.prototype.getMyWalletsBySymbol = function (symbol) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.myWallets, { symbol: symbol });
        //for(let i= ar.length -1; i>=0; i--) if(ar[i].symbol == symbol) return ar[i];
        //return null;
    };
    WalletsAllService.prototype.getMyWalletsByName = function (label) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.myWallets, { label: label });
        //for(let i= ar.length -1; i>=0; i--) if(ar[i].symbol == symbol) return ar[i];
        //return null;
    };
    WalletsAllService.prototype.getMyWalletById = function (id) {
        var ar = this.getAllWallets();
        for (var i = ar.length - 1; i >= 0; i--)
            if (ar[i].id === id)
                return ar[i];
        return null;
    };
    WalletsAllService.prototype.getCoinConfigBySymbol = function (symbol) {
        var ar = this.coinsAvailable;
        for (var i = ar.length - 1; i >= 0; i--)
            if (ar[i].symbol == symbol)
                return ar[i];
        return null;
    };
    WalletsAllService.prototype.loadConfig = function () {
        var _this = this;
        this.api.loadConfig().subscribe(function (res) {
            _this.config = res;
            _this.coinsAvailable = res.coins.concat(res.tokens);
            _this.coinsAvailableSub.next(_this.coinsAvailable);
        });
    };
    WalletsAllService.prototype.logout = function () {
        this.email = null;
        this.password = null;
        this.myWallets = [];
        this.dispattchWalletChanges();
    };
    return WalletsAllService;
}());
WalletsAllService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_server_service__["a" /* ApiServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_server_service__["a" /* ApiServerService */]) === "function" && _a || Object])
], WalletsAllService);

var _a;
//# sourceMappingURL=wallets-all.service.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/wallets-main/wallets-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-input-container{\r\n    float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wallets/wallets-main/wallets-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <md-input-container>\n        <input mdInput placeholder=\"Password\"  type=\"password\">\n    </md-input-container>\n  wallets-main works!\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wallets/wallets-main/wallets-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletsMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WalletsMainComponent = (function () {
    function WalletsMainComponent() {
    }
    WalletsMainComponent.prototype.ngOnInit = function () {
    };
    return WalletsMainComponent;
}());
WalletsMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-wallets-main',
        template: __webpack_require__("../../../../../src/app/wallets/wallets-main/wallets-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wallets/wallets-main/wallets-main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WalletsMainComponent);

//# sourceMappingURL=wallets-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/wallets.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallets_main_wallets_main_component__ = __webpack_require__("../../../../../src/app/wallets/wallets-main/wallets-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_wallet_component__ = __webpack_require__("../../../../../src/app/wallets/wallet/wallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__walets_all_walets_all_component__ = __webpack_require__("../../../../../src/app/wallets/walets-all/walets-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_wallets_my_wallets_component__ = __webpack_require__("../../../../../src/app/wallets/my-wallets/my-wallets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wallet_create_wallet_create_component__ = __webpack_require__("../../../../../src/app/wallets/wallet-create/wallet-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wallet_edit_wallet_edit_component__ = __webpack_require__("../../../../../src/app/wallets/wallet-edit/wallet-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var WalletsModule = (function () {
    function WalletsModule() {
    }
    return WalletsModule;
}());
WalletsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__material_material_app_module__["a" /* MaterialAppModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wallets_main_wallets_main_component__["a" /* WalletsMainComponent */],
            __WEBPACK_IMPORTED_MODULE_3__wallet_wallet_component__["a" /* WalletComponent */],
            __WEBPACK_IMPORTED_MODULE_4__walets_all_walets_all_component__["a" /* WaletsAllComponent */],
            __WEBPACK_IMPORTED_MODULE_5__my_wallets_my_wallets_component__["a" /* MyWalletsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__wallet_create_wallet_create_component__["a" /* WalletCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_9__wallet_edit_wallet_edit_component__["a" /* WalletEditComponent */]
        ],
        providers: [],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__wallet_edit_wallet_edit_component__["a" /* WalletEditComponent */]]
    })
], WalletsModule);

//# sourceMappingURL=wallets.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map