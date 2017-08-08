"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestOrig = require("request");
var request = requestOrig;
var apicache = require("apicache");
var cache = apicache.middleware;
var all_market = {
    timestamp: 0,
    payload: '[]'
};
function coinMarketCap(app) {
    app.get("/api/all-coins/market/minute", cache('5 minutes'), function (req, resp) {
        var url = 'https://api.coinmarketcap.com/v1/ticker/';
        var all_market = {};
        console.log(url);
        request.get(url, function (err, r, body) {
            if (err) {
                console.error(' error from  ' + url, err);
            }
            else {
                all_market.timestamp = (new Date()).toISOString();
                try {
                    all_market.payload = JSON.parse(body);
                }
                catch (e) {
                    all_market.error = body;
                }
            }
            resp.json(all_market);
        });
    });
    return APIs;
}
exports.coinMarketCap = coinMarketCap;
var APIs = [
    {
        api: "/api/all-coins/market/minute",
        cache: '5 minutes',
        function: "updateAllMarket"
    }
];
