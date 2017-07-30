"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestOrig = require("request");
;
var request = requestOrig;
var all_market = {
    timestamp: 0,
    payload: '[]'
};
function updateAllMarket(callBack) {
    var url = 'https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=YourApiKeyToken';
    console.log(url);
    request.get(url, function (err, r, body) {
        if (err) {
            console.error(' error from  ' + url, err);
        }
        else {
            console.log(body);
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
