"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var api_1 = require("./api/api");
var apiErrorHandler_1 = require("./utils/apiErrorHandler");
var bodyParser = require("body-parser");
var apiLogin_1 = require("./api/apiLogin");
var changelly_api_1 = require("./api/changelly-api");
var shapeshift_api_1 = require("./api/shapeshift-api");
var api_ether_1 = require("./api/api-ether");
var api_save_1 = require("./utils/api-save");
var bittrex_proxy_1 = require("./api/bittrex-proxy");
var api_send_notification_1 = require("./api/api-send-notification");
var coin_market_cap_1 = require("./api/coin-market-cap");
var poloniex_1 = require("./api/poloniex");
var coinbase_1 = require("./api/coinbase");
var hit_btc_1 = require("./api/hit-btc");
var yo_bit_1 = require("./api/yo-bit");
var coin_exchange_1 = require("./api/coin-exchange");
var kraken_1 = require("./api/kraken");
var bitfinex_1 = require("./api/bitfinex");
var app = express();
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));
var apis = [];
app.get('/index', function (req, res) {
    var p = path.join(__dirname, '../pub', 'index.html');
    console.log(p);
    res.sendFile(p);
});
app.use(express.static(path.join(__dirname, '../pub')));
app.get('/apis-info', function (req, resp) {
    resp.json({
        title: 'APIS Available',
        timestamp: (new Date()).toISOString(),
        data: apis
    });
});
apiLogin_1.initLogin(app);
api_send_notification_1.apiSendNotification(app);
api_1.initRestApi(app);
api_ether_1.initEther(app);
api_save_1.apiSave(app);
apis = apis.concat(changelly_api_1.initChangelly(app));
apis = apis.concat(shapeshift_api_1.initShapeSift(app));
apis = apis.concat(bittrex_proxy_1.bittrexApi(app));
apis = apis.concat(coin_market_cap_1.coinMarketCap(app));
apis = apis.concat(poloniex_1.initPoloniex(app));
apis = apis.concat(coinbase_1.initCoinbase(app));
apis = apis.concat(hit_btc_1.initHitBTC(app));
apis = apis.concat(yo_bit_1.initYoBit(app));
apis = apis.concat(coin_exchange_1.initCoinExchange(app));
apis = apis.concat(kraken_1.initKraken(app));
apis = apis.concat(bitfinex_1.initBitFinrx(app));
app.use(apiErrorHandler_1.apiErrorHandler);
app.listen(app.get('port'), function () {
    console.log("Server now running on port " + app.get('port'));
});
