import {Application, Response, Request} from "express";

import * as request from 'request';
import * as _ from 'lodash';

export function initPoloniex(app: Application) {

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


  app.route("/api/poloniex/info").get(function (req: Request, resp: Response) {

   resp.json(APIS);
  });

}


const APIS = [
  {
    name: 'returnTicker',
    api: '/api/poloniex/returnTicker',
    url: 'https://poloniex.com/public?command=returnTicker'

  }
]

