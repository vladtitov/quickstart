"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var _ = require("lodash");
function initCoinbase(app) {
    var apis = _.keyBy(APIS, 'name');
    APIS.forEach(function (item) {
        app.route(item.api).get(function (req, resp) {
            request(item.url, function (err, respond, body) {
                if (err) {
                    resp.json({ error: err });
                }
                else {
                    resp.end(body);
                }
            });
        });
    });
    app.route("/api/coinbase/info").get(function (req, resp) {
        resp.json(APIS);
    });
    return APIS;
}
exports.initCoinbase = initCoinbase;
var APIS = [
    {
        name: 'exchange-rates',
        api: '/api/coinbase/exchange-rates',
        url: 'https://api.coinbase.com/v2/exchange-rates'
    },
    {
        name: 'currencies',
        api: '/api/coinbase/currencies',
        url: 'https://api.coinbase.com/v2/currencies'
    }
];
