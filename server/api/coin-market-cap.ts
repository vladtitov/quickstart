
import {Application, Response, Request} from "express";

import * as request from 'request';


let all_market:any ={
  timestamp:0,
  payload:'[]'
}


function updateAllMarket(callBack?:Function){
  let url = 'https://api.coinmarketcap.com/v1/ticker/';
  console.log(url)

  request.get(url,function (err,r,body){

    if(err){
      console.error(' error from https://api.coinmarketcap.com/v1/ticker/ ', err);
      //console.log(body);
      // console.log(body);
    }else{
       console.log(body)
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