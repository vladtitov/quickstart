/*
import {Application} from "express";
import {apiGetAllPosts} from '../archive/apiGetAllPosts';

import {apiGetMenu} from '../utils/apiGetMenu';
import * as fs from 'fs';
import * as path from 'path';


export function initRestApi(app: Application ): void {

  app.route("/api/app-config").get(function (req, res) {
    res.sendFile(path.join(__dirname, '../../pub', 'app-config.json'));


  });
  app.route("/api/posts").get(apiGetAllPosts);
  app.route("/api/menu/:stamp").get(apiGetMenu);

}
*/

import {Application, Response, Request} from "express";
import * as request from 'request';
import * as _ from 'lodash';
import * as apicache from 'apicache';

let cache = apicache.middleware;
const qs = require('qs');


function getOptions(item, exchange, qparams) {
  let url: string;
  if (exchange.qs) {
    let params: string = qs.stringify(qparams);
    //console.log(params);
    url = item.url + params;
  } else {
    let values = _.values(qparams);
    url = item.url + (values.length ? '/' + values.join('/') : '');
  }

  console.log(url);
  return {
    url: url
  }
}

export function initPublicApis(app: Application) {

  APIs.forEach(function (exchange) {

    exchange.apis.forEach(function (item) {

      if (item.cache) {
        app.get(item.api,
          cache(item.cache),
          function (req: Request, resp: Response) {

            let options = getOptions(item, exchange, req.params);
            request(options).pipe(resp);
          });

      } else {

        app.route(item.api).get(function (req: Request, resp: Response) {
          let options = getOptions(item, exchange, req.params);
          request(options).pipe(resp);
        });

      }

    })

  });

  return APIs;

}


const APIs = [
  {
    uid: 'poloniex',
    qs: true,
    apis:[
      {
        name: 'returnTicker',
        api: '/api/poloniex/summaries',
        cache:'30 minutes',
        url: 'https://poloniex.com/public?command=returnTicker'
      }
    ]
  },
  {
    uid: 'novaexchange',
    qs: true,
    apis:[
      {
        api:'/api/novaexchange/summaries',
        url:'https://novaexchange.com/remote/v2/markets/',
        name:'market',
        cache:'30 minutes'
      }
    ]
  },
  {
    uid: 'bittrex',
    qs: true,
    apis:[
      {
        api:'/api/bittrex/summaries',
        url:'https://bittrex.com/api/v1.1/public/getmarketsummaries',
        name:'recent trades ',
        cache:'30 minutes'
      }
    ]
  },
  {
    uid: 'cryptopia',
    qs: false,
    apis:
      [
        {
          api: '/api/cryptopia/currencies',
          url: 'https://www.cryptopia.co.nz/api/GetCurrencies',
          name: 'currencies',
          cache: '1 day'
        },
        {
          api: '/api/cryptopia/pairs',
          url: 'https://www.cryptopia.co.nz/api/GetTradePairs',
          name: 'pairs',
          cache: '30 minutes'
        },
        {
          api: '/api/cryptopia/summaries',
          url: 'https://www.cryptopia.co.nz/api/GetMarkets',
          name: 'markets',
          cache: '30 minutes'
        }
      ]

  },
  {
    uid: 'hitbtc',
    qs: false,
    apis:
      [
        {
          api: '/api/hitbtc/currencies',
          url: 'https://api.hitbtc.com/api/1/public/symbols',
          name: 'coins',
          cache: '1 day'
        },
        {
          api: '/api/hitbtc/summaries',
          url: 'https://api.hitbtc.com/api/1/public/ticker',
          name: 'market',
          cache: '30 minutes'
        }
      ]
  },
  {
    uid: 'wex',
    qs: false,
    apis:
      [
        {
          api: '/api/wex/pairs',
          url: 'https://wex.nz/api/3/info',
          name: 'pairs',
          cache: '30 minutes'
        },
        {
          api: '/api/wex/martket/:pair',
          url: 'https://wex.nz/api/3/ticker/',
          name: 'market',
          cache: '30 minutes'
        }
      ]
  },
  {
    uid: 'etherdelta',
    qs: false,
    apis:
      [
        {
          api: '/api/etherdelta/summaries',
          url: 'https://api.etherdelta.com/returnTicker',
          name: 'markets',
          cache: '30 minutes'
        }
      ]
  },
  {
    uid: 'exmo',
    qs: false,
    apis:
      [
        {
          api: '/api/exmo/summaries',
          url: 'https://api.exmo.com/v1/ticker/',
          name: 'markets',
          cache: '30 minutes'
        }
      ]
  },
  {
    uid: 'xbtce',
    qs: false,
    apis:
      [
        {
          api: '/api/xbtce/summaries',
          url: 'https://cryptottlivewebapi.xbtce.net:8443/api/v1/public/ticker',
          name: 'markets',
          cache: '30 minutes'
        }
      ]
  },
  {
    uid: 'bitz',
    qs: false,
    apis:
      [
        {
          api: '/api/bitz/summaries',
          url: 'https://www.bit-z.com/api_v1/tickerall',
          name: 'markets',
          cache: '30 minutes'
        }
      ]
  },
  {
    uid: 'coinone',
    qs: false,
    apis:
      [
        {
          api: '/api/coinone/summaries',
          url: 'https://api.coinone.co.kr/ticker/?currency=all&format=json',
          name: 'markets',
          cache: '30 minutes'
        }
      ]
  },
  {
    uid: 'bitsane',
    qs: false,
    apis:
      [
        {
          api: '/api/bitsane/summaries',
          url: 'https://bitsane.com/api/public/ticker',
          name: 'markets',
          cache: '30 minutes'
        }
      ]
  },
  {
    uid: 'bithumb',
    qs: false,
    apis:
      [
        {
          api: '/api/bithumb/summaries',
          url: 'https://api.bithumb.com/public/ticker/ALL',
          name: 'markets',
          cache: '30 minutes'
        }
      ]
  }

];
