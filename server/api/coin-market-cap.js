"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestOrig = require("request");
var FileCookieStore = require('tough-cookie-filestore');
var cookie_string = '__cfduid=d637b4b187aea018d48767e06cde771f41501428058';
;
var request = requestOrig;
var all_market = {
    timestamp: 0,
    payload: '[]'
};
function updateAllMarket(callBack) {
    var j = request.jar();
    var cookie = request.cookie(cookie_string);
    var j = request.jar(cookie_string);
    var url = 'https://api.coinmarketcap.com/v1/ticker/';
    j.setCookie(cookie, url);
    console.log(url);
    request.get({ url: url, jar: j }, function (err, r, body) {
        var cookies = j.getCookieString(url);
        if (cookies)
            cookie_string = cookies;
        if (err) {
            console.error(' error from https://api.coinmarketcap.com/v1/ticker/ ', err);
        }
        else {
            console.log(body);
            console.log(cookie_string);
            all_market.timestamp = Date.now();
            try {
                all_market.payload = JSON.parse(body);
            }
            catch (e) {
                all_market.error = body;
            }
            if (callBack)
                callBack(all_market);
        }
    });
}
function coinMarketCap(app) {
    setInterval(updateAllMarket, 60000);
    updateAllMarket();
    app.route("/api/all-coins/market/minute").get(function (req, res) {
        updateAllMarket(function (data) {
            res.json(data);
        });
    });
}
exports.coinMarketCap = coinMarketCap;
