"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestOrig = require("request");
var FileCookieStore = require('tough-cookie-filestore');
var cookie_string;
var request = requestOrig;
var all_market = {
    timestamp: 0,
    payload: '[]'
};
function updateAllMarket(callBack) {
    var j = request.jar();
    request = request.defaults({ jar: j });
    var url = 'https://api.coinmarketcap.com/v1/ticker/';
    console.log(url);
    var options = {
        url: url,
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
            'Cookie': cookie_string,
            'Accept': '/',
            'Connection': 'keep-alive'
        }
    };
    request.get(options, function (err, r, body) {
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
