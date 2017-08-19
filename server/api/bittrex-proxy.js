"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var crypto = require("crypto");
var apicache = require("apicache");
var cache = apicache.middleware;
var qs = require('qs');
function bittrexApi(app) {
    var apikey = 'c23dd9ea28924ae2bc2474a333c99062';
    var srverpassword = 'myserver password';
    var hash_hmac = function (text, apisecret) {
        return crypto
            .createHmac('sha512', apisecret)
            .update(text)
            .digest('hex');
    };
    APIs.forEach(function (item) {
        app.get(item.api, cache(item.cache), function (req, resp) {
            var params = qs.stringify(req.params);
            var url = item.url + params;
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
exports.bittrexApi = bittrexApi;
var APIs = [
    {
        api: '/api/bittrex/markets',
        url: 'https://bittrex.com/api/v1.1/public/getmarkets',
        name: 'markets',
        cache: '1 hour'
    },
    {
        api: '/api/bittrex/marketsummaries',
        url: 'https://bittrex.com/api/v1.1/public/getmarketsummaries',
        name: 'recent trades ',
        cache: '1 hour'
    },
    {
        api: '/api/bittrex/currencies',
        url: 'https://bittrex.com/api/v1.1/public/getcurrencies',
        name: 'markets',
        cache: '1 hour'
    },
    {
        api: '/api/bittrex/market/:market',
        url: 'https://bittrex.com/api/v1.1/public/getmarketsummary?',
        name: 'recent trades ',
        cache: '1 hour'
    }
];
