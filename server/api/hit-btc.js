"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
function initHitBTC(app) {
    APIs.forEach(function (item) {
        app.route(item.api).get(function (req, resp) {
            var options = {
                url: item.url
            };
            request(options).pipe(resp);
        });
    });
    return APIs;
}
exports.initHitBTC = initHitBTC;
var APIs = [
    {
        api: '/api/hit-btc/all',
        url: 'https://api.hitbtc.com//api/1/public/symbols',
        name: 'market'
    }
];
