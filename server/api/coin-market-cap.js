"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestOrig = require("request");
let request = requestOrig;
const apicache = require("apicache");
let cache = apicache.middleware;
let all_market = {
    timestamp: 0,
    payload: '[]'
};
function coinMarketCap(app) {
    app.get("/api/all-coins/market/minute", cache('5 minutes'), function (req, resp) {
        let url = 'https://api.coinmarketcap.com/v1/ticker/';
        let all_market = {};
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
const APIs = [
    {
        api: "/api/all-coins/market/minute",
        cache: '5 minutes',
        function: "updateAllMarket"
    }
];
