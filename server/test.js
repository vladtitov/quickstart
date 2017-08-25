"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const qs = require('qs');
const apicache = require("apicache");
let cache = apicache.middleware;
let url = 'https://api.coinmarketcap.com/v1/ticker/';
let all_market = {};
console.log(url);
request.get(url, function (err, r, body) {
    if (err) {
        console.error(' error from  ' + url, err);
    }
    else {
        console.log(body);
    }
});
