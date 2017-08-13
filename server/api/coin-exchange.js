"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var _ = require("lodash");
var apicache = require("apicache");
var cache = apicache.middleware;
function initCoinExchange(app) {
    APIs.forEach(function (item) {
        app.get(item.api, cache(item.cache), function (req, resp) {
            var values = _.values(req.params);
            var url = item.url + (values.length ? '/' + values.join('/') : '');
            console.log(url);
            var options = {
                url: url,
                headers: {
                    'User-Agent': 'request'
                }
            };
            request(options).pipe(resp);
        });
    });
    return APIs;
}
exports.initCoinExchange = initCoinExchange;
var APIs = [
    {
        name: 'market-names',
        api: '/api/coinexchange/market-names',
        url: 'https://www.coinexchange.io/api/v1/getmarkets',
        cache: '1 hour'
    },
    {
        name: 'market-details',
        api: '/api/coinexchange/market-details',
        url: 'https://www.coinexchange.io/api/v1/getmarketsummaries',
        cache: '1 hour'
    }
];
