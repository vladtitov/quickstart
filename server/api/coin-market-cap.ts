
import {Application, Response, Request} from "express";

import * as requestOrig from 'request';
//var FileCookieStore = require('tough-cookie-filestore');
///var cookie_string = '__cfduid=d637b4b187aea018d48767e06cde771f41501428058';
;
let request = requestOrig;

let all_market:any ={
  timestamp:0,
  payload:'[]'
}


function updateAllMarket(callBack?:Function){
 // var j = request.jar();
 // var cookie = request.cookie(cookie_string);
 // var j = request.jar(cookie_string);

 // request = request.defaults({ jar : j })

  let url = 'https://api.coinmarketcap.com/v1/ticker/';
 // let url = 'http://52.36.123.150:49599/api/exchange/proxy';
 //let url = 'https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=YourApiKeyToken';


  //j.setCookie(cookie, url);
  console.log(url)


 /* var options = {
    url:url,
    method: 'GET',
    headers: {
      'User-Agent': 'nodejs',
      'Cookie': cookie_string,
      'Accept': '/',
      'Connection': 'keep-alive'
    }
    //,jar: j
  };*/


  request.get(url,function (err,r,body){
    //let cookies = j.getCookieString(url);
   // if(cookies) cookie_string = cookies;

    if(err){
      console.error(' error from  ' + url, err);
      //console.log(body);
      // console.log(body);
    }else{
      // console.log(body);
      //console.log(cookie_string);
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