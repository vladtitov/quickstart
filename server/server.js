"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const apiErrorHandler_1 = require("./utils/apiErrorHandler");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const apicache = require("apicache");
let cache = apicache.middleware;
const login_api_1 = require("./api/login-api");
const changelly_api_1 = require("./api/changelly-api");
const shapeshift_api_1 = require("./api/shapeshift-api");
const api_save_1 = require("./utils/api-save");
const bittrex_1 = require("./api/bittrex");
const api_send_notification_1 = require("./api/api-send-notification");
const coin_market_cap_1 = require("./api/coin-market-cap");
const poloniex_1 = require("./api/poloniex");
const coinbase_1 = require("./api/coinbase");
const yo_bit_1 = require("./api/yo-bit");
const coin_exchange_1 = require("./api/coin-exchange");
const kraken_1 = require("./api/kraken");
const bitfinex_1 = require("./api/bitfinex");
const novaexchange_1 = require("./api/novaexchange");
const apis_1 = require("./api/apis");
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));
let apis = [];
app.get('/index', function (req, res) {
    let p = path.join(__dirname, '../pub', 'index.html');
    console.log(p);
    res.sendFile(p);
});
app.use(express.static(path.join(__dirname, '../pub')));
app.get('/apis-info/:filter', function (req, resp) {
    let out = [];
    let filter = req.params.filter;
    app._router.stack.forEach(function (r) {
        if (r.route && r.route.path && r.route.path.indexOf(this.filter) !== -1) {
            out.push(r.route.path.substr(5));
        }
    }, { filter: filter, i: 0 });
    resp.json(out.sort().map(function (item, index) {
        return index + ' ' + item;
    }));
});
login_api_1.initLogin(app);
api_send_notification_1.apiSendNotification(app);
apis_1.initPublicApis(app);
api_save_1.apiSave(app);
apis = apis.concat(changelly_api_1.initChangelly(app));
apis = apis.concat(shapeshift_api_1.initShapeSift(app));
apis = apis.concat(bittrex_1.initBittrex(app));
apis = apis.concat(coin_market_cap_1.coinMarketCap(app));
apis = apis.concat(poloniex_1.initPoloniex(app));
apis = apis.concat(coinbase_1.initCoinbase(app));
apis = apis.concat(yo_bit_1.initYoBit(app));
apis = apis.concat(coin_exchange_1.initCoinExchange(app));
apis = apis.concat(kraken_1.initKraken(app));
apis = apis.concat(bitfinex_1.initBitFinrx(app));
apis = apis.concat(novaexchange_1.initNovoExchange(app));
app.use(apiErrorHandler_1.apiErrorHandler);
app.listen(app.get('port'), () => {
    console.log("Server now running on port " + app.get('port'));
});
