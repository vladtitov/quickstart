webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiServerService);

var _a;
//# sourceMappingURL=api-server.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<diV>\r\n    <div>\r\n\r\n    </div>\r\n    {{menu | async}}\r\n    <md-sidenav-container >\r\n        <md-sidenav #sidenav>\r\n            <md-list>\r\n                <a md-list-item routerLink='/market-cap/all-coins'>Coin Market Cap</a>\r\n\r\n                <hr/>\r\n                <a md-list-item routerLink='/bittrex/data'>Bittrex &nbsp; <small> (Las Vegas, USA)</small></a>\r\n                <a md-list-item routerLink='/shape-shift-market-cap'>ShapeShift &nbsp; <small>(Switzerland) </small></a>\r\n\r\n                <a md-list-item routerLink='/changelly'>Changelly &nbsp;<small> (Prague, Czech Rep.)</small></a>\r\n                <a md-list-item routerLink='poloniex/data'>Poloniex  &nbsp;<small>(Delaware, USA)</small></a>\r\n                <a md-list-item routerLink='hit-btc/market'>Hit BTC &nbsp;<small>(Copenhagen, Denmark)</small> </a>\r\n                <a md-list-item routerLink='yo-bit/market'>Yo Bit &nbsp; <small>(Moscow, Russia)</small></a>\r\n                <a md-list-item routerLink='coin-exchange/markets'>CoinExchange &nbsp; <small></small></a>\r\n                <a md-list-item routerLink='exchanges/kraken'>Kraken &nbsp; <small>(San Fran, USA)</small></a>\r\n                <a md-list-item routerLink='exchanges/bitfinex'>BitFinex &nbsp; <small>(Hong-Kong)</small></a>\r\n                <a md-list-item routerLink='exchanges/novaexchange'>Nova Exchaange &nbsp;<small>(Sweden)</small></a>\r\n                <a md-list-item routerLink='exchanges/cryptopia'>Cryptopia &nbsp;<small>(New Zealand)</small></a>\r\n\r\n                <hr/>\r\n\r\n                <a md-list-item routerLink='/coinbase/currencies'>Coinbase &nbsp;<small> (San Fran, USA)</small></a>\r\n                <a md-list-item routerLink='/exchanges/search'>Search &nbsp;</a>\r\n\r\n                <hr/>\r\n\r\n                <a md-list-item routerLink='/login/sign-in'>Login</a>\r\n                <a md-list-item routerLink='/email-service'>Email Service</a>\r\n                <a md-list-item routerLink='/login/register'>Register</a>\r\n                <a md-list-item [routerLink]=\"['/login/forgot-password']\">Forgot Password</a>\r\n                <a md-list-item [routerLink]=\"['/login/logout']\">Logout</a>\r\n\r\n            </md-list>\r\n\r\n        </md-sidenav>\r\n\r\n        <div class=\"navbar\">\r\n            <div (click)=\"sidenav.open()\" class=\"fa fa-bars btn\">  </div>\r\n            <ng-container *ngIf=\"user$ | async as user\">\r\n                <div class=\"right\">\r\n                    <a *ngIf=\"!!(isLogedIn$ | async)\" class=\"btn\" (click)=\"onLogin()\">Login</a>\r\n                    <a *ngIf=\"!(isLogedIn$ | async)\" class=\"btn\" (click)=\"onLogout()\">Logout</a>\r\n                </div>\r\n            </ng-container>\r\n\r\n        </div>\r\n        <div id=\"MainOutlet\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n    </md-sidenav-container>\r\n</diV>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login/login-form/login-form.component.ts");
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
    function AppComponent(service, router, dialog) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.title = 'app works!';
        this.user$ = service.user$;
        this.isLogedIn$ = service.isLogedIn$;
    }
    AppComponent.prototype.onLogin = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__login_login_form_login_form_component__["a" /* LoginFormComponent */], {
            width: '300px',
            height: '400px'
        });
    };
    AppComponent.prototype.onLogout = function () {
    };
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_shareReplay__ = __webpack_require__("../../../../rxjs/add/operator/shareReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_shareReplay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_shareReplay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__github_repo_browser_repo_browser_component__ = __webpack_require__("../../../../../src/app/github/repo-browser/repo-browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__github_repo_list_repo_list_component__ = __webpack_require__("../../../../../src/app/github/repo-list/repo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__github_repo_detail_repo_detail_component__ = __webpack_require__("../../../../../src/app/github/repo-detail/repo-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__github_shared_github_service__ = __webpack_require__("../../../../../src/app/github/shared/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__wallets_wallets_module__ = __webpack_require__("../../../../../src/app/wallets/wallets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__exchange_ss_exchange_ss_component__ = __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__exchange_ss_exchange_ss_service__ = __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__wallets_wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__login2_login2_component__ = __webpack_require__("../../../../../src/app/login2/login2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__exchange_ss_send_alert_service__ = __webpack_require__("../../../../../src/app/exchange-ss/send-alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__email_service_email_service_module__ = __webpack_require__("../../../../../src/app/email-service/email-service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shape_shift_shape_shift_module__ = __webpack_require__("../../../../../src/app/shape-shift/shape-shift.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__exchanges_services_poloniex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/poloniex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__market_cap_market_cap_module__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_app_storage_service__ = __webpack_require__("../../../../../src/app/shared/app-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__exchanges_services_kraken_service__ = __webpack_require__("../../../../../src/app/exchanges/services/kraken.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__exchanges_exchanges_module__ = __webpack_require__("../../../../../src/app/exchanges/exchanges.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__exchanges_services_bitfinex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bitfinex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__exchanges_services_changelly_service__ = __webpack_require__("../../../../../src/app/exchanges/services/changelly.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__exchanges_services_coin_echange_service__ = __webpack_require__("../../../../../src/app/exchanges/services/coin-echange.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__exchanges_services_bittrex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bittrex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__exchanges_services_coinbase_service__ = __webpack_require__("../../../../../src/app/exchanges/services/coinbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__exchanges_services_yo_bit_service__ = __webpack_require__("../../../../../src/app/exchanges/services/yo-bit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__search_coin_search_coin_component__ = __webpack_require__("../../../../../src/app/search-coin/search-coin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__exchanges_services_hit_btc_service__ = __webpack_require__("../../../../../src/app/exchanges/services/hit-btc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__exchanges_search_coin_service__ = __webpack_require__("../../../../../src/app/exchanges/search-coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__exchanges_services_novaexchange_service__ = __webpack_require__("../../../../../src/app/exchanges/services/novaexchange.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__exchanges_services_cryptopia_service__ = __webpack_require__("../../../../../src/app/exchanges/services/cryptopia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__bittrex_bittrex_module__ = __webpack_require__("../../../../../src/app/bittrex/bittrex.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { TestComponent } from '../../arch/test/test.component';




//import 'rxjs/operator/publishLast';


//import {AuthHttp, AuthModule, provideAuth, AuthConfig} from './libs/angular2-jwt';







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_37__market_cap_market_cap_module__["a" /* MarketCapModule */],
            __WEBPACK_IMPORTED_MODULE_21__material_material_app_module__["a" /* MaterialAppModule */],
            __WEBPACK_IMPORTED_MODULE_22__wallets_wallets_module__["a" /* WalletsModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_31__email_service_email_service_module__["a" /* EmailServiceModule */],
            __WEBPACK_IMPORTED_MODULE_33__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_34__shape_shift_shape_shift_module__["a" /* ShapeShiftModule */],
            __WEBPACK_IMPORTED_MODULE_40__exchanges_exchanges_module__["a" /* ExchangesModule */],
            __WEBPACK_IMPORTED_MODULE_52__bittrex_bittrex_module__["a" /* BittrexModule */],
            // AuthModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* rootRouterConfig */], { useHash: true })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            // TestComponent,
            __WEBPACK_IMPORTED_MODULE_13__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__github_repo_browser_repo_browser_component__["a" /* RepoBrowserComponent */],
            __WEBPACK_IMPORTED_MODULE_16__github_repo_list_repo_list_component__["a" /* RepoListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__github_repo_detail_repo_detail_component__["a" /* RepoDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_25__exchange_ss_exchange_ss_component__["a" /* ExchangeSsComponent */],
            __WEBPACK_IMPORTED_MODULE_29__login2_login2_component__["a" /* Login2Component */],
            __WEBPACK_IMPORTED_MODULE_47__search_coin_search_coin_component__["a" /* SearchCoinComponent */]
        ],
        providers: [
            //AuthHttp,
            __WEBPACK_IMPORTED_MODULE_19__github_shared_github_service__["a" /* GithubService */],
            __WEBPACK_IMPORTED_MODULE_32__services_auth_http_service__["a" /* AuthHttpService */],
            __WEBPACK_IMPORTED_MODULE_20__home_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_26__exchange_ss_exchange_ss_service__["a" /* ExchangeSsService */],
            __WEBPACK_IMPORTED_MODULE_27__wallets_wallets_all_service__["a" /* WalletsAllService */],
            __WEBPACK_IMPORTED_MODULE_28__api_server_service__["a" /* ApiServerService */],
            __WEBPACK_IMPORTED_MODULE_30__exchange_ss_send_alert_service__["a" /* SendAlertService */],
            __WEBPACK_IMPORTED_MODULE_35__market_cap_market_cap_service__["a" /* MarketCapService */],
            __WEBPACK_IMPORTED_MODULE_36__exchanges_services_poloniex_service__["a" /* PoloniexService */],
            __WEBPACK_IMPORTED_MODULE_38__shared_app_storage_service__["a" /* AppStorageService */],
            __WEBPACK_IMPORTED_MODULE_39__exchanges_services_kraken_service__["a" /* KrakenService */],
            __WEBPACK_IMPORTED_MODULE_41__exchanges_services_bitfinex_service__["a" /* BitfinexService */],
            __WEBPACK_IMPORTED_MODULE_49__exchanges_search_coin_service__["a" /* SearchCoinService */],
            __WEBPACK_IMPORTED_MODULE_42__exchanges_services_changelly_service__["a" /* ChangellyService */],
            __WEBPACK_IMPORTED_MODULE_43__exchanges_services_coin_echange_service__["a" /* CoinEchangeService */],
            __WEBPACK_IMPORTED_MODULE_44__exchanges_services_bittrex_service__["a" /* BittrexService */],
            __WEBPACK_IMPORTED_MODULE_45__exchanges_services_coinbase_service__["a" /* CoinbaseService */],
            __WEBPACK_IMPORTED_MODULE_46__exchanges_services_yo_bit_service__["a" /* YoBitService */],
            __WEBPACK_IMPORTED_MODULE_48__exchanges_services_hit_btc_service__["a" /* HitBtcService */],
            __WEBPACK_IMPORTED_MODULE_50__exchanges_services_novaexchange_service__["a" /* NovaexchangeService */],
            __WEBPACK_IMPORTED_MODULE_51__exchanges_services_cryptopia_service__["a" /* CryptopiaService */]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__github_repo_browser_repo_browser_component__ = __webpack_require__("../../../../../src/app/github/repo-browser/repo-browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__github_repo_list_repo_list_component__ = __webpack_require__("../../../../../src/app/github/repo-list/repo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__github_repo_detail_repo_detail_component__ = __webpack_require__("../../../../../src/app/github/repo-detail/repo-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wallets_wallets_main_wallets_main_component__ = __webpack_require__("../../../../../src/app/wallets/wallets-main/wallets-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wallets_my_wallets_my_wallets_component__ = __webpack_require__("../../../../../src/app/wallets/my-wallets/my-wallets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__exchange_ss_exchange_ss_component__ = __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exchanges_ch_market_ch_market_component__ = __webpack_require__("../../../../../src/app/exchanges/ch-market/ch-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/login/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__email_service_email_main_email_main_component__ = __webpack_require__("../../../../../src/app/email-service/email-main/email-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__email_service_email_all_coins_email_all_coins_component__ = __webpack_require__("../../../../../src/app/email-service/email-all-coins/email-all-coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__email_service_email_selected_coins_email_selected_coins_component__ = __webpack_require__("../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__email_service_create_watchdog_create_watchdog_component__ = __webpack_require__("../../../../../src/app/email-service/create-watchdog/create-watchdog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__email_service_run_watchdogs_run_watchdogs_component__ = __webpack_require__("../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__email_service_edit_script_edit_script_component__ = __webpack_require__("../../../../../src/app/email-service/edit-script/edit-script.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shape_shift_ss_coins_available_ss_coins_available_component__ = __webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__exchanges_poloniex_ticker_poloniex_ticker_component__ = __webpack_require__("../../../../../src/app/exchanges/poloniex-ticker/poloniex-ticker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__market_cap_selected_coins_selected_coins_component__ = __webpack_require__("../../../../../src/app/market-cap/selected-coins/selected-coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__market_cap_all_coins_table_all_coins_table_component__ = __webpack_require__("../../../../../src/app/market-cap/all-coins-table/all-coins-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_confirm_reset_password_confirm_reset_password_component__ = __webpack_require__("../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__exchanges_hit_btc_market_hit_btc_market_component__ = __webpack_require__("../../../../../src/app/exchanges/hit-btc-market/hit-btc-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__exchanges_yo_bit_market_yo_bit_market_component__ = __webpack_require__("../../../../../src/app/exchanges/yo-bit-market/yo-bit-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__exchanges_coinbase_currencies_coinbase_currencies_component__ = __webpack_require__("../../../../../src/app/exchanges/coinbase-currencies/coinbase-currencies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__exchanges_coin_exchange_market_coin_exchange_market_component__ = __webpack_require__("../../../../../src/app/exchanges/coin-exchange-market/coin-exchange-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__exchanges_kraken_kraken_component__ = __webpack_require__("../../../../../src/app/exchanges/kraken/kraken.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__exchanges_bitfinex_bitfinex_component__ = __webpack_require__("../../../../../src/app/exchanges/bitfinex/bitfinex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__search_coin_search_coin_component__ = __webpack_require__("../../../../../src/app/search-coin/search-coin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__exchanges_poloniex_data_poloniex_data_component__ = __webpack_require__("../../../../../src/app/exchanges/poloniex-data/poloniex-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__market_cap_gainers_losers_gainers_losers_component__ = __webpack_require__("../../../../../src/app/market-cap/gainers-losers/gainers-losers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__market_cap_exchanges_list_exchanges_list_component__ = __webpack_require__("../../../../../src/app/market-cap/exchanges-list/exchanges-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__market_cap_coins_list_coins_list_component__ = __webpack_require__("../../../../../src/app/market-cap/coins-list/coins-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__market_cap_gl_all_exchanges_gl_all_exchanges_component__ = __webpack_require__("../../../../../src/app/market-cap/gl-all-exchanges/gl-all-exchanges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__market_cap_gl_known_exchanges_gl_known_exchanges_component__ = __webpack_require__("../../../../../src/app/market-cap/gl-known-exchanges/gl-known-exchanges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__market_cap_gainers_gainers_component__ = __webpack_require__("../../../../../src/app/market-cap/gainers/gainers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__market_cap_coins_exchanges_coins_exchanges_component__ = __webpack_require__("../../../../../src/app/market-cap/coins-exchanges/coins-exchanges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__exchanges_novaexchange_novaexchange_component__ = __webpack_require__("../../../../../src/app/exchanges/novaexchange/novaexchange.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__exchanges_cryptopia_cryptopia_component__ = __webpack_require__("../../../../../src/app/exchanges/cryptopia/cryptopia.component.ts");








































var rootRouterConfig = [
    { path: 'exchanges/search', component: __WEBPACK_IMPORTED_MODULE_29__search_coin_search_coin_component__["a" /* SearchCoinComponent */] },
    { path: '', redirectTo: 'market-cap/all-coins', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    // { path: 'login', component: LoginMain },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_0__about_about_component__["a" /* AboutComponent */] },
    { path: 'exchange-ss', component: __WEBPACK_IMPORTED_MODULE_8__exchange_ss_exchange_ss_component__["a" /* ExchangeSsComponent */] },
    { path: 'market-cap/all-coins', component: __WEBPACK_IMPORTED_MODULE_21__market_cap_all_coins_table_all_coins_table_component__["a" /* AllCoinsTableComponent */] },
    { path: 'market-cap/selected', component: __WEBPACK_IMPORTED_MODULE_20__market_cap_selected_coins_selected_coins_component__["a" /* SelectedCoinsComponent */] },
    { path: 'market-cap/gainers-losers', component: __WEBPACK_IMPORTED_MODULE_31__market_cap_gainers_losers_gainers_losers_component__["a" /* GainersLosersComponent */] },
    { path: 'market-cap/gainers', component: __WEBPACK_IMPORTED_MODULE_36__market_cap_gainers_gainers_component__["a" /* GainersComponent */] },
    { path: 'market-cap/gainers-losers/all-exchanges', component: __WEBPACK_IMPORTED_MODULE_34__market_cap_gl_all_exchanges_gl_all_exchanges_component__["a" /* GlAllExchangesComponent */] },
    { path: 'market-cap/gainers-losers/known-exchanges', component: __WEBPACK_IMPORTED_MODULE_35__market_cap_gl_known_exchanges_gl_known_exchanges_component__["a" /* GlKnownExchangesComponent */] },
    { path: 'market-cap/exchanges-list', component: __WEBPACK_IMPORTED_MODULE_32__market_cap_exchanges_list_exchanges_list_component__["a" /* ExchangesListComponent */] },
    { path: 'market-cap/coins-list', component: __WEBPACK_IMPORTED_MODULE_33__market_cap_coins_list_coins_list_component__["a" /* CoinsListComponent */] },
    { path: 'coins-exchanges/:list', component: __WEBPACK_IMPORTED_MODULE_37__market_cap_coins_exchanges_coins_exchanges_component__["a" /* CoinsExchangesComponent */] },
    { path: 'shape-shift-market-cap', component: __WEBPACK_IMPORTED_MODULE_18__shape_shift_ss_coins_available_ss_coins_available_component__["a" /* SSCoinsAvailableComponent */] },
    // { path: 'bittrex', component: BittrexMainComponent },
    //  { path: 'bittrex/filter', component: BittrexMarketComponent },
    //{ path: 'bittrex/data', component: BittrexAvailableComponent },
    { path: 'hit-btc/market', component: __WEBPACK_IMPORTED_MODULE_23__exchanges_hit_btc_market_hit_btc_market_component__["a" /* HitBtcMarketComponent */] },
    { path: 'yo-bit/market', component: __WEBPACK_IMPORTED_MODULE_24__exchanges_yo_bit_market_yo_bit_market_component__["a" /* YoBitMarketComponent */] },
    { path: 'changelly', component: __WEBPACK_IMPORTED_MODULE_9__exchanges_ch_market_ch_market_component__["a" /* ChMarketComponent */] },
    { path: 'poloniex/data', component: __WEBPACK_IMPORTED_MODULE_30__exchanges_poloniex_data_poloniex_data_component__["a" /* PoloniexDataComponent */] },
    { path: 'poloniex/filter', component: __WEBPACK_IMPORTED_MODULE_19__exchanges_poloniex_ticker_poloniex_ticker_component__["a" /* PoloniexTickerComponent */] },
    { path: 'coinbase/currencies', component: __WEBPACK_IMPORTED_MODULE_25__exchanges_coinbase_currencies_coinbase_currencies_component__["a" /* CoinbaseCurrenciesComponent */] },
    { path: 'coin-exchange/markets', component: __WEBPACK_IMPORTED_MODULE_26__exchanges_coin_exchange_market_coin_exchange_market_component__["a" /* CoinExchangeMarketComponent */] },
    { path: 'exchanges/kraken', component: __WEBPACK_IMPORTED_MODULE_27__exchanges_kraken_kraken_component__["a" /* KrakenComponent */] },
    { path: 'exchanges/bitfinex', component: __WEBPACK_IMPORTED_MODULE_28__exchanges_bitfinex_bitfinex_component__["a" /* BitfinexComponent */] },
    { path: 'exchanges/novaexchange', component: __WEBPACK_IMPORTED_MODULE_38__exchanges_novaexchange_novaexchange_component__["a" /* NovaexchangeComponent */] },
    { path: 'exchanges/cryptopia', component: __WEBPACK_IMPORTED_MODULE_39__exchanges_cryptopia_cryptopia_component__["a" /* CryptopiaComponent */] },
    { path: 'wallets', component: __WEBPACK_IMPORTED_MODULE_6__wallets_wallets_main_wallets_main_component__["a" /* WalletsMainComponent */] },
    { path: 'email-service', component: __WEBPACK_IMPORTED_MODULE_12__email_service_email_main_email_main_component__["a" /* EmailMainComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_14__email_service_email_selected_coins_email_selected_coins_component__["a" /* EmailSelectedCoinsComponent */] },
            { path: 'all-coins', component: __WEBPACK_IMPORTED_MODULE_13__email_service_email_all_coins_email_all_coins_component__["a" /* EmailAllCoinsComponent */] },
            { path: 'selected-coins', component: __WEBPACK_IMPORTED_MODULE_14__email_service_email_selected_coins_email_selected_coins_component__["a" /* EmailSelectedCoinsComponent */] },
            { path: 'create-watch-dog', component: __WEBPACK_IMPORTED_MODULE_15__email_service_create_watchdog_create_watchdog_component__["a" /* CreateWatchdogComponent */] },
            { path: 'edit-script/:uid', component: __WEBPACK_IMPORTED_MODULE_17__email_service_edit_script_edit_script_component__["a" /* EditScriptComponent */] },
            { path: 'run-watch-dog', component: __WEBPACK_IMPORTED_MODULE_16__email_service_run_watchdogs_run_watchdogs_component__["a" /* RunWatchdogsComponent */] }
        ]
    },
    { path: 'my-wallets', component: __WEBPACK_IMPORTED_MODULE_7__wallets_my_wallets_my_wallets_component__["a" /* MyWalletsComponent */] },
    { path: 'login/:topic', component: __WEBPACK_IMPORTED_MODULE_10__login_login_login_component__["a" /* LoginComponent */] },
    { path: 'login-confirm/:uid', component: __WEBPACK_IMPORTED_MODULE_11__login_confirm_confirm_component__["a" /* ConfirmComponent */] },
    { path: 'confirm-reset-password/:uid', component: __WEBPACK_IMPORTED_MODULE_22__login_confirm_reset_password_confirm_reset_password_component__["a" /* ConfirmResetPasswordComponent */] },
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

/***/ "../../../../../src/app/bittrex/bittrex-data/bittrex-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-data/bittrex-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div>\n        <h3>Bittrex Summary </h3> <small *ngIf=\"marketsAr\"> Total {{marketsAr.length}}</small>\n\n        <table>\n            <tr>\n                <th  (click)=\"onClickHeader('MarketName')\">Name</th>\n                <th  (click)=\"onClickHeader('High')\">High</th>\n                <th  (click)=\"onClickHeader('Low')\">Low</th>\n                <th  (click)=\"onClickHeader('Volume')\">Volume</th>\n                <th  (click)=\"onClickHeader('Last')\">Last</th>\n                <th  (click)=\"onClickHeader('BaseVolume')\">Base Volume</th>\n\n                <th  (click)=\"onClickHeader('Bid')\">Bid</th>\n                <th  (click)=\"onClickHeader('Ask')\">Ask</th>\n\n                <th  (click)=\"onClickHeader('OpenBuyOrders')\">To Buy</th>\n                <th  (click)=\"onClickHeader('OpenSellOrders')\">To Sell</th>\n\n                <th  (click)=\"onClickHeader('PrevDay')\">Prev Day</th>\n                <th>Time</th>\n\n                <!--  <th>Sponsored</th>\n                  <th>Created</th>\n                  <th>Notice</th>-->\n            </tr>\n            <tr *ngFor=\"let market of marketsAr\">\n                <td><div class=\"w120\">{{market.MarketName}}</div></td>\n                <td>{{market.High}}</td>\n                <td>{{market.Low}}</td>\n                <td>{{market.Volume}}</td>\n                <td>{{market.Last}}</td>\n                <td>{{market.BaseVolume}}</td>\n\n                <td>{{market.Bid}}</td>\n                <td>{{market.Ask}}</td>\n\n                <td>{{market.OpenBuyOrders}}</td>\n                <td>{{market.OpenSellOrders}}</td>\n\n\n                <td>{{market.PrevDay}}</td>\n                <td><small>{{market.TimeStamp}}</small></td>\n\n                <!--  <td>{{market.IsSponsored}}</td>\n                  <td class=\"my-timestamp\"><div>{{market.Created}}</div></td>\n                  <td class=\"notice\">{{market.Notice}}</td>-->\n            </tr>\n        </table>\n\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-data/bittrex-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exchanges_services_bittrex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bittrex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BittrexDataComponent = (function () {
    function BittrexDataComponent(bittrexService, marketCap) {
        this.bittrexService = bittrexService;
        this.marketCap = marketCap;
        this.asc_desc = 'desc';
    }
    BittrexDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bittrexService.getMarketAr().subscribe(function (res) {
            _this.marketsAr = res;
        });
    };
    BittrexDataComponent.prototype.doSort = function (ar) {
        if (this.sortBy)
            this.marketsAr = __WEBPACK_IMPORTED_MODULE_3_lodash__["orderBy"](ar, this.sortBy, this.asc_desc);
        else
            this.marketsAr = ar;
    };
    BittrexDataComponent.prototype.onClickHeader = function (sortBy) {
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
        if (this.marketsAr)
            this.doSort(this.marketsAr);
    };
    return BittrexDataComponent;
}());
BittrexDataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bittrex-data',
        template: __webpack_require__("../../../../../src/app/bittrex/bittrex-data/bittrex-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-data/bittrex-data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__exchanges_services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__exchanges_services_bittrex_service__["a" /* BittrexService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
], BittrexDataComponent);

var _a, _b;
//# sourceMappingURL=bittrex-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-filter/bittrex-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-filter/bittrex-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bittrex-filter works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-filter/bittrex-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BittrexFilterComponent = (function () {
    function BittrexFilterComponent() {
    }
    BittrexFilterComponent.prototype.ngOnInit = function () {
    };
    return BittrexFilterComponent;
}());
BittrexFilterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bittrex-filter',
        template: __webpack_require__("../../../../../src/app/bittrex/bittrex-filter/bittrex-filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-filter/bittrex-filter.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BittrexFilterComponent);

//# sourceMappingURL=bittrex-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-main/bittrex-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-main/bittrex-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav>\n        <a md-list-item routerLink='/bittrex/data'> Data</a>\n        <a md-list-item routerLink='/bittrex/filter'> Filter</a>\n    </nav>\n\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-main/bittrex-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BittrexMainComponent = (function () {
    function BittrexMainComponent() {
    }
    BittrexMainComponent.prototype.ngOnInit = function () {
    };
    return BittrexMainComponent;
}());
BittrexMainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bittrex-main',
        template: __webpack_require__("../../../../../src/app/bittrex/bittrex-main/bittrex-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-main/bittrex-main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BittrexMainComponent);

//# sourceMappingURL=bittrex-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-pair/bittrex-pair.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-pair/bittrex-pair.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bittrex-pair works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-pair/bittrex-pair.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexPairComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchanges_services_bittrex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bittrex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BittrexPairComponent = (function () {
    function BittrexPairComponent(route, bittrexService, marketCap) {
        this.route = route;
        this.bittrexService = bittrexService;
        this.marketCap = marketCap;
    }
    BittrexPairComponent.prototype.ngOnInit = function () {
        var pair = this.route.snapshot.paramMap.get('pair');
        console.log(pair);
        if (!pair) {
            console.error(' no pair');
            return;
        }
        this.bittrexService.searchCoin(pair.toLowerCase()).subscribe(function (res) {
            console.log(res);
        });
    };
    return BittrexPairComponent;
}());
BittrexPairComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bittrex-pair',
        template: __webpack_require__("../../../../../src/app/bittrex/bittrex-pair/bittrex-pair.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-pair/bittrex-pair.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__exchanges_services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__exchanges_services_bittrex_service__["a" /* BittrexService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _c || Object])
], BittrexPairComponent);

var _a, _b, _c;
//# sourceMappingURL=bittrex-pair.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bittrex_main_bittrex_main_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-main/bittrex-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bittrex_filter_bittrex_filter_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-filter/bittrex-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bittrex_data_bittrex_data_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-data/bittrex-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bittrex_pair_bittrex_pair_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-pair/bittrex-pair.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'bittrex', component: __WEBPACK_IMPORTED_MODULE_2__bittrex_main_bittrex_main_component__["a" /* BittrexMainComponent */],
        children: [
            { path: '', redirectTo: 'data', pathMatch: 'full' },
            { path: 'filter', component: __WEBPACK_IMPORTED_MODULE_5__bittrex_filter_bittrex_filter_component__["a" /* BittrexFilterComponent */] },
            { path: 'data', component: __WEBPACK_IMPORTED_MODULE_6__bittrex_data_bittrex_data_component__["a" /* BittrexDataComponent */] },
            { path: 'pair/:pair', component: __WEBPACK_IMPORTED_MODULE_8__bittrex_pair_bittrex_pair_component__["a" /* BittrexPairComponent */] }
        ]
    }
];
var BittrexModule = (function () {
    function BittrexModule() {
    }
    return BittrexModule;
}());
BittrexModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        exports: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bittrex_main_bittrex_main_component__["a" /* BittrexMainComponent */],
            __WEBPACK_IMPORTED_MODULE_5__bittrex_filter_bittrex_filter_component__["a" /* BittrexFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__bittrex_data_bittrex_data_component__["a" /* BittrexDataComponent */],
            __WEBPACK_IMPORTED_MODULE_8__bittrex_pair_bittrex_pair_component__["a" /* BittrexPairComponent */]
        ]
    })
], BittrexModule);

//# sourceMappingURL=bittrex.module.js.map

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_CustomValidators__ = __webpack_require__("../../../../../src/app/forms/CustomValidators.ts");
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
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__forms_CustomValidators__["a" /* default */].validateEmail]],
            content: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].minLength(10)]]
        });
    };
    ContactComponent.prototype.submitForm = function () {
        console.log(this.contactForm);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact-component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
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

module.exports = "<div class=\"content\">\n<hr/>\n    <table>\n        <tbody>\n        <tr>\n            <td>Market Cap $US</td>\n            <td><small>%</small>1h</td>\n            <td><small>%</small>24h</td>\n            <td><small>%</small>7d</td>\n        </tr>\n        <tr  *ngIf=\"coinMarket\">\n            <td>{{coinMarket.market_cap_usd}}</td>\n            <td>{{coinMarket.percent_change_1h}}</td>\n            <td>{{coinMarket.percent_change_24h}}</td>\n            <td>{{coinMarket.percent_change_7d}}</td>\n        </tr>\n        </tbody>\n    </table>\n    <br/>\n    <md-input-container>\n      <small> <input [(ngModel)]=\"watchDog.uid\"  mdInput placeholder=\"ID\"  disabled name=\"uid\"></small>\n    </md-input-container>\n    <md-input-container>\n        <input [(ngModel)]=\"watchDog.label\"  mdInput placeholder=\"Dog Name\" name=\"label\">\n    </md-input-container>\n\n\n    <md-select placeholder=\"Select Coin\" (change)=\"onCoinSelectChanged($event)\">\n        <md-option *ngFor=\"let coin of coinsSelected\" [value]=\"coin.symbol\">\n             {{coin.symbol}}\n        </md-option>\n    </md-select>\n\n    <button md-raised-button color=\"accent\" (click)=\"createDog()\">Create</button>\n    <hr/>\n    <div>\n        <h4> Watch Dogs </h4> <small>Total {{watchDogs.length}}</small>\n        <table>\n            <tr>\n                <th><button md-button (click)=\"onClickHeader('uid')\">ID</button></th>\n                <th><button md-button (click)=\"onClickHeader('label')\">Name</button></th>\n                <th><button md-button (click)=\"onClickHeader('symbol')\">Symbol</button></th>\n                <th><button md-button (click)=\"onClickHeader('percent_change_1h')\" >1h%</button></th>\n                <th><button md-button (click)=\"onClickHeader('percent_change_24h')\">24h%</button></th>\n                <th><button md-button (click)=\"onClickHeader('percent_change_7d')\" > 7days%</button></th>\n                <th><button md-button (click)=\"onClickHeader('price_usd')\" >$US</button></th>\n                <th><button md-button (click)=\"onClickHeader('rank')\" >Rank</button></th>\n                <td><small>Delete</small></td>\n            </tr>\n\n            <tbody>\n\n            <tr *ngFor=\"let dog of watchDogs\">\n                <td><small>{{dog.uid}}</small></td>\n                <td>{{dog.label}}</td>\n                <td><b><small>{{dog.symbol}}</small></b></td>\n                <td>{{dog.market.percent_change_1h}}</td>\n                <td>{{dog.market.percent_change_24h}}</td>\n                <td>{{dog.market.percent_change_7d}}</td>\n                <td>{{dog.market.price_usd}}</td>\n                <td>{{dog.market.rank}}</td>\n                <td><div (click)=\"onDeleteClick(dog)\"  class=\"fa fa-close\"></div></td>\n            </tr>\n\n            </tbody>\n        </table>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/create-watchdog/create-watchdog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateWatchdogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_service_service__ = __webpack_require__("../../../../../src/app/email-service/email-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
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
        this.coinsSelected = [];
        // selectedCoins:{[symbol:string]:VOExchangeData};
        this.watchDogs = [];
        this.sortCriteria = 'rank';
        this.asc_desc = 'asc';
    }
    CreateWatchdogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coinsService.marketsAr$.subscribe(function (res) {
            if (!res)
                return;
            _this.markets = _this.coinsService.markets;
            _this.coinsSelected = _this.coinsService.getSelected();
            _this.emailService.getWatchDogs().subscribe(function (res) {
                console.log(res);
                if (!res)
                    return;
                _this.mergeData(_this.markets, res);
                _this.watchDogs = __WEBPACK_IMPORTED_MODULE_1_lodash__["orderBy"](res, _this.sortCriteria, _this.asc_desc);
            });
        });
        /*
            this.emailService.watchDogs$.subscribe(res =>{
              this.setData(_.values(res))
        
            });*/
    };
    CreateWatchdogComponent.prototype.onDeleteClick = function (dog) {
        var _this = this;
        console.log(dog);
        var ref = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: {
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
    CreateWatchdogComponent.prototype.mergeData = function (markets, ar) {
        ar.forEach(function (item) {
            var market = markets[item.symbol];
            if (market) {
                item.price_usd = market.price_usd;
                item.rank = market.rank;
                item.percent_change_1h = market.percent_change_1h;
                item.percent_change_24h = market.percent_change_24h;
                item.percent_change_7d = market.percent_change_7d;
                item.market = market;
            }
        });
        //this.watchDogs  = _.orderBy(ar, this.sortCriteria, this.asc_desc);
    };
    /*  setMarket(market:{[symbol:string]:VOExchangeData}){
        //this.marketsRaw = market;
        //this.coinsAvailable = _.values(market);
        this.mergeData();
    
      }*/
    CreateWatchdogComponent.prototype.createDog = function () {
        this.watchDog.market = this.coinMarket;
        this.watchDog.uid = this.emailService.createUid(this.watchDog.symbol);
        this.emailService.addDog(this.watchDog);
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
        //this.setData(this.watchDogs);
    };
    CreateWatchdogComponent.prototype.onCoinSelectChanged = function (evt) {
        console.log(evt.value);
        var symbol = evt.value;
        /*  let market:VOExchangeData = this.coinsSelected.find(function (item) {
            return item.symbol === symbol;
          });*/
        this.coinMarket = this.markets[symbol];
        this.watchDog = {
            label: this.coinMarket.symbol,
            uid: this.emailService.createUid(symbol),
            symbol: this.coinMarket.symbol
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-watchdog',
        template: __webpack_require__("../../../../../src/app/email-service/create-watchdog/create-watchdog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/create-watchdog/create-watchdog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__email_service_service__["a" /* EmailServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__email_service_service__["a" /* EmailServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */]) === "function" && _c || Object])
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

module.exports = "<div class=\"content\">\n    <section>\n\n        <div style=\" display: flex; flex-direction: row\" >\n            <div id=\"ScriptContentContainer\">\n\n                <span>{{currentDog.uid}}</span>\n\n                <small>{{currentDog.label}}</small>\n\n                <md-select  [(ngModel)]=\"currentTrigger\" id=\"SelectTrigger\" #selectedTrigger placeholder=\"Select Variable\" >\n                    <md-option [value]=\"'send_notification'\"> <span class=\"fa fa-flash\"></span> Send Notification</md-option>\n                    <md-option *ngFor=\"let myvar of variablesAvailable\" [value]=\"myvar.index\">{{myvar.label}}</md-option>\n                </md-select>\n                <span class=\"fa fa-arrow-left\"> </span>\n                <button md-raised-button color=\"primary\" (click)=\"insertTrigget(selectedTrigger)\">\n                    <span class=\"fa fa-paste\"></span>\n                    Insert\n                </button>\n                <button color=\"accent\" md-raised-button  (click)=\"runScript()\" title=\"Run Script\">\n                    <span class=\"fa fa-flash\"></span>\n                    Run\n                </button>\n                <button md-raised-button color=\"primary\" (click)=\"saveDog()\">\n                    <span class=\"fa fa-save\"></span>\n                    Save\n                </button>\n\n\n\n                <div id=\"ScriptContent\"\n                     #scriptContent\n                     contenteditable=\"true\"\n                     spellcheck=\"false\"\n                     (blur)=\"onScriptContentBlur(scriptContent)\"\n                     (change)=\"onScriptContentChange(scriptContent)\">\n                </div>\n            </div>\n\n            <div class=\"current-changes\">\n                <h3>Current Values</h3>\n                <table>\n                    <tbody>\n                    <tr *ngFor=\"let myvar of variablesAvailable\">\n                        <td>{{myvar.index}}</td>\n                        <td>\n                            <input style=\"width: 3em\" type=\"number\" [(ngModel)]=\"myvar.value\"  name=\"value\" />\n\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/edit-script/edit-script.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditScriptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service_service__ = __webpack_require__("../../../../../src/app/email-service/email-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__run_watchdogs_script_analytics__ = __webpack_require__("../../../../../src/app/email-service/run-watchdogs/script-analytics.ts");
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
    function EditScriptComponent(
        // private coinsService:MarketCapSelectedService,
        emailService, dialog, snakBar, route) {
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
        this.route.params.subscribe(function (params) {
            var uid = params['uid'];
            uid = uid.toUpperCase();
            console.log(params);
            //let dog = this.emailService.getDogByUid(uid);
            //this.setCurrentDog(dog);
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
        var results = Object(__WEBPACK_IMPORTED_MODULE_4__run_watchdogs_script_analytics__["a" /* runDogScript */])(dog, script);
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
            this.emailService.saveData();
            this.snakBar.open(this.currentDog.label + " Saved!", '', { duration: 3000 });
        }
        else
            this.snakBar.open("Error no Dog", 'Error', { duration: 3000 });
    };
    return EditScriptComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('scriptContent'),
    __metadata("design:type", Object)
], EditScriptComponent.prototype, "scriptContent", void 0);
EditScriptComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-script',
        template: __webpack_require__("../../../../../src/app/email-service/edit-script/edit-script.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/edit-script/edit-script.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__email_service_service__["a" /* EmailServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service_service__["a" /* EmailServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], EditScriptComponent);

var _a, _b, _c, _d;
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

module.exports = "<div>\r\n    Email all coins\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/email-service/email-all-coins/email-all-coins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailAllCoinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
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
    function EmailAllCoinsComponent(
        // private coinsService:MarketCapSelectedService,
        auth) {
        this.auth = auth;
        this.sortCriteria = 'rank';
        this.asc_desc = 'asc';
    }
    EmailAllCoinsComponent.prototype.ngOnInit = function () {
        // this.coinsService.allCoins$.subscribe(res=>this.allCoinsData = res)
        this.auth.setLastVisited('/email-service');
    };
    EmailAllCoinsComponent.prototype.onCoinSelected = function (event, coin) {
        console.log(event.target.checked, coin);
        if (event.target.checked) {
            //   this.coinsService.addSelected(coin.symbol);
        }
        else {
            //  this.coinsService.removeSelected(coin.symbol)
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
        this.allCoinsData = __WEBPACK_IMPORTED_MODULE_1_lodash__["orderBy"](this.allCoinsData, criteria, this.asc_desc);
        this.sortCriteria = criteria;
    };
    return EmailAllCoinsComponent;
}());
EmailAllCoinsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-email-all-coins',
        template: __webpack_require__("../../../../../src/app/email-service/email-all-coins/email-all-coins.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/email-all-coins/email-all-coins.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
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

module.exports = "<div>\n    <nav>\n        <md-toolbar>\n            <a md-button routerLink=\"/email-service/selected-coins\" routerLinkActive=\"active-link\" >Seleced Coins</a>\n            <a md-button  routerLink='/email-service/create-watch-dog'  routerLinkActive=\"active-link\">Create Watch Dog</a>\n            <a md-button routerLink='/email-service/edit-script/eth_1'  routerLinkActive=\"active-link\" >Edit Script</a>\n            <a md-button routerLink='/email-service/run-watch-dog'  routerLinkActive=\"active-link\">Run</a>\n\n            <a md-button routerLink=\"/email-service/all-coins\"  routerLinkActive=\"active-link\">All Coins</a>\n        </md-toolbar>\n    </nav>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/email-main/email-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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

module.exports = "<div class=\"content\">\n    <h4> Selected Coins </h4> <small>Total {{selectedCoins.length}}</small>\n    <app-sortable-table [consAvailable]=\"selectedCoins\"></app-sortable-table>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailSelectedCoinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_app_storage_service__ = __webpack_require__("../../../../../src/app/shared/app-storage.service.ts");
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
    function EmailSelectedCoinsComponent(allCoinsService, storage) {
        this.allCoinsService = allCoinsService;
        this.storage = storage;
        this.selectedCoins = [];
    }
    EmailSelectedCoinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCoinsService.marketsAr$.subscribe(function (res) {
            if (res) {
                // let sel = this.allCoinsService.getSelected()
                // console.log(sel);
                _this.selectedCoins = _this.allCoinsService.getSelected();
            }
        });
    };
    EmailSelectedCoinsComponent.prototype.setCoins = function (ar) {
        this.selectedCoins = ar;
    };
    return EmailSelectedCoinsComponent;
}());
EmailSelectedCoinsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-email-selected-coins',
        template: __webpack_require__("../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_app_storage_service__["a" /* AppStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_app_storage_service__["a" /* AppStorageService */]) === "function" && _b || Object])
], EmailSelectedCoinsComponent);

var _a, _b;
//# sourceMappingURL=email-selected-coins.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/email-service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailServiceModule; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_10__material_material_app_module__["a" /* MaterialAppModule */],
            __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__watch_dog_watch_dog_component__["a" /* WatchDogComponent */],
            __WEBPACK_IMPORTED_MODULE_4__create_watchdog_create_watchdog_component__["a" /* CreateWatchdogComponent */],
            __WEBPACK_IMPORTED_MODULE_5__run_watchdogs_run_watchdogs_component__["a" /* RunWatchdogsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__email_main_email_main_component__["a" /* EmailMainComponent */],
            __WEBPACK_IMPORTED_MODULE_7__email_all_coins_email_all_coins_component__["a" /* EmailAllCoinsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__email_selected_coins_email_selected_coins_component__["a" /* EmailSelectedCoinsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__edit_script_edit_script_component__["a" /* EditScriptComponent */]
        ],
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
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
        this.watchDogsSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.watchDogs$ = this.watchDogsSub.asObservable();
        http.user$.subscribe(function (user) { return _this.user = user; });
    }
    EmailServiceService.prototype.saveData = function () {
        localStorage.setItem('watch-dogs', JSON.stringify(this.watchDogs));
    };
    EmailServiceService.prototype.getWatchDogs = function () {
        var str = localStorage.getItem('watch-dogs');
        if (str) {
            try {
                var ar = JSON.parse(str);
                this.watchDogs = ar;
            }
            catch (e) {
                this.watchDogs = [];
                console.error(e);
            }
        }
        this.watchDogsSub.next(this.watchDogs);
        return this.watchDogs$;
    };
    EmailServiceService.prototype.addDog = function (dog) {
        var exists = this.getDogByUid(dog.uid);
        if (exists)
            throw new Error(' Exists ' + dog.uid);
        this.watchDogs.push(dog);
        this.saveData();
        this.watchDogsSub.next(this.watchDogs);
    };
    EmailServiceService.prototype.createUid = function (symbol) {
        var indexed = __WEBPACK_IMPORTED_MODULE_2_lodash__["keyBy"](this.watchDogs, 'uid');
        var i = 0;
        while (indexed[symbol + '_' + (++i)])
            ;
        return symbol + '_' + i;
    };
    EmailServiceService.prototype.deleteDog = function (dog) {
        this.watchDogs = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.watchDogs, function (item) {
            return item.uid !== dog.uid;
        });
        this.saveData();
        this.watchDogsSub.next(this.watchDogs);
    };
    EmailServiceService.prototype.getDogByUid = function (uid) {
        return this.watchDogs.find(function (item) {
            return item.uid === uid;
        });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunWatchdogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service_service__ = __webpack_require__("../../../../../src/app/email-service/email-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__script_analytics__ = __webpack_require__("../../../../../src/app/email-service/run-watchdogs/script-analytics.ts");
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
    function RunWatchdogsComponent(
        // private coinsService:MarketCapSelectedService,
        emailService, dialog, snakBar) {
        this.emailService = emailService;
        this.dialog = dialog;
        this.snakBar = snakBar;
        //dogs:{[uid: string]: WatchDog};
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
                var res = Object(__WEBPACK_IMPORTED_MODULE_3__script_analytics__["a" /* runDogScript */])(item, script);
                if (res.length)
                    results = results.concat(res);
            }
        });
    };
    RunWatchdogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.coinsService.selectedCoins$.subscribe(res=>this.setMarket(res));
        this.emailService.watchDogs$.subscribe(function (res) {
            _this.watchDogs = res;
            //this.setDogs(res);
        });
    };
    RunWatchdogsComponent.prototype.setMarket = function (markets) {
        this.markets = markets;
        this.mergeData();
    };
    RunWatchdogsComponent.prototype.setDogs = function (dogs) {
        //this.dogs = dogs;
        //this.watchDogs
        //this.mergeData();
    };
    RunWatchdogsComponent.prototype.startRefreshTimer = function () {
        var _this = this;
        if (this.start_stop === 'Start Refresh Timer') {
            this.start_stop = 'Stop Refresh Timer';
            this.isRunning = true;
            this.seconds = 30;
            this.interval = setInterval(function () { _this.seconds++; }, 1000);
            //this.coinsService.start();
        }
        else {
            this.start_stop = 'Start Refresh Timer';
            this.seconds = 0;
            clearInterval(this.interval);
            this.isRunning = false;
            // this.coinsService.stop();
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
        //if(this.sortCriteria === criteria){
        /*    if(this.asc_desc === 'asc') this.asc_desc ='desc';
            else  this.asc_desc='asc';
          }else this.asc_desc = 'asc';
          //console.log(this.asc_desc);
          this.sortCriteria = criteria;
          this.watchDogs  = _.orderBy(this.watchDogs , this.sortCriteria, this.asc_desc);*/
    };
    return RunWatchdogsComponent;
}());
RunWatchdogsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-run-watchdogs',
        template: __webpack_require__("../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__email_service_service__["a" /* EmailServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service_service__["a" /* EmailServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _c || Object])
], RunWatchdogsComponent);

var _a, _b, _c;
//# sourceMappingURL=run-watchdogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/run-watchdogs/script-analytics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runDogScript;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchDogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchDogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-watch-dog',
        template: __webpack_require__("../../../../../src/app/email-service/watch-dog/watch-dog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email-service/watch-dog/watch-dog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], WatchDogComponent);

var _a;
//# sourceMappingURL=watch-dog.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchange-ss/exchange-ss.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scrollContent{\r\n   /* background-color: #333;*/\r\n    overflow: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n.scrollContent p {\r\n    display: inline-block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px;\r\n    text-decoration: none;\r\n}\r\n\r\nmd-spinner {\r\n    float: left;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 2px 5px 0px -15px;\r\n}\r\n\r\n\r\n\r\n\r\ntable{\r\n    width: 100%;\r\n}\r\ntable th{\r\n    text-align: left;\r\n}\r\n\r\ntable td{\r\n    border-bottom: 1px solid #ddd;\r\n    padding: 5px;\r\n\r\n}\r\n\r\ntable .history{\r\n    font-size: 10px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchange-ss/exchange-ss.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>\n        Exchange\n        <small>{{counter}}</small>\n        <button md-raised-button  (click)=\"startStop()\">\n       <md-spinner *ngIf=\"active\" color=\"accent\" mode=\"determinate\" value=\"{{seconds}}\">\n\n        </md-spinner>\n            {{start_stop}}\n        </button>\n    </h2>\n\n    <div>\n        <h3>Wallets</h3>\n\n        <table>\n            <tr><th>Wallet</th><th>Amount</th><th>Price $US</th><th> History $US</th><th>Ptice mB</th><th>1h</th><th>24h</th><th>7d</th></tr>\n            <tr *ngFor=\"let wallet of myWallets\" >\n                <td>{{wallet.label}}</td>\n                <td (click)=\"onUsdClick(wallet)\">${{wallet.usd}} <span (click)=\"updateBalance(wallet)\" class=\"fa fa-refresh\"></span></td>\n                <td>{{wallet.market.price_usd.toFixed(2)}}</td>\n                <td class=\"history\">{{wallet.analitics.price_usd_historyDisplay}}</td>\n                <td>{{(wallet.market.price_btc*1000).toFixed(2)}}</td>\n                <td [style.color] = \"(wallet.market.percent_change_1h > 0)? 'green' : 'red'\">{{wallet.market.percent_change_1h}}</td>\n                <td [style.color] = \"(wallet.market.percent_change_24h > 0)? 'green' : 'red'\">{{wallet.market.percent_change_24h}}</td>\n                <td [style.color] = \"(wallet.market.percent_change_7d > 0)? 'green' : 'red'\">{{wallet.market.percent_change_7d}}</td>\n\n\n            </tr>\n        </table>\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchange-ss/exchange-ss.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeSsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__send_alert_service__ = __webpack_require__("../../../../../src/app/exchange-ss/send-alert.service.ts");
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
    function ExchangeSsComponent(api, allWallets, 
        // private coinsService:MarketCapSelectedService,
        sendAlertService) {
        this.api = api;
        this.allWallets = allWallets;
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
            // this.coinsService.start();
        }
        else {
            this.start_stop = 'Start';
            this.seconds = 0;
            clearInterval(this.interval);
            this.active = false;
            //this.coinsService.stop();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exchange-ss',
        template: __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_server_service__["a" /* ApiServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_server_service__["a" /* ApiServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__send_alert_service__["a" /* SendAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__send_alert_service__["a" /* SendAlertService */]) === "function" && _c || Object])
], ExchangeSsComponent);

var _a, _b, _c;
//# sourceMappingURL=exchange-ss.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchange-ss/exchange-ss.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeSsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
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
    function ExchangeSsService(allWallets, 
        // private allCoinsService:MarketCapSelectedService,
        api) {
        var _this = this;
        this.allWallets = allWallets;
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
        /*   allCoinsService.allCoins$.subscribe(res=>{
             this.allCoins = res;
             this.populateCoins();
       
           })
       
           allCoinsService.loadData();*/
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__api_server_service__["a" /* ApiServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_server_service__["a" /* ApiServerService */]) === "function" && _b || Object])
], ExchangeSsService);

var _a, _b;
//# sourceMappingURL=exchange-ss.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchange-ss/send-alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendAlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SendAlertService);

var _a;
//# sourceMappingURL=send-alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/bitfinex/bitfinex.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/bitfinex/bitfinex.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n        <h4>BitFinex </h4><small *ngIf=\"marketsAr\">Total: {{marketsAr.length}}</small>\n        <table>\n            <tbody>\n            <tr>\n                <th>Pair</th>\n                <th>Ask</th>\n                <th>Bid</th>\n                <th>High</th>\n                <th>Last Price</th>\n                <th>Low</th>\n                <th>Mid</th>\n                <th>volume</th>\n                <th>Timestamp</th>\n            </tr>\n            <tr *ngFor=\"let market of marketsAr\">\n                <td class=\"btn\" (click)=\"onMarketClick(market)\">{{market.pair}}</td>\n\n                <td>{{market.ask}}</td>\n                <td>{{market.bid}}</td>\n                <td>{{market.high}}</td>\n                <td>{{market.last_price}}</td>\n                <td>{{market.low}}</td>\n                <td>{{market.mid}}</td>\n                <td>{{market.volume}}</td>\n                <td>{{market.timestamp}}</td>\n\n            </tr>\n            </tbody>\n        </table>\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchanges/bitfinex/bitfinex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitfinexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bitfinex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bitfinex.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BitfinexComponent = (function () {
    function BitfinexComponent(service) {
        this.service = service;
    }
    BitfinexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMarkets().subscribe(function (res) {
            console.log(res);
            _this.marketsAr = res;
        });
    };
    BitfinexComponent.prototype.onMarketClick = function (market) {
        var pair = market.pair;
        this.service.getMarket(pair).subscribe(function (res) {
            console.log(res);
            market.high = res.high;
            market.ask = res.ask;
            market.bid = res.bid;
            market.last_price = res.last_price;
            market.low = res.low;
            market.mid = res.mid;
            market.volume = res.volume;
            market.timestamp = res.timestamp;
        });
    };
    return BitfinexComponent;
}());
BitfinexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bitfinex',
        template: __webpack_require__("../../../../../src/app/exchanges/bitfinex/bitfinex.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/bitfinex/bitfinex.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bitfinex_service__["a" /* BitfinexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bitfinex_service__["a" /* BitfinexService */]) === "function" && _a || Object])
], BitfinexComponent);

var _a;
//# sourceMappingURL=bitfinex.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/bittrex-available/bittrex-available.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table td>img{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n\r\ntd{\r\n    max-width: 100px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\ntr>th{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\nh3{\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/bittrex-available/bittrex-available.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div>\n\n        <h3>Bittrex Summary </h3> <small *ngIf=\"marketsAr\"> Total {{marketsAr.length}}</small>\n\n        <a md-list-item routerLink='/bittrex/filter'>Filter </a>\n\n\n        <table>\n            <tr>\n                <th  (click)=\"onClickHeader('MarketName')\">Name</th>\n                <th  (click)=\"onClickHeader('High')\">High</th>\n                <th  (click)=\"onClickHeader('Low')\">Low</th>\n                <th  (click)=\"onClickHeader('Volume')\">Volume</th>\n                <th  (click)=\"onClickHeader('Last')\">Last</th>\n                <th  (click)=\"onClickHeader('BaseVolume')\">Base Volume</th>\n\n                <th  (click)=\"onClickHeader('Bid')\">Bid</th>\n                <th  (click)=\"onClickHeader('Ask')\">Ask</th>\n\n                <th  (click)=\"onClickHeader('OpenBuyOrders')\">To Buy</th>\n                <th  (click)=\"onClickHeader('OpenSellOrders')\">To Sell</th>\n\n                <th  (click)=\"onClickHeader('PrevDay')\">Prev Day</th>\n                <th>Time</th>\n\n                <!--  <th>Sponsored</th>\n                  <th>Created</th>\n                  <th>Notice</th>-->\n            </tr>\n            <tr *ngFor=\"let market of marketsAr\">\n                <td>{{market.MarketName}}</td>\n                <td>{{market.High}}</td>\n                <td>{{market.Low}}</td>\n                <td>{{market.Volume}}</td>\n                <td>{{market.Last}}</td>\n                <td>{{market.BaseVolume}}</td>\n\n                <td>{{market.Bid}}</td>\n                <td>{{market.Ask}}</td>\n\n                <td>{{market.OpenBuyOrders}}</td>\n                <td>{{market.OpenSellOrders}}</td>\n\n\n                <td>{{market.PrevDay}}</td>\n                <td><small>{{market.TimeStamp}}</small></td>\n\n                <!--  <td>{{market.IsSponsored}}</td>\n                  <td class=\"my-timestamp\"><div>{{market.Created}}</div></td>\n                  <td class=\"notice\">{{market.Notice}}</td>-->\n            </tr>\n        </table>\n\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchanges/bittrex-available/bittrex-available.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexAvailableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bittrex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BittrexAvailableComponent = (function () {
    function BittrexAvailableComponent(bittrexService, marketCap) {
        this.bittrexService = bittrexService;
        this.marketCap = marketCap;
        this.asc_desc = 'desc';
    }
    BittrexAvailableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bittrexService.getMarketAr().subscribe(function (res) {
            _this.marketsAr = res;
        });
    };
    BittrexAvailableComponent.prototype.doSort = function (ar) {
        if (this.sortBy)
            this.marketsAr = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](ar, this.sortBy, this.asc_desc);
        else
            this.marketsAr = ar;
    };
    BittrexAvailableComponent.prototype.onClickHeader = function (sortBy) {
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
        if (this.marketsAr)
            this.doSort(this.marketsAr);
    };
    return BittrexAvailableComponent;
}());
BittrexAvailableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bittrex-available',
        template: __webpack_require__("../../../../../src/app/exchanges/bittrex-available/bittrex-available.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/bittrex-available/bittrex-available.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service__["a" /* BittrexService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
], BittrexAvailableComponent);

var _a, _b;
//# sourceMappingURL=bittrex-available.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/bittrex/bittrex-market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table td>img{\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n\r\ntd{\r\n    max-width: 100px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\ntr>th{\r\n    cursor: pointer;\r\n}\r\n\r\n\r\nh3{\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/bittrex/bittrex-market.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div>\n\n        <h3>Bittrex</h3> <small *ngIf=\"marketsAr\"> Total {{marketsAr.length}}</small>\n        <a md-list-item routerLink='/bittrex/data'>Available data </a>\n\n\n            <table>\n                <tr>\n                    <th>Pair</th>\n                    <th>MarketCap</th>\n\n                    <th><small>$</small>Last</th>\n\n                    <th><small>%</small>&Delta;l-h</th>\n                    <th><small>%</small>24h</th>\n                </tr>\n\n                <tr *ngFor=\"let item of marketsAr\">\n                    <td>{{item.pair}}</td>\n                    <td><small>$</small>{{item.usd_mcap}}</td>\n\n                    <td><small>$</small>{{item.usd_last}}</td>\n                    <td>{{item.delta}}</td>\n                    <td [ngClass] =\"item.is_last_up?'green':'red'\" title=\"Prev Day: {{item.prevDay}} Last: {{item.last}}\">{{item.delta24}}</td>\n\n\n                  <!--  <td>{{market.High}}</td>\n                    <td>{{market.Low}}</td>\n                    <td>{{market.Volume}}</td>\n                    <td>{{market.Last}}</td>\n                    <td>{{market.BaseVolume}}</td>\n\n                    <td>{{market.Bid}}</td>\n                    <td>{{market.Ask}}</td>\n\n                    <td>{{market.OpenBuyOrders}}</td>\n                    <td>{{market.OpenSellOrders}}</td>\n\n\n                    <td>{{market.PrevDay}}</td>\n                    <td><small>{{market.TimeStamp}}</small></td>-->\n\n                  <!--  <td>{{market.IsSponsored}}</td>\n                    <td class=\"my-timestamp\"><div>{{market.Created}}</div></td>\n                    <td class=\"notice\">{{market.Notice}}</td>-->\n                </tr>\n            </table>\n\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchanges/bittrex/bittrex-market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexMarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bittrex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
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
    function BittrexMarketComponent(bittrexService, marketCap) {
        this.bittrexService = bittrexService;
        this.marketCap = marketCap;
        this.asc_desc = 'desc';
    }
    BittrexMarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketCap.markets$.subscribe(function (mcap) {
            if (!mcap)
                return;
            _this.bittrexService.getMarketAr().subscribe(function (res) {
                // console.log(res);
                if (!res)
                    return;
                var indexed = _this.bittrexService.markets;
                res.forEach(function (item) {
                    var prec = 2;
                    var pairs = item.pair.split('_');
                    var base = indexed['USDT_' + pairs[0]];
                    if (base) {
                        var price = base.last;
                        var prec_1 = (item.last * price) < 0.01 ? 4 : 2;
                        item.usd_last = (item.last * price).toFixed(prec_1);
                    }
                    else {
                        item.usd_last = item.last.toFixed(2);
                        console.log(' no base1 ' + pairs[0]);
                    }
                    var mc = mcap[pairs[1]];
                    if (mc) {
                        item.usd_mcap = mc.price_usd.toFixed(prec);
                    }
                    else {
                        item.usd_mcap = '0';
                        console.log('no marketcap ' + pairs[1]);
                    }
                    item.delta = ((item.high - item.low) / (item.low + item.high) / 2 * 100).toFixed(2);
                    item.is_last_up = item.last > item.prevDay;
                    item.delta24 = ((item.last - item.prevDay) / (item.last + item.prevDay) / 2 * 100).toFixed(2);
                });
                _this.marketsAr = res;
                // this.doSort(res);
                // this.marketModels1 = res;
            });
        });
        /* this.bittrexService.getMarkets().subscribe(res=>{
          // console.log(res);
           this.marketModels1 = res;
         })
     
         this.bittrexService.getCurrencies().subscribe(res=>{
          /// console.log(res);
          // this.marketModels1 = res;
         })*/
    };
    BittrexMarketComponent.prototype.doSort = function (ar) {
        if (this.sortBy)
            this.marketsAr = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](ar, this.sortBy, this.asc_desc);
        else
            this.marketsAr = ar;
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
        if (this.marketsAr)
            this.doSort(this.marketsAr);
    };
    return BittrexMarketComponent;
}());
BittrexMarketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bittrex-market',
        template: __webpack_require__("../../../../../src/app/exchanges/bittrex/bittrex-market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/bittrex/bittrex-market.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service__["a" /* BittrexService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
], BittrexMarketComponent);

var _a, _b;
//# sourceMappingURL=bittrex-market.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/ch-market/ch-market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dollars{\r\n    float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/ch-market/ch-market.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<h2>Changely</h2> <small *ngIf=\"coinsAvailable\">Total: {{coinsAvailable.length}}</small>\n    <br/>\n    <section>\n        <table>\n            <tbody>\n            <tr>\n                <td>\n                    From:\n                </td>\n                <td>\n                    <md-select  [(ngModel)]=\"coinFrom.symbol\" #select1 placeholder=\"Select Coin\" (change)=\"coinSelectChanged1($event)\">\n                        <md-option *ngFor=\"let coin of coinsSorted\" [value]=\"coin.symbol\">\n                            {{ coin.symbol}} <small class=\"dollars\"> ${{coin.price_usd?coin.price_usd.toFixed(2):''}}</small>\n                        </md-option>\n                    </md-select>\n\n                </td>\n                <td>\n                    <md-input-container>\n                       <input [(ngModel)]=\"coinFrom.US\"  mdInput  placeholder=\"amount\" name=\"dollarsAmount\" >\n                    </md-input-container>\n\n                </td>\n\n                <td>\n                    <small>{{coinFrom.amount}}</small>\n                </td>\n                <td>\n                    ${{coinFrom.revertUS}}\n\n                </td>\n                <td>\n                    {{coinFrom.revertAmount}}\n                </td>\n\n            </tr>\n            <tr>\n                <td>\n                    To:\n                </td>\n                <td>\n                    <md-select [(ngModel)]=\"coinTo.symbol\" #select2 placeholder=\"Select Coin\" (change)=\"coinSelectChanged3($event)\">\n                        <md-option *ngFor=\"let coin of coinsSorted\" [value]=\"coin.symbol\">\n                            {{ coin.symbol}}<small class=\"dollars\"> ${{coin.price_usd?coin.price_usd.toFixed(2):''}}</small>\n                        </md-option>\n                    </md-select>\n\n                </td>\n                <td>\n                    ${{coinTo.US}}\n\n                </td>\n\n                <td>\n                    {{coinTo.amount}}\n                </td>\n                <td>\n\n                    ${{coinTo.revertUS}}\n                </td>\n                <td>\n                    {{coinTo.revertAmount}}\n                </td>\n            </tr>\n\n            </tbody>\n\n            <button md-raised-button color=\"accent\" (click)=\"onSubmit()\">Submit</button>\n        </table>\n        <br/>\n    </section>\n\n    <section>\n        <app-sortable-table [consAvailable]=\"coinsAvailable\"></app-sortable-table>\n    </section>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/exchanges/ch-market/ch-market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChMarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_changelly_service__ = __webpack_require__("../../../../../src/app/exchanges/services/changelly.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
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
        this.coinFrom = {
            symbol: '',
            US: 1000,
            amount: 0,
            price: 0,
            revertUS: 0,
            revertAmount: 0
        };
        this.coinTo = {
            symbol: '',
            US: 0,
            amount: 0,
            price: 0,
            revertUS: 0,
            revertAmount: 0
        };
        this.exchange = {
            pair: ''
        };
    }
    ChMarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketCap.marketsAr$.subscribe(function (res) {
            //  console.log(res);
            _this.markets = _this.marketCap.markets;
            _this.merge();
        });
        this.changellyService.getCurrencies().subscribe(function (res) {
            //  console.log(res);
            _this.coinsAvailable = res;
            _this.coinsSorted = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](res, 'symbol');
            _this.merge();
        });
    };
    ChMarketComponent.prototype.calculateRequest = function () {
        var symbol = this.coinFrom.symbol;
        var us = +this.coinFrom.US;
        console.log('calculateRequest ' + symbol + '  ' + us);
        if (!symbol || !us)
            return;
        var market = this.markets[symbol];
        console.log(market);
        if (!market)
            return;
        var price = market.price_usd;
        this.coinFrom.amount = us / price;
    };
    ChMarketComponent.prototype.coinSelectChanged1 = function (evt) {
        this.calculateRequest();
    };
    ChMarketComponent.prototype.coinSelectChanged2 = function (evt) {
        this.calculateRequest();
    };
    ChMarketComponent.prototype.coinSelectChanged3 = function (evt) {
    };
    ChMarketComponent.prototype.getRevert = function () {
        var _this = this;
        this.coinTo.revertUS = this.coinFrom.US;
        var pair = this.coinTo.symbol.toLowerCase() + '_' + this.coinFrom.symbol.toLowerCase();
        var symbol = this.coinTo.symbol;
        var market = this.markets[symbol];
        if (!market) {
            console.error(' market ' + market);
        }
        var price = market.price_usd;
        var amount = this.coinTo.revertUS / price;
        this.coinTo.revertAmount = amount;
        this.changellyService.getExchangeAmount(pair, amount).subscribe(function (res) {
            // console.log(res);
            var symbol = _this.coinFrom.symbol;
            var market = _this.markets[symbol];
            if (market) {
                _this.coinFrom.revertAmount = res;
                _this.coinFrom.revertUS = +(res * market.price_usd).toFixed(2);
            }
        });
    };
    ChMarketComponent.prototype.onSubmit = function () {
        var _this = this;
        //console.log(this.selectedValue1, this.selectedValue2, this.selectedValue3);
        var pair = this.coinFrom.symbol.toLowerCase() + '_' + this.coinTo.symbol.toLowerCase();
        this.exchange.pair = pair;
        var amount = this.coinFrom.amount;
        this.changellyService.getExchangeAmount(pair, amount).subscribe(function (res) {
            console.log(res);
            _this.coinTo.amount = res;
            var symbol = _this.coinTo.symbol;
            var market = _this.markets[symbol];
            if (market) {
                _this.coinTo.US = +(res * market.price_usd).toFixed(2);
                _this.getRevert();
            }
        });
    };
    ChMarketComponent.prototype.megeData = function () {
        //if(this.markets && this.coinsAvailable){
        //  this.marketCap.addMarketCap(this.coinsAvailable);
        // }
    };
    ChMarketComponent.prototype.merge = function () {
        if (this.markets && this.coinsAvailable) {
            var all_1 = this.markets;
            // console.log(all);
            var ar = this.coinsAvailable;
            ar.forEach(function (item) {
                var market = all_1[item.symbol];
                if (market) {
                    item.percent_change_1h = market.percent_change_1h;
                    item.percent_change_7d = market.percent_change_7d;
                    item.percent_change_24h = market.percent_change_24h;
                    item.name = market.name;
                    item.rank = market.rank;
                    item.price_usd = market.price_usd;
                    item.market_cap_usd = market.market_cap_usd;
                    item.market = market;
                }
                else
                    console.warn(' no coin ' + item.symbol);
            });
            this.coinsAvailable = __WEBPACK_IMPORTED_MODULE_3_lodash__["orderBy"](ar, 'rank');
        }
    };
    return ChMarketComponent;
}());
ChMarketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ch-market',
        template: __webpack_require__("../../../../../src/app/exchanges/ch-market/ch-market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/ch-market/ch-market.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_changelly_service__["a" /* ChangellyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_changelly_service__["a" /* ChangellyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
], ChMarketComponent);

var _a, _b;
//# sourceMappingURL=ch-market.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/coin-exchange-market/coin-exchange-market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/coin-exchange-market/coin-exchange-market.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n        <h3>CoinExchange</h3><small> Total: {{allCoins.length}}</small>\n        <table>\n            <tbody>\n            <tr>\n                <th>Symbol</th>\n                <th>Sellers</th>\n                <th>Buyers</th>\n                <th>Trades</th>\n\n                <th>Last</th>\n                <th>Low</th>\n                <th>High</th>\n                <th>Change</th>\n\n                <th>Ask</th>\n                <th>Bid</th>\n                <th>Volume</th>\n\n            </tr>\n            <tr *ngFor=\"let coin of allCoins\">\n                <td>{{coin.symbol}}</td>\n                <td>{{coin.sellers}}</td>\n                <td>{{coin.buyers}}</td>\n                <td>{{coin.trades}}</td>\n\n                <td>{{coin.last}}</td>\n                <td>{{coin.low}}</td>\n                <td>{{coin.high}}</td>\n                <td>{{coin.change}}</td>\n\n                <td>{{coin.ask}}</td>\n                <td>{{coin.bid}}</td>\n                <td>{{coin.volume}}</td>\n\n            </tr>\n            </tbody>\n        </table>\n\n    </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/exchanges/coin-exchange-market/coin-exchange-market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinExchangeMarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_coin_echange_service__ = __webpack_require__("../../../../../src/app/exchanges/services/coin-echange.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoinExchangeMarketComponent = (function () {
    function CoinExchangeMarketComponent(service) {
        this.service = service;
        this.allCoins = [];
    }
    CoinExchangeMarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMarket().subscribe(function (res) {
            //console.log(res);
            _this.allCoins = res;
        });
    };
    return CoinExchangeMarketComponent;
}());
CoinExchangeMarketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-coin-exchange-market',
        template: __webpack_require__("../../../../../src/app/exchanges/coin-exchange-market/coin-exchange-market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/coin-exchange-market/coin-exchange-market.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_coin_echange_service__["a" /* CoinEchangeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_coin_echange_service__["a" /* CoinEchangeService */]) === "function" && _a || Object])
], CoinExchangeMarketComponent);

var _a;
//# sourceMappingURL=coin-exchange-market.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/coinbase-currencies/coinbase-currencies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/coinbase-currencies/coinbase-currencies.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n        <h3>Coinbase <small>currencies</small></h3>\n    </section>\n    <section>\n        <table>\n            <tr>\n                <td>Code</td>\n                <td>Name</td>\n                <td>$US BTC</td>\n                <td>$US ETH</td>\n                <td>Minimum</td>\n            </tr>\n            <tbody>\n            <tr *ngFor=\"let item of collection\">\n                <td>{{item.code}}</td>\n                <td>{{item.label}}</td>\n                <td>{{item.btc}}</td>\n                <td>{{item.eth}}</td>\n                <td>{{item.min}}</td>\n            </tr>\n            </tbody>\n        </table>\n\n    </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/exchanges/coinbase-currencies/coinbase-currencies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinbaseCurrenciesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_coinbase_service__ = __webpack_require__("../../../../../src/app/exchanges/services/coinbase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoinbaseCurrenciesComponent = (function () {
    function CoinbaseCurrenciesComponent(service) {
        this.service = service;
    }
    CoinbaseCurrenciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCurencies().subscribe(function (res) {
            // console.log(res);
            _this.collection = res;
            _this.service.getExchange('BTC').subscribe(function (market) {
                // console.log(market);
                res.forEach(function (item) {
                    item.btc = market[item.code];
                });
            });
            _this.service.getExchange('ETH').subscribe(function (market) {
                // console.log(market);
                res.forEach(function (item) {
                    item.eth = market[item.code];
                });
            });
        });
    };
    return CoinbaseCurrenciesComponent;
}());
CoinbaseCurrenciesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-coinbase-currencies',
        template: __webpack_require__("../../../../../src/app/exchanges/coinbase-currencies/coinbase-currencies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/coinbase-currencies/coinbase-currencies.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_coinbase_service__["a" /* CoinbaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_coinbase_service__["a" /* CoinbaseService */]) === "function" && _a || Object])
], CoinbaseCurrenciesComponent);

var _a;
//# sourceMappingURL=coinbase-currencies.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/cryptopia/cryptopia.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/cryptopia/cryptopia.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  Cryptopia\n\n    <section>\n        <table>\n            <tbody>\n            <tr>\n                <th>Name</th>\n                <th>Symbol</th>\n                <th>Status</th>\n                <th>Algorithm</th>\n                <th>ID</th>\n            </tr>\n            <tr *ngFor=\"let item of coinsAr\">\n                <td>{{item.Name}}</td>\n                <td>{{item.Symbol}}</td>\n                <td>{{item.Status}}</td>\n                <td>{{item.Algorithm}}</td>\n                <td>{{item.Id}}</td>\n            </tr>\n            </tbody>\n        </table>\n\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchanges/cryptopia/cryptopia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptopiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cryptopia_service__ = __webpack_require__("../../../../../src/app/exchanges/services/cryptopia.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CryptopiaComponent = (function () {
    function CryptopiaComponent(ctopia) {
        this.ctopia = ctopia;
    }
    CryptopiaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ctopia.getCurrencies().subscribe(function (res) {
            /// console.log(res)
            _this.coinsAr = res;
        });
    };
    return CryptopiaComponent;
}());
CryptopiaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cryptopia',
        template: __webpack_require__("../../../../../src/app/exchanges/cryptopia/cryptopia.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/cryptopia/cryptopia.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cryptopia_service__["a" /* CryptopiaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cryptopia_service__["a" /* CryptopiaService */]) === "function" && _a || Object])
], CryptopiaComponent);

var _a;
//# sourceMappingURL=cryptopia.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/exchanges.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kraken_kraken_component__ = __webpack_require__("../../../../../src/app/exchanges/kraken/kraken.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bitfinex_bitfinex_component__ = __webpack_require__("../../../../../src/app/exchanges/bitfinex/bitfinex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poloniex_ticker_poloniex_ticker_component__ = __webpack_require__("../../../../../src/app/exchanges/poloniex-ticker/poloniex-ticker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bittrex_bittrex_market_component__ = __webpack_require__("../../../../../src/app/exchanges/bittrex/bittrex-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coin_exchange_market_coin_exchange_market_component__ = __webpack_require__("../../../../../src/app/exchanges/coin-exchange-market/coin-exchange-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ch_market_ch_market_component__ = __webpack_require__("../../../../../src/app/exchanges/ch-market/ch-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hit_btc_market_hit_btc_market_component__ = __webpack_require__("../../../../../src/app/exchanges/hit-btc-market/hit-btc-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__yo_bit_market_yo_bit_market_component__ = __webpack_require__("../../../../../src/app/exchanges/yo-bit-market/yo-bit-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__coinbase_currencies_coinbase_currencies_component__ = __webpack_require__("../../../../../src/app/exchanges/coinbase-currencies/coinbase-currencies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bittrex_available_bittrex_available_component__ = __webpack_require__("../../../../../src/app/exchanges/bittrex-available/bittrex-available.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__poloniex_data_poloniex_data_component__ = __webpack_require__("../../../../../src/app/exchanges/poloniex-data/poloniex-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__novaexchange_novaexchange_component__ = __webpack_require__("../../../../../src/app/exchanges/novaexchange/novaexchange.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__cryptopia_cryptopia_component__ = __webpack_require__("../../../../../src/app/exchanges/cryptopia/cryptopia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var ExchangesModule = (function () {
    function ExchangesModule() {
    }
    return ExchangesModule;
}());
ExchangesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__material_material_app_module__["a" /* MaterialAppModule */],
            __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_router__["c" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__kraken_kraken_component__["a" /* KrakenComponent */],
            __WEBPACK_IMPORTED_MODULE_3__bitfinex_bitfinex_component__["a" /* BitfinexComponent */],
            __WEBPACK_IMPORTED_MODULE_4__poloniex_ticker_poloniex_ticker_component__["a" /* PoloniexTickerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__bittrex_bittrex_market_component__["a" /* BittrexMarketComponent */],
            __WEBPACK_IMPORTED_MODULE_6__coin_exchange_market_coin_exchange_market_component__["a" /* CoinExchangeMarketComponent */],
            __WEBPACK_IMPORTED_MODULE_7__ch_market_ch_market_component__["a" /* ChMarketComponent */],
            __WEBPACK_IMPORTED_MODULE_9__hit_btc_market_hit_btc_market_component__["a" /* HitBtcMarketComponent */],
            __WEBPACK_IMPORTED_MODULE_10__yo_bit_market_yo_bit_market_component__["a" /* YoBitMarketComponent */],
            __WEBPACK_IMPORTED_MODULE_11__coinbase_currencies_coinbase_currencies_component__["a" /* CoinbaseCurrenciesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__bittrex_available_bittrex_available_component__["a" /* BittrexAvailableComponent */],
            __WEBPACK_IMPORTED_MODULE_16__poloniex_data_poloniex_data_component__["a" /* PoloniexDataComponent */],
            __WEBPACK_IMPORTED_MODULE_17__novaexchange_novaexchange_component__["a" /* NovaexchangeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__cryptopia_cryptopia_component__["a" /* CryptopiaComponent */]
        ]
    })
], ExchangesModule);

//# sourceMappingURL=exchanges.module.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/hit-btc-market/hit-btc-market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/hit-btc-market/hit-btc-market.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n        <h2>Hit BTC</h2> <small *ngIf=\"marketsAr\">Total: {{marketsAr.length}}</small>\n    </section>\n    <section>\n        <table>\n            <tr>\n                <th>symbol</th>\n                <th>step</th>\n                <th>lot</th>\n                <th>currency</th>\n                <th>commodity</th>\n                <th>takeLiquidityRate</th>\n                <th>provideLiquidityRate</th>\n            </tr>\n            <tbody>\n            <tr *ngFor=\"let coin of marketsAr\">\n                <td>{{coin.symbol}}</td>\n                <td>{{coin.step}}</td>\n                <td>{{coin.lot}}</td>\n                <td>{{coin.currency}}</td>\n                <td>{{coin.commodity}}</td>\n                <td>{{coin.takeLiquidityRate}}</td>\n                <td>{{coin.provideLiquidityRate}}</td>\n            </tr>\n\n            </tbody>\n\n        </table>\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchanges/hit-btc-market/hit-btc-market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HitBtcMarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hit_btc_service__ = __webpack_require__("../../../../../src/app/exchanges/services/hit-btc.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HitBtcMarketComponent = (function () {
    function HitBtcMarketComponent(service) {
        this.service = service;
    }
    HitBtcMarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMarkets().subscribe(function (res) {
            _this.marketsAr = res;
        });
    };
    return HitBtcMarketComponent;
}());
HitBtcMarketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-hit-btc-market',
        template: __webpack_require__("../../../../../src/app/exchanges/hit-btc-market/hit-btc-market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/hit-btc-market/hit-btc-market.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hit_btc_service__["a" /* HitBtcService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hit_btc_service__["a" /* HitBtcService */]) === "function" && _a || Object])
], HitBtcMarketComponent);

var _a;
//# sourceMappingURL=hit-btc-market.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/kraken/kraken.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/kraken/kraken.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n <section>\n     <h4>Kraken </h4><small *ngIf=\"marketsAr\">Total: {{marketsAr.length}}</small>\n     <table>\n         <tbody>\n         <tr>\n             <th>Pair</th>\n             <th>leverage buy</th>\n             <th>leverage sell</th>\n             <th>a</th>\n             <th>b</th>\n             <th>c</th>\n             <th>h</th>\n             <th>l</th>\n             <th>o</th>\n             <th>t</th>\n             <th>v</th>\n         </tr>\n         <tr *ngFor=\"let market of marketsAr\">\n            <td class=\"btn\" (click)=\"onMarketClick(market)\">{{market.pair}}</td>\n\n             <td>{{market.leverage_buy}}</td>\n             <td>{{market.leverage_sell}}</td>\n             <td>{{market.a}}</td>\n             <td>{{market.b}}</td>\n             <td>{{market.c}}</td>\n             <td>{{market.h}}</td>\n             <td>{{market.l}}</td>\n             <td>{{market.o}}</td>\n             <td>{{market.p}}</td>\n             <td>{{market.t}}</td>\n             <td>{{market.v}}</td>\n\n\n\n\n         </tr>\n         </tbody>\n     </table>\n </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchanges/kraken/kraken.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KrakenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_kraken_service__ = __webpack_require__("../../../../../src/app/exchanges/services/kraken.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KrakenComponent = (function () {
    function KrakenComponent(serveice) {
        this.serveice = serveice;
    }
    KrakenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serveice.getCurencies().subscribe(function (res) {
            console.log(res);
            // this.market = res;
            _this.marketsAr = res;
        });
    };
    KrakenComponent.prototype.onMarketClick = function (market) {
        var kid = market.kid;
        this.serveice.getMarket(kid).subscribe(function (res) {
            console.log(res);
            var v = res[kid];
            market.a = v.a;
            market.b = v.b;
            market.c = v.c;
            market.h = v.h;
            market.l = v.l;
            market.o = v.o;
            market.p = v.p;
            market.t = v.t;
            market.v = v.v;
        });
    };
    return KrakenComponent;
}());
KrakenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-kraken',
        template: __webpack_require__("../../../../../src/app/exchanges/kraken/kraken.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/kraken/kraken.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_kraken_service__["a" /* KrakenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_kraken_service__["a" /* KrakenService */]) === "function" && _a || Object])
], KrakenComponent);

var _a;
//# sourceMappingURL=kraken.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/novaexchange/novaexchange.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/novaexchange/novaexchange.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>Nova Exchange</h3> <small *ngIf=\"marketsAr\">Total: {{total}} With vol not <strong>0</strong> in 24h: {{marketsAr.length}}</small>\n    <section>\n        <table>\n            <tbody>\n            <tr>\n                <th>Name</th>\n                <th>Last</th>\n                <th>Volume</th>\n                <th>% Change</th>\n                <th>ID</th>\n            </tr>\n            <tr *ngFor=\"let item of marketsAr\">\n                <td>{{item.marketname}}</td>\n                <td>{{item.last_price}}</td>\n                <td>{{item.volume24h}}</td>\n                <td>{{item.change24h}}</td>\n                <td>{{item.marketid}}</td>\n            </tr>\n            </tbody>\n        </table>\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchanges/novaexchange/novaexchange.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovaexchangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_novaexchange_service__ = __webpack_require__("../../../../../src/app/exchanges/services/novaexchange.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NovaexchangeComponent = (function () {
    function NovaexchangeComponent(novoService) {
        this.novoService = novoService;
    }
    NovaexchangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.novoService.getCurrencies().subscribe(function (res) {
            if (!res)
                return;
            _this.total = res.length;
            _this.marketsAr = res.filter(function (item) {
                return item.volume24h != 0;
            });
        });
    };
    return NovaexchangeComponent;
}());
NovaexchangeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-novaexchange',
        template: __webpack_require__("../../../../../src/app/exchanges/novaexchange/novaexchange.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/novaexchange/novaexchange.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_novaexchange_service__["a" /* NovaexchangeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_novaexchange_service__["a" /* NovaexchangeService */]) === "function" && _a || Object])
], NovaexchangeComponent);

var _a;
//# sourceMappingURL=novaexchange.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/poloniex-data/poloniex-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/poloniex-data/poloniex-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>Poloniex</h3>\n    <small *ngIf=\"marketsAr\">Total {{marketsAr.length}}</small>\n    <a md-list-item routerLink='/poloniex/filter'>Filter </a>\n    <section>\n        <table>\n            <tr>\n                <th>Pair</th>\n                <th>Last</th>\n                <th>High</th>\n                <th>Low</th>\n                <th>% Change</th>\n                <th>Base Volume</th>\n                <th>High 24h</th>\n                <th>Low 24h</th>\n\n\n            </tr>\n            <tbody>\n            <tr *ngFor=\"let item of marketsAr\">\n                <td>{{item.pair}}</td>\n                <td>{{item.last}}</td>\n                <td>{{item.high}}</td>\n                <td>{{item.low}}</td>\n                <td>{{item.percentChange}}</td>\n                <td>{{item.baseVolume}}</td>\n                <td>{{item.low24hr}}</td>\n                <td>{{item.high24hr}}</td>\n\n\n\n            </tr>\n            </tbody>\n\n        </table>\n\n    </section>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/exchanges/poloniex-data/poloniex-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoloniexDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_poloniex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/poloniex.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoloniexDataComponent = (function () {
    function PoloniexDataComponent(poloniex) {
        this.poloniex = poloniex;
    }
    PoloniexDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.poloniex.getTicker().subscribe(function (res) {
            //console.log(res);
            _this.marketsAr = res;
        });
    };
    return PoloniexDataComponent;
}());
PoloniexDataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-poloniex-data',
        template: __webpack_require__("../../../../../src/app/exchanges/poloniex-data/poloniex-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/poloniex-data/poloniex-data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_poloniex_service__["a" /* PoloniexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_poloniex_service__["a" /* PoloniexService */]) === "function" && _a || Object])
], PoloniexDataComponent);

var _a;
//# sourceMappingURL=poloniex-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/poloniex-ticker/poloniex-ticker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/poloniex-ticker/poloniex-ticker.component.html":
/***/ (function(module, exports) {

module.exports = "<div xmlns=\"http://www.w3.org/1999/html\">\n    <h3>Poloniex</h3> <small *ngIf=\"marketsAr\">Total {{marketsAr.length}}</small>\n    <a md-list-item routerLink='/poloniex/data'>Available </a>\n    <section>\n        <table>\n            <tr>\n                <th>Pair</th>\n                <th>MarketCap</th>\n\n                <th><small>$</small>Last</th>\n\n                <th><small>%</small>&Delta;l-h</th>\n                <th><small>%</small>&Delta;24h</th>\n\n                <th><small>%</small> Change</th>\n\n            </tr>\n            <tbody>\n            <tr *ngFor=\"let item of marketsAr\">\n                <td>{{item.pair}}</td>\n                <td><small>$</small>{{item.usd_mcap}}</td>\n                <td ><small>$</small>{{item.usd_last}}</td>\n                <td>{{item.delta}}</td>\n                <td [ngClass] =\"item.is_last_up?'green':'red'\" title=\"Prev Day: {{item.prevDay}} Last: {{item.last}}\">{{item.delta24}}</td>\n\n                <td>{{item.percentChange}}</td>\n\n            </tr>\n            </tbody>\n\n        </table>\n\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchanges/poloniex-ticker/poloniex-ticker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoloniexTickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_poloniex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/poloniex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
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
    function PoloniexTickerComponent(poloniex, marketCap) {
        this.poloniex = poloniex;
        this.marketCap = marketCap;
    }
    PoloniexTickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketCap.marketsAr$.subscribe(function (res) {
            if (!res)
                return;
            _this.marketsUS = _this.marketCap.markets;
            _this.poloniex.getTicker().subscribe(function (res) {
                //console.log(res);
                var mcap = _this.marketsUS;
                var indexed = _this.poloniex.marketsInd;
                //let btcPrice = this.marketsUS['BTC'].price_usd;
                //  console.log(btcPrice);
                res.forEach(function (item) {
                    var prec = 2;
                    var pairs = item.pair.split('_');
                    // let base:VOExchangeData = mcap[pairs[0]];
                    var base = indexed['USDT_' + pairs[0]];
                    if (base) {
                        var price1 = base.last;
                        var prec_1 = (item.last * price1) < 0.01 ? 4 : 2;
                        item.usd_last = (item.last * price1).toFixed(prec_1);
                    }
                    else {
                        item.usd_last = item.last.toFixed(2);
                        console.log(' no base1 ' + pairs[0]);
                    }
                    var mc = mcap[pairs[1]];
                    if (mc) {
                        item.usd_mcap = mc.price_usd.toFixed(prec);
                    }
                    else {
                        item.usd_mcap = '0';
                        console.log('no marketcap ' + pairs[1]);
                    }
                    item.prevDay = (item.high24hr + item.low24hr) / 2;
                    item.is_last_up = item.last > item.prevDay;
                    item.delta = ((item.low - item.high) / (item.low + item.high) / 2 * 100).toFixed(2);
                    item.delta24 = ((item.last - item.prevDay) / (item.last + item.prevDay) / 2 * 100).toFixed(2);
                    item.percentChange = Math.round(item.percentChange * 100) / 100;
                    /*
                              if(base){
                                let price = base.price_usd;
          
                               /!* let coin:VOExchangeData = mcap[pairs[1]];
                                if(coin){
                                  item.usd_mcap = coin.price_usd.toFixed(prec);
          
                                }else {
                                  item.usd_mcap ='0';
                                  console.log('no coin ' + pairs[1]);
                                }
                    *!/
          
                               // item.price_usd_last = item.last*price;
          
          
          
                              }else console.log(' no base for '+pairs[0]);*/
                    /* if(item.pair.indexOf('BTC_') ===0) {
           
           
           
           
           
                       item.display_last = item.price_usd_last.toFixed(prec);
           
                       item.price_usd_low = item.low*btcPrice
                       item.display_low = item.price_usd_low.toFixed(prec);
                       item.price_usd_high = item.high*btcPrice;
                       item.display_high = item.price_usd_high.toFixed(prec);
           
                       item.display_low24 = (item.low24hr*btcPrice).toFixed(prec);
                       item.display_high24 = (item.high24hr*btcPrice).toFixed(prec);
           
           
                     }*/
                });
                _this.marketsAr = res;
            });
        });
    };
    return PoloniexTickerComponent;
}());
PoloniexTickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-poloniex-ticker',
        template: __webpack_require__("../../../../../src/app/exchanges/poloniex-ticker/poloniex-ticker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/poloniex-ticker/poloniex-ticker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_poloniex_service__["a" /* PoloniexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_poloniex_service__["a" /* PoloniexService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
], PoloniexTickerComponent);

var _a, _b;
//# sourceMappingURL=poloniex-ticker.component.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/search-coin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCoinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shape_shift_shape_shift_service__ = __webpack_require__("../../../../../src/app/shape-shift/shape-shift.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_changelly_service__ = __webpack_require__("../../../../../src/app/exchanges/services/changelly.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_poloniex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/poloniex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_coin_echange_service__ = __webpack_require__("../../../../../src/app/exchanges/services/coin-echange.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bitfinex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bitfinex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_bittrex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bittrex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_coinbase_service__ = __webpack_require__("../../../../../src/app/exchanges/services/coinbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_timers__ = __webpack_require__("../../../../timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_yo_bit_service__ = __webpack_require__("../../../../../src/app/exchanges/services/yo-bit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_hit_btc_service__ = __webpack_require__("../../../../../src/app/exchanges/services/hit-btc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_kraken_service__ = __webpack_require__("../../../../../src/app/exchanges/services/kraken.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SearchCoinService = (function () {
    function SearchCoinService(shapeshift, changely, yobit, poloniex, bittrex, bitFinex, coinBase, coinExchange, hitBTC, kraken) {
        this.shapeshift = shapeshift;
        this.changely = changely;
        this.yobit = yobit;
        this.poloniex = poloniex;
        this.bittrex = bittrex;
        this.bitFinex = bitFinex;
        this.coinBase = coinBase;
        this.coinExchange = coinExchange;
        this.hitBTC = hitBTC;
        this.kraken = kraken;
        this.progressSub = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
        this.progress$ = this.progressSub.asObservable();
    }
    SearchCoinService.prototype.sechCoin = function (symbol) {
        var _this = this;
        this.progressSub.next(20);
        var subj = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
        var results = [];
        this.shapeshift.searchCoin(symbol).subscribe(function (res) {
            _this.progressSub.next(30);
            // console.log(res);
            results = results.concat(res);
            _this.changely.searchCoin(symbol).subscribe(function (res) {
                _this.progressSub.next(40);
                results = results.concat(res);
                _this.yobit.searchCoin(symbol).subscribe(function (res) {
                    _this.progressSub.next(50);
                    results = results.concat(res);
                    _this.poloniex.searchCoin(symbol).subscribe(function (res) {
                        _this.progressSub.next(60);
                        _this.bittrex.searchCoin(symbol).subscribe(function (res) {
                            _this.progressSub.next(70);
                            results = results.concat(res);
                            _this.bitFinex.searchCoin(symbol).subscribe(function (res) {
                                _this.progressSub.next(75);
                                results = results.concat(res);
                                _this.coinBase.searchCoin(symbol).subscribe(function (res) {
                                    _this.progressSub.next(80);
                                    results = results.concat(res);
                                    _this.coinExchange.searchCoin(symbol).subscribe(function (res) {
                                        _this.progressSub.next(85);
                                        results = results.concat(res);
                                        _this.hitBTC.searchCoin(symbol).subscribe(function (res) {
                                            _this.progressSub.next(90);
                                            results = results.concat(res);
                                            _this.kraken.searchCoin(symbol).subscribe(function (res) {
                                                _this.progressSub.next(0);
                                                results = results.concat(res);
                                                Object(__WEBPACK_IMPORTED_MODULE_9_timers__["setTimeout"])(function () { return subj.next(results); }, 100);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        return subj.asObservable();
    };
    return SearchCoinService;
}());
SearchCoinService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shape_shift_shape_shift_service__["a" /* ShapeShiftService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shape_shift_shape_shift_service__["a" /* ShapeShiftService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_changelly_service__["a" /* ChangellyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_changelly_service__["a" /* ChangellyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__services_yo_bit_service__["a" /* YoBitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_yo_bit_service__["a" /* YoBitService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_poloniex_service__["a" /* PoloniexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_poloniex_service__["a" /* PoloniexService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_bittrex_service__["a" /* BittrexService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_bitfinex_service__["a" /* BitfinexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_bitfinex_service__["a" /* BitfinexService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_coinbase_service__["a" /* CoinbaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_coinbase_service__["a" /* CoinbaseService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_coin_echange_service__["a" /* CoinEchangeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_coin_echange_service__["a" /* CoinEchangeService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__services_hit_btc_service__["a" /* HitBtcService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_hit_btc_service__["a" /* HitBtcService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_12__services_kraken_service__["a" /* KrakenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_kraken_service__["a" /* KrakenService */]) === "function" && _k || Object])
], SearchCoinService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=search-coin.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/bitfinex.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitfinexService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BitfinexService = (function () {
    function BitfinexService(http) {
        this.http = http;
    }
    BitfinexService.prototype._searchCoin = function (symbol, ar) {
        return ar.filter(function (item) {
            return item.pair.indexOf(symbol) !== -1;
        }).map(function (item) {
            return {
                exchange: 'BitFinex',
                symbol: item.pair
            };
        });
    };
    BitfinexService.prototype.searchCoin = function (symbol) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.getMarkets().subscribe(function (res) {
            //  console.log(res);
            sub.next(_this._searchCoin(symbol, res));
        });
        return sub.asObservable();
    };
    BitfinexService.prototype.getMarkets = function () {
        var url = '/api/bitfinex/symbols';
        return this.http.get(url).map(function (res) {
            return res.json().map(function (item) {
                return {
                    pair: item
                };
            });
        });
    };
    BitfinexService.prototype.getMarket = function (pair) {
        var url = '/api/bitfinex/market/' + pair;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return BitfinexService;
}());
BitfinexService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], BitfinexService);

var _a;
//# sourceMappingURL=bitfinex.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/bittrex.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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
        this.marketsArSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.marketsAr$ = this.marketsArSub.asObservable();
        this.marketsSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.markets$ = this.marketsSub.asObservable();
    }
    BittrexService.prototype._searchCoin = function (symbol, ar) {
        return ar.filter(function (item) {
            return item.MarketName.indexOf(symbol) !== -1;
        }).map(function (item) {
            return {
                exchange: 'Bitrex',
                symbol: item.MarketName
            };
        });
    };
    BittrexService.prototype.searchCoin = function (symbol) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.loadMarkets().subscribe(function (res) {
            //  console.log(res);
            sub.next(_this._searchCoin(symbol, res));
        });
        return sub.asObservable();
    };
    BittrexService.prototype._loadMarkets = function () {
        var _this = this;
        this.loadMarketSummaries().subscribe(function (res) {
            _this.markets = __WEBPACK_IMPORTED_MODULE_4_lodash__["keyBy"](res, 'pair');
            _this.marketsSub.next(_this.markets);
            _this.marketsAr = res;
            //console.log(res);
            _this.marketsArSub.next(_this.marketsAr);
        });
    };
    BittrexService.prototype.getMarketAr = function () {
        if (!this.marketsAr)
            this._loadMarkets();
        return this.marketsAr$;
    };
    BittrexService.prototype.getMarkets = function () {
        if (!this.markets)
            this._loadMarkets();
        return this.markets$;
    };
    /*
      buylimit(market: string, quantity: number, rate: number) {
    
        let url = 'api/bittrex/market/buylimit?&market={{market}}&quantity={{quantity}}&rate={{rate}}';
    
        url = url
          .replace('{{market}}', market)
          .replace('{{quantity}}', quantity+'')
          .replace('{{rate}}', rate+'');
    
        return this.http.get(url).map(res => res.json())
      }
    
    
      getMarketHistory(market: string) {
        let url = 'api/bittrex/public/getmarkethistory?market=' + market;
        return this.http.get(url).map(res => res.json())
      }
    
      getOrderBook(market: string, depthMax = '50') {
    
        let url = 'api/bittrex/public/getorderbook?market=' + market + '&type=both&depth=' + depthMax;
        return this.http.get(url).map(res => res.json())
      }
    
      getMarketSummary(market: string) {
    
        let url = 'api/bittrex/public/getmarketsummary?market=' + market;
        return this.http.get(url).map(res => res.json())
      }
    
    */
    BittrexService.prototype.loadMarketSummaries = function () {
        var url = 'api/bittrex/marketsummaries';
        return this.http.get(url).map(function (res) {
            // console.log(res.json());
            return res.json().result.map(function (item) {
                item.TimeStamp = (new Date(item.TimeStamp)).toLocaleTimeString();
                item.pair = item.MarketName.replace('-', '_');
                item.low = item.Low;
                item.high = item.High;
                item.last = item.Last;
                item.prevDay = item.PrevDay;
                return item;
            });
        });
    };
    BittrexService.prototype.loadMarket = function (market) {
        var url = 'api/bittrex/market/' + market;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    BittrexService.prototype.loadCurrencies = function () {
        var url = 'api/bittrex/currencies';
        return this.http.get(url).map(function (res) { return res.json().result; });
    };
    BittrexService.prototype.loadMarkets = function () {
        var url = 'api/bittrex/markets';
        return this.http.get(url).map(function (res) { return res.json().result; });
    };
    return BittrexService;
}());
BittrexService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BittrexService);

var _a;
//# sourceMappingURL=bittrex.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/changelly.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangellyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
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
            // console.log(data);
            return data.map(function (item) {
                return { symbol: item.toUpperCase(), name: item.toUpperCase() };
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
    ChangellyService.prototype._searchCoin = function (symbol, ar) {
        return ar.filter(function (item) {
            return item.symbol.indexOf(symbol) !== -1;
        }).map(function (item) {
            return {
                exchange: 'Changely',
                symbol: item.symbol
            };
        });
    };
    ChangellyService.prototype.searchCoin = function (symbol) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.getCurrencies().subscribe(function (res) {
            sub.next(_this._searchCoin(symbol, res));
        });
        return sub.asObservable();
    };
    return ChangellyService;
}());
ChangellyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChangellyService);

var _a;
//# sourceMappingURL=changelly.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/coin-echange.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinEchangeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoinEchangeService = (function () {
    function CoinEchangeService(http) {
        this.http = http;
        this.marketSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.market$ = this.marketSub.asObservable();
    }
    CoinEchangeService.prototype._searchCoin = function (symbol, ar) {
        return ar.filter(function (item) {
            return item.symbol.indexOf(symbol) !== -1;
        }).map(function (item) {
            return {
                exchange: 'CoinExchange',
                symbol: item.symbol
            };
        });
    };
    CoinEchangeService.prototype.searchCoin = function (symbol) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.getMarket().subscribe(function (res) {
            //  console.log(res);
            sub.next(_this._searchCoin(symbol, res));
        });
        return sub.asObservable();
    };
    CoinEchangeService.prototype.getMarket = function () {
        var _this = this;
        var url = '/api/coinexchange/market-names';
        return this.http.get(url).switchMap(function (res1) {
            return _this.http.get('/api/coinexchange/market-details').map(function (res2) {
                var r1 = res1.json().result;
                var indexed = __WEBPACK_IMPORTED_MODULE_3_lodash__["keyBy"](r1, 'MarketID');
                var r2 = res2.json().result;
                var out = r2.map(function (item) {
                    var coin = indexed[item.MarketID];
                    return {
                        symbol: coin.MarketAssetCode,
                        label: coin.MarketAssetName,
                        network: coin.BaseCurrencyCode,
                        id: +item.MarketID,
                        last: +item.LastPrice,
                        high: +item.HighPrice,
                        low: +item.LowPrice,
                        ask: +item.AskPrice,
                        bid: +item.BidPrice,
                        buyers: +item.BuyOrderCount,
                        sellers: +item.SellOrderCount,
                        trades: +item.TradeCount,
                        volume: +item.Volume,
                        btc: +item.BTCVolume,
                        change: +item.Change
                    };
                });
                // console.log(r1, r2);
                return out;
            });
        });
    };
    return CoinEchangeService;
}());
CoinEchangeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], CoinEchangeService);

var _a;
//# sourceMappingURL=coin-echange.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/coinbase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinbaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoinbaseService = (function () {
    function CoinbaseService(http) {
        this.http = http;
    }
    CoinbaseService.prototype._searchCoin = function (symbol, ar) {
        return ar.filter(function (item) {
            return item.code.indexOf(symbol) !== -1;
        }).map(function (item) {
            return {
                exchange: 'Coindase',
                symbol: item.code
            };
        });
    };
    CoinbaseService.prototype.searchCoin = function (symbol) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.getCurencies().subscribe(function (res) {
            //  console.log(res);
            sub.next(_this._searchCoin(symbol, res));
        });
        return sub.asObservable();
    };
    CoinbaseService.prototype.getCurencies = function () {
        var url = '/api/coinbase/currencies';
        return this.http.get(url).map(function (res) { return res.json().data.map(function (item) {
            return {
                code: item.id,
                label: item.name,
                min: +item.min_size
            };
        }); });
    };
    ;
    CoinbaseService.prototype.getExchange = function (symbol) {
        var url = '/api/coinbase/exchange-rates/' + symbol;
        return this.http.get(url).map(function (res) {
            var data = res.json().data.rates;
            for (var str in data)
                data[str] = +data[str];
            return data;
        });
    };
    return CoinbaseService;
}());
CoinbaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], CoinbaseService);

var _a;
//# sourceMappingURL=coinbase.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/cryptopia.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptopiaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CryptopiaService = (function () {
    function CryptopiaService(http) {
        this.http = http;
    }
    CryptopiaService.prototype.getCurrencies = function () {
        var url = '/api/cryptopia/currencies';
        return this.http.get(url).map(function (res) {
            var obj = res.json();
            // console.log(obj);
            //let out:VOCryptopia[]=[];
            return obj.Data.map(function (item) {
                return item;
            });
        });
    };
    CryptopiaService.prototype.getPairs = function () {
        var url = '/api/cryptopia/pairs';
        return this.http.get(url).map(function (res) {
            var obj = res.json();
            // let out:VOCryptopia[]=[];
            return obj.markets.map(function (item) {
                return item;
            });
        });
    };
    CryptopiaService.prototype.getMarkets = function () {
        var url = '/api/cryptopia/markets';
        return this.http.get(url).map(function (res) {
            var obj = res.json();
            return obj.markets.map(function (item) {
                return item;
            });
        });
    };
    return CryptopiaService;
}());
CryptopiaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], CryptopiaService);

var _a;
//# sourceMappingURL=cryptopia.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/hit-btc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HitBtcService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HitBtcService = (function () {
    function HitBtcService(http) {
        this.http = http;
        this.marketArSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.marketAr$ = this.marketArSub.asObservable();
    }
    HitBtcService.prototype._searchCoin = function (symbol, ar) {
        return ar.filter(function (item) {
            return item.pair.indexOf(symbol) !== -1;
        }).map(function (item) {
            return {
                exchange: 'HitBtc',
                symbol: item.pair
            };
        });
    };
    HitBtcService.prototype.searchCoin = function (symbol) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.getMarkets().subscribe(function (res) {
            //console.log(res);
            var result = _this._searchCoin(symbol, res);
            // console.log(result);
            setTimeout(function () { return sub.next(result); }, 50);
        });
        return sub.asObservable();
    };
    HitBtcService.prototype.getMarkets = function () {
        var _this = this;
        if (!this.marketAr) {
            var url = 'api/hit-btc/all';
            this.http.get(url).map(function (res) {
                var out = res.json().symbols;
                out.forEach(function (item) {
                    var l = item.symbol.length;
                    item.pair = item.symbol.substr(0, l - 3) + '_' + item.symbol.substr(l - 3);
                });
                return out;
            }).subscribe(function (res) {
                _this.marketAr = res;
                _this.marketArSub.next(_this.marketAr);
            });
        }
        return this.marketAr$;
    };
    return HitBtcService;
}());
HitBtcService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], HitBtcService);

var _a;
//# sourceMappingURL=hit-btc.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/kraken.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KrakenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KrakenService = (function () {
    function KrakenService(http) {
        this.http = http;
        this.marketArSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.marketAr$ = this.marketArSub.asObservable();
    }
    KrakenService.prototype._searchCoin = function (symbol, ar) {
        return ar.filter(function (item) {
            return item.pair.indexOf(symbol) !== -1;
        }).map(function (item) {
            return {
                exchange: 'Kraken',
                symbol: item.pair
            };
        });
    };
    KrakenService.prototype.searchCoin = function (symbol) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.getCurencies().subscribe(function (res) {
            //console.log(res);
            var result = _this._searchCoin(symbol, res);
            // console.log(result);
            setTimeout(function () { return sub.next(result); }, 50);
        });
        return sub.asObservable();
    };
    KrakenService.prototype.getMarket = function (kuid) {
        var url = '/api/kraken/market/' + kuid;
        return this.http.get(url).map(function (res) { return res.json().result; });
    };
    KrakenService.prototype.getCurencies = function () {
        var _this = this;
        if (!this.marketAr) {
            var url1 = '/api/kraken/currencies';
            var url2_1 = '/api/kraken/markets';
            this.http.get(url1).switchMap(function (res1) {
                return _this.http.get(url2_1).map(function (res2) {
                    var out = [];
                    var result1 = res1.json().result;
                    var result2 = res2.json().result;
                    for (var str in result2) {
                        var item = result2[str];
                        var coin1 = result1[item.base];
                        if (!coin1)
                            console.warn(' no base for ' + item.base);
                        var coin2 = result1[item.quote];
                        if (!coin2)
                            console.warn(' no quote for ' + item.quote);
                        item.pair = coin1.altname + '_' + coin2.altname;
                        item.kid = str;
                        // out.push(item)
                    } // console.log(out1, out2);
                    //console.log(result1, result2);
                    return result2;
                });
            }).subscribe(function (res) {
                _this.markets = res;
                _this.marketAr = __WEBPACK_IMPORTED_MODULE_4_lodash__["values"](res);
                _this.marketArSub.next(_this.marketAr);
            });
        }
        return this.marketAr$;
    };
    return KrakenService;
}());
KrakenService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], KrakenService);

var _a;
//# sourceMappingURL=kraken.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/novaexchange.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovaexchangeService; });
/* unused harmony export VONovo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NovaexchangeService = (function () {
    function NovaexchangeService(http) {
        this.http = http;
    }
    NovaexchangeService.prototype.getCurrencies = function () {
        var url = 'api/novaexchange/markets';
        return this.http.get(url).map(function (res) {
            var obj = res.json();
            var out = [];
            return obj.markets.map(function (item) {
                return item;
            });
        });
    };
    return NovaexchangeService;
}());
NovaexchangeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], NovaexchangeService);

var VONovo = (function () {
    function VONovo() {
    }
    return VONovo;
}());

var _a;
//# sourceMappingURL=novaexchange.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/poloniex.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoloniexService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
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
    PoloniexService.prototype._searchCoin = function (symbol, ar) {
        return ar.filter(function (item) {
            return item.pair.indexOf(symbol) !== -1;
        }).map(function (item) {
            return {
                exchange: 'Poloniex',
                symbol: item.pair
            };
        });
    };
    PoloniexService.prototype.searchCoin = function (symbol) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.getTicker().subscribe(function (res) {
            sub.next(_this._searchCoin(symbol, res));
        });
        return sub.asObservable();
    };
    PoloniexService.prototype.getTicker = function () {
        var _this = this;
        var url = '/api/poloniex/returnTicker';
        return this.http.get(url).map(function (res) {
            var data = res.json();
            _this.marketsInd = data;
            _this.usd_btc = data['USDT_BTC'];
            for (var str in data) {
                data[str]['pair'] = str;
            }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], PoloniexService);

var _a;
//# sourceMappingURL=poloniex.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/services/yo-bit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoBitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoBitService = (function () {
    function YoBitService(http) {
        this.http = http;
    }
    YoBitService.prototype._searchCoin = function (symbol, ar) {
        return ar.filter(function (item) {
            return item.pair.indexOf(symbol) !== -1;
        }).map(function (item) {
            return {
                exchange: 'YoBit',
                symbol: item.pair
            };
        });
    };
    YoBitService.prototype.searchCoin = function (symbol) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.getCurrencies().subscribe(function (res) {
            sub.next(_this._searchCoin(symbol, res));
        });
        return sub.asObservable();
    };
    YoBitService.prototype.getCurrencies = function () {
        var url = 'api/yo-bit/currencies';
        return this.http.get(url).map(function (res) {
            var obj = res.json().pairs;
            var out = [];
            for (var str in obj) {
                var coin = obj[str];
                coin.pair = str.toUpperCase();
                coin.market = {};
                out.push(coin);
            }
            return out;
        });
    };
    YoBitService.prototype.getMarket = function (pair) {
        pair = pair.toLowerCase();
        var url = '/api/yo-bit/market/:pair';
        url = url.replace(':pair', pair);
        return this.http.get(url).map(function (res) {
            var out = res.json()[pair];
            out.pair = pair;
            return out;
        });
    };
    return YoBitService;
}());
YoBitService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], YoBitService);

var _a;
//# sourceMappingURL=yo-bit.service.js.map

/***/ }),

/***/ "../../../../../src/app/exchanges/yo-bit-market/yo-bit-market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hide-me {\r\n\r\n}\r\n\r\n.hide-rows>tr{\r\n    display: none;\r\n}\r\n\r\n.show-all>tr{\r\n   display: table-row;\r\n}\r\n.hide-rows>tr.show-me{\r\n    display: table-row;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/exchanges/yo-bit-market/yo-bit-market.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n        <h2>YoBit</h2>\n\n    </section>\n    <section>\n        <div *ngIf=\"btcPairs\" >Total: Direct: {{directPairs.length}}  BTC: {{btcPairs.length}}\n            <input type=\"checkbox\"  (change)=\"onShowHide()\"  [(ngModel)]=\"showAll\"  name=\"selected\"/> Show All</div>\n        <table>\n            <tbody [ngClass]=\"tableClass\">\n            <tr class=\"show-me\">\n                <th>#</th>\n                <th>Pair</th>\n                <th>Last</th>\n                <th>Low</th>\n                <th>High</th>\n                <th>Buy</th>\n                <th>Sell</th>\n            </tr>\n            <tr *ngFor=\"let coin of directPairs\" [ngClass]=\"coin.class\" >\n\n                <td> <input type=\"checkbox\"  (change)=\"onCoinSelected(coin)\" [checked]=\"coin.selected\" name=\"selected\"/></td>\n                <td (click)=\"onPairClick(coin)\" class=\"btn\">{{coin.pair}}</td>\n                <td>{{coin.market.last}}</td>\n                <td>{{coin.market.low}}</td>\n                <td>{{coin.market.high}}</td>\n                <td>{{coin.market.buy}}</td>\n                <td>{{coin.market.sell}}</td>\n            </tr>\n<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>\n            <tr *ngFor=\"let coin of btcPairs\" [ngClass]=\"coin.class\" >\n\n                <td> <input type=\"checkbox\"  (change)=\"onCoinSelected(coin)\" [checked]=\"coin.selected\" name=\"selected\"/></td>\n                <td class=\"btn\" (click)=\"onPairClick(coin)\">{{coin.pair}}</td>\n                <td>{{coin.market.last}}</td>\n                <td>{{coin.market.low}}</td>\n                <td>{{coin.market.high}}</td>\n                <td>{{coin.market.buy}}</td>\n                <td>{{coin.market.sell}}</td>\n            </tr>\n\n            </tbody>\n\n        </table>\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/exchanges/yo-bit-market/yo-bit-market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoBitMarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_yo_bit_service__ = __webpack_require__("../../../../../src/app/exchanges/services/yo-bit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoBitMarketComponent = (function () {
    function YoBitMarketComponent(service) {
        this.service = service;
        this.showAll = true;
        this.tableClass = 'show-all';
    }
    YoBitMarketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCurrencies().subscribe(function (res) {
            // console.log(res);
            var btc = [];
            var direct = [];
            var selected = _this.getSelected();
            res.forEach(function (item) {
                var p = item.pair.split('_');
                item.symbol = p[0];
                item.to = p[1];
                if (item.to !== 'btc')
                    direct.push(item);
                else
                    btc.push(item);
                item.selected = selected.indexOf(item.pair) !== -1;
                item.class = item.selected ? 'show-me' : 'hide-me';
            });
            _this.btcPairs = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](btc, 'pair');
            _this.directPairs = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](direct, 'pair');
        });
    };
    YoBitMarketComponent.prototype.onShowHide = function () {
        this.tableClass = this.showAll ? 'show-all' : 'hide-rows';
        console.log(this.showAll);
    };
    YoBitMarketComponent.prototype.onCoinSelected = function (coin) {
        var ar = this.selectedCoins;
        if (coin.selected) {
            coin.selected = false;
            __WEBPACK_IMPORTED_MODULE_2_lodash__["pull"](ar, coin.pair);
        }
        else {
            if (ar.indexOf(coin.pair) === -1)
                ar.push(coin.pair);
            coin.selected = true;
        }
        coin.class = coin.selected ? 'show-me' : 'hide-me';
        this.saveSelected();
        // console.log(coin.selected);
        // console.log(coin.class);
    };
    YoBitMarketComponent.prototype.saveSelected = function () {
        localStorage.setItem('yobit-selected', JSON.stringify(this.selectedCoins));
    };
    YoBitMarketComponent.prototype.getSelected = function () {
        var str = localStorage.getItem('yobit-selected');
        if (!str)
            this.selectedCoins = [];
        else
            this.selectedCoins = JSON.parse(str);
        return this.selectedCoins;
    };
    YoBitMarketComponent.prototype.onPairClick = function (coin) {
        var pair = coin.pair;
        this.service.getMarket(pair).subscribe(function (res) {
            console.log(res);
            coin.market = res;
        });
    };
    return YoBitMarketComponent;
}());
YoBitMarketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-yo-bit-market',
        template: __webpack_require__("../../../../../src/app/exchanges/yo-bit-market/yo-bit-market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/exchanges/yo-bit-market/yo-bit-market.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_yo_bit_service__["a" /* YoBitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_yo_bit_service__["a" /* YoBitService */]) === "function" && _a || Object])
], YoBitMarketComponent);

var _a;
//# sourceMappingURL=yo-bit-market.component.js.map

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoBrowserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_github_service__ = __webpack_require__("../../../../../src/app/github/shared/github.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_github_service__ = __webpack_require__("../../../../../src/app/github/shared/github.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'repo-detail',
        styles: [__webpack_require__("../../../../../src/app/github/repo-detail/repo-detail.component.css")],
        template: __webpack_require__("../../../../../src/app/github/repo-detail/repo-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_github_service__["a" /* GithubService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_github_service__ = __webpack_require__("../../../../../src/app/github/shared/github.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'repo-list',
        styles: [__webpack_require__("../../../../../src/app/github/repo-list/repo-list.component.css")],
        template: __webpack_require__("../../../../../src/app/github/repo-list/repo-list.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_github_service__["a" /* GithubService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], RepoListComponent);

var _a, _b;
//# sourceMappingURL=repo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/github/shared/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GithubService);

var _a;
//# sourceMappingURL=github.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HomeService);

var _a;
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>Reset Password</h3>\n    <br>\n    <h3>{{message}}</h3>\n    <form #f2=\"ngForm\"  autocomplete=\"off\">\n\n        <md-list>\n            <md-list-item>\n                <md-input-container>\n                    <input mdInput\n                           (blur)=\"checkPassword()\"\n                           placeholder=\"Password\"\n                           name=\"password\"\n                           [(ngModel)]=\"login.password\"\n                           required\n                           minlength=\"6\"\n                           [type]=\"showPass ? 'text': 'password'\"\n                           style=\"width: 100%\"/>\n                </md-input-container>\n            </md-list-item>\n            <md-list-item>\n                <md-input-container>\n                    <input mdInput\n                           (blur)=\"checkPassword()\"\n                           placeholder=\"Confirm Password\"\n                           name=\"password\"\n                           [(ngModel)]=\"confirmPassword\"\n                           required\n                           minlength=\"6\"\n                           [type]=\"showPass ? 'text': 'password'\"\n                           style=\"width: 100%\"/>\n                </md-input-container>\n            </md-list-item>\n            <md-list-item>\n                <md-checkbox #showpass (change)=\"onShowPasswordChanged($event, showpass)\">Show password\n                </md-checkbox>\n            </md-list-item>\n\n            <md-list-item>\n                <button md-raised-button color=\"accent\" [disabled]=\"!f2.valid || notMatch\"\n                        (click)=\"onSubmit()\">\n                    Register\n                </button>\n            </md-list-item>\n        </md-list>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmResetPasswordComponent = (function () {
    function ConfirmResetPasswordComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.login = { password: '', uid: '' };
        this.notMatch = true;
        this.showPass = false;
    }
    ConfirmResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params);
            var uid = params.uid;
            _this.login.uid = uid;
        });
    };
    ConfirmResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var url = 'api/login/reset-password-confirm/';
        this.http.post(url, this.login).map(function (res) { return res.json(); }).subscribe(function (res) {
            if (res.success) {
                _this.router.navigateByUrl('/login/login');
            }
            else {
                _this.message = 'Error reset password';
            }
        });
    };
    ConfirmResetPasswordComponent.prototype.checkPassword = function () {
        if (this.confirmPassword === this.login.password)
            this.notMatch = false;
        else
            this.notMatch = true;
    };
    ConfirmResetPasswordComponent.prototype.onShowPasswordChanged = function ($evt, chbox) {
        this.showPass = chbox.checked;
    };
    return ConfirmResetPasswordComponent;
}());
ConfirmResetPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-confirm-reset-password',
        template: __webpack_require__("../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], ConfirmResetPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=confirm-reset-password.component.js.map

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

module.exports = "<div>\n    <h3>Confirmation Sent</h3>\n    <br>\n\n    <h3>{{message}}</h3>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers__ = __webpack_require__("../../../../timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_timers__);
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
    function ConfirmComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var uid = params.uid;
            console.log(uid);
            var url = '/api/login/confirm/' + uid;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (res) {
                if (res.success === 'confirmed' || res.success === 'confirmed-before') {
                    _this.message = 'Confirmed';
                    Object(__WEBPACK_IMPORTED_MODULE_3_timers__["setTimeout"])(function () {
                        _this.router.navigateByUrl('/login/login');
                    }, 5000);
                }
                else {
                    _this.message = 'Confirmation Failed. Please Register';
                    Object(__WEBPACK_IMPORTED_MODULE_3_timers__["setTimeout"])(function () {
                        //  this.router.navigateByUrl('/login/register');
                    }, 5000);
                }
            });
        });
    };
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-confirm',
        template: __webpack_require__("../../../../../src/app/login/confirm/confirm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/confirm/confirm.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], ConfirmComponent);

var _a, _b, _c;
//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form #f1=\"ngForm\"  autocomplete=\"off\">\n        <md-list>\n            <md-list-item>\n                <md-input-container>\n                    <input #username\n                           mdInput\n                           [(ngModel)]=\"login.email\"\n                           required\n                           minlength=\"6\" type=\"text\" placeholder=\"email\" name=\"email\" type=\"email\"/>\n                </md-input-container>\n            </md-list-item>\n\n            <md-list-item>\n                <md-input-container>\n                    <input mdInput\n                           (blur)=\"checkPassword()\"\n                           placeholder=\"Password\"\n                           name=\"password\"\n                           [(ngModel)]=\"login.password\"\n                           required\n                           minlength=\"6\"\n                           [type]=\"showPass ? 'text': 'password'\"\n                           style=\"width: 100%\"/>\n                </md-input-container>\n            </md-list-item>\n            <md-list-item>\n                <md-checkbox #showpass (change)=\"onShowPasswordChanged($event, showpass)\">Show password\n                </md-checkbox>\n            </md-list-item>\n\n            <md-list-item>\n                <button md-raised-button color=\"accent\" [disabled]=\"!f1.valid\" (click)=\"onSubmit()\">\n                    Sign In\n                </button>\n            </md-list-item>\n        </md-list>\n\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginFormComponent = (function () {
    function LoginFormComponent() {
        this.showPass = false;
        this.login = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.checkPassword = function () {
    };
    LoginFormComponent.prototype.onShowPasswordChanged = function (evt, on) {
    };
    LoginFormComponent.prototype.onSubmit = function () {
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-form',
        template: __webpack_require__("../../../../../src/app/login/login-form/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login-form/login-form.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginFormComponent);

//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_confirm_component__ = __webpack_require__("../../../../../src/app/login/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirm_reset_password_confirm_reset_password_component__ = __webpack_require__("../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login/login-form/login-form.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__["a" /* MaterialAppModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__confirm_confirm_component__["a" /* ConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_7__confirm_reset_password_confirm_reset_password_component__["a" /* ConfirmResetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__["a" /* LoginFormComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__["a" /* LoginFormComponent */]
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

module.exports = "<div id=\"LoginScreen\">\n    <small *ngIf=\"login?.nickname\">Registered as {{login.nickname}}</small>\n    <md-tab-group [selectedIndex]=\"selectedTab\">\n        <md-tab label=\"Login\">\n            <form #f1=\"ngForm\" (ngSubmit)=\"signUp()\" autocomplete=\"off\">\n                <md-list>\n                    <md-list-item>\n                        <md-input-container>\n                            <input #username\n                                   mdInput\n                                   [(ngModel)]=\"login.email\"\n                                   required\n                                   minlength=\"6\" type=\"text\" placeholder=\"email\" name=\"email\" type=\"email\"/>\n                        </md-input-container>\n                    </md-list-item>\n\n                    <md-list-item>\n                        <md-input-container>\n                            <input mdInput\n                                   (blur)=\"checkPassword()\"\n                                   placeholder=\"Password\"\n                                   name=\"password\"\n                                   [(ngModel)]=\"login.password\"\n                                   required\n                                   minlength=\"6\"\n                                   [type]=\"showPass ? 'text': 'password'\"\n                                   style=\"width: 100%\"/>\n                        </md-input-container>\n                    </md-list-item>\n                    <md-list-item>\n                        <md-checkbox #showpass (change)=\"onShowPasswordChanged($event, showpass)\">Show password\n                        </md-checkbox>\n                    </md-list-item>\n\n                    <md-list-item>\n                        <button md-raised-button color=\"accent\" [disabled]=\"!f1.valid\" (click)=\"onSubmit()\">\n                            Sign In\n                        </button>\n                    </md-list-item>\n                </md-list>\n\n            </form>\n        </md-tab>\n        <md-tab label=\"Register\">\n            <form #f2=\"ngForm\" (ngSubmit)=\"signUp()\" autocomplete=\"off\">\n\n                <md-list>\n                    <md-list-item>\n                        <md-chip-list *ngIf=\"exists\">\n                            <md-chip color=\"accent\" selected=\"true\">\n                                User with this email exists\n                                <!--  <br/>\n                                  <a  [routerLink]=\"['/login/forgot-password']\">Reset Password</a>-->\n                            </md-chip>\n\n                        </md-chip-list>\n\n                        <md-input-container>\n                            <input #username\n                                   mdInput\n                                   [(ngModel)]=\"login.email\"\n                                   required\n                                   minlength=\"6\" type=\"text\"\n                                   placeholder=\"email\"\n                                   name=\"email\"\n                                   type=\"email\"/>\n                        </md-input-container>\n\n                    </md-list-item>\n\n\n                    <md-list-item>\n                        <md-input-container>\n                            <input mdInput\n                                   (blur)=\"checkPassword()\"\n                                   placeholder=\"Password\"\n                                   name=\"password\"\n                                   [(ngModel)]=\"login.password\"\n                                   required\n                                   minlength=\"6\"\n                                   [type]=\"showPass ? 'text': 'password'\"\n                                   style=\"width: 100%\"/>\n                        </md-input-container>\n                    </md-list-item>\n                    <md-list-item>\n                        <md-input-container>\n                            <input mdInput\n                                   (blur)=\"checkPassword()\"\n                                   placeholder=\"Confirm Password\"\n                                   name=\"password\"\n                                   [(ngModel)]=\"confirmPassword\"\n                                   required\n                                   minlength=\"6\"\n                                   [type]=\"showPass ? 'text': 'password'\"\n                                   style=\"width: 100%\"/>\n                        </md-input-container>\n                    </md-list-item>\n                    <md-list-item>\n                        <md-checkbox #showpass (change)=\"onShowPasswordChanged($event, showpass)\">Show password\n                        </md-checkbox>\n                    </md-list-item>\n\n                    <md-list-item>\n                        <button md-raised-button color=\"accent\" [disabled]=\"!f2.valid || notMatch\"\n                                (click)=\"onRegister()\">\n                            Register\n                        </button>\n                    </md-list-item>\n                </md-list>\n            </form>\n        </md-tab>\n        <md-tab label=\"Forget Password\">\n            <form #f3=\"ngForm\" (ngSubmit)=\"signUp()\" autocomplete=\"off\">\n\n                <md-list>\n                    <md-list-item>\n                        <md-input-container>\n                            <input #username mdInput [(ngModel)]=\"login.email\" required\n                                   minlength=\"6\" type=\"text\" placeholder=\"Email\" name=\"email\" type=\"email\"/>\n                        </md-input-container>\n                    </md-list-item>\n\n                    <md-list-item>\n                        <button md-raised-button color=\"accent\" [disabled]=\"!f3.valid\" (click)=\"onRestPassword()\">\n                            Reset Password\n                        </button>\n                    </md-list-item>\n                </md-list>\n\n            </form>\n        </md-tab>\n\n    </md-tab-group>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
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
    function LoginComponent(router, route, authHttp, dialog, snakBar) {
        this.router = router;
        this.route = route;
        this.authHttp = authHttp;
        this.dialog = dialog;
        this.snakBar = snakBar;
        this.login = { email: '', password: '', nickname: null };
        this.notMatch = true;
    }
    LoginComponent.prototype.onRegister = function () {
        var _this = this;
        this.exists = false;
        this.authHttp.register(this.login.email, this.login.password).subscribe(function (res) {
            console.log(res);
            /* if(res.error && res.error === 'exists'){
               setTimeout(()=>{ this.exists = false}, 3000);
               this.exists = true;
             } else */
            _this.login.nickname = res.user ? res.user.nickname : null;
            if (res.success) {
                _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: {
                        title: 'Alert',
                        message: 'Confirmation url sent to  ' + res.user.email
                    } });
            }
            else if (res.error) {
                _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: {
                        title: 'Error',
                        message: res.message || 'Please try again later'
                    } });
            }
        });
    };
    LoginComponent.prototype.checkPassword = function () {
        if (this.confirmPassword === this.login.password)
            this.notMatch = false;
        else
            this.notMatch = true;
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
                _this.authHttp.setUser(res.user);
                _this.login.nickname = res.user ? res.user.nickname : null;
                _this.snakBar.open("You are logged in " + _this.login.nickname + '!', '', { duration: 3000 });
                var url_1 = _this.authHttp.getLastVisited();
                if (!url_1)
                    url_1 = '/email-service';
                setTimeout(function () {
                    _this.router.navigateByUrl(url_1);
                }, 3000);
            }
            else if (res.error) {
                if (res.error == 'wrong') {
                    _this.snakBar.open("Username or password incorrect ", '', { duration: 3000 });
                }
                else {
                    _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: {
                            title: 'Error',
                            message: res.message || 'Server error. Please try again later'
                        } });
                }
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        console.log("Sign Up Data:", this.login);
    };
    LoginComponent.prototype.onRestPassword = function () {
        var _this = this;
        var url = 'api/login/reset-password';
        this.authHttp.post(url, this.login).map(function (res) { return res.json(); }).subscribe(function (res) {
            if (res.success) {
                _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: {
                        title: 'Alert',
                        message: 'Confirmation url sent to ' + res.user.email +
                            ' Please click on email link to reset password '
                    } });
            }
            else {
                _this.snakBar.open("Please Register ", '', { duration: 3000 });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdSnackBar */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
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

module.exports = "<div>\n    <md-card>\n        <md-card-title>\n            Login\n        </md-card-title>\n        <md-input-container>\n            <input [(ngModel)] =\"email\"  mdInput placeholder=\"Email\" type=\"email\" name=\"email\" >\n        </md-input-container>\n        <md-input-container>\n            <input [(ngModel)] =\"mypassword\"  mdInput placeholder=\"Password\" type=\"password\" name=\"mypassword\" >\n        </md-input-container>\n\n                <button  md-raised-button color=\"accent\"  (click)=\"login()\">Login</button>\n\n    </md-card>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login2/login2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login2',
        template: __webpack_require__("../../../../../src/app/login2/login2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login2/login2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], Login2Component);

var _a, _b, _c;
//# sourceMappingURL=login2.component.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/all-coins-table/all-coins-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/all-coins-table/all-coins-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <nav class=\"btns-row m60\">\n        <a routerLink=\"/market-cap/selected\" routerLinkActive=\"active\" > Selected Coins </a>\n        <a routerLink=\"/market-cap/gainers-losers\" routerLinkActive=\"active\" > Gainers Losers </a>\n        <a routerLink=\"/market-cap/exchanges-list\" routerLinkActive=\"active\" > List Exchanges </a>\n        <a routerLink=\"/market-cap/coins-list\" routerLinkActive=\"active\" > Coins List </a>\n    </nav>\n\n    <h4>\n        Market Cap all coins\n    </h4>\n         <small *ngIf=\"allCoinsData\">Total: {{allCoinsData.length}}</small>\n\n    <section>\n        <table>\n            <tr>\n                <th class=\"btn\" (click)=\"onClickHeader('rank')\">Rank</th>\n                <th>#</th>\n                <th class=\"btn\" (click)=\"onClickHeader('symbol')\">Symbol</th>\n                <th>Name</th>\n                <th class=\"btn\" (click)=\"onClickHeader('percent_change_1h')\">1h%</th>\n                <th class=\"btn\" (click)=\"onClickHeader('percent_change_24h')\" >24h%</th>\n                <th class=\"btn\" (click)=\"onClickHeader('percent_change_7d')\">7 days%</th>\n                <th class=\"btn\" (click)=\"onClickHeader('price_usd')\">$US</th>\n\n\n                <th (click)=\"onClickHeader('market_cap_usd')\">market cap usd</th>\n\n            </tr>\n\n            <tbody *ngFor=\"let item of allCoinsData\">\n            <tr>\n                <td>{{item.rank}}</td>\n                <td><input type=\"checkbox\"  (change)=\"onCoinSelected($event, item)\" [checked]=\"item.selected\"   name=\"selected\"/></td>\n                <td>{{item.symbol}}</td>\n                <td class=\"w120 ell\">{{item.name}}</td>\n\n                <td [ngClass]=\"item.percent_change_1h>0?'green':'red'\">{{item.percent_change_1h}}</td>\n                <td [ngClass]=\"item.percent_change_24h>0?'green':'red'\">{{item.percent_change_24h}}</td>\n                <td [ngClass]=\"item.percent_change_7d>0?'green':'red'\">{{item.percent_change_7d}}</td>\n                <td>{{item.price_usd}}</td>\n                <td>{{item.market_cap_usd}}</td>\n\n\n            </tr>\n\n            </tbody>\n        </table>\n    </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/all-coins-table/all-coins-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCoinsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_app_storage_service__ = __webpack_require__("../../../../../src/app/shared/app-storage.service.ts");
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
    function AllCoinsTableComponent(allCoinsService, storage) {
        this.allCoinsService = allCoinsService;
        this.storage = storage;
        this.asc_desc = 'asc';
    }
    // ngOnChanges(changes: any) {
    // console.log(changes);
    //this.modelCoins  = changes.allCoins.currentValue;// _.reject(changes.allCoins,'selected')
    //this.doSomething(changes.categoryId.currentValue);
    //}
    AllCoinsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCoinsService.marketsAr$.subscribe(function (res) {
            if (res) {
                _this.storage.mapSelected(res);
                _this.allCoinsData = res;
            } //filterSelected(res, this.storage.getMCSelected());
        });
    };
    AllCoinsTableComponent.prototype.onCoinSelected = function (event, coin) {
        // console.log(event.target.checked, coin);
        var symbol = coin.symbol;
        if (event.target.checked)
            this.storage.addMCSelected(symbol);
        else
            this.storage.deleteMCSelected(symbol);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-all-coins-table',
        template: __webpack_require__("../../../../../src/app/market-cap/all-coins-table/all-coins-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market-cap/all-coins-table/all-coins-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_app_storage_service__["a" /* AppStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_app_storage_service__["a" /* AppStorageService */]) === "function" && _b || Object])
], AllCoinsTableComponent);

var _a, _b;
//# sourceMappingURL=all-coins-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/coins-exchanges/coins-exchanges.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/coins-exchanges/coins-exchanges.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n        <h4> Exchanges</h4><small *ngIf=\"symbolMarkets\"> Total: {{symbolMarkets.length}} </small>\n    </section>\n\n\n    <section>\n        <table>\n            <tbody>\n            <tr *ngFor=\"let coin of symbolMarkets\">\n                <td>{{coin.symbol}}</td>\n                <td><small>{{coin.markets.toString()}}</small></td>\n\n            </tr>\n            </tbody>\n        </table>\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/coins-exchanges/coins-exchanges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsExchangesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils__ = __webpack_require__("../../../../../src/app/shared/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoinsExchangesComponent = (function () {
    function CoinsExchangesComponent(route, marketcap) {
        this.route = route;
        this.marketcap = marketcap;
    }
    CoinsExchangesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list = this.route.snapshot.paramMap.get('list');
        if (list) {
            var coins = list.split(',');
            this.consAr = coins;
            this.pricessData();
        }
        console.log(list);
        this.marketcap.getCoinsExchanges().subscribe(function (res) {
            _this.exchanges = res;
            _this.pricessData();
        });
    };
    CoinsExchangesComponent.prototype.pricessData = function () {
        var ar = this.consAr;
        var exchanges = this.exchanges;
        if (!ar || !this.exchanges)
            return;
        var symbolMarkets = [];
        ar.forEach(function (item) {
            var symbol = item;
            symbolMarkets.push({
                symbol: symbol,
                markets: __WEBPACK_IMPORTED_MODULE_2__shared_utils__["a" /* Utils */].filterMarkets(symbol, exchanges)
            });
        });
        this.symbolMarkets = symbolMarkets;
    };
    CoinsExchangesComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        // You can also use categoryId.previousValue and
        // categoryId.firstChange for comparing etc.
    };
    return CoinsExchangesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], CoinsExchangesComponent.prototype, "consAr", void 0);
CoinsExchangesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-coins-exchanges',
        template: __webpack_require__("../../../../../src/app/market-cap/coins-exchanges/coins-exchanges.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market-cap/coins-exchanges/coins-exchanges.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
], CoinsExchangesComponent);

var _a, _b;
//# sourceMappingURL=coins-exchanges.component.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/coins-list/coins-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/coins-list/coins-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"btns-row m60\">\n        <a  routerLink=\"/market-cap/all-coins\" routerLinkActive=\"active\" >All MarketCap</a>\n    <a routerLink=\"/market-cap/selected\" routerLinkActive=\"active\" > Selected Coins </a>\n    <a routerLink=\"/market-cap/gainers-losers\" routerLinkActive=\"active\" > Gainers Losers </a>\n    <a routerLink=\"/market-cap/exchanges-list\" routerLinkActive=\"active\" > List Exchanges </a>\n    </nav>\n    <section>\n        Coins List\n        <table>\n            <tbody>\n            <tr *ngFor=\"let coin of listEchangeCoin\">\n                <td><small>{{coin.coin}}</small></td>\n                <td>{{coin.name}}</td>\n                <td>{{coin.pair}}</td>\n                <td><small>{{coin.pairUrl}}</small></td>\n            </tr>\n            </tbody>\n        </table>\n\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/coins-list/coins-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoinsListComponent = (function () {
    function CoinsListComponent(service) {
        this.service = service;
    }
    CoinsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCoinsExchanges().subscribe(function (res) {
            if (!res)
                return;
            _this.listEchangeCoin = res;
        });
    };
    return CoinsListComponent;
}());
CoinsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-coins-list',
        template: __webpack_require__("../../../../../src/app/market-cap/coins-list/coins-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market-cap/coins-list/coins-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object])
], CoinsListComponent);

var _a;
//# sourceMappingURL=coins-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/exchanges-list/exchanges-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/exchanges-list/exchanges-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"btns-row m60\">\n        <a  routerLink=\"/market-cap/all-coins\" routerLinkActive=\"active\" >All MarketCap</a>\n    <a routerLink=\"/market-cap/selected\" routerLinkActive=\"active\" > Selected Coins </a>\n    <a routerLink=\"/market-cap/gainers-losers\" routerLinkActive=\"active\" > Gainers Losers </a>\n    <a routerLink=\"/market-cap/coins-list\" routerLinkActive=\"active\" > Coins List </a>\n    </nav>\n\n    <section>\n       <h4> Exchanges</h4><small *ngIf=\"lisExchanges\"> Total: {{lisExchanges.length}} </small>\n        <table>\n            <tbody>\n            <tr *ngFor=\"let exchange of lisExchanges\">\n                <td><div class=\"w8 ell\"><a title=\"{{exchange.pairUrl}}\" href=\"{{exchange.pairUrl}}\">{{exchange.name}}</a></div></td>\n                <td><div class=\"w6 ell\"><small>{{exchange.pairUrl.substr(8)}}</small></div></td>\n                <td>{{exchange.pair}}</td>\n                <td><small>{{exchange.coin}}</small></td>\n            </tr>\n            </tbody>\n        </table>\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/exchanges-list/exchanges-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExchangesListComponent = (function () {
    function ExchangesListComponent(service) {
        this.service = service;
    }
    ExchangesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCoinsExchanges().subscribe(function (res) {
            if (!res)
                return;
            _this.listEchangeCoin = res;
            var un = __WEBPACK_IMPORTED_MODULE_2_lodash__["uniqBy"](res, 'name');
            _this.lisExchanges = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](un, 'name');
        });
    };
    return ExchangesListComponent;
}());
ExchangesListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-exchanges-list',
        template: __webpack_require__("../../../../../src/app/market-cap/exchanges-list/exchanges-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market-cap/exchanges-list/exchanges-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object])
], ExchangesListComponent);

var _a;
//# sourceMappingURL=exchanges-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/gainers-losers/gainers-losers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/gainers-losers/gainers-losers.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"btns-row m60\">\n        <a  routerLink=\"/market-cap/all-coins\" routerLinkActive=\"active\" >All MarketCap</a>\n        <a routerLink=\"/market-cap/gainers\" routerLinkActive=\"active\" >Gainers</a>\n        <a routerLink=\"/market-cap/gainers-losers/all-exchanges\" routerLinkActive=\"active\" > GL All Exchanges </a>\n        <a routerLink=\"/market-cap/gainers-losers/known-exchanges\" routerLinkActive=\"active\" >GL Known Exchanges</a>\n\n    </nav>\n    <h3>Gainers Losers</h3>\n    <section>\n        <h4>Gainers 24h top 30 </h4> <small> (With market cap more then 10000)</small>\n       <app-sortable-table [consAvailable]=\"gainersAr\"></app-sortable-table>\n    </section>\n    <section>\n        <h4>Losers 24h top 30 </h4> <small> (With market cap more then 10000)</small>\n        <app-sortable-table [consAvailable]=\"losersAr\"></app-sortable-table>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/gainers-losers/gainers-losers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GainersLosersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GainersLosersComponent = (function () {
    function GainersLosersComponent(service) {
        this.service = service;
        this.capLimit = 10000;
    }
    GainersLosersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.marketsAr$.subscribe(function (res) {
            //  console.log(res);
            if (!res)
                return;
            var out = [];
            var limit = _this.capLimit;
            out = res.filter(function (item) {
                return item.market_cap_usd > limit;
            });
            // let gainers = _.sortBy(out,'percent_change_24h','desc');
            var sorted = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](out, 'percent_change_24h');
            // console.log(out);
            _this.gainersAr = __WEBPACK_IMPORTED_MODULE_2_lodash__["takeRight"](sorted, 30);
            _this.losersAr = __WEBPACK_IMPORTED_MODULE_2_lodash__["take"](sorted, 30);
        });
    };
    return GainersLosersComponent;
}());
GainersLosersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gainers-losers',
        template: __webpack_require__("../../../../../src/app/market-cap/gainers-losers/gainers-losers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market-cap/gainers-losers/gainers-losers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object])
], GainersLosersComponent);

var _a;
//# sourceMappingURL=gainers-losers.component.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/gainers/gainers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/gainers/gainers.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>Gainers</h3>\n    <a class=\"btn\" (click)=\"onExchangesClick()\">Exchanges</a>\n    <section>\n\n        <h4>Gainers 24h top 30 </h4> <small> (With market cap more then\n        <input type=\"number\" class=\"w60\" step=\"2000\"   [(ngModel)] = \"capLimit\"   />\n        <span (click)=\"onFilterClick()\" class=\"btn fa fa-filter\"> &nbsp;&nbsp;</span>\n        )</small>\n\n        <div>\n            <table (click)=\"onTableclick($event)\">\n                <tbody>\n                <tr><td  colspan=\"8\" class=\"text-center\"> MarketCap</td></tr>\n                <tr>\n\n                    <th class=\"btn\" (click)=\"onClickHeader('symbol')\">Symbol</th>\n                    <th>Graph</th>\n                    <th  class=\"btn\" (click)=\"onClickHeader('rank')\">Rank</th>\n\n                    <th  class=\"btn\" (click)=\"onClickHeader('percent_change_1h')\">1h%</th>\n                    <th  class=\"btn\" (click)=\"onClickHeader('percent_change_24h')\" >24h%</th>\n                    <th  class=\"btn\" (click)=\"onClickHeader('percent_change_7d')\">7d%</th>\n\n                    <th  class=\"btn\" (click)=\"onClickHeader('price_usd')\">$US</th>\n                    <th>Name</th>\n                    <th  class=\"btn\" (click)=\"onClickHeader('market_cap_usd')\">$ Cap</th>\n                    <th>Network</th>\n                </tr>\n\n                <tr *ngFor=\"let item of consAvailable\">\n\n                    <td [attr.data]=\"item.symbol\" title=\"{{item.name}}\" class=\"btn w100\" ><img class=\"w1\" src=\"assets/icons/{{item.id}}.png\"/> {{item.symbol}}</td>\n                    <td><a class=\"fa fa-line-chart\" target=\"_blank\" href=\"https://coinmarketcap.com/currencies/{{item.id}}/\"></a></td>\n                    <td>{{item.rank}}</td>\n                    <td class=\"w50\" [ngClass]=\"item.percent_change_1h>0?'dgreen':'dred'\" >{{item.percent_change_1h}}</td>\n                    <td class=\"w50\" [ngClass]=\"item.percent_change_24h>0?'dgreen':'dred'\" >{{item.percent_change_24h}}</td>\n                    <td class=\"w50\" [ngClass]=\"item.percent_change_7d>0?'dgreen':'dred'\" >{{item.percent_change_7d}}</td>\n\n                    <td class=\"small \" title=\"{{item.price_usd}}\">{{item.price_usd}}</td>\n                    <td class=\"small w80 ell\" title=\"{{item.name}}\">{{item.name}}</td>\n                    <td class=\"small\" title=\"{{item.market_cap_usd}}\">{{item.market_cap_usd}}</td>\n                    <td>{{item.network}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n       <!-- <app-sortable-table [consAvailable]=\"gainersAr\" (selectedSymbol)=\"onSymbolSelected($event)\"></app-sortable-table>-->\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/gainers/gainers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GainersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GainersComponent = (function () {
    function GainersComponent(router, marketCap) {
        this.router = router;
        this.marketCap = marketCap;
        this.asc_desc = 'asc';
        this.capLimit = 10000;
        this.sortBy = 'percent_change_24h';
    }
    GainersComponent.prototype.onExchangesClick = function () {
        var symbols = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](this.consAvailable, 'symbol');
        this.router.navigate(['/coins-exchanges', symbols.toString()]);
    };
    GainersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketCap.marketsAr$.subscribe(function (res) {
            if (!res)
                return;
            _this.marketCap.getCoins().subscribe(function (coins) {
                if (!coins)
                    return;
                console.log(res);
                console.log(coins);
                var indexed = __WEBPACK_IMPORTED_MODULE_2_lodash__["keyBy"](coins, 'id');
                res.forEach(function (item) {
                    var coin = indexed[item.id];
                    if (!coin) {
                        // console.log(' no coin ' + item.id);
                    }
                    else {
                        // console.log(' coin ' + item.id);
                        item.network = coin.base;
                    }
                });
            });
            _this.data = res;
            _this.sortData();
        });
    };
    GainersComponent.prototype.onSymbolSelected = function (symbol) {
        console.log(symbol);
    };
    GainersComponent.prototype.onFilterClick = function () {
        this.sortData();
    };
    GainersComponent.prototype.sortData = function () {
        if (!Array.isArray(this.data))
            return;
        var cap = this.data.filter(function (item) { return item.market_cap_usd > this.limit; }, { limit: this.capLimit });
        var sorted = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](cap, this.sortBy, 'desc');
        // console.log(sorted);
        this.consAvailable = __WEBPACK_IMPORTED_MODULE_2_lodash__["take"](sorted, 30);
    };
    GainersComponent.prototype.onTableclick = function (event) {
        // console.log(event.srcElement);
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.data;
        if (idAttr && idAttr.nodeValue)
            console.log(idAttr.nodeValue);
        // var value = idAttr.id;
    };
    GainersComponent.prototype.onClickHeader = function (criteria) {
        console.log(criteria);
        if (this.sortBy !== criteria) {
            // if(this.asc_desc === 'asc') this.asc_desc ='desc';
            // else  this.asc_desc='asc';
            //}else this.asc_desc = 'asc';
            // console.log(this.asc_desc);
            this.sortBy = criteria;
            this.sortData();
        }
    };
    return GainersComponent;
}());
GainersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gainers',
        template: __webpack_require__("../../../../../src/app/market-cap/gainers/gainers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market-cap/gainers/gainers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
], GainersComponent);

var _a, _b;
//# sourceMappingURL=gainers.component.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/gl-all-exchanges/gl-all-exchanges.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/gl-all-exchanges/gl-all-exchanges.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n        <table>\n            <tbody>\n            <tr *ngFor=\"let coin of symbolMarkets\">\n                <td>{{coin.symbol}}</td>\n                <td><small>{{coin.markets.toString()}}</small></td>\n\n            </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/gl-all-exchanges/gl-all-exchanges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlAllExchangesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils__ = __webpack_require__("../../../../../src/app/shared/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GlAllExchangesComponent = (function () {
    function GlAllExchangesComponent(service) {
        this.service = service;
        this.capLimit = 10000;
    }
    GlAllExchangesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.marketsAr$.subscribe(function (res) {
            //  console.log(res);
            if (!res)
                return;
            var out = [];
            var limit = _this.capLimit;
            out = res.filter(function (item) {
                return item.market_cap_usd > limit;
            });
            // let gainers = _.sortBy(out,'percent_change_24h','desc');
            var sorted = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](out, 'percent_change_24h');
            // console.log(out);
            _this.gainersAr = __WEBPACK_IMPORTED_MODULE_2_lodash__["takeRight"](sorted, 30);
            _this.losersAr = __WEBPACK_IMPORTED_MODULE_2_lodash__["take"](sorted, 30);
            var gainers = _this.gainersAr;
            _this.service.getCoinsExchanges().subscribe(function (res) {
                var symbolMarkets = [];
                gainers.forEach(function (item) {
                    var symbol = item.symbol;
                    symbolMarkets.push({
                        symbol: symbol,
                        markets: __WEBPACK_IMPORTED_MODULE_3__shared_utils__["a" /* Utils */].filterMarkets(symbol, res)
                    });
                });
                _this.symbolMarkets = symbolMarkets;
            });
        });
    };
    return GlAllExchangesComponent;
}());
GlAllExchangesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gl-all-exchanges',
        template: __webpack_require__("../../../../../src/app/market-cap/gl-all-exchanges/gl-all-exchanges.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market-cap/gl-all-exchanges/gl-all-exchanges.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object])
], GlAllExchangesComponent);

var _a;
//# sourceMappingURL=gl-all-exchanges.component.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/gl-known-exchanges/gl-known-exchanges.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/gl-known-exchanges/gl-known-exchanges.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  gl-known-exchanges works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/gl-known-exchanges/gl-known-exchanges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlKnownExchangesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlKnownExchangesComponent = (function () {
    function GlKnownExchangesComponent() {
    }
    GlKnownExchangesComponent.prototype.ngOnInit = function () {
    };
    return GlKnownExchangesComponent;
}());
GlKnownExchangesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gl-known-exchanges',
        template: __webpack_require__("../../../../../src/app/market-cap/gl-known-exchanges/gl-known-exchanges.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market-cap/gl-known-exchanges/gl-known-exchanges.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GlKnownExchangesComponent);

//# sourceMappingURL=gl-known-exchanges.component.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/market-cap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketCapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_coins_table_all_coins_table_component__ = __webpack_require__("../../../../../src/app/market-cap/all-coins-table/all-coins-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selected_coins_selected_coins_component__ = __webpack_require__("../../../../../src/app/market-cap/selected-coins/selected-coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gainers_losers_gainers_losers_component__ = __webpack_require__("../../../../../src/app/market-cap/gainers-losers/gainers-losers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__exchanges_list_exchanges_list_component__ = __webpack_require__("../../../../../src/app/market-cap/exchanges-list/exchanges-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__coins_list_coins_list_component__ = __webpack_require__("../../../../../src/app/market-cap/coins-list/coins-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gl_all_exchanges_gl_all_exchanges_component__ = __webpack_require__("../../../../../src/app/market-cap/gl-all-exchanges/gl-all-exchanges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gl_known_exchanges_gl_known_exchanges_component__ = __webpack_require__("../../../../../src/app/market-cap/gl-known-exchanges/gl-known-exchanges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gainers_gainers_component__ = __webpack_require__("../../../../../src/app/market-cap/gainers/gainers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__coins_exchanges_coins_exchanges_component__ = __webpack_require__("../../../../../src/app/market-cap/coins-exchanges/coins-exchanges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var MarketCapModule = (function () {
    function MarketCapModule() {
    }
    return MarketCapModule;
}());
MarketCapModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__["a" /* MaterialAppModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["c" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__selected_coins_selected_coins_component__["a" /* SelectedCoinsComponent */],
            __WEBPACK_IMPORTED_MODULE_2__all_coins_table_all_coins_table_component__["a" /* AllCoinsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_7__gainers_losers_gainers_losers_component__["a" /* GainersLosersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__exchanges_list_exchanges_list_component__["a" /* ExchangesListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__coins_list_coins_list_component__["a" /* CoinsListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__gl_all_exchanges_gl_all_exchanges_component__["a" /* GlAllExchangesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__gl_known_exchanges_gl_known_exchanges_component__["a" /* GlKnownExchangesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__gainers_gainers_component__["a" /* GainersComponent */],
            __WEBPACK_IMPORTED_MODULE_13__coins_exchanges_coins_exchanges_component__["a" /* CoinsExchangesComponent */]
        ]
    })
], MarketCapModule);

//# sourceMappingURL=market-cap.module.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/market-cap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketCapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_app_storage_service__ = __webpack_require__("../../../../../src/app/shared/app-storage.service.ts");
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
    function MarketCapService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.timestamp = 0;
        this.coinsBaseSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.coinsBase$ = this.coinsBaseSub.asObservable();
        this.marketsArSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.marketsAr$ = this.marketsArSub.asObservable();
        this.marketsSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.markets$ = this.marketsSub.asObservable();
        this.timestampSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.timestamp$ = this.timestampSub.asObservable();
        //this.totalCoinsSub = new Subject();
        //this.totalCoins$ = this.totalCoinsSub.asObservable();
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
    MarketCapService.prototype.getCoins = function () {
        var _this = this;
        if (!this.coinsBase) {
            var url = '/api/marketcap/all-coins';
            this.http.get(url).map(function (res) {
                var data = res.json();
                return __WEBPACK_IMPORTED_MODULE_4_lodash__["keyBy"](data.payload, 'id');
            }).subscribe(function (result) {
                _this.coinsBase = result;
                _this.coinsBaseSub.next(result);
            });
        }
        return this.coinsBase$;
    };
    MarketCapService.prototype.getSelected = function () {
        return this.storage.filterSelected(this.marketsAr);
    };
    MarketCapService.prototype.setData = function (data) {
        var ar = data.payload;
        this.marketsAr = ar;
        this.markets = __WEBPACK_IMPORTED_MODULE_4_lodash__["keyBy"](ar, 'symbol');
        this.marketsSub.next(this.markets);
        this.marketsArSub.next(this.marketsAr);
        this.timestamp = data.timestamp;
        this.timestampSub.next(this.timestamp);
        console.log(' marketcap total: ' + this.marketsAr.length);
        this.counter++;
        this.totalCoinsSub.next(this.marketsAr.length);
    };
    MarketCapService.prototype.getCoinsExchanges = function () {
        var url = '/api/marketcap/all-exchanges';
        return this.http.get(url).map(function (res) {
            var out = [];
            var r = res.json().data;
            var exchanges = {};
            var items = [];
            var topic = '';
            r.forEach(function (item) {
                if (item.length == 7) {
                    var exch = item[2].split('__');
                    var pairAr = item[3].split('__');
                    items.push({
                        coin: item[0],
                        name: exch[0],
                        urlMC: exch[1],
                        pair: pairAr[0].replace('/', '_'),
                        pairUrl: pairAr[1]
                    });
                }
                /*  // console.log(item.length);
                   if(item.length == 2) topic = item[0].substr(1);
                   else{
                     if(item.length == 7){
                       let coin = {
                         status:item[0],
                         name:item[2].split('__')[0],
                         symbol:item[3],
           
                         cap:item[4].split('__')[0],
                         price:item[5].split('__')[0],
                         percent:item[6]
                       }
           
                       out.push(coin)
                    }else console.log('unknown item '+item.toString())
                   }
           */
            });
            //  console.log(r);
            //console.log(items);
            return items;
        });
    };
    MarketCapService.prototype.loadData = function (now) {
        var _this = this;
        this.getCoins().subscribe(function (coins) {
            if (!coins)
                return;
            var url = '/api/marketcap/ticker';
            _this.http.get(url).map(function (res) {
                var data = res.json();
                data.payload = data.payload.map(mapExchangeData, { coins: coins });
                return data;
            }).subscribe(function (result) {
                _this.setData(result);
            });
        });
        // return this.allCoins$;
    };
    MarketCapService.prototype.getCoinMarket = function (symbol) {
        return this.marketsAr.find(function (item) {
            return item.symbol == symbol;
        });
    };
    MarketCapService.prototype.stop = function () {
        clearInterval(this.interval);
    };
    return MarketCapService;
}());
MarketCapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_app_storage_service__["a" /* AppStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_app_storage_service__["a" /* AppStorageService */]) === "function" && _b || Object])
], MarketCapService);

function mapExchangeData(obj) {
    var data = new __WEBPACK_IMPORTED_MODULE_5__models_app_models__["a" /* VOMarketCap */]();
    for (var str in obj)
        data[str] = isNaN(obj[str]) ? obj[str] : +obj[str];
    if (this.coins[data.id])
        data.network = this.coins[data.id].base;
    data.volume_usd_24h = +obj['24h_volume_usd'];
    delete data['24h_volume_usd'];
    return data;
}
var _a, _b;
//# sourceMappingURL=market-cap.service.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/selected-coins/selected-coins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/selected-coins/selected-coins.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"btns-row m60\">\n        <a  routerLink=\"/market-cap/all-coins\" routerLinkActive=\"active\" >All MarketCap</a>\n        <a routerLink=\"/market-cap/gainers-losers\" routerLinkActive=\"active\" > Gainers Losers </a>\n        <a routerLink=\"/market-cap/exchanges-list\" routerLinkActive=\"active\" > List Exchanges </a>\n        <a routerLink=\"/market-cap/coins-list\" routerLinkActive=\"active\" > Coins List </a>\n    </nav>\n\n    <h4>Selected coins MarketCap </h4><small>{{selectedCoins.length}}</small>\n\n    <hr/>\n    <div>\n        <app-sortable-table [consAvailable]=\"selectedCoins\"></app-sortable-table>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/selected-coins/selected-coins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedCoinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectedCoinsComponent = SelectedCoinsComponent_1 = (function () {
    //sortCreteria:string = 'rank';
    // asc_desc='asc';
    function SelectedCoinsComponent(allCoinsService) {
        this.allCoinsService = allCoinsService;
        //@Input() modelCoins:VOExchangeData[];
        this.selectedCoins = [];
    }
    SelectedCoinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCoinsService.marketsAr$.subscribe(function (res) {
            // console.log(res);
            if (res)
                _this.selectedCoins = SelectedCoinsComponent_1.filterSelected(res, _this.getSelected());
        });
    };
    SelectedCoinsComponent.filterSelected = function (ar, selected) {
        return ar.filter(function (item) {
            return selected.indexOf(item.symbol) !== -1;
        });
    };
    /*onClickHeader(creteria:string):void{
      console.log(creteria);
      if(this.sortCreteria === creteria){
        if(this.asc_desc === 'asc') this.asc_desc ='desc';
        else  this.asc_desc='asc';
      }else this.asc_desc = 'asc';
      console.log(this.asc_desc);
  
      this.selectedCoins = _.orderBy(this.selectedCoins, creteria, this.asc_desc);
      this.sortCreteria = creteria;
  
    }*/
    SelectedCoinsComponent.prototype.getSelected = function () {
        if (!this.selected) {
            this.selected = [];
            var str = localStorage.getItem('market-cap-selected');
            try {
                if (str)
                    this.selected = JSON.parse(str);
            }
            catch (e) {
                console.error(e);
            }
        }
        return this.selected;
    };
    SelectedCoinsComponent.prototype.saveSelected = function () {
        localStorage.setItem('market-cap-selected', JSON.stringify(this.selected));
    };
    return SelectedCoinsComponent;
}());
SelectedCoinsComponent = SelectedCoinsComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-selected-coins',
        template: __webpack_require__("../../../../../src/app/market-cap/selected-coins/selected-coins.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market-cap/selected-coins/selected-coins.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object])
], SelectedCoinsComponent);

var SelectedCoinsComponent_1, _a;
//# sourceMappingURL=selected-coins.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/material-app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialAppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdChipsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdChipsModule */]
        ]
    })
], MaterialAppModule);

//# sourceMappingURL=material-app.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/app-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VOMarketCap; });
/* unused harmony export UTXO */
/* unused harmony export CoinsAvailable */
/* unused harmony export VOBalance */
/* unused harmony export Analitycs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WalletModel; });
/*
 * Created by Vlad on 7/8/2017.
 */
var VOMarketCap = (function () {
    function VOMarketCap() {
    }
    return VOMarketCap;
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

/***/ "../../../../../src/app/search-coin/search-coin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#SearchAllCoin{\r\n    height: 600px;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n#SearchResults{\r\n    height: 200px;\r\n    overflow: auto;\r\n}\r\n\r\nmd-input-container {\r\n    border: #ff4081 solid;\r\n    border-width: 0 0 1px 1px;\r\n}\r\n\r\nmd-progress-spinner{\r\n    width: 30px;\r\n    height: 30px;\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-coin/search-coin.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n        <h3>Search</h3>\n\n            <small>(\n                <span>ShapeShift,</span>\n                <span>Changely,</span>\n                <span>YoBit,</span>\n                <span>Poloniex,</span>\n                <span>Bittrex,</span>\n                <span>BitFinex,</span>\n                <span>CoinBase,</span>\n                <span>CoinExchange,</span>\n                <span>Hit BTC,</span>\n                <span>Kraken</span>\n                )\n            </small>\n\n\n\n        <div id=\"SearchResults\">\n\n        <table>\n            <tbody>\n            <tr *ngFor=\"let result of searchResults\">\n                <td>{{result.exchange}}</td>\n                <td>{{result.symbol}}</td>\n            </tr>\n            </tbody>\n        </table>\n        </div>\n        <div>\n\n            <md-input-container>\n                <input [(ngModel)]=\"currentSearch\"  mdInput  placeholder=\"Search\" name=\"search\" >\n            </md-input-container>\n            <md-progress-spinner  mode=\"determinate\" [value]=\"progress\" color=\"accent\" ></md-progress-spinner>\n            <button md-raised-button color=\"accent\" [disabled]=\"progress!==0\" (click)=\"onSubmit()\">Submit</button>\n        </div>\n    </section>\n    <br/>\n    <section id=\"SearchAllCoin\">\n        <app-sortable-table [consAvailable]=\"marketCapAr\" (selectedSymbol)=\"onSelectSymbol($event)\"></app-sortable-table>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search-coin/search-coin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCoinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchanges_search_coin_service__ = __webpack_require__("../../../../../src/app/exchanges/search-coin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchCoinComponent = (function () {
    function SearchCoinComponent(marketCap, allExchanges) {
        this.marketCap = marketCap;
        this.allExchanges = allExchanges;
        this.progress = 0;
    }
    SearchCoinComponent.prototype.onSelectSymbol = function (value) {
        this.currentSearch = value;
        console.log(value);
    };
    SearchCoinComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.currentSearch)
            return;
        this.currentSearch = this.currentSearch.toUpperCase();
        if (this.progressTimer)
            clearTimeout(this.progressTimer);
        this.progressTimer = setTimeout(function () { _this.progress = 0; }, 20000);
        this.allExchanges.sechCoin(this.currentSearch).subscribe(function (res) {
            //console.log(res);
            _this.searchResults = res;
            clearTimeout(_this.progressTimer);
        });
    };
    SearchCoinComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    SearchCoinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketCap.marketsAr$.subscribe(function (res) {
            _this.marketCapAr = res;
        });
        this.allExchanges.progress$.subscribe(function (res) { return _this.progress = res; });
    };
    return SearchCoinComponent;
}());
SearchCoinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-coin',
        template: __webpack_require__("../../../../../src/app/search-coin/search-coin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-coin/search-coin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__exchanges_search_coin_service__["a" /* SearchCoinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__exchanges_search_coin_service__["a" /* SearchCoinService */]) === "function" && _b || Object])
], SearchCoinComponent);

var _a, _b;
//# sourceMappingURL=search-coin.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GUEST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GUEST = {
    id: undefined,
    email: '',
    nikname: '',
    password: '',
    token: ''
};
var AuthHttpService = (function () {
    function AuthHttpService(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.user = null;
        this.userSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](GUEST);
        this.user$ = this.userSub.asObservable();
        this.isLogedIn$ = this.user$.map(function (user) { return !!user; });
        setTimeout(function () { return _this.autoLogin(); }, 2000);
    }
    AuthHttpService.prototype.login = function (email, password) {
        // let sub: Subject<VOUser> = new Subject();
        var url = '/api/login/login';
        return this.http.post(url, { email: email, password: password }).map(function (res) { return res.json(); });
        //return sub.asObservable();
    };
    AuthHttpService.prototype.register = function (email, password) {
        var _this = this;
        var url = 'api/login/register';
        return this.http.post(url, { email: email, password: password })
            .shareReplay().map(function (res) { return res.json(); })
            .do(function (user) { return _this.userSub.next(user); });
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
        //this.isLogedInSub.next((this.user !== null));
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
        this.userSub.next(GUEST);
    };
    AuthHttpService.prototype.saveUser = function () {
        localStorage.setItem('authentication', btoa(JSON.stringify(this.user)));
    };
    AuthHttpService.prototype.getHeaders = function () {
        if (!this.headers) {
            this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AuthHttpService);

var _a, _b, _c;
//# sourceMappingURL=auth-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/shape-shift/shape-shift.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeShiftModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ss_coins_available_ss_coins_available_component__ = __webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ss_main_ss_main_component__ = __webpack_require__("../../../../../src/app/shape-shift/ss-main/ss-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shape_shift_service__ = __webpack_require__("../../../../../src/app/shape-shift/shape-shift.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__material_material_app_module__["a" /* MaterialAppModule */]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShapeShiftService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
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
        var url = '/api/exchange/shapeshift/getcoins';
        this.http.get(url).map(function (res) {
            return res.json();
        }).subscribe(function (res) {
            _this.coinsIndexed = res;
            _this.coinsAvailable = __WEBPACK_IMPORTED_MODULE_3_lodash__["values"](res).map(function (item) {
                item.market = {};
                return item;
            });
            _this.coinsAvailableSub.next(_this.coinsAvailable);
            // console.log(res);
        });
        return this.coinsAvailable$;
    };
    ShapeShiftService.prototype._searchCoin = function (symbol, ar) {
        return ar.filter(function (item) {
            return item.symbol.indexOf(symbol) !== -1;
        }).map(function (item) {
            return {
                exchange: 'ShapeShift',
                symbol: item.symbol
            };
        });
    };
    ShapeShiftService.prototype.searchCoin = function (symbol) {
        var _this = this;
        var sub = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        if (this.coinsAvailable) {
            var ar_1 = this.coinsAvailable;
            setTimeout(function () {
                sub.next(_this._searchCoin(symbol, ar_1));
            }, 100);
        }
        else
            this.getCoins().subscribe(function (res) { return _this._searchCoin(symbol, res); });
        return sub.asObservable();
    };
    ShapeShiftService.prototype.getExchangeRate = function (from_to) {
        var url = '/api/exchange/shapeshift/marketinfo/' + from_to;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return ShapeShiftService;
}());
ShapeShiftService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
], ShapeShiftService);

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

module.exports = "<div>\n\n\n        <H3>ShapeSift</H3> <small *ngIf=\"coinsAvailable\">Total: {{coinsAvailable.length}}</small>\n\n        <section>\n            <table>\n                <tbody>\n                <tr>\n                    <td>\n                        From:\n                    </td>\n                    <td>\n                        <md-select  [(ngModel)]=\"coinFrom.symbol\" #select1 placeholder=\"Select Coin\" (change)=\"coinSelectChanged1($event)\">\n                            <md-option *ngFor=\"let coin of coinsSorted\" [value]=\"coin.symbol\">\n                                {{ coin.symbol}} <small> ${{coin.price_usd?coin.price_usd.toFixed(2):''}}</small>\n                            </md-option>\n                        </md-select>\n\n                    </td>\n                    <td>\n                        <md-input-container>\n                            <input [(ngModel)]=\"coinFrom.US\"  mdInput  placeholder=\"amount\" name=\"dollarsAmount\" >\n                        </md-input-container>\n\n                    </td>\n\n                    <td>\n                        <small>{{coinFrom.amount}}</small>\n                    </td>\n                    <td>\n                        ${{coinFrom.revertUS}}\n\n                    </td>\n                    <td>\n                        {{coinFrom.revertAmount}}\n                    </td>\n\n                </tr>\n                <tr>\n                    <td>\n                        To:\n                    </td>\n                    <td>\n                        <md-select [(ngModel)]=\"coinTo.symbol\" #select2 placeholder=\"Select Coin\" (change)=\"coinSelectChanged2($event)\">\n                            <md-option *ngFor=\"let coin of coinsSorted\" [value]=\"coin.symbol\">\n                                {{ coin.symbol}}<small> ${{coin.price_usd?coin.price_usd.toFixed(2):''}}</small>\n                            </md-option>\n                        </md-select>\n\n                    </td>\n                    <td>\n                        ${{coinTo.US}}\n\n                    </td>\n\n                    <td>\n                        {{coinTo.amount}}\n                    </td>\n                    <td>\n\n                        ${{coinTo.revertUS}}\n                    </td>\n                    <td>\n                        {{coinTo.revertAmount}}\n                    </td>\n                </tr>\n\n                </tbody>\n\n                <button md-raised-button color=\"accent\" (click)=\"onSubmit()\">Submit</button>\n            </table>\n            <br/>\n\n\n        </section>\n    <section>\n        <app-sortable-table [consAvailable]=\"coinsAvailable\"></app-sortable-table>\n    </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SSCoinsAvailableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shape_shift_service__ = __webpack_require__("../../../../../src/app/shape-shift/shape-shift.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
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
        this.coinFrom = {
            symbol: '',
            US: 1000,
            amount: 0,
            price: 0,
            revertUS: 0,
            revertAmount: 0
        };
        this.coinTo = {
            symbol: '',
            US: 0,
            amount: 0,
            price: 0,
            revertUS: 0,
            revertAmount: 0
        };
        this.exchange = {
            pair: ''
        };
    }
    SSCoinsAvailableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shapeShiftService.coinsAvailable$.subscribe(function (res) {
            //  console.log(res);
            _this.coinsAvailable = res;
            _this.coinsSorted = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](res, 'symbol');
            _this.merge();
        });
        this.marketCap.marketsAr$.subscribe(function (markets) {
            // console.log(markets)
            _this.markets = _this.marketCap.markets;
            _this.merge();
        });
    };
    SSCoinsAvailableComponent.prototype.calculateRequest = function () {
        var symbol = this.coinFrom.symbol;
        var us = +this.coinFrom.US;
        console.log('calculateRequest ' + symbol + '  ' + us);
        if (!symbol || !us)
            return;
        var market = this.markets[symbol];
        console.log(market);
        if (!market)
            return;
        var price = market.price_usd;
        this.coinFrom.amount = us / price;
    };
    SSCoinsAvailableComponent.prototype.coinSelectChanged1 = function (evt) {
        this.calculateRequest();
    };
    SSCoinsAvailableComponent.prototype.coinSelectChanged2 = function (evt) {
        this.calculateRequest();
    };
    SSCoinsAvailableComponent.prototype.onSubmit = function () {
        var _this = this;
        //console.log(this.selectedValue1, this.selectedValue2, this.selectedValue3);
        var pair = this.coinFrom.symbol.toLowerCase() + '_' + this.coinTo.symbol.toLowerCase();
        this.exchange.pair = pair;
        var amount = this.coinFrom.amount;
        this.shapeShiftService.getExchangeRate(pair).subscribe(function (res) {
            console.log(res);
            var total = (amount - res.minerFee) * res.rate;
            _this.coinTo.amount = total;
            var symbol = _this.coinTo.symbol;
            var market = _this.markets[symbol];
            if (market) {
                _this.coinTo.US = +(total * market.price_usd).toFixed(2);
                _this.getRevert();
            }
        });
    };
    SSCoinsAvailableComponent.prototype.getRevert = function () {
        var _this = this;
        this.coinTo.revertUS = this.coinFrom.US;
        var pair = this.coinTo.symbol.toLowerCase() + '_' + this.coinFrom.symbol.toLowerCase();
        var symbol = this.coinTo.symbol;
        var market = this.markets[symbol];
        if (!market) {
            console.error(' market ' + market);
        }
        var price = market.price_usd;
        var amount = this.coinTo.revertUS / price;
        this.coinTo.revertAmount = amount;
        this.shapeShiftService.getExchangeRate(pair).subscribe(function (res) {
            console.log(res);
            var total = (amount - res.minerFee) * res.rate;
            var symbol = _this.coinFrom.symbol;
            console.log(total);
            var market = _this.markets[symbol];
            if (market) {
                _this.coinFrom.revertAmount = total;
                _this.coinFrom.revertUS = +(total * market.price_usd).toFixed(2);
            }
        });
    };
    SSCoinsAvailableComponent.prototype.merge = function () {
        if (this.markets && this.coinsAvailable) {
            var all_1 = this.markets;
            // console.log(all);
            var ar = this.coinsAvailable;
            ar.forEach(function (item) {
                var market = all_1[item.symbol];
                if (market) {
                    item.percent_change_1h = market.percent_change_1h;
                    item.percent_change_7d = market.percent_change_7d;
                    item.percent_change_24h = market.percent_change_24h;
                    item.name = market.name;
                    item.rank = market.rank;
                    item.price_usd = market.price_usd;
                    item.market_cap_usd = market.market_cap_usd;
                    item.market = market;
                }
                else
                    console.warn(' no coin ' + item.symbol);
            });
            this.coinsAvailable = __WEBPACK_IMPORTED_MODULE_3_lodash__["orderBy"](ar, 'symbol');
        }
    };
    return SSCoinsAvailableComponent;
}());
SSCoinsAvailableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ss-coins-available',
        template: __webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shape_shift_service__["a" /* ShapeShiftService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shape_shift_service__["a" /* ShapeShiftService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ss-main',
        template: __webpack_require__("../../../../../src/app/shape-shift/ss-main/ss-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shape-shift/ss-main/ss-main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SsMainComponent);

//# sourceMappingURL=ss-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/app-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppStorageService = (function () {
    function AppStorageService() {
    }
    AppStorageService.prototype.filterSelected = function (coins) {
        var selected = this.getMCSelected();
        return coins.filter(function (item) {
            return selected.indexOf(item.symbol) !== -1;
        });
    };
    AppStorageService.prototype.mapSelected = function (coins) {
        var selected = this.getMCSelected();
        coins.forEach(function (item) {
            item.selected = selected.indexOf(item.symbol) !== -1;
        });
    };
    AppStorageService.prototype.getMCSelected = function () {
        if (!this.selected) {
            this.selected = [];
            var str = localStorage.getItem('market-cap-selected');
            try {
                if (str)
                    this.selected = JSON.parse(str);
            }
            catch (e) {
                console.error(e);
            }
        }
        return this.selected;
    };
    AppStorageService.prototype.addMCSelected = function (symbol) {
        var ar = this.getMCSelected();
        if (ar.indexOf(symbol) == -1)
            ar.push(symbol);
        this.saveSelected();
    };
    AppStorageService.prototype.deleteMCSelected = function (symbol) {
        var ar = this.getMCSelected();
        for (var i = ar.length - 1; i >= 0; i--)
            if (ar[i] === symbol)
                ar.splice(i, 1);
        this.saveSelected();
    };
    AppStorageService.prototype.saveSelected = function () {
        localStorage.setItem('market-cap-selected', JSON.stringify(this.selected));
    };
    return AppStorageService;
}());
AppStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AppStorageService);

//# sourceMappingURL=app-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/cross-table/cross-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/cross-table/cross-table.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"scrolable\">\n    <table>\n\n        <tbody>\n        <tr>\n            <td>\n\n            </td>\n            <td *ngFor=\"let coin1 of tableHeaders\">\n                {{coin1}}\n            </td>\n        </tr>\n        <tr *ngFor=\"let coin2 of tableBody;  let i = index\">\n            <td>\n                {{coin2}}\n            </td>\n            <td *ngFor=\"let coin3 of tableHeaders; let j = index\">\n                {{(i==j)?'x':''}}\n\n            </td>\n        </tr>\n        </tbody>\n\n    </table>\n</section>"

/***/ }),

/***/ "../../../../../src/app/shared/cross-table/cross-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrossTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CrossTableComponent = (function () {
    function CrossTableComponent() {
    }
    CrossTableComponent.prototype.ngOnInit = function () {
    };
    CrossTableComponent.prototype.createSummaryTable = function () {
        var ar = this.coinsAvailable;
        var tablebody = [];
        var headers = [];
        tablebody[0] = [];
        var i = -1;
        ar.forEach(function (item) {
            headers.push(item.symbol);
            tablebody[++i] = [];
            tablebody[i][0] = item.symbol;
            //tablebody.push(item.symbol);
        });
        this.tableHeaders = headers;
        this.tableBody = tablebody;
    };
    return CrossTableComponent;
}());
CrossTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cross-table',
        template: __webpack_require__("../../../../../src/app/shared/cross-table/cross-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/cross-table/cross-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CrossTableComponent);

//# sourceMappingURL=cross-table.component.js.map

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogSimpleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dialog-simple',
        template: __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], DialogSimpleComponent);

//# sourceMappingURL=dialog-simple.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/generate-address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateAddressFromPrivateKey;
/* unused harmony export hexTransaction */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib__ = __webpack_require__("../../../../bitcoinjs-lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_wallet_core_networks_definitions__ = __webpack_require__("../../../../../src/app/wallets/wallet-core/networks-definitions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buffer__ = __webpack_require__("../../../../node-libs-browser/node_modules/buffer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_buffer__);


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
            return __WEBPACK_IMPORTED_MODULE_0_bitcoinjs_lib__["ECPair"].fromWIF(privateKey, Object(__WEBPACK_IMPORTED_MODULE_1__wallets_wallet_core_networks_definitions__["a" /* getNetwork */])(network).mainNet).getAddress();
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sortable_table_sortable_table_component__ = __webpack_require__("../../../../../src/app/shared/sortable-table/sortable-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cross_table_cross_table_component__ = __webpack_require__("../../../../../src/app/shared/cross-table/cross-table.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__sortable_table_sortable_table_component__["a" /* SortableTableComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__material_material_app_module__["a" /* MaterialAppModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */],
            __WEBPACK_IMPORTED_MODULE_4__sortable_table_sortable_table_component__["a" /* SortableTableComponent */],
            __WEBPACK_IMPORTED_MODULE_5__cross_table_cross_table_component__["a" /* CrossTableComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sortable-table/sortable-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sortable-table/sortable-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n        <table (click)=\"onTableclick($event)\">\n            <tbody>\n            <tr><td  colspan=\"8\" class=\"text-center\"> MarketCap</td></tr>\n            <tr>\n                <th class=\"btn\" (click)=\"onClickHeader('symbol')\">Symbol</th>\n                <th  class=\"btn\" (click)=\"onClickHeader('rank')\">Rank</th>\n\n                <th  class=\"btn\" (click)=\"onClickHeader('percent_change_1h')\">1h%</th>\n                <th  class=\"btn\" (click)=\"onClickHeader('percent_change_24h')\" >24h%</th>\n                <th  class=\"btn\" (click)=\"onClickHeader('percent_change_7d')\">7 days%</th>\n\n                <th  class=\"btn\" (click)=\"onClickHeader('price_usd')\">$US</th>\n                <th>Name</th>\n                <th  class=\"btn\" (click)=\"onClickHeader('market_cap_usd')\">$ Cap</th>\n            </tr>\n\n            <tr *ngFor=\"let item of consAvailable\">\n\n                <td [attr.data]=\"item.symbol\" title=\"{{item.name}}\" class=\"btn\">{{item.symbol}}</td>\n                <td>{{item.rank}}</td>\n\n                <td [ngClass]=\"item.percent_change_1h>0?'dgreen':'dred'\">{{item.percent_change_1h}}</td>\n                <td [ngClass]=\"item.percent_change_24h>0?'dgreen':'dred'\">{{item.percent_change_24h}}</td>\n                <td [ngClass]=\"item.percent_change_7d>0?'dgreen':'dred'\">{{item.percent_change_7d}}</td>\n\n                <td class=\"small \" title=\"{{item.price_usd}}\">{{item.price_usd}}</td>\n                <td class=\"small w80 ell\" title=\"{{item.name}}\">{{item.name}}</td>\n                <td class=\"small\" title=\"{{item.market_cap_usd}}\">{{item.market_cap_usd}}</td>\n            </tr>\n            </tbody>\n        </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/sortable-table/sortable-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SortableTableComponent = (function () {
    function SortableTableComponent() {
        // markets:{[symbol:string]:VOExchangeData};
        this.sortCriteria = 'rank';
        this.asc_desc = 'asc';
        this.selectedSymbol = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SortableTableComponent.prototype.ngOnInit = function () {
    };
    SortableTableComponent.prototype.sortData = function () {
        this.consAvailable = __WEBPACK_IMPORTED_MODULE_1_lodash__["orderBy"](this.consAvailable, this.sortCriteria, this.asc_desc);
    };
    SortableTableComponent.prototype.onTableclick = function (event) {
        // console.log(event.srcElement);
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.data;
        //  console.log(idAttr.nodeValue);
        if (idAttr && idAttr.nodeValue)
            this.selectedSymbol.emit(String(idAttr.nodeValue));
        // var value = idAttr.id;
    };
    SortableTableComponent.prototype.onClickHeader = function (criteria) {
        //console.log(criteria);
        if (this.sortCriteria === criteria) {
            if (this.asc_desc === 'asc')
                this.asc_desc = 'desc';
            else
                this.asc_desc = 'asc';
        }
        else
            this.asc_desc = 'asc';
        // console.log(this.asc_desc);
        this.sortCriteria = criteria;
        this.sortData();
    };
    return SortableTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SortableTableComponent.prototype, "consAvailable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], SortableTableComponent.prototype, "selectedSymbol", void 0);
SortableTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sortable-table',
        template: __webpack_require__("../../../../../src/app/shared/sortable-table/sortable-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/sortable-table/sortable-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SortableTableComponent);

var _a;
//# sourceMappingURL=sortable-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export filterSelected */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
function filterSelected(ar, selected) {
    return ar.filter(function (item) {
        return this.sel.indexOf(item.symbol) !== -1;
    }, { sel: selected });
}
var Utils = (function () {
    function Utils() {
    }
    Utils.filterMarkets = function (symbol, coins) {
        var out = [];
        coins.forEach(function (item) {
            if (item.pair.indexOf(this.s) !== -1)
                this.out.push(item.name);
        }, { s: symbol, out: out });
        return out;
    };
    Utils.filterMarkets3 = function (symbol, coins) {
        var start = 0;
        return coins.reduce(function (s, item) {
            return s += +item.coin;
        }, start);
    };
    return Utils;
}());

//# sourceMappingURL=utils.js.map

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyWalletsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_edit_wallet_edit_component__ = __webpack_require__("../../../../../src/app/wallets/wallet-edit/wallet-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
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
    function MyWalletsComponent(walletsService, dialog) {
        this.walletsService = walletsService;
        this.dialog = dialog;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-wallets',
        template: __webpack_require__("../../../../../src/app/wallets/my-wallets/my-wallets.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wallets/my-wallets/my-wallets.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_all_service__["a" /* WalletsAllService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _b || Object])
], MyWalletsComponent);

var _a, _b;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaletsAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
        messagePrefix: '\x19DashCoin Signed Message:\n',
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
        messagePrefix: '\x19DeshCoin Signed Message:\n',
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
        messagePrefix: '\x18Liskcoin Signed Message:\n',
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
        messagePrefix: '\x18Liskcoin Signed Message:\n',
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

module.exports = "<div>\n    <md-input-container>\n        <input [(ngModel)]=\"wallet.label\"  mdInput placeholder=\"Wallet Name\" name=\"label\">\n    </md-input-container>\n    <md-input-container>\n        <input [(ngModel)]=\"wallet.privateKey\"  mdInput placeholder=\"Private Key\" name=\"privatekey\" (blur)=\"onPrivateKeyBlur($event)\">\n    </md-input-container>\n\n    <md-select  [(ngModel)]=\"selectedValue\" placeholder=\"Select Coin\" (change)=\"coinSelectChanged($event)\">\n        <md-option *ngFor=\"let coin of coinsAvalable\" [value]=\"coin.symbol\">\n            <small>({{coin.network}})</small> {{ coin.symbol}} {{ coin.displayName}}\n        </md-option>\n    </md-select>\n\n    <md-input-container>\n        <input [(ngModel)]=\"wallet.address\"  mdInput placeholder=\"Address\" disabled=true name=\"address\">\n    </md-input-container>\n    <button md-raised-button color=\"accent\" (click)=\"addWallet($event)\">Create</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wallets/wallet-create/wallet-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_generate_address__ = __webpack_require__("../../../../../src/app/shared/generate-address.ts");
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
    // privateKeyETH = 'f6ebe5512937e1eea5eda7b40a497276008954ff30d48f5ff5e7873aa694fa12';///0xc724cb4bb59210caaf1e71c9111f191aca5f1bf9
    // privateKeyBTC0='L5ZXWJbQfrYKFcf27R9g25DTY568Hwst5ceyz8bC2J9TqxayCzdP';//1Mfu3eqLrMAbhGGdPXiQivtRvL2s4TgybB
    // privateKeyBTC1='L2W7ENfabpwvuMRC1NJuSE8Jcw6mHp3gfXEJuWsywbLFtUgjcb8N'; //18sGMWwmTdihaPRYDY3mxY8USf4fYfSRsk
    // privateKeyETHNotHD='9d9b915a832d9cd957610a9c69e9d6379c2128ddbf19adfd90744ff8dc844791'; //0xbd4165aa0192ef0bb6547b9461a98468ee80765c
    // privateKeyLTCWitBalance='TAp38Z7iUrm4RUbrMyGXjP5FwfhwzMUNMJtoEo1qhVtVDema4KZq'; //4.26411486 LPckv2ot7AjbWUpf47rFVQB4FXT6BdfURM
    // privateKeyLTC0='T7eQ9wfF9tseKqQs3R39bpmZxFokCw6F6UDULTRVDPMVfbKXg5YZ' // LUhx6yurUdybU1Xxzm9qsU8NUyaYc7z8EQ
    function WalletCreateComponent(dialog, allWalletsService) {
        this.dialog = dialog;
        this.allWalletsService = allWalletsService;
        this.created = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](null);
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
            this.wallet.address = Object(__WEBPACK_IMPORTED_MODULE_6__shared_generate_address__["a" /* generateAddressFromPrivateKey */])(this.wallet.privateKey, this.wallet.network);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], WalletCreateComponent.prototype, "created", void 0);
WalletCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-wallet-create',
        template: __webpack_require__("../../../../../src/app/wallets/wallet-create/wallet-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wallets/wallet-create/wallet-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__wallets_all_service__["a" /* WalletsAllService */]) === "function" && _c || Object])
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_generate_address__ = __webpack_require__("../../../../../src/app/shared/generate-address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
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
            address = Object(__WEBPACK_IMPORTED_MODULE_3__shared_generate_address__["a" /* generateAddressFromPrivateKey */])(pk, this.wallet.network);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-wallet-edit',
        template: __webpack_require__("../../../../../src/app/wallets/wallet-edit/wallet-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wallets/wallet-edit/wallet-edit.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_app_models__["b" /* WalletModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_app_models__["b" /* WalletModel */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__wallets_all_service__["a" /* WalletsAllService */]) === "function" && _d || Object])
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_service__ = __webpack_require__("../../../../../src/app/wallets/wallet/wallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
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
    function WalletComponent(walletService, allWallets, api, 
        // private allCoinsService:MarketCapSelectedService,
        dialog) {
        var _this = this;
        this.walletService = walletService;
        this.allWallets = allWallets;
        this.api = api;
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
            //let market = this.allCoinsService.getCoinMarket(this.wallet.symbol);
            //console.log(price);
            // this.wallet.market = market;
            // this.wallet.usd = ( market.price_usd * this.wallet.balanceDisplay).toFixed(2);
            _this.allWallets.saveWallets();
        });
    };
    return WalletComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_app_models__["b" /* WalletModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_app_models__["b" /* WalletModel */]) === "function" && _a || Object)
], WalletComponent.prototype, "wallet", void 0);
WalletComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-wallet',
        template: __webpack_require__("../../../../../src/app/wallets/wallet/wallet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wallets/wallet/wallet.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__wallet_service__["a" /* WalletService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__wallet_service__["a" /* WalletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__wallet_service__["a" /* WalletService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__wallets_all_service__["a" /* WalletsAllService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__api_server_service__["a" /* ApiServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_server_service__["a" /* ApiServerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdDialog */]) === "function" && _e || Object])
], WalletComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=wallet.component.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/wallet/wallet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WalletService);

var _a;
//# sourceMappingURL=wallet.service.js.map

/***/ }),

/***/ "../../../../../src/app/wallets/wallets-all.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletsAllService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__("../../../../crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletsMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletsModule; });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__material_material_app_module__["a" /* MaterialAppModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */]
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map