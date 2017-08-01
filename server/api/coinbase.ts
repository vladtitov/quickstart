import {Application, Response, Request} from "express";

import * as request from 'request';
import * as _ from 'lodash';


export function initCoinbase(app:Application){
  let apis = _.keyBy(APIS, 'name');

  APIS.forEach(function (item) {
    app.route(item.api).get(function (req: Request, resp: Response) {

      request(item.url, function (err, respond, body) {
        if (err) {
          resp.json({error: err});
        } else {
          resp.end(body);

        }
      });
    });

  });


  app.route("/api/coinbase/info").get(function (req: Request, resp: Response) {

    resp.json(APIS);
  });

  return APIS;
}




const APIS = [
  {
    name: 'exchange-rates',
    api: '/api/coinbase/exchange-rates',
    url: 'https://api.coinbase.com/v2/exchange-rates'

  },
  {
    name: 'currencies',
    api: '/api/coinbase/currencies',
    url: 'https://api.coinbase.com/v2/currencies'

  }

]
