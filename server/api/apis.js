"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const _ = require("lodash");
const apicache = require("apicache");
let cache = apicache.middleware;
const qs = require('qs');
function getOptions(item, exchange, qparams) {
    let url;
    if (exchange.qs) {
        let params = qs.stringify(qparams);
        url = item.url + params;
    }
    else {
        let values = _.values(qparams);
        url = item.url + (values.length ? '/' + values.join('/') : '');
    }
    console.log(url);
    return {
        url: url
    };
}
function initPublicApis(app) {
    APIs.forEach(function (exchange) {
        exchange.apis.forEach(function (item) {
            if (item.cache) {
                app.get(item.api, cache(item.cache), function (req, resp) {
                    let options = getOptions(item, exchange, req.params);
                    request(options).pipe(resp);
                });
            }
            else {
                app.route(item.api).get(function (req, resp) {
                    let options = getOptions(item, exchange, req.params);
                    request(options).pipe(resp);
                });
            }
        });
    });
    return APIs;
}
exports.initPublicApis = initPublicApis;
const APIs = [
    {
        uid: 'cryptopia',
        qs: false,
        apis: [
            {
                api: '/api/cryptopia/currencies',
                url: 'https://www.cryptopia.co.nz/api/GetCurrencies',
                name: 'currencies',
                cache: '1 day'
            },
            {
                api: '/api/cryptopia/pairs',
                url: 'https://www.cryptopia.co.nz/api/GetTradePairs',
                name: 'pairs',
                cache: '30 minutes'
            },
            {
                api: '/api/cryptopia/markets-summary',
                url: 'https://www.cryptopia.co.nz/api/GetMarkets',
                name: 'markets',
                cache: '30 minutes'
            }
        ]
    },
    {
        uid: 'hitbtc',
        qs: false,
        apis: [
            {
                api: '/api/hitbtc/currencies',
                url: 'https://api.hitbtc.com/api/1/public/symbols',
                name: 'coins',
                cache: '1 day'
            },
            {
                api: '/api/hitbtc/markets-summary',
                url: 'https://api.hitbtc.com/api/1/public/ticker',
                name: 'market',
                cache: '30 minutes'
            }
        ]
    }
];
