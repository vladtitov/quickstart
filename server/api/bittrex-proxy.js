"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
//var crypto = require('crypto');
var crypto = require("crypto");
function bittrexApi(app) {
    var apikey = 'c23dd9ea28924ae2bc2474a333c99062';
    //let apisecret='42e47e93bcaf4a2b995b7177d20d1d74';
    var srverpassword = 'myserver password';
    var hash_hmac = function (text, apisecret) {
        return crypto
            .createHmac('sha512', apisecret)
            .update(text)
            .digest('hex');
    };
    /*
     "https://bittrex.com/api/v1.1/account/getorderhistory";
      var options = {
        url: 'https://api.github.com/repos/request/request',
        headers: {
          'User-Agent': 'request'
        }
      };*/
    app.route("/api/bittrex/*").get(function (req, res) {
        console.log(req.url);
        var nonce = Math.floor(Date.now() / 1000);
        var url = req.url;
        url = url.replace('/api/bittrex/', 'https://bittrex.com/api/v1.1/');
        var apisecret = req.headers['apisecret'];
        if (apisecret) {
            if (url.indexOf('?') === -1)
                url += '?apikey=' + apikey;
            else
                url += '&apikey=' + apikey;
            url += '&nonce=' + nonce;
            var sign = hash_hmac(url, apisecret);
        }
        var options = {
            url: url,
            headers: {
                'User-Agent': 'request',
                'apisign': sign
            }
        };
        console.log(options);
        request(options).pipe(res);
        //res.end(req.url);
        /*let contractAddress = tokens[req.params.symbol];
    
        if (contractAddress) getTokenBalance(contractAddress, req.params.address, function (err, result) {
          if (err) res.json({error: err});
          else {
    
            res.end(result);
          }
        })
        else getCoinBalance(coins[req.params.symbol], req.params.address, function (err, result) {
          if(err) res.json({error: err});
          else {
            res.end(result);
          }
        })*/
    });
}
exports.bittrexApi = bittrexApi;
//# sourceMappingURL=bittrex-proxy.js.map