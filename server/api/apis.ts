
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




function getOptions(item, exchange, qparams){
  let url:string;
  if(exchange.qs){
    let params:string = qs.stringify(qparams);
    //console.log(params);
    url = item.url+params;
  }else{
    let values = _.values(qparams);
    url = item.url+ (values.length?'/'+values.join('/'):'');
  }

  console.log(url);
  return {
    url: url
  }
}

export function initPublicApis(app:Application) {

  APIs.forEach(function (exchange) {

    exchange.apis.forEach(function (item) {

        if(item.cache){
          app.get(item.api,
            cache(item.cache),
            function (req: Request, resp: Response) {

             let options = getOptions(item, exchange, req.params);
              request(options).pipe(resp);
            });

        }else{

          app.route(item.api).get(function (req: Request, resp: Response) {
            let options = getOptions(item, exchange, req.params);
            request(options).pipe(resp);
          });

        }

    })

  });

  return APIs;

}



const APIs=[
  {
    uid:'cryptopia',
    qs:false,
    apis:
    [
      {
        api:'/api/cryptopia/currencies',
        url:'https://www.cryptopia.co.nz/api/GetCurrencies',
        name:'currencies',
        cache:'1 day'
      },
      {
        api:'/api/cryptopia/pairs',
        url:'https://www.cryptopia.co.nz/api/GetTradePairs',
        name:'pairs',
        cache:'30 minutes'
      },
      {
        api:'/api/cryptopia/markets-summary',
        url:'https://www.cryptopia.co.nz/api/GetMarkets',
        name:'markets',
        cache:'30 minutes'
      }
    ]

  },
  {
    uid: 'hitbtc',
    qs: false,
    apis:
      [
        {
          api:'/api/hitbtc/currencies',
          url:'https://api.hitbtc.com/api/1/public/symbols',
          name:'coins',
          cache:'1 day'
        },
        {
          api:'/api/hitbtc/markets-summary',
          url:'https://api.hitbtc.com/api/1/public/ticker',
          name:'market',
          cache:'30 minutes'
        }
      ]
  }

];

