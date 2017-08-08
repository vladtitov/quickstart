"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var apicache = require("apicache");
var cache = apicache.middleware;
function initYoBit(app) {
    APIs.forEach(function (item) {
        if (item.cache) {
            app.get(item.api, cache(item.cache), function (req, resp) {
                var options = {
                    url: item.url
                };
                request(options).pipe(resp);
            });
        }
        else {
            app.route(item.api).get(function (req, resp) {
                var options = {
                    url: item.url
                };
                request(options).pipe(resp);
            });
        }
    });
    return APIs;
}
exports.initYoBit = initYoBit;
var APIs = [
    {
        api: '/api/yo-bit/market',
        url: 'https://yobit.net/api/3/info',
        name: 'market',
        cache: '1 hour'
    }
];
