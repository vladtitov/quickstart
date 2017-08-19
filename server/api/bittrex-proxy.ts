/**
 * Created by Vlad on 7/17/2017.
 */
import {Application, Response, Request} from "express";
import * as request from 'request';

//var crypto = require('crypto');
import * as crypto from 'crypto';
import * as apicache from 'apicache';
let cache = apicache.middleware;
const qs     = require('qs');

export function bittrexApi(app:Application){

  let apikey='c23dd9ea28924ae2bc2474a333c99062';
  //let apisecret='42e47e93bcaf4a2b995b7177d20d1d74';
  let srverpassword= 'myserver password';

  let hash_hmac = function (text, apisecret) {
    return crypto
      .createHmac('sha512', apisecret)
      .update(text)
      .digest('hex');

  }
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


      let params:string = qs.stringify(req.params);



      //let body = req.params;
      let url =  item.url+params;
      console.log(url);

      let options = {
        url:url,
        // method: 'POST',
        //body:qs.stringify(body),
        headers: {
          'User-Agent': 'request'
        }
      };

      request(options).pipe(resp);
    });
  });




 /* app.route("/api/bittrex/!*").get(function (req: Request, res: Response) {
    console.log(req.url);
    let nonce=Math.floor(Date.now()/1000);
    let url = req.url;
    url = url.replace('/api/bittrex/', 'https://bittrex.com/api/v1.1/');

    let apisecret = req.headers['apisecret'];

    if(apisecret){
      if(url.indexOf('?') ===-1)url+='?apikey='+apikey;
      else url+='&apikey='+apikey;
      url+='&nonce='+nonce;
      var sign = hash_hmac(url, apisecret);
    }

    var options = {
      url:url,
      headers: {
        'User-Agent': 'request',
        'apisign':sign
      }
    };

     console.log(options);

    request(options).pipe(res);
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
    cache:'1 hour'
  }


];
