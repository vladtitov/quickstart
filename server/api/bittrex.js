"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const crypto = require("crypto");
const apicache = require("apicache");
let cache = apicache.middleware;
const qs = require('qs');
function initBittrex(app) {
    let hash_hmac = function (text, apisecret) {
        return crypto
            .createHmac('sha512', apisecret)
            .update(text)
            .digest('hex');
    };
    APIs.forEach(function (item) {
        app.get(item.api, cache(item.cache), function (req, resp) {
            let params = qs.stringify(req.params);
            let url = item.url + params;
            console.log(url);
            let options = {
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
exports.initBittrex = initBittrex;
const APIs = [
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
