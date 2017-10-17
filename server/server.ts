
import * as path from 'path';
import * as express from "express";
import {Application} from "express";
import {initRestApi} from "./api/api";
import {apiErrorHandler} from "./utils/apiErrorHandler";

//import apicache from 'apicache';
//let cache = apicache.middleware;
const bodyParser:any = require("body-parser");
const cookieParser = require('cookie-parser');

import * as apicache from 'apicache';
let cache = apicache.middleware;
import * as request from 'request';


let config:{
  [exchange:string]:{
    isComplex:boolean,
    apis:{[func:string]:string}

  }
} = require('./api/api-config.json');
  /*exchanges:{
    [exchange:string]:{
      isComplex:boolean,
      urlMarkets:string
    }
  }*/

console.log(config);









//import * as JWT from "jsonwebtoken";
import {initLogin} from './api/login-api';

import {initChangelly} from './api/changelly-api';
import {initShapeSift} from './api/shapeshift-api';
import {initEther} from './api/api-ether';
import {apiSave} from './utils/api-save';
import {initBittrex} from './api/bittrex';
import {apiSendNotification} from './api/api-send-notification';
import {coinMarketCap} from './api/coin-market-cap';
import {initPoloniex} from './api/poloniex';
import {initCoinbase} from './api/coinbase';
import {initHitBTC} from './api/hit-btc';
import {initYoBit} from './api/yo-bit';
import {initCoinExchange} from './api/coin-exchange';
import {initKraken} from './api/kraken';
import {initBitFinrx} from './api/bitfinex';
import {initNovoExchange} from './api/novaexchange';
import {initCryptopia} from './api/cryptopia';


const app: Application = express();
//const cors = require('cors');




app.use(cookieParser());
app.use(bodyParser.json());

//app.use('/node_modules',express.static('./client/node_modules'));
//app.use(cors({credentials:true}));


app.set('port', (process.env.PORT || 5000));

/*
app.use('/api',function(req:any, res:Response , next:Function){
 // console.log(req.path);

  let method = req.method && req.method.toUpperCase && req.method.toUpperCase();
  if (req.path === '/login') apiLogin(req, res);
  else if(req.path === '/test') onSuccess(res,{message:"Test from server"});
  else verifyLogin(req,res,next);
});
*/



let apis:any[] = [];

app.get('/index', function(req,res) {

  let p = path.join(__dirname, '../pub','index.html');
  console.log(p);

  res.sendFile(p);
});


app.use(express.static(path.join(__dirname, '../pub')));

app.get('/apis-info', function(req, resp) {

  resp.json({
    title:'APIS Available',
    timestamp:(new Date()).toISOString(),
    data:apis
  });
});



function getOptions(params){
  let exchange = config[params.exchange];
  if(!exchange) return null;
  let url = exchange.apis[params.funct];
  if(!url) return null;
  return {
    url: url,
    headers: {
      'User-Agent': 'request'
    }
  }
}

function getOtionsWithParams(params){
  let option = getOptions(params);
  if(!option) return null;
  let exchange = config[params.exchange];


}


app.get('/api/public/:exchange/:funct',  cache('30 minutes'), function(req, resp) {

  let options = getOptions(req.params);

  if(!options){
    resp.json({error:'nofunction'});
    return
  }
  console.log(req.params);
  console.log(options);
  request(options).pipe(resp);

});

app.get('/api/public/:exchange/:funct/:params',  cache('30 minutes'), function(req, resp) {

  let options = getOtionsWithParams(req.params);

  if(!options){
    resp.json({error:'nofunction'});
    return
  }
  console.log(options);
  request(options).pipe(resp);
});





initLogin(app);

apiSendNotification(app);
initRestApi(app);

initEther(app);

apiSave(app);

apis = apis.concat(initChangelly(app));

apis = apis.concat(initShapeSift(app));

apis = apis.concat(initBittrex(app));


apis = apis.concat(coinMarketCap(app));

apis = apis.concat(initPoloniex(app));
apis = apis.concat(initCoinbase(app));

apis = apis.concat(initHitBTC(app));
apis = apis.concat(initYoBit(app));
apis = apis.concat(initCoinExchange(app));
apis = apis.concat(initKraken(app));
apis = apis.concat(initBitFinrx(app));
apis = apis.concat(initNovoExchange(app));
apis = apis.concat(initCryptopia(app));


app.use(apiErrorHandler);

//const port:number = 50488;
app.listen(app.get('port'), () => {
    console.log("Server now running on port " + app.get('port'));
});








