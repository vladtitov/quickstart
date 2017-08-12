"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var _ = require("lodash");
var apicache = require("apicache");
var cache = apicache.middleware;
function initCoinbase(app) {
    APIs.forEach(function (item) {
        app.get(item.api, cache(item.cache), function (req, resp) {
            var values = _.values(req.params);
            var url = item.url + values.length ? '/' + values.join('/') : '';
            console.log(url);
            var options = {
                url: url
            };
            request(options).pipe(resp);
        });
    });
    return APIs;
}
exports.initCoinbase = initCoinbase;
var APIs = [
    {
        name: 'exchange-rates',
        api: '/api/coinbase/exchange-rates/:id',
        url: 'https://api.coinbase.com/v2/exchange-rates/',
        cache: '1 hour'
    },
    {
        name: 'currencies',
        api: '/api/coinbase/currencies',
        url: 'https://api.coinbase.com/v2/currencies',
        cache: '1 hour'
    }
];
