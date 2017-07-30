
import {Application, Response, Request} from "express";

import * as requestOrig from 'request';
var FileCookieStore = require('tough-cookie-filestore');
var cookie_string;
let request = requestOrig;

let all_market:any ={
  timestamp:0,
  payload:'[]'
}


function updateAllMarket(callBack?:Function){
  var j = request.jar();
  //var j = request.jar(new FileCookieStore('cookies.json'));
  request = request.defaults({ jar : j })
  let url = 'https://api.coinmarketcap.com/v1/ticker/';
  console.log(url)


  var options = {
    url:url,
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
      'Cookie': cookie_string,
      'Accept': '/',
      'Connection': 'keep-alive'
    }
    //,jar: j
  };

  request.get(options,function (err,r,body){
    cookie_string = j.getCookieString(url);

    if(err){
      console.error(' error from https://api.coinmarketcap.com/v1/ticker/ ', err);
      //console.log(body);
      // console.log(body);
    }else{
       console.log(body);
      console.log(cookie_string);
      all_market.timestamp = Date.now();
      try{
        all_market.payload = JSON.parse(body);
      }catch (e){
        all_market.error =  body
      }

      if(callBack)callBack(all_market)
    }

  })
}


export function coinMarketCap(app: Application): void {

  setInterval(updateAllMarket, 60000);

  updateAllMarket();

  app.route("/api/all-coins/market/minute").get(function (req: Request, res: Response) {

    updateAllMarket(function (data) {
      res.json(data);
    });

  });

}