"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var qs = require('qs');
var _ = require("lodash");
var apicache = require("apicache");
var cache = apicache.middleware;
function initBitFinrx(app) {
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
exports.initBitFinrx = initBitFinrx;
var APIs = [
    {
        api: '/api/bitfinex/symbols',
        url: 'https://api.bitfinex.com/v1/symbols',
        name: 'currencies',
        cache: '1 hour'
    },
    {
        api: '/api/bitfinex/market/:pair',
        url: 'https://api.bitfinex.com/v1/pubticker/',
        name: 'markets',
        cache: '1 hour'
    }
];
