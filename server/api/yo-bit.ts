import {Application, Response, Request} from "express";
import * as request from 'request';


export function initYoBit(app:Application) {

  APIs.forEach(function (item) {
    app.route(item.api).get(function (req: Request, resp: Response) {
      let options = {
        url: item.url
      }

      request(options).pipe(resp);
    });
  })

  return APIs;

}

const APIs=[
  {
    api:'/api/yo-bit/market',
    url:'https://yobit.net/api/3/info',
    name:'market'
  }
];
