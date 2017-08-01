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
    var url = 'http://theblockchaincomputer.com/elogs/market-cap.php';
    console.log(url);
    request.get(url, function (err, r, body) {
        if (err) {
            console.error(' error from  ' + url, err);
        }
        else {
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
    return APIs;
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
var APIs = [
    {
        api: "/api/all-coins/market/minute",
        function: "updateAllMarket"
    }
];
