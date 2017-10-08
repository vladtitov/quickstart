webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-balances/all-balances.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-balances/all-balances.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  all-balances works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-balances/all-balances.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBalancesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_coins_service__ = __webpack_require__("../../../../../src/app/all-in-one/all-coins.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllBalancesComponent = (function () {
    function AllBalancesComponent(service) {
        this.service = service;
    }
    AllBalancesComponent.prototype.ngOnInit = function () {
    };
    AllBalancesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-all-balances',
            template: __webpack_require__("../../../../../src/app/all-in-one/all-balances/all-balances.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-in-one/all-balances/all-balances.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__all_coins_service__["a" /* AllCoinsService */]) === "function" && _a || Object])
    ], AllBalancesComponent);
    return AllBalancesComponent;
    var _a;
}());

//# sourceMappingURL=all-balances.component.js.map

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-coins.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCoinsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coin_sercice_base__ = __webpack_require__("../../../../../src/app/all-in-one/coin-sercice-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_timers__ = __webpack_require__("../../../../timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
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
    function AllCoinsService(http, marketCap, storage) {
        var _this = this;
        this.http = http;
        this.marketCap = marketCap;
        this.storage = storage;
        this.currentMarketsArSub = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
        this.currentMarketsAr$ = this.currentMarketsArSub.asObservable();
        this.allCoinsSub = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.allCoins$ = this.allCoinsSub.asObservable();
        this.apisSub = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.apis$ = this.apisSub.asObservable();
        this.serachResultsSub = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
        this.serachResults$ = this.serachResultsSub.asObservable();
        marketCap.getAllCoinsData().subscribe(function (res) {
            if (!res)
                return;
            var cfg = new __WEBPACK_IMPORTED_MODULE_2__models_app_models__["a" /* ConfigApp */]();
            _this.apis = cfg.exchangesPublic.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_3__coin_sercice_base__["a" /* CoinSerciceBase */](item, res, http, storage);
            });
            _this.apis.forEach(function (item) {
                item.serachResults$.subscribe(function (res) {
                    if (!res)
                        return;
                    _this.serachResults = _this.serachResults.concat(res);
                    _this.serachResultsSub.next(_this.serachResults);
                });
            });
            _this.apisSub.next(_this.apis);
            _this.filterCoins();
        });
    }
    AllCoinsService.prototype.filterCoins = function () {
        var self = this;
        var out = [];
        var activeExchanges = this.activeExchanges;
        var i = 0;
        this.apis.forEach(function (service) {
            if (activeExchanges[service.config.uid]) {
                i++;
                service.getCoins().subscribe(function (coins) {
                    if (!coins)
                        return;
                    i--;
                    out = __WEBPACK_IMPORTED_MODULE_9_lodash__["uniq"](out.concat(coins)).sort();
                    if (i == 0) {
                        self.allCoins = out;
                        self.allCoinsSub.next(out);
                    }
                });
            }
        });
    };
    AllCoinsService.prototype.seachCoin = function (symbol) {
        var result = [];
        this.serachResults = [];
        var activeExchanges = this.activeExchanges;
        this.apis$.subscribe(function (apis) {
            if (!apis)
                return;
            console.log(' apis raedy search  ' + symbol);
            apis.forEach(function (service) {
                if (activeExchanges[service.config.uid]) {
                    var sub2 = service.searchCoin(symbol, false);
                    /*.subscribe(res=>{
                      if(!res) return;
          
                      sub2.unsubscribe();
          
                      if(done.indexOf(service.config.uid) !==-1) return;
                      i--;
                      done.push(service.config.uid);
                      console.log( i);
                     // i--;
                      result = result.concat(res);
                      if(i==0) resultSub.next(result);*/
                    //})
                }
            });
        });
    };
    AllCoinsService.prototype.setCurrentExchangeById = function (uid) {
        /// console.log(uid);
        var _this = this;
        if (!this.apis) {
            Object(__WEBPACK_IMPORTED_MODULE_7_timers__["setTimeout"])(function () { return _this.setCurrentExchangeById(uid); }, 1000);
            return;
        }
        if (this.sub1)
            this.sub1.unsubscribe();
        this.currentExchange = this.apis.find(function (item) {
            return item.config.uid === uid;
        });
        this.sub1 = this.currentExchange.getAllMarketsAr().subscribe(function (dataAr) {
            if (!dataAr)
                return;
            // console.log(dataAr);
            _this.baseCurrensies = _this.currentExchange.baseCurrenciesAr;
            //  console.log(dataAr);
            _this.currentMarketsArSub.next(dataAr);
        });
        //let echageData = this.currentExchange.marketsAr$;
        //this.currentExchangeSub.next(this.currentExchange);
    };
    AllCoinsService.prototype.getExchangeById = function (id) {
        this.apis$.subscribe(function (res) {
            if (!res)
                return;
        });
    };
    AllCoinsService.prototype.getAllExchanges = function () {
        return this.apis$;
    };
    AllCoinsService.prototype.setActiveExchanges = function (exchanges) {
        this.activeExchanges = exchanges;
    };
    AllCoinsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_app_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_app_storage_service__["a" /* StorageService */]) === "function" && _c || Object])
    ], AllCoinsService);
    return AllCoinsService;
    var _a, _b, _c;
}());

//# sourceMappingURL=all-coins.service.js.map

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-exchanges.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllExchangesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_overview_all_overview_component__ = __webpack_require__("../../../../../src/app/all-in-one/all-overview/all-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_main_all_main_component__ = __webpack_require__("../../../../../src/app/all-in-one/all-main/all-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__all_balances_all_balances_component__ = __webpack_require__("../../../../../src/app/all-in-one/all-balances/all-balances.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__all_coins_service__ = __webpack_require__("../../../../../src/app/all-in-one/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__all_search_all_search_component__ = __webpack_require__("../../../../../src/app/all-in-one/all-search/all-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__all_gainers_losers_all_gainers_losers_component__ = __webpack_require__("../../../../../src/app/all-in-one/all-gainers-losers/all-gainers-losers.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'all-in-one', component: __WEBPACK_IMPORTED_MODULE_3__all_main_all_main_component__["a" /* AllMainComponent */],
        children: [
            { path: '', redirectTo: 'data', pathMatch: 'full' },
            { path: 'data/:exchange', component: __WEBPACK_IMPORTED_MODULE_2__all_overview_all_overview_component__["a" /* AllOverviewComponent */] },
            { path: 'balances', component: __WEBPACK_IMPORTED_MODULE_8__all_balances_all_balances_component__["a" /* AllBalancesComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_10__all_search_all_search_component__["a" /* AllSearchComponent */] },
            { path: 'search/:coin', component: __WEBPACK_IMPORTED_MODULE_10__all_search_all_search_component__["a" /* AllSearchComponent */] },
            { path: 'gainers-losers', component: __WEBPACK_IMPORTED_MODULE_11__all_gainers_losers_all_gainers_losers_component__["a" /* AllGainersLosersComponent */] }
            /*
              {path: 'coin-markets/:symbol', component: BittrexMarketsComponent},
              {path: 'balances', component: BittrexBalancesComponent},
              {path: 'buy-sell/:symbol', component: BittrexBuySellComponent}*/
        ]
    }
];
var AllExchangesModule = (function () {
    function AllExchangesModule() {
    }
    AllExchangesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            // exports:[],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__material_material_app_module__["a" /* MaterialAppModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_overview_all_overview_component__["a" /* AllOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_3__all_main_all_main_component__["a" /* AllMainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__all_balances_all_balances_component__["a" /* AllBalancesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__all_search_all_search_component__["a" /* AllSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__all_gainers_losers_all_gainers_losers_component__["a" /* AllGainersLosersComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__all_coins_service__["a" /* AllCoinsService */]
            ]
        })
    ], AllExchangesModule);
    return AllExchangesModule;
}());

//# sourceMappingURL=all-exchanges.module.js.map

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-gainers-losers/all-gainers-losers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-gainers-losers/all-gainers-losers.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <section>\n        <h3>Gainers Loders <small *ngIf=\"sortedMarkets\">Total: {{sortedMarkets.length}}</small></h3>\n    </section>\n    <section>\n        <table>\n            <tbody>\n            <th class=\"btn\" (click)=\"onSortClick('symbol')\">Symbol</th>\n            <th>Name</th>\n            <th class=\"btn\" (click)=\"onSortClick('percent_change_1h')\">1h%</th>\n            <th class=\"btn\" (click)=\"onSortClick('percent_change_24h')\" >24h%</th>\n            <th class=\"btn\" (click)=\"onSortClick('percent_change_7d')\">7 days%</th>\n            <tr *ngFor=\"let market of sortedMarkets\">\n\n                <td>\n                    <a class=\"btn fa fa-line-chart\" href=\"https://coinmarketcap.com/currencies/{{market.id}}\" target=\"_blank\"></a>\n                    <a routerLink='/all-in-one/search/{{market.symbol}}' class=\"btn\">\n                        {{market.symbol}}\n                    </a>\n                </td>\n                <td>{{market.name}}</td>\n                <td [ngClass]=\"market.percent_change_1h>0?'green':'red'\">{{market.percent_change_1h}}</td>\n                <td [ngClass]=\"market.percent_change_24h>0?'green':'red'\">{{market.percent_change_24h}}</td>\n                <td [ngClass]=\"market.percent_change_7d>0?'green':'red'\">{{market.percent_change_7d}}</td>\n\n            </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-gainers-losers/all-gainers-losers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllGainersLosersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__all_coins_service__ = __webpack_require__("../../../../../src/app/all-in-one/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllGainersLosersComponent = (function () {
    function AllGainersLosersComponent(route, allService, marketCap) {
        this.route = route;
        this.allService = allService;
        this.marketCap = marketCap;
        this.creteria = 'percent_change_1h';
        this.data = [];
        this.asc_desc = 'asc';
        this.sortBy = 'persent_24h';
    }
    AllGainersLosersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allService.allCoins$.subscribe(function (coins) {
            if (!coins)
                return;
            _this.marketCap.getAllCoinsData().subscribe(function (data) {
                // console.log(coins);
                var ar = coins.map(function (item) {
                    return this.mc[item] || { symbol: item };
                }, { mc: data });
                _this.data = ar;
                _this.sortData();
            });
        });
        /*this.allService.currentMarketsAr$.subscribe(markets=>{
          if(!markets) return;
         // console.log(markets);
         this.data = markets;
          this.filterCurrent();
        });
    
        this.route.params.subscribe(params=> {
          console.log(params);
          this.exchange = params.exchange;
          if(this.exchange) this.allService.setCurrentExchangeById(this.exchange);
        });*/
        // this.allService.setCurrent(params.exchange);
    };
    AllGainersLosersComponent.prototype.onSortClick = function (creteria) {
        if (this.creteria == creteria) {
            this.asc_desc = this.asc_desc === 'asc' ? 'desc' : 'asc';
        }
        this.creteria = creteria;
        this.sortData();
    };
    AllGainersLosersComponent.prototype.filterCurrent = function () {
        this.sortData();
    };
    AllGainersLosersComponent.prototype.sortData = function () {
        if (!Array.isArray(this.data))
            return;
        var ar = this.data;
        // let creteria = this.creteria
        /* percent_change_1h:number;
      percent_change_24h:number;
      percent_change_7d:number;*/
        console.log(this.creteria, this.asc_desc);
        this.sortedMarkets = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](ar, this.creteria, this.asc_desc);
        // console.log(sorted);
        // this.consAvailable = _.take(sorted,30);
    };
    AllGainersLosersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-all-gainers-losers',
            template: __webpack_require__("../../../../../src/app/all-in-one/all-gainers-losers/all-gainers-losers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-in-one/all-gainers-losers/all-gainers-losers.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__all_coins_service__["a" /* AllCoinsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _c || Object])
    ], AllGainersLosersComponent);
    return AllGainersLosersComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=all-gainers-losers.component.js.map

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-main/all-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav>input{\r\n    margin: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-main/all-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav  class=\"btns-row\">\n\n        <a  routerLink='/market-cap/all-coins'>MC</a>\n        <a class=\"btn fa fa-search\"  routerLink=\"/all-in-one/search\"></a>\n        <a routerLink=\"/all-in-one/gainers-losers\"><span class=\"btn fa fa-thumbs-down\"></span><span class=\"btn fa fa-thumbs-up\"></span></a>\n\n        <input type=\"checkbox\" [(ngModel)]=\"exchanges.bittrex\"  (ngModelChange)=\"onChange($event)\">\n        <a  routerLink='/all-in-one/data/bittrex'> Bittrex</a>\n        <input  type=\"checkbox\" [(ngModel)]=\"exchanges.poloniex\" (ngModelChange)=\"onChange($event)\">\n        <a  routerLink='/all-in-one/data/poloniex'> Poloniex</a>\n        <input  type=\"checkbox\" [(ngModel)]=\"exchanges.novaexchange\" (ngModelChange)=\"onChange($event)\" >\n        <a  routerLink='/all-in-one/data/novaexchange'> NovaExchange</a>\n        <input  type=\"checkbox\" [(ngModel)]=\"exchanges.cryptopia\" (ngModelChange)=\"onChange($event)\" >\n        <a  routerLink='/all-in-one/data/cryptopia'>   Cryptopia</a>\n        <input type=\"checkbox\" [(ngModel)]=\"exchanges.hitbtc\" (ngModelChange)=\"onChange($event)\" >\n        <a  routerLink='/all-in-one/data/hitbtc'>  HitBtc</a>\n        <!--<ng-container *ngIf=\"!!(isLoggedIn$ | async)\">-->\n        <a  routerLink='/all-in-one/balances'> Balances</a>\n     <!--   </ng-container>-->\n\n    </nav>\n    <nav   class=\"right\">\n        <a  class=\"btn\" (click)=\"onLoginClick()\"> Login</a>\n        <a  class=\"btn\" (click)=\"onLogoutClick()\">Logout</a>\n    </nav>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-main/all-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_coins_service__ = __webpack_require__("../../../../../src/app/all-in-one/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllMainComponent = (function () {
    function AllMainComponent(allConsService, sorage) {
        this.allConsService = allConsService;
        this.sorage = sorage;
        this.exchanges = {
            bittrex: true,
            poloniex: true,
            novaexchange: false,
            cryptopia: true,
            hitbtc: false,
        };
        var str = this.sorage.getItem('exchanges');
        if (str)
            this.exchanges = JSON.parse(str);
        allConsService.setActiveExchanges(this.exchanges);
    }
    AllMainComponent.prototype.ngOnInit = function () {
    };
    AllMainComponent.prototype.onLoginClick = function () {
    };
    AllMainComponent.prototype.onChange = function (evt) {
        console.log(this.exchanges);
        this.sorage.setItem('exchanges', JSON.stringify(this.exchanges));
        this.allConsService.filterCoins();
    };
    AllMainComponent.prototype.onLogoutClick = function () {
    };
    AllMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-all-main',
            template: __webpack_require__("../../../../../src/app/all-in-one/all-main/all-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-in-one/all-main/all-main.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__all_coins_service__["a" /* AllCoinsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_storage_service__["a" /* StorageService */]) === "function" && _b || Object])
    ], AllMainComponent);
    return AllMainComponent;
    var _a, _b;
}());

//# sourceMappingURL=all-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-overview/all-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-overview/all-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div>\n        <h3>{{title}} Summary </h3> <small *ngIf=\"marketsAr\"> Total {{marketsAr.length}}</small>\n\n        <img  *ngIf=\"isProgress\" class=\"w2\" src=\"assets/img/spinner.gif\"/>\n\n        <div>\n            <md-checkbox  checked=\"true\" (change)=\"onSelectedChange($event)\" >Selected Only</md-checkbox>\n\n            <md-checkbox *ngFor=\"let currency of baseCurrencies\" checked=\"true\" (change)=\"onChangeBase($event, currency)\" >{{currency}}</md-checkbox>\n\n        </div>\n\n        <table>\n            <tr class=\"small\">\n                <th>Name</th>\n\n                <th>Last</th>\n                <th>High</th>\n                <th>Low</th>\n\n                <th>Bid</th>\n                <th>Ask</th>\n                <th>Prev Day</th>\n\n                <th>Volume</th>\n                <th>Base Vol</th>\n                <th>To Buy</th>\n                <th>To Sell</th>\n\n                <!-- <th>Time</th>-->\n\n                <!--  <th>Sponsored</th>\n                  <th>Created</th>\n                  <th>Notice</th>-->\n            </tr>\n            <tr *ngFor=\"let market of marketsAr\">\n                <td><div class=\"w100 small\"><a (click)=\"onChartClick(market)\" class=\"fa fa-line-chart\"></a> {{market.pair}}</div></td>\n\n                <td>{{market.usLast}}</td>\n                <td>{{market.usHigh}}</td>\n                <td>{{market.usLow}}</td>\n\n\n                <td>{{market.usBid}}</td>\n                <td>{{market.usAsk}}</td>\n                <td>{{market.usPrevDay}}</td>\n\n                <td>{{market.dVolume}}</td>\n                <td>{{market.dBaseVolume}}</td>\n\n                <td>{{market.OpenBuyOrders}}</td>\n                <td>{{market.OpenSellOrders}}</td>\n\n\n                <!-- <td><small>{{market.TimeStamp}}</small></td>-->\n\n                <!--  <td>{{market.IsSponsored}}</td>\n                  <td class=\"my-timestamp\"><div>{{market.Created}}</div></td>\n                  <td class=\"notice\">{{market.Notice}}</td>-->\n            </tr>\n        </table>\n\n\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-overview/all-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_coins_service__ = __webpack_require__("../../../../../src/app/all-in-one/all-coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllOverviewComponent = (function () {
    function AllOverviewComponent(route, allService, storage) {
        this.route = route;
        this.allService = allService;
        this.storage = storage;
    }
    AllOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected = this.storage.getMCSelected();
        this.allService.currentMarketsAr$.subscribe(function (res) {
            //console.log(res);
            if (!res)
                return;
            _this.isProgress = false;
            _this.title = _this.allService.currentExchange.config.name;
            _this.fullDataAr = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](res, 'pair');
            // this.baseCurrencies =[];
            _this.baseCurrencies = _this.allService.baseCurrensies;
            if (!_this.unchecked)
                _this.unchecked = []; //= this.baseCurrencies.slice(0);
            _this.filterArr();
        });
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.isProgress = true;
            _this.allService.setCurrentExchangeById(params.exchange);
            /* this.allService.getAllExchanges().subscribe(all=>{
               if(!all) return;
       
               console.log(all);
       
       
             })*/
        });
    };
    AllOverviewComponent.prototype.onSelectedChange = function (evt) {
        if (evt.checked) {
            this.selected = this.storage.getMCSelected();
        }
        else
            this.selected = null;
        this.filterArr();
    };
    AllOverviewComponent.prototype.onChartClick = function (market) {
    };
    AllOverviewComponent.prototype.filterArr = function () {
        var unchecked = this.unchecked;
        var out = this.fullDataAr.filter(function (item) {
            return this.ar.indexOf(item.base) === -1;
        }, { ar: unchecked });
        if (this.selected) {
            out = out.filter(function (item) {
                return this.sel.indexOf(item.coin) !== -1;
            }, { sel: this.selected });
        }
        this.marketsAr = out;
    };
    AllOverviewComponent.prototype.onChangeBase = function (evt, currency) {
        if (!evt.checked) {
            if (this.unchecked.indexOf(currency) === -1)
                this.unchecked.push(currency);
        }
        else
            this.unchecked.splice(this.unchecked.indexOf(currency), 1);
        this.filterArr();
    };
    AllOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-all-overview',
            template: __webpack_require__("../../../../../src/app/all-in-one/all-overview/all-overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-in-one/all-overview/all-overview.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__all_coins_service__["a" /* AllCoinsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__["a" /* StorageService */]) === "function" && _c || Object])
    ], AllOverviewComponent);
    return AllOverviewComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=all-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-search/all-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-spinner {\r\n    float: left;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 5px 10px 0px -10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-search/all-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <section>\n\n        <md-input-container>\n            <input [(ngModel)]=\"currentCoin\"  mdInput  placeholder=\"Search\" name=\"search\" >\n        </md-input-container>\n\n        <button color=\"accent\" md-raised-button  (click)=\"onSearchCoinClick()\" title=\"Search Coin\">\n            <md-spinner *ngIf=\"isProgress\" mode=\"indeterminate\"></md-spinner>\n            <span class=\"fa fa-search\"></span>\n        </button>\n       <!-- <img class=\"w3\" src=\"assets/img/spinner.gif\" *ngIf=\"isProgress\">-->\n\n        <md-select placeholder=\"Select Coin\" (change)=\"onCoinSelectChanged($event)\">\n            <md-option *ngFor=\"let coin of allCoins\" [value]=\"coin\">\n                {{coin}}\n            </md-option>\n        </md-select>\n\n\n        <table *ngIf=\"currentMC\">\n            <tbody>\n            <tr>\n                <td>Rank</td>\n                <td>Graph</td>\n                <td>Symbol</td>\n                <td>Name</td>\n                <td>1h%</td>\n                <td>24h%</td>\n                <td>7 days%</td>\n                <td>$US</td>\n            </tr>\n            <tr>\n                <td>{{currentMC.rank}}</td>\n                <td><a href=\"https://coinmarketcap.com/currencies/{{currentMC.id}}\" class=\"btn fa fa-line-chart\" target=\"_blank\"></a></td>\n                <td>{{currentMC.symbol}}</td>\n                <td>{{currentMC.name}}</td>\n                <td>{{currentMC.percent_change_1h}}</td>\n                <td>{{currentMC.percent_change_24h}}</td>\n                <td>{{currentMC.percent_change_7d}}</td>\n                <td>{{currentMC.price_usd}}</td>\n            </tr>\n\n            </tbody>\n\n        </table>\n\n    </section>\n    <br/>\n\n    <section>\n        <table>\n            <tbody>\n            <tr class=\"small\">\n                <th>Name</th>\n                <th>Market</th>\n\n                <th>Last</th>\n                <th>High</th>\n                <th>Low</th>\n\n                <th>Bid</th>\n                <th>Ask</th>\n                <th>Prev Day</th>\n\n                <th>Volume</th>\n                <th>Base Vol</th>\n                <th>To Buy</th>\n                <th>To Sell</th>\n            </tr>\n            <tr *ngFor=\"let market of searchResult\">\n\n                <td><div class=\"w100 small\">{{market.pair}}</div></td>\n\n                <td><div class=\"w5 ell\">{{market.exchange}}</div></td>\n                <td>{{market.usLast}}</td>\n                <td>{{market.usHigh}}</td>\n                <td>{{market.usLow}}</td>\n\n\n                <td>{{market.usBid}}</td>\n                <td>{{market.usAsk}}</td>\n                <td>{{market.usPrevDay}}</td>\n\n                <td>{{market.dVolume}}</td>\n                <td>{{market.dBaseVolume}}</td>\n\n                <td>{{market.OpenBuyOrders}}</td>\n                <td>{{market.OpenSellOrders}}</td>\n\n            </tr>\n            </tbody>\n        </table>\n\n\n\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/all-in-one/all-search/all-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_coins_service__ = __webpack_require__("../../../../../src/app/all-in-one/all-coins.service.ts");
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




var AllSearchComponent = (function () {
    function AllSearchComponent(route, service, marketCap) {
        this.route = route;
        this.service = service;
        this.marketCap = marketCap;
    }
    AllSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.allCoins$.subscribe(function (res) {
            if (res)
                _this.allCoins = res;
        });
        this.service.serachResults$.subscribe(function (res) {
            if (!res)
                return;
            _this.isProgress = false;
            _this.searchResult = res;
        });
        this.currentCoin = this.route.snapshot.params.coin;
        this.seachCoin();
    };
    AllSearchComponent.prototype.seachCoin = function () {
        var _this = this;
        if (!this.currentCoin)
            return;
        this.marketCap.getAllCoinsData().subscribe(function (data) {
            if (!data)
                return;
            _this.currentMC = data[_this.currentCoin];
        });
        this.isProgress = true;
        this.service.seachCoin(this.currentCoin);
    };
    AllSearchComponent.prototype.onChartClick = function (market) {
        console.log(market);
    };
    AllSearchComponent.prototype.onSearchCoinClick = function () {
        this.seachCoin();
    };
    AllSearchComponent.prototype.onCoinSelectChanged = function (evt) {
        //  console.log(evt)
        this.currentCoin = evt.value;
    };
    AllSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-all-search',
            template: __webpack_require__("../../../../../src/app/all-in-one/all-search/all-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/all-in-one/all-search/all-search.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__all_coins_service__["a" /* AllCoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__all_coins_service__["a" /* AllCoinsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _c || Object])
    ], AllSearchComponent);
    return AllSearchComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=all-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/all-in-one/coin-sercice-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinSerciceBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__com_mappers__ = __webpack_require__("../../../../../src/app/com/mappers.ts");



var CoinSerciceBase = (function () {
    function CoinSerciceBase(config, marketCapData, http, storage) {
        var _this = this;
        this.config = config;
        this.marketCapData = marketCapData;
        this.http = http;
        this.storage = storage;
        // console.log(config);
        this.marketsArSub = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.marketsAr$ = this.marketsArSub.asObservable();
        this.marketsSub = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.markets$ = this.marketsSub.asObservable();
        this.progressSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.progress$ = this.progressSub.asObservable();
        this.numMarketsSub = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.isLogedInSub = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.isLoggedIn$ = this.isLogedInSub.asObservable();
        this.serachResultsSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.serachResults$ = this.serachResultsSub.asObservable();
        setTimeout(function () { return _this.autoLogin(); }, 3000);
    }
    CoinSerciceBase.prototype.autoLogin = function () {
        if (!this.storage.salt)
            return;
        // console.log('autologin ' + this.config.uid);
        var str = this.storage.getItem(this.config.uid + 'credetials', true);
        if (str) {
            var credentials = JSON.parse(str);
            // console.log(credentials);
            if (credentials && credentials.apiKey && credentials.password)
                this.login(credentials.apiKey, credentials.password);
        }
        else
            console.log(' no credetials for ' + this.config.uid);
    };
    CoinSerciceBase.prototype.logout = function () {
        this.apiKey = null;
        this.password = null;
        this.isLogedInSub.next(false);
    };
    CoinSerciceBase.prototype.login = function (apiKey, password) {
        this.apiKey = apiKey;
        this.password = password;
        this.isLogedInSub.next(true);
    };
    CoinSerciceBase.prototype.searchCoin = function (symbol, isBase) {
        var _this = this;
        console.log(this.config.name + ' serach ' + symbol);
        if (!this.sCb) {
            this.sCb = this.marketsAr$.subscribe(function (ar) {
                if (!ar)
                    return;
                ar = ar.filter(function (item) {
                    if (isBase)
                        return item.base === symbol;
                    else
                        return item.coin === symbol;
                });
                //  console.log(ar);
                _this.serachResults = ar;
                _this.serachResultsSub.next(ar);
            });
        }
        else {
            var ar = this.marketsAr.filter(function (item) {
                if (isBase)
                    return item.base === symbol;
                else
                    return item.coin === symbol;
            });
            // console.log(ar);
            this.serachResults = ar;
            this.serachResultsSub.next(ar);
        }
        /*console.log(this.config.name+ ' serach ' + symbol);
         this.getAllMarketsAr().map(ar=>{
           console.log(this.config.name, ar);
           if(!ar) return null;
    
    
    
    
         })*/
    };
    CoinSerciceBase.prototype.getCoins = function () {
        return this.getAllMarketsAr().map(function (ar) {
            if (!ar)
                return null;
            return ar.map(function (item) {
                return item.coin;
            });
        });
    };
    CoinSerciceBase.prototype.mapAllMarkets = function (res) {
        var result = res.json();
        var marketsAr = [];
        var indexed = {};
        var baseCoins = [];
        var marketCap = this.marketCapData;
        console.log('result ' + this.config.name);
        switch (this.config.uid) {
            case 'bittrex':
                __WEBPACK_IMPORTED_MODULE_2__com_mappers__["a" /* Mappers */].bittrexMarkets(marketsAr, indexed, baseCoins, result.result, marketCap);
                break;
            case 'poloniex':
                __WEBPACK_IMPORTED_MODULE_2__com_mappers__["a" /* Mappers */].poloniexMarkets(marketsAr, indexed, baseCoins, result, marketCap);
                break;
            case 'novaexchange':
                __WEBPACK_IMPORTED_MODULE_2__com_mappers__["a" /* Mappers */].novaExchangeMarkets(marketsAr, indexed, baseCoins, result.markets, marketCap);
                break;
            case 'cryptopia':
                __WEBPACK_IMPORTED_MODULE_2__com_mappers__["a" /* Mappers */].cryptopiaMarkets(marketsAr, indexed, baseCoins, result.Data, marketCap);
                break;
            case 'hitbtc':
                __WEBPACK_IMPORTED_MODULE_2__com_mappers__["a" /* Mappers */].hitbtcMarkets(marketsAr, indexed, baseCoins, result, marketCap);
                break;
        }
        // console.log(marketCap);
        // console.log(arr);
        this.markets = indexed;
        this.baseCurrenciesAr = baseCoins;
        this.marketsAr = marketsAr;
        this.marketsArSub.next(this.marketsAr);
    };
    CoinSerciceBase.prototype.loadMarkets = function () {
        var _this = this;
        this.http.get(this.config.urlMarkets).subscribe(function (res) { return _this.mapAllMarkets(res); });
    };
    CoinSerciceBase.prototype.getAllMarketsAr = function () {
        if (!this.marketsAr)
            this.loadMarkets();
        return this.marketsAr$;
    };
    CoinSerciceBase.prototype.getAllMarkets = function () {
        if (!this.markets)
            this.loadMarkets();
        return this.markets$;
    };
    return CoinSerciceBase;
}());

//# sourceMappingURL=coin-sercice-base.js.map

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
                id: '1',
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
    ApiServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ApiServerService);
    return ApiServerService;
    var _a;
}());

//# sourceMappingURL=api-server.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<diV>\r\n    <div>\r\n\r\n    </div>\r\n    {{menu | async}}\r\n    <md-sidenav-container >\r\n        <md-sidenav #sidenav>\r\n            <md-list>\r\n\r\n                <a md-list-item routerLink='/market-cap/selected'>Coin Market Cap</a>\r\n                <a md-list-item routerLink='/all-in-one'>All In One&nbsp; </a>\r\n\r\n                <hr/>\r\n                <a md-list-item routerLink='/my-bittrex'>Bittrex &nbsp; <small> (Las Vegas, USA)</small></a>\r\n\r\n                <a md-list-item routerLink='/shape-shift-market-cap'>ShapeShift &nbsp; <small>(Switzerland) </small></a>\r\n\r\n                <a md-list-item routerLink='/changelly'>Changelly &nbsp;<small> (Prague, Czech Rep.)</small></a>\r\n                <a md-list-item routerLink='poloniex/data'>Poloniex  &nbsp;<small>(Delaware, USA)</small></a>\r\n                <a md-list-item routerLink='hit-btc/market'>Hit BTC &nbsp;<small>(Copenhagen, Denmark)</small> </a>\r\n                <a md-list-item routerLink='yo-bit/market'>Yo Bit &nbsp; <small>(Moscow, Russia)</small></a>\r\n                <a md-list-item routerLink='coin-exchange/markets'>CoinExchange &nbsp; <small></small></a>\r\n                <a md-list-item routerLink='exchanges/kraken'>Kraken &nbsp; <small>(San Fran, USA)</small></a>\r\n                <a md-list-item routerLink='exchanges/bitfinex'>BitFinex &nbsp; <small>(Hong-Kong)</small></a>\r\n                <a md-list-item routerLink='exchanges/novaexchange'>Nova Exchange &nbsp;<small>(Sweden)</small></a>\r\n                <a md-list-item routerLink='exchanges/cryptopia'>Cryptopia &nbsp;<small>(New Zealand)</small></a>\r\n\r\n                <hr/>\r\n\r\n                <a md-list-item routerLink='/coinbase/currencies'>Coinbase &nbsp;<small> (San Fran, USA)</small></a>\r\n                <a md-list-item routerLink='/exchanges/search'>Search &nbsp;</a>\r\n\r\n                <hr/>\r\n                <a md-list-item routerLink='/email-service'>Email Service</a>\r\n                <a md-list-item routerLink='/login/register'>Register</a>\r\n            </md-list>\r\n\r\n        </md-sidenav>\r\n\r\n        <div class=\"navbar\">\r\n            <div (click)=\"sidenav.open()\" class=\"fa fa-bars btn\">  </div>\r\n\r\n\r\n                <div class=\"right\">\r\n                    <a routerLink='/email-service' class=\"watchdog\">    </a>\r\n\r\n                    <strong class=\"small\">{{nickname}}</strong>\r\n\r\n                    <a *ngIf=\"!(isLogedIn$ | async)\" class=\"btn\" (click)=\"onLogin()\">Security Login</a>\r\n                    <a *ngIf=\"!!(isLogedIn$ | async)\" class=\"btn\" (click)=\"onLogout()\">Security Logout</a>\r\n                    <a  class=\"btn dred small \" (click)=\"onClearStorage()\">Clear Storage</a>\r\n                </div>\r\n\r\n\r\n        </div>\r\n        <div id=\"MainOutlet\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n    </md-sidenav-container>\r\n</diV>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/shared/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
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
    function AppComponent(service, storage, router, dialog) {
        this.service = service;
        this.storage = storage;
        this.router = router;
        this.dialog = dialog;
        this.title = 'app works!';
        this.isLogedIn$ = storage.isLogedIn$;
    }
    AppComponent.prototype.onLogin = function () {
        var _this = this;
        var ref = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared_login_form_login_form_component__["a" /* LoginFormComponent */], {
            width: '300px',
            height: '300px'
        });
        ref.afterClosed().subscribe(function (data) {
            if (data && data.username && data.password) {
                _this.storage.login(data.username, data.password);
                if (data.save)
                    _this.storage.storeUserSimple(data.username, data.password);
            }
        });
    };
    AppComponent.prototype.onLogout = function () {
        if (confirm('You want to logout from Application')) {
            this.storage.logout();
        }
    };
    AppComponent.prototype.onClearStorage = function () {
        if (confirm('You want to delete all data from storage?')) {
            localStorage.clear();
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.isLogedIn$.subscribe(function (res) {
            console.warn(res);
        });
        var user = this.storage.restoreUserSimple();
        //console.log(user);
        if (user && user.u && user.p)
            this.storage.login(user.u, user.p);
        this.service.user$.subscribe(function (user) {
            if (!user) {
                _this.nickname = '';
                return;
            }
            _this.nickname = user.nickname;
        });
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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__["a" /* StorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */]) === "function" && _d || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wallets_wallets_module__ = __webpack_require__("../../../../../src/app/wallets/wallets.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__exchange_ss_exchange_ss_component__ = __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__exchange_ss_exchange_ss_service__ = __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__wallets_wallets_all_service__ = __webpack_require__("../../../../../src/app/wallets/wallets-all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__api_server_service__ = __webpack_require__("../../../../../src/app/api-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login2_login2_component__ = __webpack_require__("../../../../../src/app/login2/login2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__exchange_ss_send_alert_service__ = __webpack_require__("../../../../../src/app/exchange-ss/send-alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__email_service_email_service_module__ = __webpack_require__("../../../../../src/app/email-service/email-service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shape_shift_shape_shift_module__ = __webpack_require__("../../../../../src/app/shape-shift/shape-shift.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__exchanges_services_poloniex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/poloniex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__market_cap_market_cap_module__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__exchanges_services_kraken_service__ = __webpack_require__("../../../../../src/app/exchanges/services/kraken.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__exchanges_exchanges_module__ = __webpack_require__("../../../../../src/app/exchanges/exchanges.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__exchanges_services_bitfinex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bitfinex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__exchanges_services_changelly_service__ = __webpack_require__("../../../../../src/app/exchanges/services/changelly.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__exchanges_services_coin_echange_service__ = __webpack_require__("../../../../../src/app/exchanges/services/coin-echange.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__exchanges_services_bittrex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bittrex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__exchanges_services_coinbase_service__ = __webpack_require__("../../../../../src/app/exchanges/services/coinbase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__exchanges_services_yo_bit_service__ = __webpack_require__("../../../../../src/app/exchanges/services/yo-bit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__search_coin_search_coin_component__ = __webpack_require__("../../../../../src/app/search-coin/search-coin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__exchanges_services_hit_btc_service__ = __webpack_require__("../../../../../src/app/exchanges/services/hit-btc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__exchanges_search_coin_service__ = __webpack_require__("../../../../../src/app/exchanges/search-coin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__exchanges_services_novaexchange_service__ = __webpack_require__("../../../../../src/app/exchanges/services/novaexchange.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__exchanges_services_cryptopia_service__ = __webpack_require__("../../../../../src/app/exchanges/services/cryptopia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__bittrex_bittrex_module__ = __webpack_require__("../../../../../src/app/bittrex/bittrex.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__all_in_one_all_exchanges_module__ = __webpack_require__("../../../../../src/app/all-in-one/all-exchanges.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { TestComponent } from '../../arch/test/test.component';



//import 'rxjs/add/observable/throw';
//import 'rxjs/operator/publishLast';
//import 'rxjs/add/operator/shareReplay';

//import {AuthHttp, AuthModule, provideAuth, AuthConfig} from './libs/angular2-jwt';

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_27__market_cap_market_cap_module__["a" /* MarketCapModule */],
                __WEBPACK_IMPORTED_MODULE_12__wallets_wallets_module__["a" /* WalletsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__material_material_app_module__["a" /* MaterialAppModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21__email_service_email_service_module__["a" /* EmailServiceModule */],
                __WEBPACK_IMPORTED_MODULE_23__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_24__shape_shift_shape_shift_module__["a" /* ShapeShiftModule */],
                __WEBPACK_IMPORTED_MODULE_30__exchanges_exchanges_module__["a" /* ExchangesModule */],
                __WEBPACK_IMPORTED_MODULE_42__bittrex_bittrex_module__["a" /* BittrexModule */],
                __WEBPACK_IMPORTED_MODULE_43__all_in_one_all_exchanges_module__["a" /* AllExchangesModule */],
                // AuthModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* rootRouterConfig */], { useHash: true })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                // TestComponent,
                /*   AboutComponent,
                   RepoBrowserComponent,
                   RepoListComponent,
                   RepoDetailComponent,
                   HomeComponent,
                   ContactComponent,*/
                __WEBPACK_IMPORTED_MODULE_15__exchange_ss_exchange_ss_component__["a" /* ExchangeSsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__login2_login2_component__["a" /* Login2Component */],
                __WEBPACK_IMPORTED_MODULE_37__search_coin_search_coin_component__["a" /* SearchCoinComponent */]
            ],
            providers: [
                //AuthHttp,
                //  GithubService,
                __WEBPACK_IMPORTED_MODULE_22__services_auth_http_service__["a" /* AuthHttpService */],
                __WEBPACK_IMPORTED_MODULE_16__exchange_ss_exchange_ss_service__["a" /* ExchangeSsService */],
                __WEBPACK_IMPORTED_MODULE_17__wallets_wallets_all_service__["a" /* WalletsAllService */],
                __WEBPACK_IMPORTED_MODULE_18__api_server_service__["a" /* ApiServerService */],
                __WEBPACK_IMPORTED_MODULE_20__exchange_ss_send_alert_service__["a" /* SendAlertService */],
                __WEBPACK_IMPORTED_MODULE_25__market_cap_market_cap_service__["a" /* MarketCapService */],
                __WEBPACK_IMPORTED_MODULE_26__exchanges_services_poloniex_service__["a" /* PoloniexService */],
                __WEBPACK_IMPORTED_MODULE_28__services_app_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_29__exchanges_services_kraken_service__["a" /* KrakenService */],
                __WEBPACK_IMPORTED_MODULE_31__exchanges_services_bitfinex_service__["a" /* BitfinexService */],
                __WEBPACK_IMPORTED_MODULE_39__exchanges_search_coin_service__["a" /* SearchCoinService */],
                __WEBPACK_IMPORTED_MODULE_32__exchanges_services_changelly_service__["a" /* ChangellyService */],
                __WEBPACK_IMPORTED_MODULE_33__exchanges_services_coin_echange_service__["a" /* CoinEchangeService */],
                __WEBPACK_IMPORTED_MODULE_34__exchanges_services_bittrex_service__["a" /* BittrexService */],
                __WEBPACK_IMPORTED_MODULE_35__exchanges_services_coinbase_service__["a" /* CoinbaseService */],
                __WEBPACK_IMPORTED_MODULE_36__exchanges_services_yo_bit_service__["a" /* YoBitService */],
                __WEBPACK_IMPORTED_MODULE_38__exchanges_services_hit_btc_service__["a" /* HitBtcService */],
                __WEBPACK_IMPORTED_MODULE_40__exchanges_services_novaexchange_service__["a" /* NovaexchangeService */],
                __WEBPACK_IMPORTED_MODULE_41__exchanges_services_cryptopia_service__["a" /* CryptopiaService */]
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
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouterConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wallets_wallets_main_wallets_main_component__ = __webpack_require__("../../../../../src/app/wallets/wallets-main/wallets-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wallets_my_wallets_my_wallets_component__ = __webpack_require__("../../../../../src/app/wallets/my-wallets/my-wallets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchange_ss_exchange_ss_component__ = __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exchanges_ch_market_ch_market_component__ = __webpack_require__("../../../../../src/app/exchanges/ch-market/ch-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_login_component__ = __webpack_require__("../../../../../src/app/login/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/login/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shape_shift_ss_coins_available_ss_coins_available_component__ = __webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__exchanges_poloniex_ticker_poloniex_ticker_component__ = __webpack_require__("../../../../../src/app/exchanges/poloniex-ticker/poloniex-ticker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_confirm_reset_password_confirm_reset_password_component__ = __webpack_require__("../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__exchanges_hit_btc_market_hit_btc_market_component__ = __webpack_require__("../../../../../src/app/exchanges/hit-btc-market/hit-btc-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__exchanges_yo_bit_market_yo_bit_market_component__ = __webpack_require__("../../../../../src/app/exchanges/yo-bit-market/yo-bit-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__exchanges_coinbase_currencies_coinbase_currencies_component__ = __webpack_require__("../../../../../src/app/exchanges/coinbase-currencies/coinbase-currencies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__exchanges_coin_exchange_market_coin_exchange_market_component__ = __webpack_require__("../../../../../src/app/exchanges/coin-exchange-market/coin-exchange-market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__exchanges_kraken_kraken_component__ = __webpack_require__("../../../../../src/app/exchanges/kraken/kraken.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__exchanges_bitfinex_bitfinex_component__ = __webpack_require__("../../../../../src/app/exchanges/bitfinex/bitfinex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_coin_search_coin_component__ = __webpack_require__("../../../../../src/app/search-coin/search-coin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__exchanges_poloniex_data_poloniex_data_component__ = __webpack_require__("../../../../../src/app/exchanges/poloniex-data/poloniex-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__market_cap_coins_exchanges_coins_exchanges_component__ = __webpack_require__("../../../../../src/app/market-cap/coins-exchanges/coins-exchanges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__exchanges_novaexchange_novaexchange_component__ = __webpack_require__("../../../../../src/app/exchanges/novaexchange/novaexchange.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__exchanges_cryptopia_cryptopia_component__ = __webpack_require__("../../../../../src/app/exchanges/cryptopia/cryptopia.component.ts");
/*
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
*/




















var rootRouterConfig = [
    { path: 'exchanges/search', component: __WEBPACK_IMPORTED_MODULE_15__search_coin_search_coin_component__["a" /* SearchCoinComponent */] },
    { path: '', redirectTo: 'market-cap/all-coins', pathMatch: 'full' },
    // { path: 'home', component: HomeComponent },
    // { path: 'login', component: LoginMain },
    // { path: 'about', component: AboutComponent },
    { path: 'exchange-ss', component: __WEBPACK_IMPORTED_MODULE_2__exchange_ss_exchange_ss_component__["a" /* ExchangeSsComponent */] },
    { path: 'coins-exchanges/:list', component: __WEBPACK_IMPORTED_MODULE_17__market_cap_coins_exchanges_coins_exchanges_component__["a" /* CoinsExchangesComponent */] },
    { path: 'shape-shift-market-cap', component: __WEBPACK_IMPORTED_MODULE_6__shape_shift_ss_coins_available_ss_coins_available_component__["a" /* SSCoinsAvailableComponent */] },
    { path: 'hit-btc/market', component: __WEBPACK_IMPORTED_MODULE_9__exchanges_hit_btc_market_hit_btc_market_component__["a" /* HitBtcMarketComponent */] },
    { path: 'yo-bit/market', component: __WEBPACK_IMPORTED_MODULE_10__exchanges_yo_bit_market_yo_bit_market_component__["a" /* YoBitMarketComponent */] },
    { path: 'changelly', component: __WEBPACK_IMPORTED_MODULE_3__exchanges_ch_market_ch_market_component__["a" /* ChMarketComponent */] },
    { path: 'poloniex/data', component: __WEBPACK_IMPORTED_MODULE_16__exchanges_poloniex_data_poloniex_data_component__["a" /* PoloniexDataComponent */] },
    { path: 'poloniex/filter', component: __WEBPACK_IMPORTED_MODULE_7__exchanges_poloniex_ticker_poloniex_ticker_component__["a" /* PoloniexTickerComponent */] },
    { path: 'coinbase/currencies', component: __WEBPACK_IMPORTED_MODULE_11__exchanges_coinbase_currencies_coinbase_currencies_component__["a" /* CoinbaseCurrenciesComponent */] },
    { path: 'coin-exchange/markets', component: __WEBPACK_IMPORTED_MODULE_12__exchanges_coin_exchange_market_coin_exchange_market_component__["a" /* CoinExchangeMarketComponent */] },
    { path: 'exchanges/kraken', component: __WEBPACK_IMPORTED_MODULE_13__exchanges_kraken_kraken_component__["a" /* KrakenComponent */] },
    { path: 'exchanges/bitfinex', component: __WEBPACK_IMPORTED_MODULE_14__exchanges_bitfinex_bitfinex_component__["a" /* BitfinexComponent */] },
    { path: 'exchanges/novaexchange', component: __WEBPACK_IMPORTED_MODULE_18__exchanges_novaexchange_novaexchange_component__["a" /* NovaexchangeComponent */] },
    { path: 'exchanges/cryptopia', component: __WEBPACK_IMPORTED_MODULE_19__exchanges_cryptopia_cryptopia_component__["a" /* CryptopiaComponent */] },
    { path: 'wallets', component: __WEBPACK_IMPORTED_MODULE_0__wallets_wallets_main_wallets_main_component__["a" /* WalletsMainComponent */] },
    { path: 'my-wallets', component: __WEBPACK_IMPORTED_MODULE_1__wallets_my_wallets_my_wallets_component__["a" /* MyWalletsComponent */] },
    { path: 'login/:topic', component: __WEBPACK_IMPORTED_MODULE_4__login_login_login_component__["a" /* LoginComponent */] },
    { path: 'login-confirm/:uid', component: __WEBPACK_IMPORTED_MODULE_5__login_confirm_confirm_component__["a" /* ConfirmComponent */] },
    { path: 'confirm-reset-password/:uid', component: __WEBPACK_IMPORTED_MODULE_8__login_confirm_reset_password_confirm_reset_password_component__["a" /* ConfirmResetPasswordComponent */] }
    /* { path: 'github', component: RepoBrowserComponent,
       children: [
         { path: '', component: RepoListComponent },
         { path: ':org', component: RepoListComponent,
           children: [
             { path: '', component: RepoDetailComponent },
             { path: ':repo', component: RepoDetailComponent }
           ]
         }]
     },
     { path: 'contact', component: ContactComponent }*/
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/balance-markets/balance-markets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/balance-markets/balance-markets.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  balance-markets works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/balance-markets/balance-markets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalanceMarketsComponent; });
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

var BalanceMarketsComponent = (function () {
    function BalanceMarketsComponent() {
    }
    BalanceMarketsComponent.prototype.ngOnInit = function () {
    };
    BalanceMarketsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-balance-markets',
            template: __webpack_require__("../../../../../src/app/bittrex/balance-markets/balance-markets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bittrex/balance-markets/balance-markets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BalanceMarketsComponent);
    return BalanceMarketsComponent;
}());

//# sourceMappingURL=balance-markets.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-balances/bittrex-balances.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-balances/bittrex-balances.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<section>\r\n    <md-checkbox (change)=\"onShowAll($event)\">Show All</md-checkbox>\r\n    <h5>Total ${{total}}</h5>\r\n</section>\r\n    <section>\r\n        <table>\r\n            <tbody>\r\n            <tr>\r\n                <th>Symbol</th>\r\n                <th>Plice</th>\r\n                <th>US</th>\r\n                <th>Balance</th>\r\n                <th>Address</th>\r\n                <th>Available</th>\r\n                <th>Pending</th>\r\n            </tr>\r\n            <tr *ngFor=\"let balance of balancesAr\">\r\n                <td>\r\n                    <img class=\"w1\" src=\"assets/icons/{{balance.id}}.png\" />\r\n                    <span class=\"btn\" (click)=\"onBuyClick(balance)\">{{balance.symbol}}</span>\r\n\r\n                </td>\r\n                <td>\r\n                    <a class=\"fa fa-line-chart btn\" (click)=\"onChartClick(balance)\"></a>\r\n                    <span>${{balance.priceUS}}</span>\r\n                </td>\r\n                <td>${{balance.balanceUS}}</td>\r\n                <td>{{balance.balance}}</td>\r\n                <td><div class=\"ell, w6\">{{balance.address}}</div></td>\r\n                <td>{{balance.available}}</td>\r\n                <td>{{balance.pending}}</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </section>\r\n    <!--<section>\r\n        <app-markets-summary [markets]=\"baseMarkets\" [title]=\"baseMarketsTitle\"></app-markets-summary>\r\n    </section>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-balances/bittrex-balances.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexBalancesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-private.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BittrexBalancesComponent = (function () {
    //baseMarkets:VOMarketB[];
    /// baseMarketsTitle:string;
    // requestedMarkets:VOMarketSummary[]
    // requestedMarketsTitle:string;
    function BittrexBalancesComponent(bitrexService, dialog, router, marketCap) {
        this.bitrexService = bitrexService;
        this.dialog = dialog;
        this.router = router;
        this.marketCap = marketCap;
    }
    BittrexBalancesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bitrexService.getBalances().subscribe(function (res) {
            console.log(res);
            if (!res)
                return;
            /* this.marketCap.getAllCoinsData().subscribe(coins=>{
               if(!coins) return;
               res.forEach(function (item) {
                 let coinData = this.coins[item.symbol];
                 if(coinData)item.balanceUS = (coinData.price_usd * +item.balance).toFixed(2) ;
                 else console.log(' no ' + item.symbol);
       
               },{coins:coins})
       
             })*/
            _this.data = res;
            _this.render();
        });
        //this.bitrexService.
        /* this.bitrexService.getBaseMarkets().subscribe(res=> {
     
           let ar = _.values(res);
     
           ar.forEach(function (item) {
             item.usBid = item.Bid.toFixed(2);
             item.usAsk = item.Ask.toFixed(2);
             item.usLow = item.Low.toFixed(2);
             item.usHigh = item.High.toFixed(2);
             item.usLast = item.Last.toFixed(2);
             item.dVolume = item.Volume.toFixed(2);
             item.usPrevDay = item.PrevDay.toFixed(2);
     
           })
           this.baseMarketsTitle = 'Base markets: BTC ETH';
           this.baseMarkets = ar
         });*/
    };
    BittrexBalancesComponent.prototype.onSymbolClick = function (balance) {
    };
    BittrexBalancesComponent.prototype.onChartClick = function (balance) {
        var mc = this.marketCap.getBySymbol(balance.symbol);
        if (mc)
            window.open('https://coinmarketcap.com/currencies/' + mc.id, '_blank');
    };
    BittrexBalancesComponent.prototype.onBuyClick = function (balance) {
        // console.log(balance);
        var symbol = balance.symbol;
        this.router.navigateByUrl('/my-bittrex/buy-sell/' + symbol);
    };
    BittrexBalancesComponent.prototype.render = function () {
        var ar;
        if (this.isShowAll) {
            ar = this.data;
        }
        else
            ar = this.data.filter(function (item) {
                return +item.balance !== 0;
            });
        this.total = ar.reduce(function (a, b) { return a + +b.balanceUS; }, 0).toFixed(2);
        this.balancesAr = ar.sort(function (a, b) { return +a.balanceUS > +b.balanceUS ? -1 : 1; });
    };
    BittrexBalancesComponent.prototype.onShowAll = function (evt) {
        this.isShowAll = evt.checked;
        this.render();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('checkbox1'),
        __metadata("design:type", Object)
    ], BittrexBalancesComponent.prototype, "checkbox1", void 0);
    BittrexBalancesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bittrex-balances',
            template: __webpack_require__("../../../../../src/app/bittrex/bittrex-balances/bittrex-balances.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-balances/bittrex-balances.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__["a" /* BittrexPrivateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__["a" /* BittrexPrivateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _d || Object])
    ], BittrexBalancesComponent);
    return BittrexBalancesComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=bittrex-balances.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-buy-sell/bittrex-buy-sell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".oprderbook{\r\n    height: 400px;\r\n    overflow: auto;\r\n}\r\n\r\nmd-progress-spinner{\r\n    width: 30px;\r\n    height: 30px;\r\n    display: inline-block;\r\n}\r\n\r\nmd-slider {\r\n    width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-buy-sell/bittrex-buy-sell.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <section>\r\n\r\n        <h4>{{transfer.symbolFrom}}</h4>\r\n        <small>\r\n           <!-- <span *ngIf=\"progress\"> Downloading</span>-->\r\n            Markets: {{numMarkets$ | async}}</small>\r\n\r\n        <md-select *ngIf=\"isCanBuy\" placeholder=\"Buy or sell\" (change)=\"onBuySellSelected($event)\">\r\n            <md-option value=\"Buy\">\r\n              Buy\r\n            </md-option>\r\n            <md-option value=\"Sell\">\r\n                Sell\r\n            </md-option>\r\n        </md-select>\r\n\r\n\r\n       <!-- <md-progress-spinner  mode=\"determinate\" [value]=\"progress\" color=\"accent\" ></md-progress-spinner>-->\r\n        <ng-container *ngIf=\"balance\">\r\n            <table>\r\n                <tr>\r\n                    <th>by MC</th>\r\n                    <th>Balance</th>\r\n                    <th>Available</th>\r\n                    <th>Pending</th>\r\n                    <th>Address</th>\r\n                </tr>\r\n                <tr>\r\n                    <td>${{balance.balanceUS}}</td>\r\n                    <td>{{balance.balance}}</td>\r\n                    <td>{{balance.available}}</td>\r\n                    <td>{{balance.pending}}</td>\r\n                    <td>{{balance.address}}</td>\r\n                </tr>\r\n\r\n            </table>\r\n\r\n        </ng-container>\r\n    </section>\r\n    <hr/>\r\n    <section>\r\n\r\n        <md-select placeholder=\"Select Market\" (change)=\"onMarketSelected($event)\">\r\n            <md-option *ngFor=\"let selectMarket of symbolMarkets\" [value]=\"selectMarket.MarketName\">\r\n                {{selectMarket.MarketName}}\r\n            </md-option>\r\n        </md-select>\r\n\r\n        <md-input-container  class=\"w5\">\r\n            <input  mdInput placeholder=\"$US\" type=\"text\" [(ngModel)] = \"transfer.amountUS\" (ngModelChange)=\"onAmountUSChange($event)\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <!--  <input  mdInput placeholder=\"{{transfer.symbolFrom}}\" type=\"text\" [(ngModel)] = \"transfer.amountFrom\" (ngModelChange)=\"onAmountFromChange($event)\">-->\r\n            <input  mdInput placeholder=\"{{transfer.symbolFrom}}\" type=\"text\" [ngModel] = \"transfer.amountFrom\" readonly>\r\n\r\n        </md-input-container>\r\n        <md-input-container>\r\n            <input  mdInput placeholder=\"Rate {{percentOfLast}}%\" type=\"text\" [(ngModel)] = \"transfer.rate\" (ngModelChange)=\"onRateChange($event)\">\r\n        </md-input-container>\r\n\r\n\r\n        <md-input-container>\r\n           <!-- <input  mdInput placeholder=\"{{transfer.symbolTo}} ({{transfer.nameTo}})\" type=\"text\" [(ngModel)] = \"transfer.amountTo\" (ngModelChange)=\"onAmountToChange($event)\">-->\r\n            <input  mdInput placeholder=\"{{transfer.symbolTo}} ({{transfer.nameTo}})\" type=\"text\" readonly [ngModel] = \"transfer.amountTo\">\r\n        </md-input-container>\r\n<!--\r\n        <div class=\"my-input-container\">\r\n            <div class=\"inline-block\">\r\n                <span>{{amoutTo}}</span>\r\n                <span class=\"mat-input-placeholder-wrapper\" >{{symbolTo}} <span class=\"small\">({{nameTo}})</span></span>\r\n            </div>\r\n\r\n        </div>-->\r\n\r\n        <button *ngIf=\"isCreateWallet\" md-raised-button color=\"accent\" (click)=\"onCreateWalletClick()\" >Create Wallet</button>\r\n        <button *ngIf=\"!isCreateWallet\" md-raised-button color=\"accent\" (click)=\"onActionClick()\" disabled=\"{{isDisabled}}\">{{action}}</button>\r\n        <div class=\"ell w5\"> {{transfer.addressTo}} </div>\r\n\r\n    </section>\r\n\r\n    <br/>\r\n    <section>\r\n        &nbsp;&nbsp; <span class=\"fabtn fa fa-list\" title=\"Show all Markets details\" (click)=\"onShowMarketsClick()\"></span>\r\n        &nbsp;&nbsp; <span class=\"fabtn fa fa-info\" title=\"Show Original numbers\"  (click)=\"onInfoClick()\"></span>\r\n        &nbsp;&nbsp; <div class=\"fa fa-book fabtn\" title=\"Orders Book \" (click)=\"onBookClick()\"></div>\r\n\r\n        <div  *ngIf=\"isInfo\">\r\n            <table>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Prev Day</th>\r\n                    <th>Last</th>\r\n                    <th>High</th>\r\n                    <th>Low</th>\r\n                    <th>Bid</th>\r\n                    <th>Ask</th>\r\n                    <th>To Sell</th>\r\n                    <th>To Buy</th>\r\n                    <th>Volume</th>\r\n                </tr>\r\n                <tr>\r\n                    <td>{{market.MarketName}}</td>\r\n                    <td><span class=\"btn\" (click)=\"onRateClick(market.PrevDay)\">{{market.PrevDay}}</span></td>\r\n                    <td><span class=\"btn\" (click)=\"onRateClick(market.Last)\">{{market.Last}}</span></td>\r\n                    <td><span class=\"btn\" (click)=\"onRateClick(market.High)\">{{market.High}}</span></td>\r\n                    <td><span class=\"btn\" (click)=\"onRateClick(market.Low)\">{{market.Low}}</span></td>\r\n                    <td><span class=\"btn\" (click)=\"onRateClick(market.Bid)\">{{market.Bid}}</span></td>\r\n                    <td><span class=\"btn\" (click)=\"onRateClick(market.Ask)\">{{market.Ask}}</span></td>\r\n                    <td title=\"Open Sell Orders\">{{market.OpenSellOrders}}</td>\r\n                    <td title=\"Open Buy Orders\">{{market.OpenBuyOrders}}</td>\r\n                    <td>{{market.Volume}}</td>\r\n\r\n                </tr>\r\n\r\n            </table>\r\n\r\n        </div>\r\n\r\n    </section>\r\n<hr/>\r\n    <section>\r\n\r\n        <div *ngIf=\"isShowMarkets\">\r\n            <app-markets-summary [markets]=\"symbolMarkets\" [title]=\"symbolMarketsTitle\" (market)=\"onMarketClickInList($event)\"></app-markets-summary>\r\n        </div>\r\n    </section>\r\n\r\n<br/>\r\n    <section>\r\n\r\n        <table *ngIf=\"!!orderBookBuy\">\r\n            <tbody>\r\n            <tr>\r\n                <td>\r\n                    <h5>Buy</h5> <small>Total: {{orderBookBuy.length}}</small>\r\n                    <div class=\"oprderbook\">\r\n                        <table>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td>Quantity</td>\r\n                                <td>Rate</td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let buy of orderBookBuy\">\r\n                                <td>{{buy.dQuantity}}</td>\r\n                                <td>{{buy.dRate}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </td>\r\n                <td>\r\n                    <h5>Sell </h5><small>Total: {{orderBookSell.length}}</small>\r\n\r\n                    <div class=\"oprderbook\">\r\n                        <table>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td>Quantity</td>\r\n                                <td>Rate</td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let sell of orderBookSell\">\r\n                                <td>{{sell.dQuantity}}</td>\r\n                                <td>{{sell.dRate}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-buy-sell/bittrex-buy-sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexBuySellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-private.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exchanges_services_bittrex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bittrex.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BittrexBuySellComponent = (function () {
    // private service:BittrexPrivateService;
    function BittrexBuySellComponent(route, router, service, bitterexPublic, marketCap, snackBar) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.bitterexPublic = bitterexPublic;
        this.marketCap = marketCap;
        this.snackBar = snackBar;
        // @ViewChild('amount') amount;
        this.transfer = {
            market: '',
            symbolFrom: '',
            amountFrom: 0,
            amountUS: '',
            amountTo: 0,
            symbolTo: '',
            nameTo: '',
            addressTo: '',
            rate: -1,
            priceUS: -1,
            fee: 0
        };
        this.action = 'Buy';
        this.baseMarkets = ['BTC', 'ETH', 'USDT'];
        this.progress = 20;
        this.isDisabled = true;
    }
    BittrexBuySellComponent.prototype.ngOnInit = function () {
        // this.numMarkets$ = this.service.numMarkets$;
        // this.service.progress$.subscribe(res=>this.progress = res);
        //let pairs = this.route.snapshot.paramMap.get('pairs');
        var _this = this;
        this.transfer.symbolFrom = this.route.snapshot.paramMap.get('symbol');
        if (this.baseMarkets.indexOf(this.transfer.symbolFrom) !== -1) {
            this.isCanBuy = true;
        }
        else {
            this.isCanBuy = false;
            this.action = 'Sell';
            this.initBuySell();
        }
        this.service.getBalance(this.transfer.symbolFrom).subscribe(function (res) {
            if (!res)
                return;
            _this.balance = res;
            _this.transfer.amountFrom = +_this.balance.balance;
            _this.transfer.symbolFrom = _this.balance.symbol;
            _this.marketCap.getAllCoinsData().subscribe(function (allData) {
                var coin = allData[_this.transfer.symbolFrom];
                console.log(coin);
                if (!coin)
                    return;
                _this.transfer.priceUS = coin.price_usd;
                _this.transfer.amountUS = (_this.transfer.amountFrom * _this.transfer.priceUS).toFixed(2);
            });
            // this.transfer.amountUS = this.balance.balanceUS;
        });
    };
    BittrexBuySellComponent.prototype.onAmountUSChange = function (evt) {
        if (this.transfer.priceUS === -1)
            return;
        this.transfer.amountFrom = +(+this.transfer.amountUS / this.transfer.priceUS).toFixed(8);
        if (this.transfer.rate === -1)
            return;
        this.calculateTo();
    };
    BittrexBuySellComponent.prototype.calculateFrom = function () {
        this.transfer.amountFrom = +(this.action !== 'Sell' ?
            this.transfer.amountTo * this.transfer.rate :
            this.transfer.amountTo / this.transfer.rate)
            .toPrecision(8);
        if (this.transfer.priceUS === -1)
            return;
        this.transfer.amountUS = (this.transfer.amountFrom * this.transfer.priceUS).toFixed(2);
    };
    BittrexBuySellComponent.prototype.calculateTo = function () {
        this.transfer.amountTo = +(this.action === 'Sell' ?
            this.transfer.amountFrom * this.transfer.rate :
            this.transfer.amountFrom / this.transfer.rate)
            .toPrecision(8);
        this.percentOfLast = Math.round((this.transfer.rate - this.market.Last) / this.market.Last * 100);
    };
    BittrexBuySellComponent.prototype.onAmountToChange = function (evt) {
        this.calculateFrom();
        console.log(evt);
        // this.transfer.amountFrom = +(this.transfer.rate * this.transfer.amountTo).toFixed(8);
    };
    BittrexBuySellComponent.prototype.onRateClick = function (rate) {
        this.transfer.rate = +rate;
        this.calculateTo();
    };
    BittrexBuySellComponent.prototype.initBuySell = function () {
        var _this = this;
        this.service.bittrexPublic.searchCoin(this.transfer.symbolFrom, this.action === 'Sell').subscribe(function (res) {
            if (res.length == 1) {
                //this.onMarketSelected(res[0]);
            }
            _this.symbolMarkets = __WEBPACK_IMPORTED_MODULE_6_lodash__["orderBy"](res, 'MarketName');
        });
    };
    BittrexBuySellComponent.prototype.onAmountFromChange = function (evt) {
        this.transfer.amountUS = (this.transfer.amountFrom * this.transfer.priceUS).toFixed(2);
        this.calculateTo();
    };
    BittrexBuySellComponent.prototype.onRateChange = function (evt) {
        this.calculateTo();
        //this.calculateOut();
    };
    BittrexBuySellComponent.prototype.setTransfer = function () {
        var _this = this;
        this.transfer.symbolTo = this.action === 'Sell' ? this.market.MarketName.split('-')[0] : this.market.MarketName.split('-')[1];
        this.transfer.symbolFrom = this.action === 'Sell' ? this.market.MarketName.split('-')[1] : this.market.MarketName.split('-')[0];
        this.service.getBalance(this.transfer.symbolTo).subscribe(function (bal) {
            console.log(bal);
            if (!bal) {
                _this.isCreateWallet = true;
                _this.isDisabled = true;
            }
            else {
                _this.isDisabled = false;
                _this.isCreateWallet = false;
            }
            _this.transfer.rate = _this.market.Last;
            if (_this.transfer.rate === -1)
                return;
            console.log('calculateOu   ' + _this.transfer.amountFrom);
            var to = _this.transfer.symbolTo;
            var search = _this.action === 'Sell' ? to + '-' : '-' + to;
            var lite = _this.symbolMarkets.find(function (item) {
                return item.MarketName.indexOf(to) !== -1;
            }, { to: search });
            _this.transfer.nameTo = lite.MarketCurrencyLong;
            _this.calculateTo();
        });
    };
    BittrexBuySellComponent.prototype.refrshBalances = function () {
        var _this = this;
        this.service.getBalances(true).subscribe(function (bals) {
            console.log(bals);
            _this.service.getBalance(_this.transfer.symbolTo).subscribe(function (bal) {
                if (bal) {
                    _this.isCreateWallet = false;
                    _this.isDisabled = false;
                }
                else {
                    _this.isCreateWallet = true;
                    alert('Error creating wallet. Please login into your account and create wallet manually for ' + _this.transfer.symbolTo);
                    _this.router.navigateByUrl('/my-bittrex/balances');
                }
            });
        });
    };
    BittrexBuySellComponent.prototype.onCreateWalletClick = function () {
        var _this = this;
        if (!confirm('You want to create new wallet' + this.transfer.symbolTo + '?'))
            return;
        this.isCreateWallet = false;
        this.service.createWallet(this.transfer.symbolTo).subscribe(function (res) {
            if (!res.result) {
                setTimeout(function () {
                    _this.isCreateWallet = true;
                    _this.refrshBalances();
                }, 70000);
                _this.snackBar.open('Creating wallet, Please wait 1 minite', 'x');
            }
            else
                _this.refrshBalances();
        });
    };
    BittrexBuySellComponent.prototype.onMarketClickInList = function (market) {
    };
    BittrexBuySellComponent.prototype.getDetailsOfCurrentMarket = function () {
        var marketName = this.transfer.market;
        //this.service.publicAPI.
        /* console.log(market);
         this.transfer.market  = market.MarketName;
         let ar = market.MarketName.split('-');//market.pair.split('_');
        this.symbolTo = ar[0];
        this.market = market;
         this.transfer.rate = market.Last;
         this.calculateOut();
         this.service.getOpenOrders(market.MarketName).subscribe(res=>{
           console.log(res);
         });
     */
    };
    BittrexBuySellComponent.prototype.onBookClick = function () {
        var _this = this;
        if (!this.symbolMarkets) {
            this.snackBar.open('Downloading Markets ', 'X', { duration: 3000 });
            return;
        }
        if (!this.market || !this.market.MarketName)
            return;
        this.isBook = !this.isBook;
        console.log(this.isBook);
        if (this.isBook) {
            this.bitterexPublic.getOrderBook(this.market.MarketName).subscribe(function (res) {
                console.log(res);
                _this.orderBookBuy = res.buy;
                _this.orderBookSell = res.sell;
            });
        }
        else {
            this.orderBookBuy = null;
        }
    };
    BittrexBuySellComponent.prototype.onActionClick = function () {
        var _this = this;
        // console.log(this.transfer);
        console.log(this.transfer);
        this.transfer.amountFrom = +this.transfer.amountFrom;
        this.transfer.rate = +this.transfer.rate;
        if (isNaN(this.transfer.amountFrom) || !this.transfer.market || isNaN(+this.transfer.rate)) {
            console.log(this.transfer);
            var notvalid = 'Amount, Rate and Market has to be fill in';
            alert(notvalid);
        }
        else {
            var fee_1 = this.transfer.amountFrom * 0.0025;
            fee_1 = this.transfer.priceUS * fee_1;
            this.transfer.fee = this.transfer.amountTo * 0.0025;
            this.marketCap.getAllCoinsData().subscribe(function (allCoins) {
                var mc = allCoins[_this.transfer.symbolTo];
                var usd = ' $' + (!!mc ? (+_this.transfer.amountTo * mc.price_usd).toFixed(2) : '');
                var message = 'Send request to market ' + _this.transfer.market + ' for Exchange' +
                    '\n From: ' + _this.transfer.amountFrom.toPrecision(4) + ' ' + _this.transfer.symbolFrom +
                    '\n Rate: ' + _this.transfer.rate.toPrecision(4) +
                    "\n To: " + _this.transfer.amountTo + ' ' + _this.transfer.symbolTo + usd +
                    "\n Fee: $" + fee_1.toFixed(3);
                if (confirm(message)) {
                    console.log(_this.transfer);
                    if (_this.action === "Sell") {
                        _this.service.sellLimit(_this.transfer.market, _this.transfer.amountFrom, _this.transfer.rate).subscribe(function (res) {
                            console.log(res);
                            if (res.result && res.result.uuid) {
                                _this.snackBar.open(res.result.uuid, 'x');
                            }
                            else
                                _this.snackBar.open(res.message, 'x');
                        });
                    }
                    else if (_this.action === 'Buy') {
                        _this.service.buyLimit(_this.transfer.market, (_this.transfer.amountTo), _this.transfer.rate).subscribe(function (res) {
                            console.log(res);
                            if (res.result && res.result.uuid) {
                                _this.snackBar.open(res.result.uuid, 'x');
                            }
                            else
                                _this.snackBar.open(res.message, 'x');
                        });
                    }
                    else
                        alert('Unknown Action ' + _this.action);
                }
            });
        }
    };
    BittrexBuySellComponent.prototype.onInfoClick = function () {
        if (!this.symbolMarkets) {
            this.snackBar.open('Downloading Markets ', 'X', { duration: 3000 });
            return;
        }
        if (!this.market) {
            this.snackBar.open('no Market selected ', 'X', { duration: 3000 });
            return;
        }
        this.isInfo = !this.isInfo;
    };
    BittrexBuySellComponent.prototype.onMarketSelected = function (evt) {
        var _this = this;
        // console.log(evt.value);
        var name = evt.value;
        var market = this.symbolMarkets.find(function (item) {
            return item.MarketName === name;
        });
        this.transfer.market = market.MarketName;
        this.bitterexPublic.getMarketSummary(market.MarketName).subscribe(function (market) {
            console.log(market);
            _this.market = market;
            _this.setTransfer();
        });
        //this.onMarketSelected(market);
    };
    BittrexBuySellComponent.prototype.onShowMarketsClick = function () {
        if (!this.symbolMarkets) {
            this.snackBar.open('Downloading Markets ', 'X', { duration: 3000 });
            return;
        }
        this.isShowMarkets = !this.isShowMarkets;
    };
    BittrexBuySellComponent.prototype.onBuySellSelected = function (option) {
        console.log(option);
        this.action = option.value;
        this.initBuySell();
    };
    BittrexBuySellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bittrex-buy-sell',
            template: __webpack_require__("../../../../../src/app/bittrex/bittrex-buy-sell/bittrex-buy-sell.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-buy-sell/bittrex-buy-sell.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__["a" /* BittrexPrivateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__["a" /* BittrexPrivateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__exchanges_services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__exchanges_services_bittrex_service__["a" /* BittrexService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSnackBar */]) === "function" && _f || Object])
    ], BittrexBuySellComponent);
    return BittrexBuySellComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=bittrex-buy-sell.component.js.map

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

module.exports = "<div>\r\n\r\n    <div>\r\n        <h3>Bittrex Summary </h3> <small *ngIf=\"marketsAr\"> Total {{marketsAr.length}}</small>\r\n        <div>\r\n            <md-checkbox #baseBTC checked=\"true\" (change)=\"onChangeBase()\">BTC</md-checkbox>\r\n            <md-checkbox #baseETH checked=\"true\" (change)=\"onChangeBase()\">ETH </md-checkbox>\r\n            <md-checkbox #baseUSDT checked=\"true\" (change)=\"onChangeBase()\">USDT </md-checkbox>\r\n        </div>\r\n\r\n\r\n        <table>\r\n            <tr class=\"small\">\r\n                <th>Name</th>\r\n\r\n                <th>Last</th>\r\n                <th>High</th>\r\n                <th>Low</th>\r\n\r\n                <th>Bid</th>\r\n                <th>Ask</th>\r\n                <th>Prev Day</th>\r\n\r\n                <th>Volume</th>\r\n                <th>Base Vol</th>\r\n                <th><span class=\"btn\" (click)=\"onSortClick('OpenBuyOrders')\" >To Buy</span></th>\r\n                <th><span class=\"btn\" (click)=\"onSortClick('OpenSellOrders')\">To Sell</span></th>\r\n\r\n               <!-- <th>Time</th>-->\r\n\r\n                <!--  <th>Sponsored</th>\r\n                  <th>Created</th>\r\n                  <th>Notice</th>-->\r\n            </tr>\r\n            <tr *ngFor=\"let market of marketsAr\">\r\n                <td><div class=\"w100 small\"><a (click)=\"onChartClick(market)\" class=\"fa fa-line-chart\"></a> {{market.MarketName}}</div></td>\r\n\r\n                <td>{{market.usLast}}</td>\r\n                <td>{{market.usHigh}}</td>\r\n                <td>{{market.usLow}}</td>\r\n\r\n\r\n                <td>{{market.usBid}}</td>\r\n                <td>{{market.usAsk}}</td>\r\n                <td>{{market.usPrevDay}}</td>\r\n\r\n                <td>{{market.dVolume}}</td>\r\n                <td>{{market.dBaseVolume}}</td>\r\n\r\n                <td>{{market.OpenBuyOrders}}</td>\r\n                <td>{{market.OpenSellOrders}}</td>\r\n\r\n\r\n               <!-- <td><small>{{market.TimeStamp}}</small></td>-->\r\n\r\n                <!--  <td>{{market.IsSponsored}}</td>\r\n                  <td class=\"my-timestamp\"><div>{{market.Created}}</div></td>\r\n                  <td class=\"notice\">{{market.Notice}}</td>-->\r\n            </tr>\r\n        </table>\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-data/bittrex-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bittrex_private_service__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-private.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    // marketsAr2:VOMarketB[];
    function BittrexDataComponent(bittrexService, 
        //private bittrexPublic:BittrexService,
        marketCap, snackBar) {
        this.bittrexService = bittrexService;
        this.marketCap = marketCap;
        this.snackBar = snackBar;
        this.asc_desc = 'desc';
    }
    BittrexDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  console.log('imit');
        this.bittrexService.bittrexPublic.getMarketsAr().subscribe(function (res) {
            // console.log(res);
            _this.marketsAr = res;
            //this.marketsAr2 = res;
        });
    };
    BittrexDataComponent.prototype.onChangeBase = function () {
        var checked = [];
        if (this.baseBTC.checked)
            checked.push('BTC');
        if (this.baseETH.checked)
            checked.push('ETH');
        if (this.baseUSDT.checked)
            checked.push('USDT');
        this.marketsAr = this.marketsAr.filter(function (item) {
            var base = item.pair.split('_')[0];
            return this.ar.indexOf(base) !== -1;
        }, { ar: checked });
        console.log(this.baseBTC.checked, this.baseETH.checked, this.baseUSDT.checked);
    };
    BittrexDataComponent.prototype.doSort = function (ar) {
        if (this.sortBy)
            this.marketsAr = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](ar, this.sortBy, this.asc_desc);
        else
            this.marketsAr = ar;
    };
    BittrexDataComponent.prototype.onSortClick = function (sortBy) {
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
    BittrexDataComponent.prototype.onChartClick = function (market) {
        var symbolTo = market.MarketName.split('-')[1];
        var mc = this.marketCap.getBySymbol(symbolTo);
        if (!mc) {
            this.snackBar.open('No coin ' + symbolTo, 'x', { duration: 3000 });
            return;
        }
        var id = mc.id;
        window.open('https://coinmarketcap.com/currencies/' + id, '_blank');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('baseBTC'),
        __metadata("design:type", Object)
    ], BittrexDataComponent.prototype, "baseBTC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('baseETH'),
        __metadata("design:type", Object)
    ], BittrexDataComponent.prototype, "baseETH", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('baseUSDT'),
        __metadata("design:type", Object)
    ], BittrexDataComponent.prototype, "baseUSDT", void 0);
    BittrexDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bittrex-data',
            template: __webpack_require__("../../../../../src/app/bittrex/bittrex-data/bittrex-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-data/bittrex-data.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__bittrex_private_service__["a" /* BittrexPrivateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__bittrex_private_service__["a" /* BittrexPrivateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSnackBar */]) === "function" && _c || Object])
    ], BittrexDataComponent);
    return BittrexDataComponent;
    var _a, _b, _c;
}());

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
    BittrexFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bittrex-filter',
            template: __webpack_require__("../../../../../src/app/bittrex/bittrex-filter/bittrex-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-filter/bittrex-filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BittrexFilterComponent);
    return BittrexFilterComponent;
}());

//# sourceMappingURL=bittrex-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-login/bittrex-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n    width: 350px;\r\n    border-bottom: thin solid crimson;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-login/bittrex-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form #f1=\"ngForm\"  autocomplete=\"off\">\n        <md-list>\n            <md-list-item>\n                <md-input-container>\n                    <input #username\n                           mdInput\n                           [(ngModel)]=\"credetials.apiKey\"\n                           required\n                           minlength=\"6\" type=\"text\" placeholder=\"apiKey\" name=\"email\" type=\"text\"/>\n                </md-input-container>\n            </md-list-item>\n\n            <md-list-item>\n                <md-input-container>\n                    <input mdInput\n                           placeholder=\"Password\"\n                           name=\"password\"\n                           [(ngModel)]=\"credetials.password\"\n                           required\n                           minlength=\"6\"\n                          type=\"text\"\n                           />\n                </md-input-container>\n            </md-list-item>\n            <md-list-item>\n                <md-checkbox #savepass >Save password </md-checkbox>\n            </md-list-item>\n\n            <md-list-item>\n                <button md-raised-button color=\"accent\"  (click)=\"onSubmit()\">\n                    Login\n                </button>\n            </md-list-item>\n        </md-list>\n\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-login/bittrex-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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


var BittrexLoginComponent = (function () {
    function BittrexLoginComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.credetials = data;
    }
    BittrexLoginComponent.prototype.ngAfterViewInit = function () {
    };
    BittrexLoginComponent.prototype.ngOnInit = function () {
        this.savepass.checked = this.credetials.save;
    };
    BittrexLoginComponent.prototype.onSubmit = function () {
        this.credetials.save = this.savepass.checked;
        this.dialogRef.close(this.credetials);
    };
    BittrexLoginComponent.prototype.saveData = function (chbox) {
        // this.credetials.save = chbox.checked;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('savepass'),
        __metadata("design:type", Object)
    ], BittrexLoginComponent.prototype, "savepass", void 0);
    BittrexLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bittrex-login',
            template: __webpack_require__("../../../../../src/app/bittrex/bittrex-login/bittrex-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-login/bittrex-login.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object])
    ], BittrexLoginComponent);
    return BittrexLoginComponent;
    var _a;
}());

//# sourceMappingURL=bittrex-login.component.js.map

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

module.exports = "<div>\r\n    <nav>\r\n        <a  routerLink='/my-bittrex/data'> Data</a>\r\n        <ng-container *ngIf=\"!!(isLoggedIn$ | async)\">\r\n            <a  routerLink='/my-bittrex/balances'> Balances</a>\r\n        </ng-container>\r\n\r\n    </nav>\r\n    <nav  *ngIf=\"!!(isuserLogin$ | async)\" class=\"right\">\r\n        <a *ngIf=\"!(isLoggedIn$ | async)\" (click)=\"onLoginClick()\" > Bittrex Login</a>\r\n        <a  *ngIf=\"!!(isLoggedIn$ | async)\"  (click)=\"onLogoutClick()\" >Bittrex Logout</a>\r\n    </nav>\r\n\r\n\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-main/bittrex-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-private.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bittrex_login_bittrex_login_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-login/bittrex-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
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
    function BittrexMainComponent(bittrex, dialog, storage) {
        this.bittrex = bittrex;
        this.dialog = dialog;
        this.storage = storage;
        this.isuserLogin$ = this.storage.isLogedIn$;
        this.isLoggedIn$ = bittrex.isLoggedIn$;
    }
    BittrexMainComponent.prototype.ngOnInit = function () {
        if (!this.storage.salt)
            return;
        var str = this.storage.getItem('Bittrex-credetials', true);
        if (str) {
            var credentials = JSON.parse(str);
            // console.log(credentials);
            if (credentials && credentials.apiKey && credentials.password)
                this.bittrex.login(credentials.apiKey, credentials.password);
        }
    };
    BittrexMainComponent.prototype.onLoginClick = function () {
        var _this = this;
        var str = this.storage.getItem('Bittrex-credetials', true);
        if (!this.storage.salt)
            return;
        var credentials = str ? JSON.parse(str) : { apiKey: '', password: '', save: false };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__bittrex_login_bittrex_login_component__["a" /* BittrexLoginComponent */], {
            data: credentials,
            height: '400px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result)
                return;
            if (result.save) {
                _this.storage.setItem('Bittrex-credetials', JSON.stringify(result), true);
            }
            else {
                _this.bittrex.logout();
                _this.storage.removeItem('Bittrex-credetials');
            }
            if (result.apiKey.length && result.password.length)
                _this.bittrex.login(result.apiKey, result.password);
            else
                _this.bittrex.logout();
        });
    };
    BittrexMainComponent.prototype.onLogoutClick = function () {
        if (confirm('Logout'))
            this.bittrex.logout();
    };
    BittrexMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bittrex-main',
            template: __webpack_require__("../../../../../src/app/bittrex/bittrex-main/bittrex-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-main/bittrex-main.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__["a" /* BittrexPrivateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__["a" /* BittrexPrivateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_app_storage_service__["a" /* StorageService */]) === "function" && _c || Object])
    ], BittrexMainComponent);
    return BittrexMainComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=bittrex-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-markets/bittrex-markets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-markets/bittrex-markets.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h5><div class=\"large\">{{coin}}</div>{{requestedMarketsTitle}}</h5>\n    <section>\n        <table>\n            <tr>\n                <th>Name</th>\n                <th>Volume</th>\n                <th>Prev Day</th>\n                <th>High</th>\n                <th>Low</th>\n                <th>Last</th>\n                <th>Bid</th>\n                <th>Ask</th>\n            </tr>\n            <tr *ngFor=\"let market of requestedMarkets\">\n                <td>{{market.MarketName}}</td>\n                <td>{{market.dVolume}}</td>\n                <td>{{market.usPrevDay}}</td>\n                <td>{{market.usHigh}}</td>\n                <td>{{market.usLow}}</td>\n                <td>{{market.usLast}}</td>\n                <td>{{market.usBid}}</td>\n                <td>{{market.usAsk}}</td>\n\n            </tr>\n        </table>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-markets/bittrex-markets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexMarketsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-private.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exchanges_services_bittrex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bittrex.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BittrexMarketsComponent = (function () {
    function BittrexMarketsComponent(bitrexService, bittrexPublic, route) {
        this.bitrexService = bitrexService;
        this.bittrexPublic = bittrexPublic;
        this.route = route;
    }
    BittrexMarketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var pairs = this.route.snapshot.paramMap.get('pairs');
        var coin = this.route.snapshot.paramMap.get('symbol');
        if (pairs) {
            this.requestedMarketsTitle = pairs;
            this.coin = '';
            this.bittrexPublic.getMarketsSummary(pairs.split(','))
                .subscribe(function (res) {
                // console.log(res);
                _this.requestedMarkets = res;
            });
        }
        else if (coin) {
            this.coin = coin;
            this.bittrexPublic.searchCoin(coin).subscribe(function (res) {
                console.log(res);
                var ar = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](res, 'pair');
                if (ar.length == 0) {
                    console.error(' no market for ' + coin);
                    _this.requestedMarkets = [];
                    return;
                }
                _this.requestedMarketsTitle = ar.toString();
                /*this.bittrexPublic.getMarketsSummary(ar)
                  .subscribe(res=>{
                    // console.log(res);
                    this.requestedMarkets = res;
                  })*/
            });
        }
        console.log(pairs);
        console.log(pairs);
    };
    BittrexMarketsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bittrex-markets',
            template: __webpack_require__("../../../../../src/app/bittrex/bittrex-markets/bittrex-markets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bittrex/bittrex-markets/bittrex-markets.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__["a" /* BittrexPrivateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bittrex_private_service__["a" /* BittrexPrivateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__exchanges_services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__exchanges_services_bittrex_service__["a" /* BittrexService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], BittrexMarketsComponent);
    return BittrexMarketsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=bittrex-markets.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/bittrex-private.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BittrexPrivateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__("../../../../crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exchanges_services_bittrex_service__ = __webpack_require__("../../../../../src/app/exchanges/services/bittrex.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as sha256 from 'fast-sha256';
//import sha256, { Hash, HMAC } from "fast-sha256";



var BittrexPrivateService = (function () {
    function BittrexPrivateService(http, marketCap, bittrexPublic) {
        this.http = http;
        this.marketCap = marketCap;
        this.bittrexPublic = bittrexPublic;
        this.balancesSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.balances);
        this.balances$ = this.balancesSub.asObservable();
        this.isLogedInSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.isLoggedIn$ = this.isLogedInSub.asObservable();
    }
    BittrexPrivateService.prototype.login = function (apiKey, password) {
        this.apiKey = apiKey;
        this.password = password;
        this.isLogedInSub.next(true);
    };
    BittrexPrivateService.prototype.buyLimit = function (market, quantity, rate) {
        var uri = 'https://bittrex.com/api/v1.1/market/buylimit';
        return this.call(uri, {
            market: market,
            quantity: quantity,
            rate: rate
        }).map(function (res) { return res.json(); });
    };
    BittrexPrivateService.prototype.sellLimit = function (market, quantity, rate) {
        var uri = 'https://bittrex.com/api/v1.1/market/selllimit';
        return this.call(uri, {
            market: market,
            quantity: quantity,
            rate: rate
        }).map(function (res) { return res.json(); });
    };
    /* getOrderBook(market: string, depthMax = '50') {
   
       let url = 'api/bittrex/getorderbook/' + market + '/' + depthMax;
       return this.http.get(url).map(res => {
         let r = res.json().result;
   
         console.log(r);
   
         let out = {
           buy:r.buy.map(function (item:VOOrderBook) {
             item.dQuantity = item.Quantity.toPrecision(4);
             item.dRate = item.Rate.toPrecision(4);
             return item;
           }),
           sell:r.sell.map(function (item:VOOrderBook) {
             item.dQuantity = item.Quantity.toPrecision(4);
             item.dRate = item.Rate.toPrecision(4);
             return item;
           })
         }
   
         return out;
       })
     }*/
    /*
    
      getMarketHistory(market: string) {
        let url = 'api/bittrex/getmarkethistory/' + market;
        return this.http.get(url).map(res => res.json())
      }
    */
    //{"success":false,"message":"ADDRESS_GENERATING","result":null}
    BittrexPrivateService.prototype.createWallet = function (symbol) {
        var uri = 'https://bittrex.com/api/v1.1/account/getdepositaddress';
        return this.call(uri, { currency: symbol }).map(function (res) {
            var r = res.json();
            return r;
        });
    };
    BittrexPrivateService.prototype.getOpenOrders = function (market) {
        var uri = 'https://bittrex.com/api/v1.1/market/getopenorders';
        return this.call(uri, { market: market }).map(function (res) {
            var r = res.json().result;
            return r;
        });
    };
    BittrexPrivateService.prototype.getBalance = function (symbol) {
        return this.getBalances().map(function (res) {
            console.log(res, symbol);
            if (!res)
                return null;
            return res.find(function (item) {
                return item.symbol === symbol;
            });
        }); // <VOBalance>_.find(res, {symbol:symbol}));
    };
    BittrexPrivateService.prototype._getBalances = function () {
        var uri = 'https://bittrex.com/api/v1.1/account/getbalances';
        return this.call(uri, {}).map(function (res) {
            var r = res.json();
            if (!r.result) {
                console.log("wrong respond", r);
                return;
            }
            return r.result.map(function (item) {
                return {
                    symbol: item.Currency,
                    address: item.CryptoAddress,
                    balance: item.Balance,
                    available: item.Available,
                    pending: item.Pending
                };
            });
        });
    };
    BittrexPrivateService.prototype.getBalances = function (refersh) {
        var _this = this;
        if (refersh === void 0) { refersh = false; }
        if (refersh)
            this.balances = null;
        console.log(' getBalances   getBalances');
        if (!this.balances) {
            this.marketCap.getAllCoinsData().subscribe(function (all) {
                if (!all)
                    return;
                _this._getBalances().subscribe(function (bals) {
                    if (!bals)
                        return;
                    bals.forEach(function (item) {
                        var mc = this.all[item.symbol];
                        if (mc) {
                            item.priceUS = mc.price_usd.toFixed(2);
                            item.balanceUS = (+item.balance * mc.price_usd).toFixed(2);
                            item.id = mc.id;
                        }
                    }, { all: all });
                    _this.balances = bals;
                    _this.balancesSub.next(bals);
                });
            });
        }
        return this.balances$;
    };
    /*
    
      getopenorders(){
        this.call('https://bittrex.com/api/v1.1/account/getbalances?').subscribe(res=>{
          console.log(res);
        })
    
        /!*this.call('https://bittrex.com/api/v1.1/market/getopenorders?').subscribe(res=>{
          console.log(res);
        })*!/
      }
    */
    BittrexPrivateService.prototype.call = function (uri, post) {
        if (!this.apiKey)
            return;
        post.apikey = this.apiKey;
        post.nonce = Math.ceil(Date.now() / 1000);
        var load = Object.keys(post).map(function (item) {
            return item + '=' + this.post[item];
        }, { post: post }).join('&');
        uri += '?' + load;
        console.log(uri);
        var signed = hash_hmac(uri, this.password);
        var url = '/api/bittrex/private';
        return this.http.post(url, { uri: uri, signed: signed });
    };
    BittrexPrivateService.prototype.logout = function () {
        this.apiKey = null;
        this.password = null;
        this.isLogedInSub.next(false);
    };
    BittrexPrivateService.formatMarketsUS2 = function (ar, baseBTC, baseETH, marketkap) {
        ar.forEach(function (item) {
            var name = item.MarketName;
            var pair = item.MarketName.split('-');
            item.pair = pair.join('_');
            var base = 1;
            var m = this.mc[pair[1]];
            if (m)
                item.usMC = m.price_usd.toPrecision(3);
            if (pair[0] === 'ETH')
                base = baseETH;
            else if (pair[0] === 'BTC')
                base = baseBTC;
            var last = item.Last * base;
            var fix = 0;
            if (last < 0.001) {
                fix = 6;
            }
            else if (last < 0.01) {
                fix = 5;
            }
            else if (last < 0.1) {
                fix = 4;
            }
            else if (last < 1) {
                fix = 3;
            }
            else if (last < 10) {
                fix = 2;
            }
            else if (last < 100) {
                fix = 1;
            }
            item.dBaseVolume = item.BaseVolume > 1000 ? item.BaseVolume.toFixed(0) : item.BaseVolume.toFixed(1);
            item.dVolume = item.Volume > 1e6 ? (item.Volume / 1e6).toFixed(3) + 'M' : item.Volume.toFixed(0);
            item.usAsk = (item.Ask * base).toFixed(fix);
            item.usBid = (item.Bid * base).toFixed(fix);
            item.usLow = (item.Low * base).toFixed(fix);
            item.usHigh = (item.High * base).toFixed(fix);
            item.usLast = (item.Last * base).toFixed(fix);
            item.usPrevDay = (item.PrevDay * base).toFixed(fix);
        }, { bB: baseBTC, bE: baseETH, mc: marketkap });
        return ar;
    };
    BittrexPrivateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__exchanges_services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__exchanges_services_bittrex_service__["a" /* BittrexService */]) === "function" && _c || Object])
    ], BittrexPrivateService);
    return BittrexPrivateService;
    var _a, _b, _c;
}());

function hash_hmac(text, password) {
    var dg = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["HmacSHA512"](text, password);
    return dg.toString(__WEBPACK_IMPORTED_MODULE_2_crypto_js__["enc"].Hex);
}
//# sourceMappingURL=bittrex-private.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bittrex_private_service__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-private.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_material_app_module__ = __webpack_require__("../../../../../src/app/material/material-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bittrex_login_bittrex_login_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-login/bittrex-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bittrex_balances_bittrex_balances_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-balances/bittrex-balances.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__markets_summary_markets_summary_component__ = __webpack_require__("../../../../../src/app/bittrex/markets-summary/markets-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__markets_summary_markets_summary_dialog__ = __webpack_require__("../../../../../src/app/bittrex/markets-summary/markets-summary.dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bittrex_markets_bittrex_markets_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-markets/bittrex-markets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bittrex_buy_sell_bittrex_buy_sell_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-buy-sell/bittrex-buy-sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__balance_markets_balance_markets_component__ = __webpack_require__("../../../../../src/app/bittrex/balance-markets/balance-markets.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: 'my-bittrex', component: __WEBPACK_IMPORTED_MODULE_2__bittrex_main_bittrex_main_component__["a" /* BittrexMainComponent */],
        children: [
            { path: '', redirectTo: 'data', pathMatch: 'full' },
            { path: 'filter', component: __WEBPACK_IMPORTED_MODULE_5__bittrex_filter_bittrex_filter_component__["a" /* BittrexFilterComponent */] },
            { path: 'data', component: __WEBPACK_IMPORTED_MODULE_6__bittrex_data_bittrex_data_component__["a" /* BittrexDataComponent */] },
            { path: 'markets/:pairs', component: __WEBPACK_IMPORTED_MODULE_14__bittrex_markets_bittrex_markets_component__["a" /* BittrexMarketsComponent */] },
            { path: 'coin-markets/:symbol', component: __WEBPACK_IMPORTED_MODULE_14__bittrex_markets_bittrex_markets_component__["a" /* BittrexMarketsComponent */] },
            { path: 'balances', component: __WEBPACK_IMPORTED_MODULE_11__bittrex_balances_bittrex_balances_component__["a" /* BittrexBalancesComponent */] },
            { path: 'buy-sell/:symbol', component: __WEBPACK_IMPORTED_MODULE_15__bittrex_buy_sell_bittrex_buy_sell_component__["a" /* BittrexBuySellComponent */] }
        ]
    }
];
var BittrexModule = (function () {
    function BittrexModule() {
    }
    BittrexModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            exports: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__material_material_app_module__["a" /* MaterialAppModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bittrex_main_bittrex_main_component__["a" /* BittrexMainComponent */],
                __WEBPACK_IMPORTED_MODULE_5__bittrex_filter_bittrex_filter_component__["a" /* BittrexFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__bittrex_data_bittrex_data_component__["a" /* BittrexDataComponent */],
                __WEBPACK_IMPORTED_MODULE_10__bittrex_login_bittrex_login_component__["a" /* BittrexLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__bittrex_balances_bittrex_balances_component__["a" /* BittrexBalancesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__markets_summary_markets_summary_component__["a" /* MarketsSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_13__markets_summary_markets_summary_dialog__["a" /* MarketsSummaryDialog */],
                __WEBPACK_IMPORTED_MODULE_14__bittrex_markets_bittrex_markets_component__["a" /* BittrexMarketsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__bittrex_buy_sell_bittrex_buy_sell_component__["a" /* BittrexBuySellComponent */],
                __WEBPACK_IMPORTED_MODULE_16__balance_markets_balance_markets_component__["a" /* BalanceMarketsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__bittrex_private_service__["a" /* BittrexPrivateService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__bittrex_login_bittrex_login_component__["a" /* BittrexLoginComponent */],
            ]
        })
    ], BittrexModule);
    return BittrexModule;
}());

//# sourceMappingURL=bittrex.module.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/markets-summary/markets-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table{\r\n    font-size: small;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bittrex/markets-summary/markets-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <section>\r\n        <table>\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Prev Day</th>\r\n                <th>Last</th>\r\n                <th>High</th>\r\n                <th>Low</th>\r\n                <th>Bid</th>\r\n                <th>Ask</th>\r\n                <th>To Sell</th>\r\n                <th>To Buy</th>\r\n                <th>Volume</th>\r\n            </tr>\r\n            <tr *ngFor=\"let market of markets\">\r\n                <td (click)=\"onMarketClick(market)\" class=\"btn\" >{{market.MarketName}}</td>\r\n                <td>{{market.usPrevDay}}</td>\r\n                <td>{{market.usLast}}</td>\r\n                <td>{{market.usHigh}}</td>\r\n                <td>{{market.usLow}}</td>\r\n                <td>{{market.usBid}}</td>\r\n                <td>{{market.usAsk}}</td>\r\n                <td title=\"Open Sell Orders\">{{market.OpenSellOrders}}</td>\r\n                <td title=\"Open Buy Orders\">{{market.OpenBuyOrders}}</td>\r\n                <td>{{market.dVolume}}</td>\r\n\r\n            </tr>\r\n        </table>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/bittrex/markets-summary/markets-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketsSummaryComponent; });
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

var MarketsSummaryComponent = (function () {
    function MarketsSummaryComponent() {
        // this.markets = data;
        this.title = 'Markets';
        this.market = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MarketsSummaryComponent.prototype.ngOnInit = function () {
    };
    MarketsSummaryComponent.prototype.onMarketClick = function (market) {
        this.market.emit(market);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MarketsSummaryComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MarketsSummaryComponent.prototype, "markets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], MarketsSummaryComponent.prototype, "market", void 0);
    MarketsSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-markets-summary',
            template: __webpack_require__("../../../../../src/app/bittrex/markets-summary/markets-summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bittrex/markets-summary/markets-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MarketsSummaryComponent);
    return MarketsSummaryComponent;
    var _a;
}());

//# sourceMappingURL=markets-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/bittrex/markets-summary/markets-summary.dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketsSummaryDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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


var MarketsSummaryDialog = (function () {
    function MarketsSummaryDialog(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.title = 'Markets';
        this.markets = data;
    }
    MarketsSummaryDialog.prototype.ngOnInit = function () {
    };
    MarketsSummaryDialog.prototype.onMarketClick = function (market) {
        //this.market.emit(market);
    };
    MarketsSummaryDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-markets-summary-dialog',
            template: __webpack_require__("../../../../../src/app/bittrex/markets-summary/markets-summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bittrex/markets-summary/markets-summary.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Array, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object])
    ], MarketsSummaryDialog);
    return MarketsSummaryDialog;
    var _a;
}());

//# sourceMappingURL=markets-summary.dialog.js.map

/***/ }),

/***/ "../../../../../src/app/com/mappers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mappers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_app_models__ = __webpack_require__("../../../../../src/app/models/app-models.ts");

var Mappers = (function () {
    function Mappers() {
    }
    Mappers.novaExchangeMarkets = function (marketsAr, indexed, base, result, marketCap) {
        result.forEach(function (item) {
            //let ar:string[] = item.MarketName.split('-');
            var market = new __WEBPACK_IMPORTED_MODULE_0__models_app_models__["b" /* VOMarket */]();
            market.base = item.basecurrency;
            if (base.indexOf(market.base) === -1)
                base.push(market.base);
            market.coin = item.currency;
            //market.marketCap = marketCap[market.coin];
            market.pair = item.marketname;
            market.id = item.marketname;
            market.exchange = 'novaexchange';
            market.Volume = +item.volume24h;
            market.Last = +item.last_price;
            market.High = +item.high24h;
            market.Low = +item.low24h;
            market.Ask = +item.ask;
            market.Bid = +item.bid;
            market.BaseVolume = +item.volume24h;
            market.change = +item.change24h;
            market.PrevDay = 0;
            var mcBase = marketCap[market.base];
            //if(!mcBase) console.warn(' no base price '+market.base +'  market name'+item.marketname)
            var basePrice = mcBase ? mcBase.price_usd : 0;
            var mc = marketCap[market.coin];
            Mappers.mapDisplayValues(market, basePrice, 4, mc);
            indexed[market.pair] = market;
            marketsAr.push(market);
        });
    };
    Mappers.poloniexMarkets = function (marketsAr, indexed, base, result, marketCap) {
        for (var str in result) {
            var market = new __WEBPACK_IMPORTED_MODULE_0__models_app_models__["b" /* VOMarket */]();
            var data = result[str];
            var ar = str.split('_');
            market.base = ar[0];
            if (base.indexOf(market.base) === -1)
                base.push(market.base);
            market.coin = ar[1];
            market.pair = str;
            market.id = str;
            market.exchange = 'poloniex';
            market.Volume = +data.quoteVolume;
            market.Last = +data.last;
            market.High = +data.highestBid;
            market.Low = +data.lowestAsk;
            market.Ask = +data.lowestAsk;
            market.Bid = +data.highestBid;
            market.BaseVolume = +data.baseVolume;
            market.PrevDay = (+data.high24hr + +data.low24hr) / 2;
            var mcBase = marketCap[market.base];
            var basePrice = mcBase ? mcBase.price_usd : 1;
            Mappers.mapDisplayValues(market, basePrice, 4, marketCap[market.coin]);
            var mc = marketCap[market.coin];
            if (!mc) {
                //console.log('no mc for ' + market.coin);
                market.usMC = '';
            }
            else
                market.usMC = mc.price_usd.toFixed(2);
            marketsAr.push(market);
        }
    };
    Mappers.hitbtcMarkets = function (marketsAr, indexed, base, result, marketCap) {
        for (var str in result) {
            var market = new __WEBPACK_IMPORTED_MODULE_0__models_app_models__["b" /* VOMarket */]();
            market.exchange = 'hitbtc';
            var item = result[str];
            var l = str.length;
            market.base = str.substr(l - 3);
            market.coin = str.substr(0, l - 3);
            market.pair = market.base + '_' + market.coin;
            market.id = str;
            if (base.indexOf(market.base) === -1)
                base.push(market.base);
            market.Volume = +item.volume_quote;
            market.BaseVolume = +item.volume;
            market.Ask = +item.ask;
            market.Bid = +item.bid;
            market.Last = +item.last;
            market.High = +item.high;
            market.Low = +item.low;
            market.PrevDay = +item.open;
            var basePrice = 1;
            if (market.base !== 'USD') {
                var mcBase = marketCap[market.base];
                basePrice = mcBase ? mcBase.price_usd : 0;
            }
            Mappers.mapDisplayValues(market, basePrice, 4, marketCap[market.coin]);
            marketsAr.push(market);
        }
    };
    Mappers.bittrexMarkets = function (marketsAr, indexed, base, result, marketCap) {
        result.forEach(function (item) {
            var ar = item.MarketName.split('-');
            var market = new __WEBPACK_IMPORTED_MODULE_0__models_app_models__["b" /* VOMarket */]();
            market.base = ar[0];
            if (base.indexOf(market.base) === -1)
                base.push(market.base);
            market.coin = ar[1];
            //market.marketCap = marketCap[market.coin];
            market.pair = ar.join('_');
            market.id = item.MarketName;
            market.exchange = 'bittrex';
            market.Volume = +item.Volume;
            market.Last = +item.Last;
            market.High = +item.High;
            market.Low = +item.Low;
            market.Ask = +item.Ask;
            market.Bid = +item.Bid;
            market.BaseVolume = +item.BaseVolume;
            market.PrevDay = item.PrevDay;
            market.OpenBuyOrders = item.OpenBuyOrders;
            market.OpenSellOrders = item.OpenSellOrders;
            var mcBase = marketCap[market.base];
            var basePrice = mcBase ? mcBase.price_usd : 1;
            Mappers.mapDisplayValues(market, basePrice, 4, marketCap[market.coin]);
            indexed[market.pair] = market;
            marketsAr.push(market);
        });
    };
    Mappers.cryptopiaMarkets = function (marketsAr, indexed, base, result, marketCap) {
        result.forEach(function (item) {
            var ar = item.Label.split('/');
            var market = new __WEBPACK_IMPORTED_MODULE_0__models_app_models__["b" /* VOMarket */]();
            market.base = ar[1];
            if (base.indexOf(market.base) === -1)
                base.push(market.base);
            market.coin = ar[0];
            market.pair = ar[1] + '_' + ar[0];
            market.id = item.Label;
            market.exchange = 'cryptopia';
            market.Volume = +item.Volume;
            market.Last = item.LastPrice;
            market.High = item.High;
            market.Low = item.Low;
            market.Ask = item.AskPrice;
            market.Bid = item.BidPrice;
            market.BaseVolume = item.BaseVolume;
            market.PrevDay = 0;
            market.OpenBuyOrders = item.BuyVolume;
            market.OpenSellOrders = item.SellVolume;
            var mcBase = marketCap[market.base];
            var basePrice = mcBase ? mcBase.price_usd : 1;
            Mappers.mapDisplayValues(market, basePrice, 4, marketCap[market.coin]);
            indexed[market.pair] = market;
            marketsAr.push(market);
        });
    };
    Mappers.mapDisplayValues = function (item, basePrice, prec, marketCap) {
        var base = basePrice;
        item.dVolume = (item.Volume / 1e6).toFixed(3) + 'M';
        item.dBaseVolume = item.BaseVolume.toFixed(2);
        item.usAsk = (item.Ask * base).toPrecision(prec);
        item.usBid = (item.Bid * base).toPrecision(prec);
        item.usLow = (item.Low * base).toPrecision(prec);
        item.usHigh = (item.High * base).toPrecision(prec);
        item.usLast = (item.Last * base).toPrecision(prec);
        item.usPrevDay = (item.PrevDay * base).toPrecision(prec);
        if (marketCap) {
            item.percent_change_7d = marketCap.percent_change_7d;
            item.percent_change_1h = marketCap.percent_change_1h;
            item.percent_change_24h = marketCap.percent_change_24h;
            item.usMC = marketCap.price_usd.toFixed(3);
        }
    };
    return Mappers;
}());

//# sourceMappingURL=mappers.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/create-watchdog/create-watchdog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-spinner {\r\n    float: left;\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 5px 10px 0px -10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email-service/create-watchdog/create-watchdog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n<hr/>\n    <table>\n        <tbody>\n        <tr>\n            <td>Market Cap $US</td>\n            <td><small>%</small>1h</td>\n            <td><small>%</small>24h</td>\n            <td><small>%</small>7d</td>\n        </tr>\n        <tr  *ngIf=\"coinMarket\">\n            <td>{{coinMarket.price_usd}}</td>\n            <td>{{coinMarket.percent_change_1h}}</td>\n            <td>{{coinMarket.percent_change_24h}}</td>\n            <td>{{coinMarket.percent_change_7d}}</td>\n        </tr>\n        </tbody>\n    </table>\n    <br/>\n    <md-input-container>\n      <small> <input [(ngModel)]=\"watchDog.uid\"  mdInput placeholder=\"ID\"  disabled name=\"uid\"></small>\n    </md-input-container>\n    <md-input-container>\n        <input [(ngModel)]=\"watchDog.dogName\"  mdInput placeholder=\"Dog Name\" name=\"label\">\n    </md-input-container>\n    <md-input-container>\n        <input [(ngModel)]=\"watchDog.description\"  mdInput placeholder=\"Description\" name=\"description\">\n    </md-input-container>\n\n\n    <md-select placeholder=\"New Watchdog\" (change)=\"onCoinSelectChanged($event)\">\n        <md-option *ngFor=\"let coin of coinsSelected\" [value]=\"coin.id\">\n             {{coin.symbol}} <span class=\"small\">({{coin.name}})</span>\n        </md-option>\n    </md-select>\n\n    <button md-raised-button color=\"accent\" (click)=\"saveDogClick()\">Save</button>\n    <hr/>\n    <div>\n        <h4> Watch Dogs </h4> <small>Total {{watchDogs.length}}</small>\n        <table>\n            <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Description</th>\n                <th>Script</th>\n                <th>Symbol</th>\n                <th>1h%</th>\n                <th>24h%</th>\n                <th>7days%</th>\n                <th>$US</th>\n                <th>Rank</th>\n                <th>Coin Name</th>\n                <td><small>Delete</small></td>\n            </tr>\n\n            <tbody>\n\n            <tr *ngFor=\"let dog of watchDogs\">\n                <td><small class=\"btn\" (click)=\"onDogClick(dog)\">{{dog.uid}}</small></td>\n                <td><b><small>{{dog.dogName}}</small></b></td>\n                <td><small>{{dog.description}}</small></td>\n                <td><div class=\"btn {{dog.scriptIcon}}\" (click)=\"onScriptClick(dog)\"></div></td>\n                <td><b><small>{{dog.marketCap.symbol}}</small></b></td>\n                <td>{{dog.marketCap.percent_change_1h}}</td>\n                <td>{{dog.marketCap.percent_change_24h}}</td>\n                <td>{{dog.marketCap.percent_change_7d}}</td>\n                <td>{{dog.marketCap.price_usd}}</td>\n                <td>{{dog.marketCap.rank}}</td>\n                <td><div class=\"w5 ell\">{{dog.marketCap.name}}</div></td>\n                <td><div (click)=\"onDeleteClick(dog)\"  class=\"fa fa-close\"></div></td>\n            </tr>\n\n            </tbody>\n        </table>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/create-watchdog/create-watchdog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateWatchdogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service_service__ = __webpack_require__("../../../../../src/app/email-service/email-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function CreateWatchdogComponent(marketCap, emailService, dialog, router, route) {
        this.marketCap = marketCap;
        this.emailService = emailService;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.coinsSelected = [];
        // selectedCoins:{[symbol:string]:VOExchangeData};
        this.watchDogs = [];
        this.sortCriteria = 'rank';
        this.asc_desc = 'asc';
        this.watchDog = this.emailService.currentWatchDog;
    }
    CreateWatchdogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var uid;
        this.sub3 = this.route.params.subscribe(function (params) {
            console.log(params);
            uid = params['uid'];
            _this.setCurrentById(uid);
        });
        this.sub1 = this.marketCap.getSelected().subscribe(function (coins) {
            console.log(coins);
            if (!coins)
                return;
            _this.coinsSelected = coins;
            _this.sub2 = _this.emailService.getWatchDogs().subscribe(function (res) {
                console.log(res);
                if (!res)
                    return;
                _this.watchDogs = res;
                if (!_this.watchDog.uid)
                    _this.setCurrentById(uid);
            });
        });
        /*
            this.emailService.watchDogs$.subscribe(res =>{
              this.setData(_.values(res))
        
            });*/
    };
    CreateWatchdogComponent.prototype.setCurrentById = function (uid) {
        console.log(uid);
        if (!uid || !this.watchDogs || this.watchDogs.length === 0)
            return;
        uid = uid.toUpperCase();
        var dog = this.watchDogs.find(function (item) {
            return item.uid === uid;
        });
        if (dog)
            this.watchDog = dog;
    };
    CreateWatchdogComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    };
    CreateWatchdogComponent.prototype.onDeleteClick = function (dog) {
        var _this = this;
        console.log(dog);
        var ref = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: {
                title: 'Alert',
                message: 'You want to delete watch dog ' + dog.uid + ' ' + dog.coinId + '?',
                buttons: ['Yes', 'No']
            } });
        ref.afterClosed().subscribe(function (res) {
            console.log(res);
            if (res === 'Yes')
                _this.emailService.deleteDog(dog);
        });
    };
    /*  setMarket(market:{[symbol:string]:VOExchangeData}){
        //this.marketsRaw = market;
        //this.coinsAvailable = _.values(market);
        this.mergeData();
    
      }*/
    CreateWatchdogComponent.prototype.saveDogClick = function () {
        var exists = this.emailService._getDogByUid(this.watchDog.uid);
        if (!exists) {
            this.emailService.addDog(this.watchDog);
        }
        this.emailService.saveData();
        // this.watchDog.market = this.coinMarket;
        // this.watchDog.uid = this.emailService.createUid(this.watchDog.symbol);
        ;
    };
    /*onClickHeader(criteria:string):void{
  
      if(this.sortCriteria === criteria){
        if(this.asc_desc === 'asc') this.asc_desc ='desc';
        else  this.asc_desc='asc';
      }else this.asc_desc = 'asc';
      console.log(this.asc_desc);
      this.sortCriteria = criteria;
      //this.setData(this.watchDogs);
  
    }*/
    CreateWatchdogComponent.prototype.onDogClick = function (dog) {
        this.router.navigateByUrl('/email-service/edit-watchdogs/' + dog.uid);
        // this.watchDog = dog;
    };
    CreateWatchdogComponent.prototype.onScriptClick = function (dog) {
        this.router.navigateByUrl('/email-service/edit-script/' + dog.uid);
    };
    CreateWatchdogComponent.prototype.onCoinSelectChanged = function (evt) {
        console.log(evt.value);
        var id = evt.value;
        var marketCap = this.coinsSelected.find(function (item) {
            return item.id === id;
        });
        var wd = this.emailService.getNewWatchDog();
        wd.coinId = id;
        wd.uid = this.emailService.createUid(marketCap.symbol);
        wd.dogName = marketCap.name;
        this.watchDog = wd;
        this.coinMarket = marketCap;
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
    CreateWatchdogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-create-watchdog',
            template: __webpack_require__("../../../../../src/app/email-service/create-watchdog/create-watchdog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-service/create-watchdog/create-watchdog.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__email_service_service__["a" /* EmailServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service_service__["a" /* EmailServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object])
    ], CreateWatchdogComponent);
    return CreateWatchdogComponent;
    var _a, _b, _c, _d, _e;
}());

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

module.exports = "<div class=\"content\">\n\n    <section>\n        <table>\n            <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Description</th>\n                <th>Symbol</th>\n                <th>1h%</th>\n                <th>24h%</th>\n                <th>7days%</th>\n                <th>$US</th>\n                <th>Rank</th>\n                <th>Coin Name</th>\n            </tr>\n\n            <tbody>\n\n            <tr>\n                <td><small>{{currentDog.uid}}</small></td>\n                <td><b><small>{{currentDog.dogName}}</small></b></td>\n                <td>{{currentDog.description}}</td>\n                <td><b><small>{{currentDog.marketCap.symbol}}</small></b></td>\n                <td>{{currentDog.marketCap.percent_change_1h}}</td>\n                <td>{{currentDog.marketCap.percent_change_24h}}</td>\n                <td>{{currentDog.marketCap.percent_change_7d}}</td>\n                <td>{{currentDog.marketCap.price_usd}}</td>\n                <td>{{currentDog.marketCap.rank}}</td>\n                <td><div class=\"w5 ell\">{{currentDog.marketCap.name}}</div></td>\n            </tr>\n\n            </tbody>\n        </table>\n\n    </section>\n    <section>\n\n        <div style=\" display: flex; flex-direction: row\" >\n            <div id=\"ScriptContentContainer\">\n\n                <span>{{currentDog.uid}}</span>\n\n                <md-select  [(ngModel)]=\"currentTrigger\" id=\"SelectTrigger\" #selectedTrigger placeholder=\"Select Variable\" >\n                    <md-option [value]=\"'send_notification'\"> <span class=\"fa fa-flash\"></span> Send Notification</md-option>\n                    <md-option *ngFor=\"let myvar of variablesAvailable\" [value]=\"myvar.index\">{{myvar.label}}</md-option>\n                </md-select>\n                <span class=\"fa fa-arrow-left\"> </span>\n                <button md-raised-button color=\"primary\" (click)=\"insertTrigget(selectedTrigger)\">\n                    <span class=\"fa fa-paste\"></span>\n                    Insert\n                </button>\n                <button color=\"accent\" md-raised-button  (click)=\"runScript()\" title=\"Run Script\">\n                    <span class=\"fa fa-flash\"></span>\n                    Test\n                </button>\n                <button md-raised-button color=\"primary\" (click)=\"saveDog()\">\n                    <span class=\"fa fa-save\"></span>\n                    Save\n                </button>\n\n\n\n                <div id=\"ScriptContent\"\n                     #scriptContent\n                     contenteditable=\"true\"\n                     spellcheck=\"false\"\n                     (blur)=\"onScriptContentBlur(scriptContent)\"\n                     (change)=\"onScriptContentChange(scriptContent)\">\n                </div>\n            </div>\n\n            <div class=\"current-changes\">\n\n                <h3>New Values</h3>\n                <table>\n                    <tbody>\n\n                    <tr *ngFor=\"let myvar of testVariables\">\n                        <td>{{myvar.index}}</td>\n                        <td>\n                            <input style=\"width: 3em\" type=\"number\" [(ngModel)]=\"myvar.value\"  name=\"value\" />\n\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n\n                <h3>Old Values</h3>\n                <table>\n                    <tbody>\n                    <tr>\n                        <td>old_percent_change_1h</td>\n                        <td>{{currentDog.marketCap.percent_change_1h}}</td>\n                    </tr>\n                    <tr>\n                        <td>old_percent_change_24h</td>\n                        <td>{{currentDog.marketCap.percent_change_24h}}</td>\n                    </tr>\n                    <tr>\n                        <td>old_percent_change_7d</td>\n                        <td>{{currentDog.marketCap.percent_change_7d}}</td>\n                    </tr>\n                    <tr>\n                        <td>old_price_usd</td>\n                        <td>{{currentDog.marketCap.price_usd}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n\n    </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/edit-script/edit-script.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditScriptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service_service__ = __webpack_require__("../../../../../src/app/email-service/email-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
        this.variablesAvailable = [
            { label: 'percent_change_1h', index: 'percent_change_1h' },
            { label: 'percent_change_24h', index: 'percent_change_24h' },
            { label: 'percent_change_7d', index: 'percent_change_7d' },
            { label: 'price_usd', index: 'price_usd' },
            { label: 'old_percent_change_1h', index: 'old_percent_change_1h' },
            { label: 'old_percent_change_24h', index: 'old_percent_change_24h' },
            { label: 'old_percent_change_7d', index: 'old_percent_change_7d' },
            { label: 'old_price_usd', index: 'old_price_usd' },
        ];
        this.testVariables = [
            { label: 'percent_change_1h', index: 'percent_change_1h', value: 10 },
            { label: 'percent_change_24h', index: 'percent_change_24h', value: 6 },
            { label: 'percent_change_7d', index: 'percent_change_7d', value: 5 },
            { label: 'price_usd', index: 'price_usd', value: 0.3 }
        ];
        this.currentDog = emailService.currentWatchDog;
    }
    EditScriptComponent.prototype.ngAfterViewInit = function () {
        // console.log();
    };
    EditScriptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub1 = this.route.params.subscribe(function (params) {
            var uid = params['uid'];
            uid = uid.toUpperCase();
            console.log(params);
            _this.sub2 = _this.emailService.getDogByUid(uid).subscribe(function (dog) {
                if (!dog)
                    return;
                console.log(dog);
                _this.setCurrentDog(dog);
            });
        });
    };
    EditScriptComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    };
    EditScriptComponent.prototype.runScript = function () {
        var _this = this;
        var script = this.scriptContent.nativeElement.innerText.toString();
        this.innerHTML = this.scriptContent.nativeElement.innerHTML;
        // console.log(script);
        var ar = this.testVariables;
        var values = {};
        var history = {};
        ar.forEach(function (item) {
            values[item.index] = +item.value;
        });
        var oldValue = this.currentDog.marketCap;
        var newValue = {
            id: oldValue.id,
            name: oldValue.name,
            symbol: oldValue.symbol,
            rank: oldValue.rank,
            price_usd: values['price_usd'],
            percent_change_1h: values['percent_change_1h'],
            percent_change_24h: values['percent_change_24h'],
            percent_change_7d: values['percent_change_7d']
        };
        var results = Object(__WEBPACK_IMPORTED_MODULE_4__run_watchdogs_script_analytics__["a" /* runDogScript */])(oldValue, newValue, script);
        console.log(results);
        if (results.length) {
            var message = results.join('<br/>');
            var subject = this.currentDog.uid + ' ' + this.currentDog.dogName + ' ' + this.currentDog.description || '';
            this.emailService.sendNotification(subject, message).subscribe(function (res) {
                console.log(res);
                if (res && res.message)
                    _this.snakBar.open(res.message, 'x', { duration: 3000 });
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
        else
            alert('Please click inside script text box');
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
            this.currentDog = this.emailService.getNewWatchDog();
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
            if (text && text.length > 50) {
                this.currentDog.status = 'full';
                this.currentDog.scriptIcon = 'fa fa-battery-full';
            }
            else {
                this.currentDog.scriptIcon = 'fa fa-battery-empty';
                this.currentDog.status = 'empty';
                this.currentDog.statusIcon = 'fa fa-play';
            }
            this.currentDog.scriptText = text;
            console.log(text);
            this.emailService.saveData();
            this.snakBar.open(this.currentDog.dogName + " Saved!", '', { duration: 3000 });
        }
        else
            this.snakBar.open("Error no Dog", 'Error', { duration: 3000 });
    };
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__email_service_service__["a" /* EmailServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service_service__["a" /* EmailServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
    ], EditScriptComponent);
    return EditScriptComponent;
    var _a, _b, _c, _d;
}());

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
    EmailAllCoinsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-email-all-coins',
            template: __webpack_require__("../../../../../src/app/email-service/email-all-coins/email-all-coins.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-service/email-all-coins/email-all-coins.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], EmailAllCoinsComponent);
    return EmailAllCoinsComponent;
    var _a;
}());

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

module.exports = "<div>\n\n    <nav>\n        <md-toolbar>\n            <a md-button routerLink=\"/email-service/selected-coins\" routerLinkActive=\"active-link\" >Seleced Coins</a>\n            <a md-button  routerLink='/email-service/edit-watchdogs'  routerLinkActive=\"active-link\">Edit Watchdogs</a>\n            <a md-button routerLink='/email-service/run-watchdogs'  routerLinkActive=\"active-link\">Run</a>\n            <a md-button routerLink=\"//market-cap/all-coins\"  routerLinkActive=\"active-link\" title=\"Select more Coins\">More Coins</a>\n\n            <div class=\"small\" style=\"margin-left: auto; order: 2;\">\n                <a  routerLink='/login/sign-in' class=\"btn\" *ngIf=\"!(isLoggedIn$ | async)\" >Login Email Service</a>\n                <a class=\"btn\" *ngIf=\"!!(isLoggedIn$ | async)\"  (click)=\"onLogoutClick()\" >Logout Email Service</a>\n            </div>\n\n        </md-toolbar>\n\n    </nav>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/email-main/email-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function EmailMainComponent(auth, snackBar) {
        this.auth = auth;
        this.snackBar = snackBar;
        this.isLoggedIn$ = auth.isLogedIn$;
    }
    EmailMainComponent.prototype.ngOnInit = function () {
    };
    /*onLoginClick(){
  
    }*/
    EmailMainComponent.prototype.onLogoutClick = function () {
        var _this = this;
        if (confirm('You want to logout from Email Service?')) {
            this.auth.logout().subscribe(function (res) {
                var color = res.error ? 'red' : 'black';
                _this.snackBar.open(res.message, 'x');
            });
        }
    };
    EmailMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-email-main',
            template: __webpack_require__("../../../../../src/app/email-service/email-main/email-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-service/email-main/email-main.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdSnackBar */]) === "function" && _b || Object])
    ], EmailMainComponent);
    return EmailMainComponent;
    var _a, _b;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
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
        this.allCoinsService.getSelected().subscribe(function (res) {
            if (res) {
                // let sel = this.allCoinsService.getSelected()
                // console.log(sel);
                _this.selectedCoins = res;
            }
        });
    };
    EmailSelectedCoinsComponent.prototype.setCoins = function (ar) {
        this.selectedCoins = ar;
    };
    EmailSelectedCoinsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-email-selected-coins',
            template: __webpack_require__("../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-service/email-selected-coins/email-selected-coins.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_app_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app_storage_service__["a" /* StorageService */]) === "function" && _b || Object])
    ], EmailSelectedCoinsComponent);
    return EmailSelectedCoinsComponent;
    var _a, _b;
}());

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















var routes = [
    {
        path: 'email-service', component: __WEBPACK_IMPORTED_MODULE_6__email_main_email_main_component__["a" /* EmailMainComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__email_selected_coins_email_selected_coins_component__["a" /* EmailSelectedCoinsComponent */] },
            { path: 'all-coins', component: __WEBPACK_IMPORTED_MODULE_7__email_all_coins_email_all_coins_component__["a" /* EmailAllCoinsComponent */] },
            { path: 'selected-coins', component: __WEBPACK_IMPORTED_MODULE_8__email_selected_coins_email_selected_coins_component__["a" /* EmailSelectedCoinsComponent */] },
            { path: 'edit-watchdogs', component: __WEBPACK_IMPORTED_MODULE_4__create_watchdog_create_watchdog_component__["a" /* CreateWatchdogComponent */] },
            { path: 'edit-watchdogs/:uid', component: __WEBPACK_IMPORTED_MODULE_4__create_watchdog_create_watchdog_component__["a" /* CreateWatchdogComponent */] },
            { path: 'edit-script/:uid', component: __WEBPACK_IMPORTED_MODULE_13__edit_script_edit_script_component__["a" /* EditScriptComponent */] },
            { path: 'run-watchdogs', component: __WEBPACK_IMPORTED_MODULE_5__run_watchdogs_run_watchdogs_component__["a" /* RunWatchdogsComponent */] }
        ]
    }
];
var EmailServiceModule = (function () {
    function EmailServiceModule() {
    }
    EmailServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_10__material_material_app_module__["a" /* MaterialAppModule */],
                __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forChild(routes)
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
    return EmailServiceModule;
}());

//# sourceMappingURL=email-service.module.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/email-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
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
    function EmailServiceService(http, storage, marketCap) {
        this.http = http;
        this.storage = storage;
        this.marketCap = marketCap;
        this.watchDogsSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.watchDogs);
        this.watchDogs$ = this.watchDogsSub.asObservable();
        this.currentWatchDog = this.getNewWatchDog();
    }
    EmailServiceService.prototype.getNewWatchDog = function () {
        return {
            uid: '',
            coinId: '',
            dogName: '',
            status: 'fa-battery-empty',
            marketCap: {
                id: '',
                name: '',
                symbol: '',
                rank: 0,
                price_usd: 0,
                percent_change_1h: 0,
                percent_change_24h: 0,
                percent_change_7d: 0
            }
        };
    };
    EmailServiceService.prototype.saveData = function () {
        var data = this.watchDogs.map(function (item) {
            var script = item.scriptText;
            if (script && script.length < 50)
                script = '';
            return {
                uid: item.uid,
                coinId: item.coinId,
                dogName: item.dogName,
                status: item.status,
                description: item.description,
                scriptText: script
            };
        });
        this.storage.setItem('watch-dogs', JSON.stringify(data));
        this.watchDogsSub.next(this.watchDogs);
    };
    EmailServiceService.prototype.getMarketCap = function () {
        return this.marketCap.getAllCoinsById();
    };
    EmailServiceService.prototype.getWatchDogs = function () {
        var _this = this;
        //console.log('getWatchDogs');
        var str = this.storage.getItem('watch-dogs');
        var ar = [];
        if (str) {
            try {
                ar = JSON.parse(str);
            }
            catch (e) {
                console.error(e);
            }
        }
        if (!this.watchDogs) {
            this.marketCap.getAllCoinsById().subscribe(function (data) {
                if (!data)
                    return;
                //console.log('email service marketCap.getAllCoinsById');
                _this.data = data;
                ar.forEach(function (item) {
                    item.scriptIcon = item.scriptText ? 'fa fa-battery-full' : 'fa fa-battery-empty';
                    item.statusIcon = item.status !== 'active' ? 'fa fa-play' : 'fa fa-pause';
                    item.marketCap = data[item.coinId];
                });
                _this.watchDogs = ar;
                _this.watchDogsSub.next(_this.watchDogs);
            });
        }
        return this.watchDogs$;
    };
    /* static mergeData(markets, ar:WatchDog[]){
   
       ar.forEach(function (item) {
   
         let market = markets[item.coinId];
   
   
   
   
       })
       //this.watchDogs  = _.orderBy(ar, this.sortCriteria, this.asc_desc);
   
     }*/
    EmailServiceService.prototype.addDog = function (dog) {
        dog.scriptIcon = dog.scriptText ? 'fa fa-battery-full' : 'fa fa-battery-empty';
        dog.statusIcon = dog.status !== 'active' ? 'fa fa-play' : 'fa fa-pause';
        dog.marketCap = this.data[dog.coinId];
        this.watchDogs.push(dog);
        this.watchDogsSub.next(this.watchDogs);
    };
    /*editDog(dog:WatchDog){
      if(!dog) return;
      console.log(dog);
  
     // this.getDogByUid(dog.uid).subscribe(res=>{
       // console.log(res);
       //if(!res) {
         dog.marketCap =  this.data[dog.coinId];
  
  
       //}
       this.saveData();
     //});
    }*/
    EmailServiceService.prototype.createUid = function (symbol) {
        var indexed = __WEBPACK_IMPORTED_MODULE_3_lodash__["keyBy"](this.watchDogs, 'uid');
        var i = 0;
        while (indexed[symbol + '_' + (++i)])
            ;
        return symbol + '_' + i;
    };
    EmailServiceService.prototype.deleteDog = function (dog) {
        this.watchDogs = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.watchDogs, function (item) {
            return item.uid !== dog.uid;
        });
        this.saveData();
        this.watchDogsSub.next(this.watchDogs);
    };
    EmailServiceService.prototype._getDogByUid = function (uid) {
        return this.watchDogs.find(function (item) {
            return item.uid === uid;
        });
    };
    EmailServiceService.prototype.getDogByUid = function (uid) {
        var _this = this;
        console.warn(uid);
        var sub;
        if (!this.watchDogs) {
            sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
            this.getWatchDogs().subscribe(function (dogs) {
                console.log(dogs);
                if (!dogs)
                    return;
                sub.next(_this._getDogByUid(uid));
            });
        }
        else {
            sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this._getDogByUid(uid));
        }
        return sub.asObservable();
        /* return this.getWatchDogs().switchMap((dogs)=>{
           return dogs.find(function (item) {
             return item.uid === uid
           })
         })*/
    };
    EmailServiceService.prototype.sendNotification = function (subject, message) {
        if (this.http.isLogedIn()) {
            var url = '/api/send-notification';
            var payload = {
                email: this.http.getUserEmail(),
                subject: subject,
                message: message
            };
            console.log(' sendNotification ' + url, payload);
            return this.http.post(url, payload).map(function (res) { return res.json(); });
        }
        else {
            var sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({ error: 'login', message: 'Please login into email service' });
            return sub.asObservable();
        }
    };
    EmailServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__["a" /* StorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _c || Object])
    ], EmailServiceService);
    return EmailServiceService;
    var _a, _b, _c;
}());

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

module.exports = "<div class=\"content\">\n      <section>\n        <h4> Watch Dogs </h4>\n        <small>Total {{watchDogs.length}}</small>\n\n        <button color=\"accent\" md-raised-button  (click)=\"startStopTimer()\" title=\"{{start_stop}}\">\n            <md-spinner mode=\"determinate\" value=\"{{progress}}\"></md-spinner>\n            <span *ngIf=\"!isRunning\" class=\"fa fa-play\"></span>\n            <span *ngIf=\"isRunning\" class=\"fa fa-pause\"></span>\n        </button>\n          <span>{{seconds}}s</span>\n          <span> Counter {{counter}}</span>\n\n        <table>\n            <tr>\n                <th>Status</th>\n                <th>ID</th>\n                <th>Name</th>\n               <th>Description</th>\n                <th>Script</th>\n                <th>1h%</th>\n                <th>24h%</th>\n                <th>7days%</th>\n                <th>$US</th>\n                <th>Rank</th>\n            </tr>\n\n            <tbody *ngFor=\"let dog of watchDogs\">\n            <tr>\n                <td><div class=\"red btn {{dog.statusIcon}}\" (click)=\"onStatusClick(dog)\"></div></td>\n                <td><small class=\"btn\" (click)=\"onDogClick(dog)\">{{dog.uid}}</small></td>\n                <td>{{dog.dogName}}</td>\n                <td><div class=\"ell w7\">{{dog.description}}</div></td>\n                <td><div class=\"btn {{dog.scriptIcon}}\" (click)=\"onScriptClick(dog)\"></div></td>\n                <td>{{dog.marketCap.percent_change_1h}}</td>\n                <td>{{dog.marketCap.percent_change_24h}}</td>\n                <td>{{dog.marketCap.percent_change_7d}}</td>\n                <td>{{dog.marketCap.price_usd}}</td>\n            </tr>\n\n            </tbody>\n        </table>\n\n    </section>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunWatchdogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service_service__ = __webpack_require__("../../../../../src/app/email-service/email-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__script_analytics__ = __webpack_require__("../../../../../src/app/email-service/run-watchdogs/script-analytics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function RunWatchdogsComponent(marketCap, emailService, dialog, snakBar, router) {
        this.marketCap = marketCap;
        this.emailService = emailService;
        this.dialog = dialog;
        this.snakBar = snakBar;
        this.router = router;
        this.counter = 0;
        this.watchDogs = [];
        this.refreshSeconds = 60 * 60;
        this.start_stop = "Start Refresh Timer";
        this.errors = [];
    }
    RunWatchdogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub1 = this.emailService.getWatchDogs().subscribe(function (res) {
            if (!res)
                return;
            console.log(res);
            _this.watchDogs = res;
        });
        this.sub2 = this.marketCap.coinsId$.subscribe(function (newData) {
            console.log('new data');
            if (!newData)
                return;
            // console.log(newData);
            _this.newData = newData;
            //  console.log('this.marketCap.coinsId$  triggered ');
            _this.runAnalytics();
        });
    };
    RunWatchdogsComponent.prototype.ngAfterViewInit = function () {
        // console.log();
    };
    RunWatchdogsComponent.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
    };
    RunWatchdogsComponent.prototype.onEditDog = function (dog) {
        this.router.navigateByUrl('/email-service/dog-edit/' + dog.uid);
    };
    RunWatchdogsComponent.prototype.runAnalytics = function () {
        var _this = this;
        var newValues = this.newData;
        if (!this.isRunning)
            return;
        if (!this.newData) {
            console.warn(' no data');
            return;
        }
        this.counter++;
        var ar = this.watchDogs.filter(function (item) {
            return item.status === 'active';
        });
        var results = [];
        var subjects = [];
        ar.forEach(function (item) {
            var newValue = newValues[item.coinId];
            var oldValue = item.marketCap;
            var script = item.scriptText;
            if (script && oldValue && newValue) {
                var res = Object(__WEBPACK_IMPORTED_MODULE_3__script_analytics__["a" /* runDogScript */])(oldValue, newValue, script);
                if (res.length) {
                    subjects.push('Watchdog ' + item.dogName);
                    results.push('Triggered ' + item.dogName + "\n" + (item.description || ''));
                    results = results.concat(res);
                    results.push(' end ' + item.dogName + "\n\r");
                }
            } //else console.warn(script ,oldValue, newValue);
        });
        console.log('results ', subjects);
        if (subjects.length === 0)
            return;
        var message = results.join("\n");
        this.emailService.sendNotification(subjects.toString(), message).subscribe(function (res) {
            console.log(res);
            if (res && res.message)
                _this.snakBar.open(res.message, 'x', { duration: 3000 });
            else
                _this.snakBar.open('Error send email', 'x', { duration: 3000 });
        });
    };
    RunWatchdogsComponent.prototype.onStatusClick = function (dog) {
        if (!dog.scriptText) {
            dog.status === 'empty';
            this.snakBar.open('Please create Script to run Watchdog', 'x', { duration: 3000 });
            return;
        }
        if (dog.status === 'active')
            dog.status = 'stop';
        else
            dog.status = 'active';
        dog.statusIcon = dog.status !== 'active' ? 'fa fa-play' : 'fa fa-pause';
    };
    RunWatchdogsComponent.prototype.onScriptClick = function (dog) {
        this.router.navigateByUrl('/email-service/edit-script/' + dog.uid);
    };
    RunWatchdogsComponent.prototype.loadData = function () {
        this.marketCap.refresh();
    };
    RunWatchdogsComponent.prototype.onDogClick = function (dog) {
        this.router.navigateByUrl('/email-service/edit-watchdogs/' + dog.uid);
    };
    RunWatchdogsComponent.prototype.stopTimer = function () {
        if (!this.isRunning)
            return;
        this.seconds = 0;
        this.progress = 0;
        clearInterval(this.interval);
        this.isRunning = false;
    };
    RunWatchdogsComponent.prototype.startTimer = function () {
        var _this = this;
        if (this.isRunning)
            return;
        this.isRunning = true;
        this.progress = 20;
        this.seconds = 0;
        this.loadData();
        this.interval = setInterval(function () {
            _this.seconds++;
            _this.progress = 5 + (_this.seconds / _this.refreshSeconds) * 100;
            if (_this.seconds > _this.refreshSeconds) {
                _this.seconds = 0;
                _this.loadData();
            }
        }, 1000);
    };
    RunWatchdogsComponent.prototype.startStopTimer = function () {
        if (!this.isRunning)
            this.startTimer();
        else
            this.stopTimer();
    };
    RunWatchdogsComponent.prototype.saveError = function (error) {
        this.errors.push(error);
    };
    RunWatchdogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-run-watchdogs',
            template: __webpack_require__("../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-service/run-watchdogs/run-watchdogs.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__email_service_service__["a" /* EmailServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service_service__["a" /* EmailServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object])
    ], RunWatchdogsComponent);
    return RunWatchdogsComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=run-watchdogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/email-service/run-watchdogs/script-analytics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runDogScript;
function runDogScript(oldValue, newValue, script) {
    var results = [];
    var send_notification = function (text) {
        results.push(text);
    };
    var old_percent_change_1h, old_percent_change_24h, old_percent_change_7d, old_price_usd, percent_change_1h, percent_change_24h, percent_change_7d, price_usd;
    old_percent_change_1h = oldValue.percent_change_1h;
    old_percent_change_24h = oldValue.percent_change_24h;
    old_percent_change_7d = oldValue.percent_change_7d;
    old_price_usd = oldValue.price_usd;
    percent_change_1h = newValue.percent_change_1h;
    percent_change_24h = newValue.percent_change_24h;
    percent_change_7d = newValue.percent_change_7d;
    price_usd = newValue.price_usd;
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
    WatchDogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WatchDogService);
    return WatchDogService;
}());

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
    WatchDogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-watch-dog',
            template: __webpack_require__("../../../../../src/app/email-service/watch-dog/watch-dog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/email-service/watch-dog/watch-dog.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], WatchDogComponent);
    return WatchDogComponent;
    var _a;
}());

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
    ExchangeSsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-exchange-ss',
            template: __webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchange-ss/exchange-ss.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_server_service__["a" /* ApiServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_server_service__["a" /* ApiServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__send_alert_service__["a" /* SendAlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__send_alert_service__["a" /* SendAlertService */]) === "function" && _c || Object])
    ], ExchangeSsComponent);
    return ExchangeSsComponent;
    var _a, _b, _c;
}());

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
    ExchangeSsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__api_server_service__["a" /* ApiServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_server_service__["a" /* ApiServerService */]) === "function" && _b || Object])
    ], ExchangeSsService);
    return ExchangeSsService;
    var _a, _b;
}());

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
    SendAlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], SendAlertService);
    return SendAlertService;
    var _a;
}());

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
    BitfinexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bitfinex',
            template: __webpack_require__("../../../../../src/app/exchanges/bitfinex/bitfinex.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/bitfinex/bitfinex.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bitfinex_service__["a" /* BitfinexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bitfinex_service__["a" /* BitfinexService */]) === "function" && _a || Object])
    ], BitfinexComponent);
    return BitfinexComponent;
    var _a;
}());

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

module.exports = "<div>\n    <div>\n        <section>\n            <a  routerLink='/bittrex/filter'> Filter </a>\n            <a routerLink='/my-bittrex'> My Bittrex </a>\n        </section>\n\n        <h3>Bittrex Summary </h3> <small *ngIf=\"marketsAr\"> Total {{marketsAr.length}}</small>\n        <section>\n\n            <table>\n                <tr>\n                    <th  (click)=\"onClickHeader('MarketName')\">Name</th>\n                    <th  (click)=\"onClickHeader('High')\">High</th>\n                    <th  (click)=\"onClickHeader('Low')\">Low</th>\n                    <th  (click)=\"onClickHeader('Volume')\">Volume</th>\n                    <th  (click)=\"onClickHeader('Last')\">Last</th>\n                    <th  (click)=\"onClickHeader('BaseVolume')\">Base Volume</th>\n\n                    <th  (click)=\"onClickHeader('Bid')\">Bid</th>\n                    <th  (click)=\"onClickHeader('Ask')\">Ask</th>\n\n                    <th  (click)=\"onClickHeader('OpenBuyOrders')\">To Buy</th>\n                    <th  (click)=\"onClickHeader('OpenSellOrders')\">To Sell</th>\n\n                    <th  (click)=\"onClickHeader('PrevDay')\">Prev Day</th>\n                    <th>Time</th>\n\n                    <!--  <th>Sponsored</th>\n                      <th>Created</th>\n                      <th>Notice</th>-->\n                </tr>\n                <tr *ngFor=\"let market of marketsAr\">\n                    <td>{{market.MarketName}}</td>\n                    <td>{{market.High}}</td>\n                    <td>{{market.Low}}</td>\n                    <td>{{market.Volume}}</td>\n                    <td>{{market.Last}}</td>\n                    <td>{{market.BaseVolume}}</td>\n\n                    <td>{{market.Bid}}</td>\n                    <td>{{market.Ask}}</td>\n\n                    <td>{{market.OpenBuyOrders}}</td>\n                    <td>{{market.OpenSellOrders}}</td>\n\n\n                    <td>{{market.PrevDay}}</td>\n                    <td><small>{{market.TimeStamp}}</small></td>\n\n                    <!--  <td>{{market.IsSponsored}}</td>\n                      <td class=\"my-timestamp\"><div>{{market.Created}}</div></td>\n                      <td class=\"notice\">{{market.Notice}}</td>-->\n                </tr>\n            </table>\n\n        </section>\n\n    </div>\n\n</div>\n"

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
        this.bittrexService.getMarketsAr().subscribe(function (res) {
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
    BittrexAvailableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bittrex-available',
            template: __webpack_require__("../../../../../src/app/exchanges/bittrex-available/bittrex-available.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/bittrex-available/bittrex-available.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service__["a" /* BittrexService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
    ], BittrexAvailableComponent);
    return BittrexAvailableComponent;
    var _a, _b;
}());

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
        this.marketCap.getAllCoinsData().subscribe(function (mcap) {
            if (!mcap)
                return;
            _this.bittrexService.getMarketsAr().subscribe(function (res) {
                // console.log(res);
                //   if(!res) return;
                // let indexed = this.bittrexService.markets;
                //  res.forEach(function (item) {
                /* let prec = 2;
                 let pairs= item.pair.split('_');
                 let  base  = indexed['USDT_'+pairs[0]];
                 if(base){
                   let price = base.last;
                   let prec = (item.last*price)<0.01?4:2;
                   item.usd_last = (item.last * price).toFixed(prec);
                 }else{
                   item.usd_last = item.last.toFixed(2);
                   console.log(' no base1 ' + pairs[0]);
                 }
       
                 let mc:VOMarketCap = mcap[pairs[1]];
       
                 if(mc){
                   item.usd_mcap = mc.price_usd.toFixed(prec);
       
                 }else {
                   item.usd_mcap ='0';
                   console.log('no marketcap ' + pairs[1]);
                 }
       
                 item.delta = ((item.high - item.low)/(item.low+item.high)/2*100).toFixed(2);
       
       
                 item.is_last_up = item.last>item.prevDay;
       
                 item.delta24 =  ((item.last - item.prevDay)/(item.last+item.prevDay)/2*100).toFixed(2);
       
       
               });
       */
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
    BittrexMarketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-bittrex-market',
            template: __webpack_require__("../../../../../src/app/exchanges/bittrex/bittrex-market.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/bittrex/bittrex-market.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bittrex_service__["a" /* BittrexService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
    ], BittrexMarketComponent);
    return BittrexMarketComponent;
    var _a, _b;
}());

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
        this.marketCap.getAllCoinsData().subscribe(function (allCoins) {
            //  console.log(res);
            _this.markets = allCoins;
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
                    //item.market_cap_usd = market.market_cap_usd;
                    item.market = market;
                }
                else
                    console.warn(' no coin ' + item.symbol);
            });
            this.coinsAvailable = __WEBPACK_IMPORTED_MODULE_3_lodash__["orderBy"](ar, 'rank');
        }
    };
    ChMarketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-ch-market',
            template: __webpack_require__("../../../../../src/app/exchanges/ch-market/ch-market.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/ch-market/ch-market.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_changelly_service__["a" /* ChangellyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_changelly_service__["a" /* ChangellyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
    ], ChMarketComponent);
    return ChMarketComponent;
    var _a, _b;
}());

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
    CoinExchangeMarketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-coin-exchange-market',
            template: __webpack_require__("../../../../../src/app/exchanges/coin-exchange-market/coin-exchange-market.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/coin-exchange-market/coin-exchange-market.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_coin_echange_service__["a" /* CoinEchangeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_coin_echange_service__["a" /* CoinEchangeService */]) === "function" && _a || Object])
    ], CoinExchangeMarketComponent);
    return CoinExchangeMarketComponent;
    var _a;
}());

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
    CoinbaseCurrenciesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-coinbase-currencies',
            template: __webpack_require__("../../../../../src/app/exchanges/coinbase-currencies/coinbase-currencies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/coinbase-currencies/coinbase-currencies.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_coinbase_service__["a" /* CoinbaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_coinbase_service__["a" /* CoinbaseService */]) === "function" && _a || Object])
    ], CoinbaseCurrenciesComponent);
    return CoinbaseCurrenciesComponent;
    var _a;
}());

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
    CryptopiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-cryptopia',
            template: __webpack_require__("../../../../../src/app/exchanges/cryptopia/cryptopia.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/cryptopia/cryptopia.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cryptopia_service__["a" /* CryptopiaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cryptopia_service__["a" /* CryptopiaService */]) === "function" && _a || Object])
    ], CryptopiaComponent);
    return CryptopiaComponent;
    var _a;
}());

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
    return ExchangesModule;
}());

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
    HitBtcMarketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-hit-btc-market',
            template: __webpack_require__("../../../../../src/app/exchanges/hit-btc-market/hit-btc-market.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/hit-btc-market/hit-btc-market.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hit_btc_service__["a" /* HitBtcService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hit_btc_service__["a" /* HitBtcService */]) === "function" && _a || Object])
    ], HitBtcMarketComponent);
    return HitBtcMarketComponent;
    var _a;
}());

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
    KrakenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-kraken',
            template: __webpack_require__("../../../../../src/app/exchanges/kraken/kraken.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/kraken/kraken.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_kraken_service__["a" /* KrakenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_kraken_service__["a" /* KrakenService */]) === "function" && _a || Object])
    ], KrakenComponent);
    return KrakenComponent;
    var _a;
}());

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
    NovaexchangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-novaexchange',
            template: __webpack_require__("../../../../../src/app/exchanges/novaexchange/novaexchange.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/novaexchange/novaexchange.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_novaexchange_service__["a" /* NovaexchangeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_novaexchange_service__["a" /* NovaexchangeService */]) === "function" && _a || Object])
    ], NovaexchangeComponent);
    return NovaexchangeComponent;
    var _a;
}());

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
        this.poloniex.getCurrencies().subscribe(function (res) {
            console.log(res);
        });
    };
    PoloniexDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-poloniex-data',
            template: __webpack_require__("../../../../../src/app/exchanges/poloniex-data/poloniex-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/poloniex-data/poloniex-data.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_poloniex_service__["a" /* PoloniexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_poloniex_service__["a" /* PoloniexService */]) === "function" && _a || Object])
    ], PoloniexDataComponent);
    return PoloniexDataComponent;
    var _a;
}());

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
        this.marketCap.getAllCoinsData().subscribe(function (res) {
            if (!res)
                return;
            _this.marketsUS = res;
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
    PoloniexTickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-poloniex-ticker',
            template: __webpack_require__("../../../../../src/app/exchanges/poloniex-ticker/poloniex-ticker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/poloniex-ticker/poloniex-ticker.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_poloniex_service__["a" /* PoloniexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_poloniex_service__["a" /* PoloniexService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
    ], PoloniexTickerComponent);
    return PoloniexTickerComponent;
    var _a, _b;
}());

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
                            var search = res.map(function (item) {
                                return {
                                    exchange: 'Bittrex',
                                    pair: item.MarketName.replace('-', '_')
                                };
                            });
                            results = results.concat(search);
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
    SearchCoinService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shape_shift_shape_shift_service__["a" /* ShapeShiftService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shape_shift_shape_shift_service__["a" /* ShapeShiftService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_changelly_service__["a" /* ChangellyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_changelly_service__["a" /* ChangellyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__services_yo_bit_service__["a" /* YoBitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_yo_bit_service__["a" /* YoBitService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_poloniex_service__["a" /* PoloniexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_poloniex_service__["a" /* PoloniexService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_bittrex_service__["a" /* BittrexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_bittrex_service__["a" /* BittrexService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_bitfinex_service__["a" /* BitfinexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_bitfinex_service__["a" /* BitfinexService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_coinbase_service__["a" /* CoinbaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_coinbase_service__["a" /* CoinbaseService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_coin_echange_service__["a" /* CoinEchangeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_coin_echange_service__["a" /* CoinEchangeService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11__services_hit_btc_service__["a" /* HitBtcService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_hit_btc_service__["a" /* HitBtcService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_12__services_kraken_service__["a" /* KrakenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_kraken_service__["a" /* KrakenService */]) === "function" && _k || Object])
    ], SearchCoinService);
    return SearchCoinService;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

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
    BitfinexService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], BitfinexService);
    return BitfinexService;
    var _a;
}());

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






var BittrexService = (function () {
    function BittrexService(http, marketCap) {
        this.http = http;
        this.marketCap = marketCap;
        this.marketsArSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.marketsAr$ = this.marketsArSub.asObservable();
        this.marketsSub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.markets$ = this.marketsSub.asObservable();
        this.progressSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.progress$ = this.progressSub.asObservable();
        this.numMarketsSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    BittrexService_1 = BittrexService;
    BittrexService.prototype._searchCoin = function (symbol, ar, sell) {
        return ar.filter(function (item) {
            if (sell)
                return item.MarketCurrency === symbol;
            else
                return item.BaseCurrency === symbol;
        });
    };
    BittrexService.prototype.searchCoin = function (symbol, sell) {
        var _this = this;
        if (sell === void 0) { sell = true; }
        var o;
        if (!this.marketsLiteAr) {
            var sub_1 = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
            o = sub_1.asObservable();
            this.loadMarkets().subscribe(function (res) {
                //  console.log(res);
                _this.marketsLiteAr = res;
                sub_1.next(_this._searchCoin(symbol, _this.marketsLiteAr, sell));
            });
        }
        else {
            var sb = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this._searchCoin(symbol, this.marketsLiteAr, sell));
            o = sb.asObservable();
        }
        return o;
    };
    BittrexService.prototype.loadAllMarketSummaries = function () {
        var _this = this;
        var url = 'api/bittrex/marketsummaries';
        // let url = 'https://bittrex.com/api/v1.1/public/getmarketsummaries';
        return this.marketCap.getAllCoinsData().switchMap(function (allcoins) {
            return _this.http.get(url).map(function (res) {
                if (!allcoins)
                    return null;
                var base = {
                    BTC: allcoins['BTC'].price_usd,
                    ETH: allcoins['ETH'].price_usd
                };
                return BittrexService_1.formatMarketsUS(res.json().result, base);
            });
        });
        //.map(function (item) {
        //item.pair = item.MarketName.split('-').join('_');
        //return item;
        //}));
    };
    BittrexService.prototype.getOrderBook = function (market, depthMax) {
        if (depthMax === void 0) { depthMax = '50'; }
        var url = 'api/bittrex/getorderbook/' + market + '/' + depthMax;
        return this.http.get(url).map(function (res) {
            var r = res.json().result;
            console.log(r);
            var out = {
                buy: r.buy.map(function (item) {
                    item.dQuantity = item.Quantity.toPrecision(4);
                    item.dRate = item.Rate.toPrecision(4);
                    return item;
                }),
                sell: r.sell.map(function (item) {
                    item.dQuantity = item.Quantity.toPrecision(4);
                    item.dRate = item.Rate.toPrecision(4);
                    return item;
                })
            };
            return out;
        });
    };
    BittrexService.prototype.getMarketsAr = function () {
        var _this = this;
        if (!this.marketsAr) {
            this.loadAllMarketSummaries().subscribe(function (res) {
                if (!res)
                    return;
                _this.marketsAr = res;
                _this.marketsArSub.next(_this.marketsAr);
            });
        }
        return this.marketsAr$;
    };
    BittrexService.prototype.getAllMarkets = function () {
        var _this = this;
        if (!this.markets) {
            this.getMarketsAr().subscribe(function (arr) {
                if (!arr)
                    return;
                _this.markets = __WEBPACK_IMPORTED_MODULE_4_lodash__["keyBy"](arr, 'MarketName');
                _this.marketsSub.next(_this.markets);
            });
        }
        return this.markets$;
    };
    /* private _getMarketsSummary(markets:string[]):Observable<VOMarketB[]>{
       let sub:Subject<VOMarketB[]> = new Subject();
       let i = 0;
       let results: VOMarketB[] = [];
       let baseMarket = this.baseMarkets;
       //console.log(baseMarket);
       this.numMarketsSub.next(markets.length);
   
       let step = 100/markets.length;
       let progress= step;
   
       this.progressSub.next(progress);
   
       let goNext = (market:string) =>{
   
         this.getMarketSummary(market).subscribe(res=>{
   
           this.progressSub.next(progress+=step);
           let last = 1;
           if(market.indexOf('USDT') !==-1){
             last = 1;
           }else {
   
             let symbol = market.split('-')[0];
   
             let base:VOMarketB = baseMarket[symbol];
   
             last = base.Last;
   
             console.log('base ' + market+ ' symbol '+symbol , base);
           }
           console.log('market ' + market, res);
   
           BittrexService.formatMarketsUS3([res], last);
           results = results.concat(res);
           i++;
           if(i<markets.length) setTimeout(function(){goNext(markets[i])},100);
           else {
             sub.next(results);
             this.progressSub.next(0);
           }
         })
       }
       goNext(markets[i]);
   
       return sub.asObservable()
     }
   */
    /*getBaseMarkets():Observable<{[name:string]:VOMarketB}>{
      if(!this.baseMarkets){
  
        this.baseInProgress = true;
        let sub = new Subject();
        this.baseMarkets$ = sub.asObservable();
  
        this.getMarketSummary('USDT-BTC').subscribe(btc=>{
          console.log('USDT-BTC', btc);
          this.getMarketSummary('USDT-ETH').map(eth=>{
            return {
              BTC:btc,
              ETH:eth
            };
            // this.baseMarketsAr = [btc,eth];
  
          }).subscribe(res=>{
  
            this.marketCap.getAllCoinsData().subscribe(all=>{
              if(!all) return;
              this.baseMarkets = res;
  
              sub.next(res);
  
            })
  
          })
        });
  
        if(!!this.baseMarkets){
          let bsub:BehaviorSubject<{[name:string]:VOMarketB}> = new BehaviorSubject(this.baseMarkets);
          this.baseMarkets$ = bsub.asObservable();
        }
      }
      return this.baseMarkets$;
    }*/
    BittrexService.prototype.getMarketsSummary = function (markets) {
        var sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.getMarketsAr().subscribe(function (all) {
            var mrs = all.filter(function (item) {
                return markets.indexOf(item.MarketName) !== -1;
            });
            sub.next(mrs);
        });
        return sub.asObservable();
    };
    BittrexService.prototype.getMarketSummary = function (market) {
        var url = 'api/bittrex/market/' + market;
        return this.http.get(url).map(function (res) { return res.json().result[0]; });
    };
    BittrexService.prototype.loadMarket = function (market) {
        var url = 'api/bittrex/market/' + market;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    BittrexService.prototype.getCurrencies = function () {
        var url = 'api/bittrex/currencies';
        return this.http.get(url).map(function (res) { return res.json().result; });
    };
    BittrexService.prototype.loadMarkets = function () {
        var url = 'api/bittrex/markets';
        return this.http.get(url).map(function (res) { return res.json().result; });
    };
    BittrexService.formatMarketsUS = function (ar, base) {
        ar.forEach(function (item) {
            var par = item.MarketName.split('-');
            var base = 1;
            var prec = this.prec;
            if (this.base[par[0]])
                base = this.base[par[0]];
            item.coinToBuy = par[1];
            item.pair = par.join('_');
            item.dVolume = (item.Volume / 1e6).toFixed(3) + 'M';
            item.dBaseVolume = item.BaseVolume.toFixed(2);
            item.usAsk = (item.Ask * base).toPrecision(prec);
            item.usBid = (item.Bid * base).toPrecision(prec);
            item.usLow = (item.Low * base).toPrecision(prec);
            item.usHigh = (item.High * base).toPrecision(prec);
            item.usLast = (item.Last * base).toPrecision(prec);
            item.usPrevDay = (item.PrevDay * base).toPrecision(prec);
        }, { base: base, prec: 4 });
        return ar;
    };
    BittrexService.formatMarketsUS3 = function (ar, base) {
        var last = ar[0].Last * base;
        var fix = 0;
        if (last < 0.001) {
            fix = 6;
        }
        else if (last < 0.01) {
            fix = 5;
        }
        else if (last < 0.1) {
            fix = 4;
        }
        else if (last < 1) {
            fix = 3;
        }
        else if (last < 10) {
            fix = 2;
        }
        else if (last < 100) {
            fix = 1;
        }
        ar.forEach(function (item) {
            console.log(item.MarketName);
            item.dVolume = item.Volume.toFixed(0);
            item.usAsk = (item.Ask * this.base).toFixed(this.fix);
            item.usBid = (item.Bid * this.base).toFixed(this.fix);
            item.usLow = (item.Low * this.base).toFixed(this.fix);
            item.usHigh = (item.High * this.base).toFixed(this.fix);
            item.usLast = (item.Last * this.base).toFixed(this.fix);
            item.usPrevDay = (item.PrevDay * this.base).toFixed(this.fix);
        }, { base: base, fix: fix });
        return ar;
    };
    BittrexService = BittrexService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
    ], BittrexService);
    return BittrexService;
    var BittrexService_1, _a, _b;
}());

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
    ChangellyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ChangellyService);
    return ChangellyService;
    var _a;
}());

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
    CoinEchangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], CoinEchangeService);
    return CoinEchangeService;
    var _a;
}());

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
    CoinbaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], CoinbaseService);
    return CoinbaseService;
    var _a;
}());

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
    CryptopiaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], CryptopiaService);
    return CryptopiaService;
    var _a;
}());

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
            var url = 'api/hit-btc/currencies';
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
    HitBtcService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], HitBtcService);
    return HitBtcService;
    var _a;
}());

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
    KrakenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], KrakenService);
    return KrakenService;
    var _a;
}());

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
    NovaexchangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], NovaexchangeService);
    return NovaexchangeService;
    var _a;
}());

var VONovo = (function () {
    function VONovo() {
    }
    return VONovo;
}());

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
    PoloniexService.prototype.getCurrencies = function () {
        var _this = this;
        var url = 'api/poloniex/currencies';
        return this.http.get(url).map(function (res) { return res.json(); }).do(function (res) {
            _this.currencies = res;
        });
    };
    PoloniexService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], PoloniexService);
    return PoloniexService;
    var _a;
}());

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
    YoBitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], YoBitService);
    return YoBitService;
    var _a;
}());

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
    YoBitMarketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-yo-bit-market',
            template: __webpack_require__("../../../../../src/app/exchanges/yo-bit-market/yo-bit-market.component.html"),
            styles: [__webpack_require__("../../../../../src/app/exchanges/yo-bit-market/yo-bit-market.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_yo_bit_service__["a" /* YoBitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_yo_bit_service__["a" /* YoBitService */]) === "function" && _a || Object])
    ], YoBitMarketComponent);
    return YoBitMarketComponent;
    var _a;
}());

//# sourceMappingURL=yo-bit-market.component.js.map

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

module.exports = "<div>\n    <h3>Reset Password</h3>\n    <br>\n    <h3>{{message}}</h3>\n    <form #f2=\"ngForm\" >\n\n        <md-list>\n            <md-list-item>\n                <md-input-container>\n                    <input mdInput\n                           (blur)=\"checkPassword()\"\n                           placeholder=\"Password\"\n                           name=\"password\"\n                           [(ngModel)]=\"login.password\"\n                           required\n                           minlength=\"6\"\n                           [type]=\"showPass ? 'text': 'password'\"\n                           style=\"width: 100%\"/>\n                </md-input-container>\n            </md-list-item>\n            <md-list-item>\n                <md-input-container>\n                    <input mdInput\n                           (blur)=\"checkPassword()\"\n                           placeholder=\"Confirm Password\"\n                           name=\"password\"\n                           [(ngModel)]=\"confirmPassword\"\n                           required\n                           minlength=\"6\"\n                           [type]=\"showPass ? 'text': 'password'\"\n                           style=\"width: 100%\"/>\n                </md-input-container>\n            </md-list-item>\n            <md-list-item>\n                <md-checkbox #showpass (change)=\"onShowPasswordChanged($event, showpass)\">Show password\n                </md-checkbox>\n            </md-list-item>\n\n            <md-list-item>\n                <button md-raised-button color=\"accent\" [disabled]=\"!f2.valid || notMatch\"\n                        (click)=\"onSubmit()\">\n                    Submit new password\n                </button>\n            </md-list-item>\n        </md-list>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function ConfirmResetPasswordComponent(route, router, http, snakBar) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.snakBar = snakBar;
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
            _this.snakBar.open(res.message, 'x');
            if (res.success) {
                setTimeout(function () {
                    _this.router.navigateByUrl('/login/login');
                }, 3000);
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
    ConfirmResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-confirm-reset-password',
            template: __webpack_require__("../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/confirm-reset-password/confirm-reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MdSnackBar */]) === "function" && _d || Object])
    ], ConfirmResetPasswordComponent);
    return ConfirmResetPasswordComponent;
    var _a, _b, _c, _d;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function ConfirmComponent(route, router, http, snackBar) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.snackBar = snackBar;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var uid = params.uid;
            console.log(uid);
            var url = '/api/login/confirm/' + uid;
            _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (res) {
                if (res.success) {
                    Object(__WEBPACK_IMPORTED_MODULE_3_timers__["setTimeout"])(function () {
                        _this.router.navigateByUrl('/login/login');
                    }, 5000);
                }
                _this.snackBar.open(res.message, 'x');
            });
        });
    };
    ConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-confirm',
            template: __webpack_require__("../../../../../src/app/login/confirm/confirm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/confirm/confirm.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSnackBar */]) === "function" && _d || Object])
    ], ConfirmComponent);
    return ConfirmComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=confirm.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bittrex_bittrex_login_bittrex_login_component__ = __webpack_require__("../../../../../src/app/bittrex/bittrex-login/bittrex-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LoginModule = (function () {
    function LoginModule() {
    }
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
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__bittrex_bittrex_login_bittrex_login_component__["a" /* BittrexLoginComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#LoginScreen{\r\n    width: 250px;\r\n    height: 300px;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n}\r\n\r\n#LoginScreen form{\r\n    height: 300px;\r\n    margin-top: 1em;\r\n}\r\n\r\nmd-chip-list{\r\n    position: relative;\r\n}\r\n\r\nmd-chip{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0px;\r\n    width: 150px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"LoginScreen\">\n    <h4>Email service login manager</h4>\n    <small *ngIf=\"login?.nickname\">Hi {{login.nickname}}</small>\n\n    <md-tab-group [(selectedIndex)]=\"selectedTab\">\n        <md-tab label=\"Login\">\n            <form #f1=\"ngForm\">\n                <md-list>\n                    <md-list-item>\n                        <md-input-container>\n                            <input #username\n                                   mdInput\n                                   [(ngModel)]=\"login.email\"\n                                   required\n                                   minlength=\"6\" type=\"text\" placeholder=\"email\" name=\"email\" type=\"email\"/>\n                        </md-input-container>\n                    </md-list-item>\n\n                    <md-list-item>\n                        <md-input-container>\n                            <input mdInput\n                                   (blur)=\"checkPassword()\"\n                                   placeholder=\"Password\"\n                                   name=\"password\"\n                                   [(ngModel)]=\"login.password\"\n                                   required\n                                   minlength=\"6\"\n                                   type =\"password\"\n                                   style=\"width: 100%\"/>\n                        </md-input-container>\n                    </md-list-item>\n\n                    <br/>\n                    <md-list-item>\n                        <button md-raised-button color=\"accent\" [disabled]=\"!f1.valid\" (click)=\"onLogin()\">\n                            Sign In\n                        </button>\n                    </md-list-item>\n                </md-list>\n\n            </form>\n        </md-tab>\n        <md-tab label=\"Register\">\n            <form #f2=\"ngForm\" >\n\n                <md-list>\n                    <md-list-item>\n                        <md-chip-list *ngIf=\"exists\">\n                            <md-chip color=\"accent\" selected=\"true\">\n                                User with this email exists\n                                <!--  <br/>\n                                  <a  [routerLink]=\"['/login/forgot-password']\">Reset Password</a>-->\n                            </md-chip>\n\n                        </md-chip-list>\n\n                        <md-input-container>\n                            <input #username\n                                   mdInput\n                                   [(ngModel)]=\"login.email\"\n                                   required\n                                   minlength=\"6\" type=\"text\"\n                                   placeholder=\"email\"\n                                   name=\"email\"\n                                   type=\"email\"/>\n                        </md-input-container>\n\n                    </md-list-item>\n\n\n                    <md-list-item>\n                        <md-input-container>\n                            <input mdInput\n                                   (blur)=\"checkPassword()\"\n                                   placeholder=\"Password\"\n                                   name=\"password\"\n                                   [(ngModel)]=\"login.password\"\n                                   required\n                                   minlength=\"6\"\n                                   type =\"password\"\n                                   style=\"width: 100%\"/>\n                        </md-input-container>\n                    </md-list-item>\n                    <md-list-item>\n                        <md-input-container>\n                            <input mdInput\n                                   (blur)=\"checkPassword()\"\n                                   placeholder=\"Confirm Password\"\n                                   name=\"password\"\n                                   [(ngModel)]=\"confirmPassword\"\n                                   required\n                                   minlength=\"6\"\n                                   type =\"password\"\n                                   style=\"width: 100%\"/>\n                        </md-input-container>\n                    </md-list-item>\n\n                    <br/>\n                    <md-list-item>\n                        <button md-raised-button color=\"accent\" [disabled]=\"!f2.valid || notMatch\"\n                                (click)=\"onRegister()\">\n                            Register\n                        </button>\n                    </md-list-item>\n                </md-list>\n            </form>\n        </md-tab>\n        <md-tab label=\"Forget Password\">\n            <form #f3=\"ngForm\" >\n\n                <md-list>\n                    <md-list-item>\n                        <md-input-container>\n                            <input #username mdInput [(ngModel)]=\"login.email\" required\n                                   minlength=\"6\" type=\"text\" placeholder=\"Email\" name=\"email\" type=\"email\"/>\n                        </md-input-container>\n                    </md-list-item>\n                    <br/>\n                    <md-list-item>\n                        <button md-raised-button color=\"accent\" [disabled]=\"!f3.valid\" (click)=\"onRestPassword()\">\n                            Reset Password\n                        </button>\n                    </md-list-item>\n                </md-list>\n\n            </form>\n        </md-tab>\n\n        <md-tab label=\"New nickname\">\n            <form #f5=\"ngForm\"  autocomplete=\"off\">\n                <md-list>\n                    <md-list-item>\n                        <md-input-container>\n                            <input #username\n                                   mdInput\n                                   [(ngModel)]=\"login.email\"\n                                   required\n                                   minlength=\"6\" type=\"text\" placeholder=\"email\" name=\"email\" type=\"email\"/>\n                        </md-input-container>\n                    </md-list-item>\n\n                    <md-list-item>\n                        <md-input-container>\n                            <input mdInput\n                                   (blur)=\"checkPassword()\"\n                                   placeholder=\"Password\"\n                                   name=\"password\"\n                                   [(ngModel)]=\"login.password\"\n                                   required\n                                   minlength=\"6\"\n                                   type =\"password\"\n                                   style=\"width: 100%\"/>\n                        </md-input-container>\n                    </md-list-item>\n\n                    <br/>\n                    <md-list-item>\n                        <button md-raised-button color=\"accent\" [disabled]=\"!f5.valid\" (click)=\"onRequestNewNickname()\">\n                           Change nickname\n                        </button>\n                        &nbsp;\n                        <a  class=\"btn\"  (click)=\"onNicknameOK()\">   OK  </a>\n\n                    </md-list-item>\n                </md-list>\n\n            </form>\n        </md-tab>\n\n        <md-tab label=\"Logout\">\n            <form #f3=\"ngForm\" >\n\n                <md-list>\n                   <br/>\n                    <md-list-item>\n                        <button md-raised-button color=\"accent\" [disabled]=\"!f3.valid\" (click)=\"onLogout()\">\n                           Logout\n                        </button>\n                    </md-list-item>\n                </md-list>\n\n            </form>\n        </md-tab>\n\n\n    </md-tab-group>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__ = __webpack_require__("../../../../../src/app/services/auth-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_dialog_simple_dialog_simple_component__ = __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../services/auth-http.service.ts"/>





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
            if (res.success && res.nickname) {
                _this.authHttp.setUserNickname(res.nickname);
            }
            if (res.error && res.error === 'exists') {
                _this.router.navigateByUrl('/login/login');
            }
            _this.snakBar.open(res.message);
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
                    case 'nickname':
                        _this.selectedTab = 3;
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
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.authHttp.login(this.login.email, this.login.password).subscribe(function (res) {
            console.log(res);
            _this.snakBar.open(res.message, 'x');
            if (res.success) {
                _this.authHttp.setUser(res.user);
                var url_1 = _this.authHttp.getLastVisited();
                if (!url_1)
                    url_1 = '/email-service';
                setTimeout(function () {
                    _this.router.navigateByUrl(url_1);
                }, 3000);
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        console.log("Sign Up Data:", this.login);
    };
    LoginComponent.prototype.onNicknameOK = function () {
        // console.log(this.selectedTab);
        this.selectedTab = 0;
        // console.log(this.selectedTab);
        // this.router.navigateByUrl('/login/login');
    };
    LoginComponent.prototype.onRequestNewNickname = function () {
        var _this = this;
        var url = 'api/login/new-nickname';
        this.authHttp.post(url, this.login).map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log(res);
            _this.snakBar.open(res.message, 'x');
            if (res.success) {
                _this.authHttp.setUserNickname(res.nickname);
            }
        });
    };
    LoginComponent.prototype.onLogout = function () {
        var _this = this;
        if (confirm('You want to logout from email service?')) {
            this.authHttp.logout().subscribe(function (res) {
                _this.snakBar.open(res.message, 'x');
            });
        }
    };
    LoginComponent.prototype.onRestPassword = function () {
        var _this = this;
        var url = 'api/login/reset-password';
        this.authHttp.post(url, this.login).map(function (res) { return res.json(); }).subscribe(function (res) {
            if (res.success) {
                _this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__shared_dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], { data: {
                        title: 'Alert',
                        message: res.message
                    } });
            }
            else {
                _this.snakBar.open(res.message, 'x');
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MdSnackBar */]) === "function" && _e || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());

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
    Login2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login2',
            template: __webpack_require__("../../../../../src/app/login2/login2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login2/login2.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_wallets_all_service__["a" /* WalletsAllService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], Login2Component);
    return Login2Component;
    var _a, _b, _c;
}());

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

module.exports = "<div>\n    <h4>\n       All coins\n    </h4>\n         <small *ngIf=\"allCoinsData\">Total: {{allCoinsData.length}}</small>\n    <small>Average 1h: </small> <span  [ngClass]=\"average1h>0?'green':'red'\">{{average1h}}%</span>\n    <small> 24h: </small> <span [ngClass]=\"average24h>0?'green':'red'\">{{average24h}}%</span>\n    <small> 7d : </small> <span [ngClass]=\"average7d>0?'green':'red'\">{{average7d}}%</span>\n\n    <section>\n        <table>\n            <tr>\n                <th class=\"btn\" (click)=\"onClickHeader('rank')\">Rank</th>\n                <th>#</th>\n                <th class=\"btn\" (click)=\"onClickHeader('symbol')\">Symbol</th>\n                <th>Name</th>\n                <th class=\"btn\" (click)=\"onClickHeader('percent_change_1h')\">1h%</th>\n                <th class=\"btn\" (click)=\"onClickHeader('percent_change_24h')\" >24h%</th>\n                <th class=\"btn\" (click)=\"onClickHeader('percent_change_7d')\">7 days%</th>\n                <th class=\"btn\" (click)=\"onClickHeader('price_usd')\">$US</th>\n\n\n              <!--  <th (click)=\"onClickHeader('market_cap_usd')\">market cap usd</th>-->\n\n            </tr>\n\n            <tbody *ngFor=\"let item of allCoinsData\">\n            <tr>\n                <td>{{item.rank}}</td>\n                <td><input type=\"checkbox\"  (change)=\"onCoinSelected($event, item)\" [checked]=\"item.selected\"   name=\"selected\"/></td>\n                <td>{{item.symbol}}</td>\n                <td class=\"w120 ell\">{{item.name}}</td>\n\n                <td [ngClass]=\"item.percent_change_1h>0?'green':'red'\">{{item.percent_change_1h}}</td>\n                <td [ngClass]=\"item.percent_change_24h>0?'green':'red'\">{{item.percent_change_24h}}</td>\n                <td [ngClass]=\"item.percent_change_7d>0?'green':'red'\">{{item.percent_change_7d}}</td>\n                <td>{{item.price_usd}}</td>\n                <!--<td>{{item.market_cap_usd}}</td>-->\n\n\n            </tr>\n\n            </tbody>\n        </table>\n    </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/all-coins-table/all-coins-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCoinsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
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
        this.allCoinsService.getAllCoinsArr().subscribe(function (res) {
            if (res) {
                _this.storage.mapSelected(res);
                _this.allCoinsData = res;
                _this.calculateAvarage();
            } //filterSelected(res, this.storage.getMCSelected());
        });
    };
    AllCoinsTableComponent.prototype.calculateAvarage = function () {
        var ar = this.allCoinsData;
        if (!ar || !ar.length)
            return;
        var length = ar.length;
        this.average1h = +(__WEBPACK_IMPORTED_MODULE_1_lodash__["sumBy"](ar, 'percent_change_1h') / length).toFixed(2);
        this.average24h = +(__WEBPACK_IMPORTED_MODULE_1_lodash__["sumBy"](ar, 'percent_change_24h') / length).toFixed(2);
        this.average7d = +(__WEBPACK_IMPORTED_MODULE_1_lodash__["sumBy"](ar, 'percent_change_7d') / length).toFixed(2);
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
    AllCoinsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-all-coins-table',
            template: __webpack_require__("../../../../../src/app/market-cap/all-coins-table/all-coins-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/market-cap/all-coins-table/all-coins-table.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_app_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_app_storage_service__["a" /* StorageService */]) === "function" && _b || Object])
    ], AllCoinsTableComponent);
    return AllCoinsTableComponent;
    var _a, _b;
}());

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
    return CoinsExchangesComponent;
    var _a, _b;
}());

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

module.exports = "<div>\n    <section>\n        Coins List\n        <table>\n            <tbody>\n            <tr *ngFor=\"let coin of listEchangeCoin\">\n                <td><small>{{coin.coin}}</small></td>\n                <td>{{coin.name}}</td>\n                <td>{{coin.pair}}</td>\n                <td><small>{{coin.pairUrl}}</small></td>\n            </tr>\n            </tbody>\n        </table>\n\n    </section>\n</div>\n"

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
    CoinsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-coins-list',
            template: __webpack_require__("../../../../../src/app/market-cap/coins-list/coins-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/market-cap/coins-list/coins-list.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object])
    ], CoinsListComponent);
    return CoinsListComponent;
    var _a;
}());

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

module.exports = "<div>\n    <section>\n       <h4> Exchanges</h4><small *ngIf=\"lisExchanges\"> Total: {{lisExchanges.length}} </small>\n        <table>\n            <tbody>\n            <tr *ngFor=\"let exchange of lisExchanges\">\n                <td><div class=\"w8 ell\"><a title=\"{{exchange.pairUrl}}\" href=\"{{exchange.pairUrl}}\">{{exchange.name}}</a></div></td>\n                <td><div class=\"w6 ell\"><small>{{exchange.pairUrl.substr(8)}}</small></div></td>\n                <td>{{exchange.pair}}</td>\n                <td><small>{{exchange.coin}}</small></td>\n            </tr>\n            </tbody>\n        </table>\n    </section>\n\n</div>\n"

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
    ExchangesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-exchanges-list',
            template: __webpack_require__("../../../../../src/app/market-cap/exchanges-list/exchanges-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/market-cap/exchanges-list/exchanges-list.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object])
    ], ExchangesListComponent);
    return ExchangesListComponent;
    var _a;
}());

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

module.exports = "<div>\n    <h4 class=\"btn\" (click)=\"onGainersClick()\">Gainers</h4>\n    <h4 class=\"btn\" (click)=\"onLosersClick()\">Losers</h4>\n    <a class=\"btn\" (click)=\"onExchangesClick()\">Exchanges</a>\n    <section>\n\n        <h4>Gainers 24h top 30 </h4> <small> (With market cap more then\n        <input type=\"number\" class=\"w60\" step=\"2000\"   [(ngModel)] = \"capLimit\"   />\n        <span (click)=\"onFilterClick()\" class=\"btn fa fa-filter\"> &nbsp;&nbsp;</span>\n        )</small>\n\n        <div>\n            <table (click)=\"onTableclick($event)\">\n                <tbody>\n                <tr><td  colspan=\"8\" class=\"text-center\"> MarketCap</td></tr>\n                <tr>\n\n                    <th class=\"btn\" (click)=\"onClickHeader('symbol')\">Symbol</th>\n                    <th>Graph</th>\n                    <th  class=\"btn\" (click)=\"onClickHeader('rank')\">Rank</th>\n\n                    <th  class=\"btn\" (click)=\"onClickHeader('percent_change_1h')\">1h%</th>\n                    <th  class=\"btn\" (click)=\"onClickHeader('percent_change_24h')\" >24h%</th>\n                    <th  class=\"btn\" (click)=\"onClickHeader('percent_change_7d')\">7d%</th>\n\n                    <th  class=\"btn\" (click)=\"onClickHeader('price_usd')\">$US</th>\n                    <th>Name</th>\n                    <th  class=\"btn\" (click)=\"onClickHeader('market_cap_usd')\">$ Cap</th>\n                    <th>Network</th>\n                </tr>\n\n                <tr *ngFor=\"let item of consAvailable\">\n\n                    <td [attr.data]=\"item.symbol\" title=\"{{item.name}}\" class=\"btn w100\" ><img class=\"w1\" src=\"assets/icons/{{item.id}}.png\"/> {{item.symbol}}</td>\n                    <td><a class=\"fa fa-line-chart\" target=\"_blank\" href=\"https://coinmarketcap.com/currencies/{{item.id}}/\"></a></td>\n                    <td>{{item.rank}}</td>\n                    <td class=\"w50\" [ngClass]=\"item.percent_change_1h>0?'dgreen':'dred'\" >{{item.percent_change_1h}}</td>\n                    <td class=\"w50\" [ngClass]=\"item.percent_change_24h>0?'dgreen':'dred'\" >{{item.percent_change_24h}}</td>\n                    <td class=\"w50\" [ngClass]=\"item.percent_change_7d>0?'dgreen':'dred'\" >{{item.percent_change_7d}}</td>\n\n                    <td class=\"small \" title=\"{{item.price_usd}}\">{{item.price_usd}}</td>\n                    <td class=\"small w80 ell\" title=\"{{item.name}}\">{{item.name}}</td>\n                    <td class=\"small\" title=\"{{item.market_cap_usd}}\">{{item.market_cap_usd}}</td>\n                    <td>{{item.network}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n        <!-- <app-sortable-table [consAvailable]=\"gainersAr\" (selectedSymbol)=\"onSymbolSelected($event)\"></app-sortable-table>-->\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/gainers-losers/gainers-losers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GainersLosersComponent; });
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




var GainersLosersComponent = (function () {
    function GainersLosersComponent(router, marketCap) {
        this.router = router;
        this.marketCap = marketCap;
        this.asc_desc = 'desc';
        this.capLimit = 10000;
        this.sortBy = 'percent_change_24h';
    }
    GainersLosersComponent.prototype.onGainersClick = function () {
        if (this.asc_desc === 'desc')
            return;
        this.asc_desc = 'desc';
        this.sortBy = 'percent_change_24h';
        this.sortData();
    };
    GainersLosersComponent.prototype.onLosersClick = function () {
        if (this.asc_desc === 'asc')
            return;
        this.asc_desc = 'asc';
        this.sortBy = 'percent_change_24h';
        this.sortData();
    };
    GainersLosersComponent.prototype.onExchangesClick = function () {
        var symbols = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](this.consAvailable, 'symbol');
        this.router.navigate(['/coins-exchanges', symbols.toString()]);
    };
    GainersLosersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.marketCap.getAllCoinsArr().subscribe(function (res) {
            /*   if(!res) return;
             this.marketCap.getCoins().subscribe(coins=>{
               if(!coins) return;
               console.log(res);
               console.log(coins);
      
               let indexed:{[id:string]:VOCoin} = <{[id:string]:VOCoin}>_.keyBy(coins,'id');
      
               res.forEach(function (item) {
                 let coin = indexed[item.id];
                 if(!coin){
                  // console.log(' no coin ' + item.id);
                 }else{
                  // console.log(' coin ' + item.id);
                   item.network = coin.base;
                 }
               })
             });*/
            _this.data = res;
            _this.sortData();
        });
    };
    GainersLosersComponent.prototype.onSymbolSelected = function (symbol) {
        console.log(symbol);
    };
    GainersLosersComponent.prototype.onFilterClick = function () {
        this.sortData();
    };
    GainersLosersComponent.prototype.sortData = function () {
        if (!Array.isArray(this.data))
            return;
        var cap = this.data.filter(function (item) { return item.volume_usd_24h > this.limit; }, { limit: this.capLimit });
        var sorted = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](cap, this.sortBy, this.asc_desc);
        // console.log(sorted);
        this.consAvailable = __WEBPACK_IMPORTED_MODULE_2_lodash__["take"](sorted, 30);
    };
    GainersLosersComponent.prototype.onTableclick = function (event) {
        // console.log(event.srcElement);
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.data;
        if (idAttr && idAttr.nodeValue)
            console.log(idAttr.nodeValue);
        // var value = idAttr.id;
    };
    GainersLosersComponent.prototype.onClickHeader = function (criteria) {
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
    GainersLosersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-gainers-losers',
            template: __webpack_require__("../../../../../src/app/market-cap/gainers-losers/gainers-losers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/market-cap/gainers-losers/gainers-losers.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
    ], GainersLosersComponent);
    return GainersLosersComponent;
    var _a, _b;
}());

//# sourceMappingURL=gainers-losers.component.js.map

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
        this.service.getAllCoinsArr().subscribe(function (res) {
            //  console.log(res);
            if (!res)
                return;
            var out = [];
            var limit = _this.capLimit;
            out = res.filter(function (item) {
                return item.volume_usd_24h > limit;
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
    GlAllExchangesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-gl-all-exchanges',
            template: __webpack_require__("../../../../../src/app/market-cap/gl-all-exchanges/gl-all-exchanges.component.html"),
            styles: [__webpack_require__("../../../../../src/app/market-cap/gl-all-exchanges/gl-all-exchanges.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object])
    ], GlAllExchangesComponent);
    return GlAllExchangesComponent;
    var _a;
}());

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
    GlKnownExchangesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-gl-known-exchanges',
            template: __webpack_require__("../../../../../src/app/market-cap/gl-known-exchanges/gl-known-exchanges.component.html"),
            styles: [__webpack_require__("../../../../../src/app/market-cap/gl-known-exchanges/gl-known-exchanges.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GlKnownExchangesComponent);
    return GlKnownExchangesComponent;
}());

//# sourceMappingURL=gl-known-exchanges.component.js.map

/***/ }),

/***/ "../../../../../src/app/market-cap/market-cap-main/market-cap-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market-cap/market-cap-main/market-cap-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n   <h2>Coin Market Cap</h2>  <h4>{{time}}</h4> <span class=\"fa fa-refresh green btn\" (click)=\"onRefreshClick()\" ></span>\r\n    <nav class=\"btns-row\">\r\n        <a routerLink=\"/market-cap/selected\" routerLinkActive=\"active\" > Selected Coins </a>\r\n        <a routerLink=\"/market-cap/all-coins\" routerLinkActive=\"active\" > All Coins </a>\r\n        <a routerLink=\"/market-cap/gainers-losers\" routerLinkActive=\"active\" > Gainers Losers </a>\r\n        <a routerLink=\"/market-cap/exchanges-list\" routerLinkActive=\"active\" > List Exchanges </a>\r\n        <a routerLink=\"/market-cap/coins-list\" routerLinkActive=\"active\" > Coins List </a>\r\n    </nav>\r\n\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/market-cap-main/market-cap-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketCapMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketCapMainComponent = (function () {
    function MarketCapMainComponent(service) {
        this.service = service;
    }
    MarketCapMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.timestamp$.subscribe(function (res) {
            _this.time = __WEBPACK_IMPORTED_MODULE_2_moment__(res).format('ddd DD, h:mm a');
        });
    };
    MarketCapMainComponent.prototype.onRefreshClick = function () {
        this.service.refresh();
    };
    MarketCapMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-market-cap-main',
            template: __webpack_require__("../../../../../src/app/market-cap/market-cap-main/market-cap-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/market-cap/market-cap-main/market-cap-main.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object])
    ], MarketCapMainComponent);
    return MarketCapMainComponent;
    var _a;
}());

//# sourceMappingURL=market-cap-main.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__coins_exchanges_coins_exchanges_component__ = __webpack_require__("../../../../../src/app/market-cap/coins-exchanges/coins-exchanges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__market_cap_main_market_cap_main_component__ = __webpack_require__("../../../../../src/app/market-cap/market-cap-main/market-cap-main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'market-cap', component: __WEBPACK_IMPORTED_MODULE_14__market_cap_main_market_cap_main_component__["a" /* MarketCapMainComponent */],
        children: [
            { path: '', redirectTo: 'selected', pathMatch: 'full' },
            { path: 'all-coins', component: __WEBPACK_IMPORTED_MODULE_2__all_coins_table_all_coins_table_component__["a" /* AllCoinsTableComponent */] },
            { path: 'selected', component: __WEBPACK_IMPORTED_MODULE_3__selected_coins_selected_coins_component__["a" /* SelectedCoinsComponent */] },
            { path: 'gainers-losers', component: __WEBPACK_IMPORTED_MODULE_7__gainers_losers_gainers_losers_component__["a" /* GainersLosersComponent */] },
            { path: 'gainers-losers/all-exchanges', component: __WEBPACK_IMPORTED_MODULE_10__gl_all_exchanges_gl_all_exchanges_component__["a" /* GlAllExchangesComponent */] },
            { path: 'gainers-losers/known-exchanges', component: __WEBPACK_IMPORTED_MODULE_11__gl_known_exchanges_gl_known_exchanges_component__["a" /* GlKnownExchangesComponent */] },
            { path: 'exchanges-list', component: __WEBPACK_IMPORTED_MODULE_8__exchanges_list_exchanges_list_component__["a" /* ExchangesListComponent */] },
            { path: 'coins-list', component: __WEBPACK_IMPORTED_MODULE_9__coins_list_coins_list_component__["a" /* CoinsListComponent */] }
        ]
    }
];
var MarketCapModule = (function () {
    function MarketCapModule() {
    }
    MarketCapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_material_app_module__["a" /* MaterialAppModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__selected_coins_selected_coins_component__["a" /* SelectedCoinsComponent */],
                __WEBPACK_IMPORTED_MODULE_2__all_coins_table_all_coins_table_component__["a" /* AllCoinsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_7__gainers_losers_gainers_losers_component__["a" /* GainersLosersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__exchanges_list_exchanges_list_component__["a" /* ExchangesListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__coins_list_coins_list_component__["a" /* CoinsListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__gl_all_exchanges_gl_all_exchanges_component__["a" /* GlAllExchangesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__gl_known_exchanges_gl_known_exchanges_component__["a" /* GlKnownExchangesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__coins_exchanges_coins_exchanges_component__["a" /* CoinsExchangesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__market_cap_main_market_cap_main_component__["a" /* MarketCapMainComponent */]
            ]
        })
    ], MarketCapModule);
    return MarketCapModule;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarketCapService = (function () {
    function MarketCapService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.coinsArSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.coinsSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.timestamp = 0;
        this.coinsIdSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.timestampSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](Date.now());
        this.timestamp$ = this.timestampSub.asObservable();
        this.totalCoinsSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.totalCoins$ = this.totalCoinsSub.asObservable();
        this.counter = 0;
        this.coinsAr$ = this.coinsArSub.asObservable();
        this.coins$ = this.coinsSub.asObservable();
        this.coinsIdSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.coinsId$ = this.coinsIdSub.asObservable();
        //this.loadData();
    }
    MarketCapService.prototype.start = function () {
        // this.interval = setInterval(() => this.loadData(), 60000);
        //this.loadData();
    };
    MarketCapService.prototype.getBySymbol = function (symbol) {
        return this.coins[symbol];
    };
    MarketCapService.prototype.getAllCoinsData = function () {
        if (!this.coins) {
            this.coins = {};
            this.refresh();
        }
        return this.coins$;
    };
    MarketCapService.prototype.getAllCoinsById = function () {
        //console.log('getAllCoinsById');
        if (!this.coins) {
            this.coins = {};
            this.refresh();
        }
        return this.coinsId$;
    };
    MarketCapService.prototype.getAllCoinsArr = function () {
        if (!this.coins) {
            this.coins = {};
            this.refresh();
        }
        return this.coinsAr$;
    };
    MarketCapService.prototype.getSelected = function () {
        var _this = this;
        return this.getAllCoinsArr().map(function (coinsAr) {
            if (!coinsAr)
                return null;
            return _this.storage.filterSelected(coinsAr);
        });
    };
    MarketCapService.prototype.setData = function (data) {
        // console.warn('setData ');
        var ar = data.payload;
        this.coinsAr = ar;
        this.coins = __WEBPACK_IMPORTED_MODULE_4_lodash__["keyBy"](ar, 'symbol');
        var byId = __WEBPACK_IMPORTED_MODULE_4_lodash__["keyBy"](ar, 'id');
        this.coinsIdSub.next(byId);
        this.coinsSub.next(this.coins);
        this.coinsArSub.next(this.coinsAr);
        this.timestamp = data.timestamp;
        this.timestampSub.next(this.timestamp);
        // console.log(' marketcap total: ' + this.marketsAr.length);
        this.counter++;
        this.totalCoinsSub.next(this.coinsAr.length);
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
            });
            return items;
        });
    };
    MarketCapService.prototype.refresh = function () {
        var _this = this;
        var url = '/api/marketcap/ticker';
        // console.warn(url);
        this.http.get(url).map(function (res) {
            var data = res.json();
            if (!data)
                return;
            data.payload = data.payload.map(mapExchangeData);
            return data;
        }).subscribe(function (data) { return _this.setData(data); });
    };
    /*getCoinBySymbol(symbol:string):VOMarketCap{
      return this.coins[symbol];
    }*/
    MarketCapService.prototype.stop = function () {
        clearInterval(this.interval);
    };
    MarketCapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_app_storage_service__["a" /* StorageService */]) === "function" && _b || Object])
    ], MarketCapService);
    return MarketCapService;
    var _a, _b;
}());

function mapExchangeData(obj) {
    //let data: VOMarketCap = new VOMarketCap();
    for (var str in obj)
        obj[str] = isNaN(obj[str]) ? obj[str] : +obj[str];
    // if(this.coins[data.id]) data.network = this.coins[data.id].base
    obj.volume_usd_24h = +obj['24h_volume_usd'];
    delete obj['24h_volume_usd'];
    return obj;
}
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

module.exports = "<div>\n\n    <h4>Selected coins</h4><small>{{selectedCoins.length}}</small>\n    <small>Average 1h: </small> <span  [ngClass]=\"average1h>0?'green':'red'\">{{average1h}}%</span>\n    <small> 24h: </small> <span [ngClass]=\"average24h>0?'green':'red'\">{{average24h}}%</span>\n    <small> 7d : </small> <span [ngClass]=\"average7d>0?'green':'red'\">{{average7d}}%</span>\n    <div>\n        <app-sortable-table [consAvailable]=\"selectedCoins\"></app-sortable-table>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/market-cap/selected-coins/selected-coins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedCoinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__market_cap_service__ = __webpack_require__("../../../../../src/app/market-cap/market-cap.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {filterSelected} from '../../shared/utils';
var SelectedCoinsComponent = (function () {
    //sortCreteria:string = 'rank';
    // asc_desc='asc';
    function SelectedCoinsComponent(allCoinsService) {
        this.allCoinsService = allCoinsService;
        //@Input() modelCoins:VOExchangeData[];
        this.selectedCoins = [];
    }
    SelectedCoinsComponent_1 = SelectedCoinsComponent;
    SelectedCoinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCoinsService.getAllCoinsArr().subscribe(function (res) {
            // console.log(res);
            if (!res)
                return;
            _this.selectedCoins = SelectedCoinsComponent_1.filterSelected(res, _this.getSelected());
            _this.calculateAvarage();
        });
    };
    SelectedCoinsComponent.prototype.calculateAvarage = function () {
        var ar = this.selectedCoins;
        if (!ar || !ar.length)
            return;
        var length = ar.length;
        this.average1h = +(__WEBPACK_IMPORTED_MODULE_1_lodash__["sumBy"](ar, 'percent_change_1h') / length).toFixed(2);
        this.average24h = +(__WEBPACK_IMPORTED_MODULE_1_lodash__["sumBy"](ar, 'percent_change_24h') / length).toFixed(2);
        this.average7d = +(__WEBPACK_IMPORTED_MODULE_1_lodash__["sumBy"](ar, 'percent_change_7d') / length).toFixed(2);
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
    SelectedCoinsComponent = SelectedCoinsComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-selected-coins',
            template: __webpack_require__("../../../../../src/app/market-cap/selected-coins/selected-coins.component.html"),
            styles: [__webpack_require__("../../../../../src/app/market-cap/selected-coins/selected-coins.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object])
    ], SelectedCoinsComponent);
    return SelectedCoinsComponent;
    var SelectedCoinsComponent_1, _a;
}());

//# sourceMappingURL=selected-coins.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/material-app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialAppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSliderModule */]
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
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MdToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MdTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MdSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSliderModule */]
            ]
        })
    ], MaterialAppModule);
    return MaterialAppModule;
}());

//# sourceMappingURL=material-app.module.js.map

/***/ }),

/***/ "../../../../../src/app/models/app-models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigApp; });
/* unused harmony export VOTransfer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VOMarket; });
/* unused harmony export VOMarketCap */
/* unused harmony export UTXO */
/* unused harmony export CoinsAvailable */
/* unused harmony export VOBalance */
/* unused harmony export Analitycs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WalletModel; });
/*
 * Created by Vlad on 7/8/2017.
 */
var ConfigApp = (function () {
    function ConfigApp() {
        this.exchangesPublic = [
            {
                uid: 'poloniex',
                name: 'Poloniex',
                urlMarkets: '/api/poloniex/returnTicker',
                urlOrderBook: '/api/poloniex/orderBook/{{pair}}/{{depth}}'
            },
            {
                uid: 'bittrex',
                name: 'Bittrex',
                urlMarkets: '/api/bittrex/marketsummaries',
                urlOrderBook: '/api/bittrex/getorderbook/{{pair}}/{{depth}}'
            },
            {
                uid: 'novaexchange',
                name: 'NovaExchange',
                urlMarkets: '/api/novaexchange/markets',
                urlOrderBook: '/api/novaexchange/getorderbook/{{pair}}/{{depth}}'
            },
            {
                uid: 'cryptopia',
                name: 'Cryptopia',
                urlMarkets: '/api/cryptopia/markets',
                urlOrderBook: '/api/cryptopia/getorderbook/{{pair}}/{{depth}}'
            },
            {
                uid: 'hitbtc',
                name: 'HitBTC',
                urlMarkets: '/api/hitbtc/markets',
                urlOrderBook: '/api/hitbtc/getorderbook/{{pair}}/{{depth}}'
            }
        ];
    }
    return ConfigApp;
}());

var VOTransfer = (function () {
    function VOTransfer() {
    }
    return VOTransfer;
}());

var VOMarket = (function () {
    function VOMarket() {
    }
    return VOMarket;
}());

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
        this.marketCap.getAllCoinsArr().subscribe(function (res) {
            _this.marketCapAr = res;
        });
        this.allExchanges.progress$.subscribe(function (res) { return _this.progress = res; });
    };
    SearchCoinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-search-coin',
            template: __webpack_require__("../../../../../src/app/search-coin/search-coin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-coin/search-coin.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__exchanges_search_coin_service__["a" /* SearchCoinService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__exchanges_search_coin_service__["a" /* SearchCoinService */]) === "function" && _b || Object])
    ], SearchCoinComponent);
    return SearchCoinComponent;
    var _a, _b;
}());

//# sourceMappingURL=search-coin.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/app-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js__ = __webpack_require__("../../../../crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import * as crypto from 'crypto';

var StorageService = (function () {
    function StorageService() {
        //email:string;
        //password:string;
        this.simplePass = 'watch dogs password';
        this.isLogedInSub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.isLogedIn$ = this.isLogedInSub.asObservable();
    }
    StorageService.prototype.storeUserSimple = function (username, password) {
        var user = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["HmacSHA1"]('user', this.simplePass).toString();
        var data = JSON.stringify({ u: username, p: password });
        data = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["AES"].encrypt(data, this.simplePass).toString();
        localStorage.setItem(user, data);
    };
    StorageService.prototype.restoreUserSimple = function () {
        var user = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["HmacSHA1"]('user', this.simplePass).toString();
        var item = localStorage.getItem(user);
        if (!item)
            return null;
        item = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["AES"].decrypt(item, this.simplePass).toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js__["enc"].Utf8);
        return JSON.parse(item);
    };
    StorageService.prototype.filterSelected = function (coins) {
        var selected = this.getMCSelected();
        return coins.filter(function (item) {
            return selected.indexOf(item.symbol) !== -1;
        });
    };
    StorageService.prototype.mapSelected = function (coins) {
        var selected = this.getMCSelected();
        coins.forEach(function (item) {
            item.selected = selected.indexOf(item.symbol) !== -1;
        });
    };
    StorageService.prototype.getMCSelected = function () {
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
    StorageService.prototype.login = function (username, password) {
        this.salt = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["HmacSHA1"](username + password, this.simplePass).toString();
        console.log(this.salt);
        this.isLogedInSub.next(true);
    };
    StorageService.prototype.logout = function () {
        this.salt = null;
        this.isLogedInSub.next(false);
    };
    StorageService.prototype.addMCSelected = function (symbol) {
        var ar = this.getMCSelected();
        if (ar.indexOf(symbol) == -1)
            ar.push(symbol);
        this.saveSelected();
    };
    StorageService.prototype.deleteMCSelected = function (symbol) {
        var ar = this.getMCSelected();
        for (var i = ar.length - 1; i >= 0; i--)
            if (ar[i] === symbol)
                ar.splice(i, 1);
        this.saveSelected();
    };
    StorageService.prototype.saveSelected = function () {
        localStorage.setItem('market-cap-selected', JSON.stringify(this.selected));
    };
    StorageService.prototype.getItem = function (s, secure) {
        if (secure === void 0) { secure = false; }
        if (secure) {
            if (!this.salt) {
                alert('Please login in Application');
                return;
            }
            s = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["HmacSHA1"](s, this.salt).toString();
            // console.log(s);
            var str = localStorage.getItem(s);
            if (str)
                return __WEBPACK_IMPORTED_MODULE_1_crypto_js__["AES"].decrypt(str, this.salt).toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js__["enc"].Utf8);
            else
                return null;
        }
        else
            s = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["HmacSHA1"](s, this.simplePass).toString();
        return localStorage.getItem(s);
    };
    StorageService.prototype.setItem = function (s, data, secure) {
        if (secure === void 0) { secure = false; }
        console.log('save', data);
        if (secure) {
            if (!this.salt) {
                alert('Please login in Application');
                return;
            }
            data = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["AES"].encrypt(data, this.salt).toString();
            s = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["HmacSHA1"](s, this.salt).toString();
        }
        else
            s = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["HmacSHA1"](s, this.simplePass).toString();
        return localStorage.setItem(s, data);
    };
    StorageService.prototype.removeItem = function (s, secure) {
        if (secure === void 0) { secure = false; }
        if (secure) {
            if (!this.salt) {
                alert('Please login in Application');
                return;
            }
            s = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["HmacSHA1"](s, this.salt).toString();
        }
        else
            s = __WEBPACK_IMPORTED_MODULE_1_crypto_js__["HmacSHA1"](s, this.simplePass).toString();
        return localStorage.removeItem(s);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());

/*

const algorithmCTR = 'aes-256-ctr',
  algorithmGSM= 'aes-256-gcm';

export function encryptCTR(text){
 let  PASSWORD = '3zTvzr3p67VC61jmV54rIYu1545x4TlY'
  var cipher = crypto.createCipher(algorithmCTR, PASSWORD)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}


export function decryptCTR(text){
  let PASSWORD = '3zTvzr3p67VC61jmV54rIYu1545x4TlY'
  var decipher = crypto.createDecipher(algorithmCTR,PASSWORD);
  var dec;
  try{
    dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
  }catch(e){
    console.error(e);
  }

  return dec;
}*/
//# sourceMappingURL=app-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_storage_service__ = __webpack_require__("../../../../../src/app/services/app-storage.service.ts");
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
    function AuthHttpService(http, router, route, storage) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.user = null;
        this.userSub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.user$ = this.userSub.asObservable();
        this.isLogedIn$ = this.user$.map(function (user) { return !!user; });
        setTimeout(function () { return _this.autoLogin(); }, 2000);
    }
    AuthHttpService.prototype.isLogedIn = function () {
        return !!this.user;
    };
    AuthHttpService.prototype.getUserEmail = function () {
        return this.user.email;
    };
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
            .map(function (res) { return res.json(); })
            .do(function (user) { return _this.userSub.next(user); });
    };
    AuthHttpService.prototype.autoLogin = function () {
        var lastVisited = this.getLastVisited();
        var user = this.getUser();
        //console.log(user);
        this.user = user;
        this.dispatchUser();
        if (user && lastVisited && lastVisited !== 'undefined') {
            // console.warn(lastVisited);
            //this.router.navigate([lastVisited]);
        }
    };
    AuthHttpService.prototype.dispatchUser = function () {
        this.userSub.next(this.user);
        //this.isLogedInSub.next((this.user !== null));
    };
    AuthHttpService.prototype.logout = function () {
        var _this = this;
        return this.post('/api/login/logout', this.user).map(function (res) { return res.json(); }).do(function (res) {
            console.log('do', res);
            _this.user = null;
            _this.removeAuthentication();
            _this.dispatchUser();
        });
    };
    AuthHttpService.prototype.getToken = function () {
        var user = this.getUser();
        return user ? user.token : null;
    };
    AuthHttpService.prototype.getUser = function () {
        if (!this.user) {
            var str = this.storage.getItem('authentication');
            if (str) {
                try {
                    this.user = JSON.parse(atob(str));
                    // /   new VOUser(JSON.parse(atob(str)));
                }
                catch (e) {
                    console.error(e);
                    //this.removeAuthentication();
                }
            }
        }
        return this.user;
    };
    AuthHttpService.prototype.removeAuthentication = function () {
        this.storage.removeItem('authentication');
        //this.user = null;
        //this.userSub.next(null);
    };
    AuthHttpService.prototype.saveUser = function () {
        this.storage.setItem('authentication', btoa(JSON.stringify(this.user)));
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
    AuthHttpService.prototype.setUserNickname = function (nickname) {
        this.user.nickname = nickname;
        this.saveUser();
        this.dispatchUser();
    };
    AuthHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_storage_service__["a" /* StorageService */]) === "function" && _d || Object])
    ], AuthHttpService);
    return AuthHttpService;
    var _a, _b, _c, _d;
}());

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
    return ShapeShiftModule;
}());

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
    ShapeShiftService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_http_service__["a" /* AuthHttpService */]) === "function" && _a || Object])
    ], ShapeShiftService);
    return ShapeShiftService;
    var _a;
}());

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
        this.marketCap.getAllCoinsData().subscribe(function (markets) {
            // console.log(markets)
            _this.markets = markets;
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
                    item.market = market;
                }
                else
                    console.warn(' no coin ' + item.symbol);
            });
            this.coinsAvailable = __WEBPACK_IMPORTED_MODULE_3_lodash__["orderBy"](ar, 'symbol');
        }
    };
    SSCoinsAvailableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-ss-coins-available',
            template: __webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shape-shift/ss-coins-available/ss-coins-available.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shape_shift_service__["a" /* ShapeShiftService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shape_shift_service__["a" /* ShapeShiftService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__market_cap_market_cap_service__["a" /* MarketCapService */]) === "function" && _b || Object])
    ], SSCoinsAvailableComponent);
    return SSCoinsAvailableComponent;
    var _a, _b;
}());

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
    SsMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-ss-main',
            template: __webpack_require__("../../../../../src/app/shape-shift/ss-main/ss-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shape-shift/ss-main/ss-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SsMainComponent);
    return SsMainComponent;
}());

//# sourceMappingURL=ss-main.component.js.map

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
    CrossTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-cross-table',
            template: __webpack_require__("../../../../../src/app/shared/cross-table/cross-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/cross-table/cross-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CrossTableComponent);
    return CrossTableComponent;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    DialogSimpleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dialog-simple',
            template: __webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/dialog-simple/dialog-simple.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], DialogSimpleComponent);
    return DialogSimpleComponent;
}());

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

/***/ "../../../../../src/app/shared/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form #f1=\"ngForm\"  autocomplete=\"off\">\n        <md-list>\n            <md-list-item>\n                <md-input-container>\n                    <input #username\n                           mdInput\n                           [(ngModel)]=\"login.username\"\n                           required\n                           minlength=\"6\" type=\"text\" placeholder=\"username\" name=\"username\" type=\"text\"/>\n                </md-input-container>\n            </md-list-item>\n\n            <md-list-item>\n                <md-input-container>\n                    <input mdInput\n                           (blur)=\"checkPassword()\"\n                           placeholder=\"Password\"\n                           name=\"password\"\n                           [(ngModel)]=\"login.password\"\n                           required\n                           minlength=\"6\"\n                           [type]=\"showPass ? 'text': 'password'\"\n                           style=\"width: 100%\"/>\n                </md-input-container>\n            </md-list-item>\n            <md-list-item>\n                <md-checkbox #showpass (change)=\"onShowPasswordChanged($event, showpass)\">Show password\n                </md-checkbox>\n            </md-list-item>\n            <md-list-item>\n                <md-checkbox #savepass >Save on this computer </md-checkbox>\n            </md-list-item>\n\n            <md-list-item>\n                <button md-raised-button color=\"accent\"  (click)=\"onSubmit()\">\n                    Login\n                </button>\n            </md-list-item>\n        </md-list>\n\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function LoginFormComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.showPass = false;
        this.login = { username: '', password: '', save: false };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.checkPassword = function () {
    };
    LoginFormComponent.prototype.onShowPasswordChanged = function (evt, on) {
        this.showPass = on.checked;
    };
    LoginFormComponent.prototype.onSubmit = function () {
        this.login.save = this.savepass.checked;
        this.dialogRef.close(this.login);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('savepass'),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "savepass", void 0);
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/shared/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object])
    ], LoginFormComponent);
    return LoginFormComponent;
    var _a;
}());

//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/logout-form/logout-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/logout-form/logout-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout-form works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/logout-form/logout-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutFormComponent; });
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

var LogoutFormComponent = (function () {
    function LogoutFormComponent() {
    }
    LogoutFormComponent.prototype.ngOnInit = function () {
    };
    LogoutFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-logout-form',
            template: __webpack_require__("../../../../../src/app/shared/logout-form/logout-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/logout-form/logout-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutFormComponent);
    return LogoutFormComponent;
}());

//# sourceMappingURL=logout-form.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logout_form_logout_form_component__ = __webpack_require__("../../../../../src/app/shared/logout-form/logout-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/shared/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__sortable_table_sortable_table_component__["a" /* SortableTableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_material_app_module__["a" /* MaterialAppModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */],
                __WEBPACK_IMPORTED_MODULE_4__sortable_table_sortable_table_component__["a" /* SortableTableComponent */],
                __WEBPACK_IMPORTED_MODULE_5__cross_table_cross_table_component__["a" /* CrossTableComponent */],
                __WEBPACK_IMPORTED_MODULE_6__logout_form_logout_form_component__["a" /* LogoutFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_form_login_form_component__["a" /* LoginFormComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dialog_simple_dialog_simple_component__["a" /* DialogSimpleComponent */], __WEBPACK_IMPORTED_MODULE_7__login_form_login_form_component__["a" /* LoginFormComponent */], __WEBPACK_IMPORTED_MODULE_6__logout_form_logout_form_component__["a" /* LogoutFormComponent */]]
        })
    ], SharedModule);
    return SharedModule;
}());

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
    return SortableTableComponent;
    var _a;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    MyWalletsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-my-wallets',
            template: __webpack_require__("../../../../../src/app/wallets/my-wallets/my-wallets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/wallets/my-wallets/my-wallets.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__wallets_all_service__["a" /* WalletsAllService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _b || Object])
    ], MyWalletsComponent);
    return MyWalletsComponent;
    var _a, _b;
}());

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
    WaletsAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-walets-all',
            template: __webpack_require__("../../../../../src/app/wallets/walets-all/walets-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/wallets/walets-all/walets-all.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WaletsAllComponent);
    return WaletsAllComponent;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
        this.wallet = new __WEBPACK_IMPORTED_MODULE_1__models_app_models__["c" /* WalletModel */]();
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
    return WalletCreateComponent;
    var _a, _b, _c;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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





//import {address} from 'bitcoinjs-lib';
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
    WalletEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-wallet-edit',
            template: __webpack_require__("../../../../../src/app/wallets/wallet-edit/wallet-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/wallets/wallet-edit/wallet-edit.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_app_models__["c" /* WalletModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_app_models__["c" /* WalletModel */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__wallets_all_service__["a" /* WalletsAllService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__wallets_all_service__["a" /* WalletsAllService */]) === "function" && _d || Object])
    ], WalletEditComponent);
    return WalletEditComponent;
    var _a, _b, _c, _d;
}());

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_app_models__["c" /* WalletModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_app_models__["c" /* WalletModel */]) === "function" && _a || Object)
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
    return WalletComponent;
    var _a, _b, _c, _d, _e;
}());

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
    WalletService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], WalletService);
    return WalletService;
    var _a;
}());

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
    WalletsAllService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_server_service__["a" /* ApiServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_server_service__["a" /* ApiServerService */]) === "function" && _a || Object])
    ], WalletsAllService);
    return WalletsAllService;
    var _a;
}());

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
    WalletsMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-wallets-main',
            template: __webpack_require__("../../../../../src/app/wallets/wallets-main/wallets-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/wallets/wallets-main/wallets-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WalletsMainComponent);
    return WalletsMainComponent;
}());

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
    return WalletsModule;
}());

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

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

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

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map