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
var apis = [];
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../pub', 'index.html'));
});
app.use('/', express.static('./pub'));
app.get('/apis-info', function (req, resp) {
    resp.json({
        title: 'APIS Available',
        timestamp: (new Date()).toISOString(),
        data: apis
    });
});
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
var port = 50488;
app.listen(port, function () {
    console.log("Server now running on port " + port);
});
