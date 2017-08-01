"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var _ = require("lodash");
function initPoloniex(app) {
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
    app.route("/api/poloniex/info").get(function (req, resp) {
        resp.json(APIS);
    });
}
exports.initPoloniex = initPoloniex;
var APIS = [
    {
        name: 'returnTicker',
        api: '/api/poloniex/returnTicker',
        url: 'https://poloniex.com/public?command=returnTicker'
    }
];
