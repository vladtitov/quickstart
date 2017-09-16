/**
 * Created by Vlad on 7/17/2017.
 */
import {Application, Response, Request} from "express";
import * as request from 'request';
import * as crypto from 'crypto';
import * as apicache from 'apicache';
let cache = apicache.middleware;
const qs     = require('qs');

export function initBittrex(app:Application){


  let hash_hmac = function (text, apisecret) {
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



  APIs.forEach(function (item) {
    app.get(item.api, cache(item.cache), function (req: Request, resp: Response) {
      console.log(req.params);

      let params:string = qs.stringify(req.params);

      //let body = req.params;
      console.log(params);

      let url =  item.url+params;


      console.log(url);

      let options = {
        url:url,
        headers: {
          'User-Agent': 'request'
        }
      };

      request(options).pipe(resp);
    });
  });


  app.post("/api/bittrex/private", cache('1 hour'),function (req: Request, resp: Response) {

    let url = req.body.uri;
    let signed = req.body.signed;

   // console.log(url, signed);



      var options = {
      url:url,
      headers: {
        'User-Agent': 'request',
        'apisign':signed
      }
    };

    request(options).pipe(resp);
  })





 // app.route("/api/bittrex/!*").get(function (req: Request, res: Response) {




/*

    let nonce=Math.floor(Date.now()/1000);
    let url = 'https://bittrex.com/api/v1.1/market/getopenorders?apikey=c23dd9ea28924ae2bc2474a333c99062&nonce='+nonce;




    let apisecret = '42e47e93bcaf4a2b995b7177d20d1d74';

      var sign = hash_hmac(url, apisecret);
console.log(sign);

    var options = {
      url:url,
      headers: {
        'User-Agent': 'request',
        'apisign':sign
      }
    };

     console.log(options);

    request(options, function (err, respond, data) {
      console.log(data);
    })
*/


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
 // })

return APIs;
}




const APIs=[
  {
    api:'/api/bittrex/markets',
    url:'https://bittrex.com/api/v1.1/public/getmarkets',
    name:'markets',
    cache:'1 hour'
  },
  {
    api:'/api/bittrex/marketsummaries',
    url:'https://bittrex.com/api/v1.1/public/getmarketsummaries',
    name:'recent trades ',
    cache:'1 hour'
  },
  {
    api:'/api/bittrex/currencies',
    url:'https://bittrex.com/api/v1.1/public/getcurrencies',
    name:'markets',
    cache:'1 hour'
  },
  {
    api:'/api/bittrex/market/:market',
    url:'https://bittrex.com/api/v1.1/public/getmarketsummary?',
    name:'recent trades ',
    cache:'10 minutes'
  },
  {
    api:'/api/bittrex/getmarkethistory/:market',
    url:'https://bittrex.com/api/v1.1/public/getmarkethistory?',
    name:'recent trades ',
    cache:'10 minutes'
  },
  {
    api:'/api/bittrex/getorderbook/:market/:depth',
    url:'https://bittrex.com/api/v1.1/public/getorderbook?market={{market}}&type=both&depth={{depth}}',
    name:'recent trades ',
    cache:'10 minutes'
  }

];
