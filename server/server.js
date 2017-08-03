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
var app = express();
var cors = require('cors');
app.use(bodyParser.json());
app.use(cors({ credentials: true }));
app.set('port', (process.env.PORT || 5000));
var apis = [];
app.get('/index', function (req, res) {
    var p = path.join(__dirname, '../pub', 'index.html');
    console.log(p);
    res.sendFile(p);
});
app.use(express.static(path.join(__dirname, '../pub')));
var ar;
ar = apiLogin_1.initLogin(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
ar = api_send_notification_1.apiSendNotification(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
ar = api_1.initRestApi(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
ar = changelly_api_1.initChangelly(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
ar = shapeshift_api_1.initShapeSift(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
ar = api_ether_1.initEther(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
ar = api_save_1.apiSave(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
ar = bittrex_proxy_1.bittrexApi(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
ar = coin_market_cap_1.coinMarketCap(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
ar = poloniex_1.initPoloniex(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
ar = coinbase_1.initCoinbase(app);
if (Array.isArray(ar))
    apis = apis.concat(ar);
app.use(apiErrorHandler_1.apiErrorHandler);
app.listen(app.get('port'), function () {
    console.log("Server now running on port " + app.get('port'));
});
