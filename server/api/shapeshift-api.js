"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var all_market = {
    timestamp: 0,
    payload: 'no data'
};
function updateAllMarket() {
    request.get('https://api.coinmarketcap.com/v1/ticker/', function (err, r, body) {
        if (!err) {
            console.error(err);
        }
        else {
            all_market.payload = body;
        }
    });
}
function initShapeSift(app) {
    setInterval(updateAllMarket, 600000);
    updateAllMarket();
    app.route("/api/exchange/shapeshift/all-market").get(function (req, res) {
        res.end(all_market.payload);
    });
    app.route("/api/exchange/shapeshift/getcoins").get(function (req, res) {
        request.get('https://shapeshift.io/getcoins', function (err, r, body) {
            res.end(body);
        });
    });
    app.route("/api/exchange/shapeshift/rate/:from_to").get(function (req, res) {
        request.get('https://shapeshift.io/rate/' + req.params.from_to, function (err, r, body) {
            res.end(body);
        });
    });
    app.route("/api/exchange/shapeshift/marketinfo/:from_to/").get(function (req, res) {
        request.get('https://shapeshift.io/marketinfo/' + req.params.from_to, function (err, r, body) {
            res.end(body);
        });
    });
    app.route("/api/exchange/shapeshift/shift").post(function (req, res) {
        var options = {
            uri: 'https://shapeshift.io/shift/',
            method: 'POST',
            json: req.body
        };
        request(options, function (err, response, body) {
            if (err) {
                res.json({ error: err });
            }
            else {
                res.end(body);
            }
        });
    });
    app.route("/api/exchange/shapeshift/validateAddress/:address/:coin").get(function (req, res) {
        request.get('https://shapeshift.io/validateAddress/' + req.params.address + '/' + req.params.coin, function (err, r, body) {
            res.end(body);
        });
    });
}
exports.initShapeSift = initShapeSift;
