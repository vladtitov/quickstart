import {Application, Response, Request} from "express";

import * as request from 'request';
const qs     = require('qs');
import * as _ from 'lodash';
import * as apicache from 'apicache';
let cache = apicache.middleware;

let url = 'https://api.coinmarketcap.com/v1/ticker/';


let all_market:any = {};
console.log(url);

request.get(url,function (err,r,body){
  //let cookies = j.getCookieString(url);
  // if(cookies) cookie_string = cookies;


  if(err){
    console.error(' error from  ' + url, err);
    //console.log(body);
    // console.log(body);
  }else{
     console.log(body);
    //console.log(cookie_string);




  }


})
