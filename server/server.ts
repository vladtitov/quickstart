
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

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, '../pub', 'index.html'));
});

app.use('/',express.static('./pub'));

app.get('/apis-info', function(req,resp) {

  resp.json({
    title:'APIS Available',
    timestamp:(new Date()).toISOString(),
    data:apis
  })

});

initLogin(app);
apiSendNotification(app);

initRestApi(app);
initChangelly(app);
initShapeSift(app);
initEther(app);
apiSave(app);
bittrexApi(app);

apis = apis.concat(coinMarketCap(app));

initPoloniex(app);

initCoinbase(app);


app.use(apiErrorHandler);

const port:number = 50488;
app.listen(port, () => {
    console.log("Server now running on port " + port);
});








