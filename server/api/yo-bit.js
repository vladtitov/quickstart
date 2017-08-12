"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var _ = require("lodash");
var apicache = require("apicache");
var cache = apicache.middleware;
function initYoBit(app) {
    APIs.forEach(function (item) {
        if (item.cache) {
            app.get(item.api, cache(item.cache), function (req, resp) {
                var values = _.values(req.params);
                var url = item.url + (values.length ? '/' + values.join('/') : '');
                console.log(url);
                var options = {
                    url: url
                };
                request(options).pipe(resp);
            });
        }
        else {
            app.route(item.api).get(function (req, resp) {
                var values = _.values(req.params);
                var url = item.url + values.length ? '/' + values.join('/') : '';
                console.log(url);
                var options = {
                    url: url
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
        api: '/api/yo-bit/currencies',
        url: 'https://yobit.net/api/3/info',
        name: 'market',
        cache: '1 hour'
    },
    {
        api: '/api/yo-bit/market/:pair',
        url: 'https://yobit.net/api/3/ticker/',
        name: 'market',
        cache: '1 hour'
    }
];
