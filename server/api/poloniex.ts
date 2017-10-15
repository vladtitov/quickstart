import {Application, Response, Request} from "express";

import * as request from 'request';
import * as _ from 'lodash';
import * as apicache from 'apicache';
let cache = apicache.middleware;
const qs     = require('qs');

export function initPoloniex(app: Application) {

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


  app.post("/api/poloniex/private", cache('10 second'),function (req: Request, resp: Response) {

    // let url = req.body.uri;
    let signed = req.body.signed;
    let key = req.body.key;
    let postData = req.body.postData;

    // console.log(url, signed);

    // console.log(url);

    let url = 'https://poloniex.com/tradingApi';

    var options = {
      url:url,
      method: 'POST',
      body:postData,
      headers: {
        'User-Agent': 'request',
        'Sign':signed,
        'Key':key
      }
    };

    request(options).pipe(resp);
  })






  return APIs;
}


const APIs = [
  {
    name: 'returnTicker',
    api: '/api/poloniex/markets-summary',
    cache:'30 minutes',
    url: 'https://poloniex.com/public?command=returnTicker'

  },
  {
    name: 'currencies',
    api: '/api/poloniex/currencies',
    cache:'1 day',
    url: 'https://poloniex.com/public?command=returnCurrencies'

  },
  {
    name: 'return24hVolume',
    api: '/api/poloniex/volume24h',
    cache:'10 minutes',
    url: 'https://poloniex.com/public?command=return24hVolume'

  },
  {
    name: 'orderBook',
    api: '/api/poloniex/orderBook/:currencyPair/:depth',
    cache:'10 minute',
    url: 'https://poloniex.com/public?command=returnOrderBook&'

  },
  {
    name: 'tradeHistory',
    api: '/api/poloniex/tradeHistory/:currencyPair/:start/:end',
    cache:'10 minutes',
    url: ' https://poloniex.com/public?command=returnTradeHistory&'

  }
]
