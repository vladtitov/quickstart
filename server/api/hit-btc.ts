
/**
 * Created by Vlad on 7/17/2017.
 */
import {Application, Response, Request} from "express";
import * as request from 'request';


export function initHitBTC(app:Application) {

  APIs.forEach(function (item) {
    app.route(item.api).get(function (req: Request, resp: Response) {
      let options = {
        url: item.url
      }

      request(options).pipe(resp);
    });
  })


  // app.route("/api/hit-btc/all").get(function (req: Request, res: Response) {
  //console.log(req.url);
  ////  let nonce=Math.floor(Date.now()/1000);

  /* let url = req.url;
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


  //})


 return APIs;

}

const APIs=[
  {
    api:'/api/hit-btc/all',
    url:'https://api.hitbtc.com//api/1/public/symbols',
    name:'market'
  }
];
