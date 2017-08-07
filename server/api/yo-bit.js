"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
function initYoBit(app) {
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
exports.initYoBit = initYoBit;
var APIs = [
    {
        api: '/api/yo-bit/market',
        url: 'https://yobit.net/api/3/info',
        name: 'market'
    }
];
