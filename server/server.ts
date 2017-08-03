
import * as path from 'path';
import * as express from "express";
import {Application, Response} from "express";
import {initRestApi} from "./api/api";
import {apiErrorHandler} from "./utils/apiErrorHandler";

const bodyParser:any = require("body-parser");
//import * as JWT from "jsonwebtoken";
import {initLogin} from './api/apiLogin';
import {onSuccess} from "./utils/com";
import {initChangelly} from './api/changelly-api';
import {initShapeSift} from './api/shapeshift-api';
import {initEther} from './api/api-ether';
import {apiSave} from './utils/api-save';
import {bittrexApi} from './api/bittrex-proxy';
import {apiSendNotification} from './api/api-send-notification';
import {coinMarketCap} from './api/coin-market-cap';
import {initPoloniex} from './api/poloniex';
import {initCoinbase} from './api/coinbase';

const app: Application = express();
const cors = require('cors');
app.use(bodyParser.json());

//app.use('/node_modules',express.static('./client/node_modules'));
app.use(cors({credentials:true}));


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

/*app.get('/apis-info', function(req,resp) {

  resp.json({
    title:'APIS Available',
    timestamp:(new Date()).toISOString(),
    data:apis
  })

});*/

let ar:any;

ar = initLogin(app);
if(Array.isArray(ar)) apis = apis.concat(ar);
ar = apiSendNotification(app);
if(Array.isArray(ar)) apis = apis.concat(ar);

ar = initRestApi(app);
if(Array.isArray(ar)) apis = apis.concat(ar);
ar = initChangelly(app);
if(Array.isArray(ar)) apis = apis.concat(ar);
ar = initShapeSift(app);
if(Array.isArray(ar)) apis = apis.concat(ar);
ar = initEther(app);
if(Array.isArray(ar)) apis = apis.concat(ar);
ar = apiSave(app);
if(Array.isArray(ar)) apis = apis.concat(ar);
ar = bittrexApi(app);
if(Array.isArray(ar)) apis = apis.concat(ar);
ar = coinMarketCap(app);
if(Array.isArray(ar)) apis = apis.concat(ar);

ar = initPoloniex(app);
if(Array.isArray(ar)) apis = apis.concat(ar);

ar = initCoinbase(app);
if(Array.isArray(ar)) apis = apis.concat(ar);

app.use(apiErrorHandler);

//const port:number = 50488;
app.listen(app.get('port'), () => {
    console.log("Server now running on port " + app.get('port'));
});








