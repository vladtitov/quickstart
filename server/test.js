"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var qs = require('qs');
var apicache = require("apicache");
var cache = apicache.middleware;
var url = 'https://api.coinmarketcap.com/v1/ticker/';
var all_market = {};
console.log(url);
request.get(url, function (err, r, body) {
    if (err) {
        console.error(' error from  ' + url, err);
    }
    else {
        console.log(body);
    }
});
