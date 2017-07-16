"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
function initEther(app) {
    var getTokenBalance = function (contractAddress, address, callback) {
        var url = 'https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress={{contractAddress}}&address={{address}}&tag=latest';
        url = url
            .replace('{{contractAddress}}', contractAddress)
            .replace('{{address}}', address);
        request.get(url, function (err, r, body) {
            callback(err, body);
        });
    };
    var getCoinBalance = function (coin, address, callback) {
        if (coin) {
            var url = coin.urlBalance;
            url = url.replace('{{address}}', address);
            request.get(url, function (err, r, body) {
                callback(err, body);
            });
        }
    };
    var coins = {
        "ETH": {
            // "urlBalance":"https://api.etherscan.io/api?module=account&action=balancemulti&address={{address}}&tag=latest",
            "urlBalance": "https://api.etherscan.io/api?module=account&action=balance&address={{address}}&tag=latest",
            "urlSendTransaction": ""
        }
    };
    var tokens = {
        "REP": "0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5",
        "GNO": "0x6810e776880c02933d47db1b9fc05908e5386b96",
        "GNT": "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
        "DGD": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
        "ICN": "0x888666CA69E0f178DED6D75b5726Cee99A87D698"
    };
    app.route("/api/coin/balance/:symbol/:address").get(function (req, res) {
        var contractAddress = tokens[req.params.symbol];
        if (contractAddress)
            getTokenBalance(contractAddress, req.params.address, function (err, result) {
                if (err)
                    res.json({ error: err });
                else {
                    res.end(result);
                }
            });
        else
            getCoinBalance(coins[req.params.symbol], req.params.address, function (err, result) {
                if (err)
                    res.json({ error: err });
                else {
                    res.end(result);
                }
            });
    });
    app.route("/api/coin/sendTransaction/:symbol").post(function (req, res) {
        var rawTransaction = req.body;
        var symbol = req.params.symbol;
        if (tokens[symbol])
            symbol = 'ETH';
        var coin = coins[symbol];
        var options = {
            uri: '',
            method: 'POST',
            json: rawTransaction
        };
        request(options, function (err, r, body) {
            res.end(body);
        });
    });
}
exports.initEther = initEther;
//# sourceMappingURL=api-ether.js.map