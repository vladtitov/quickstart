"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var api_1 = require("./api/api");
var apiErrorHandler_1 = require("./api/apiErrorHandler");
var bodyParser = require("body-parser");
var changelly_api_1 = require("./api/changelly-api");
var shapeshift_api_1 = require("./api/shapeshift-api");
var app = express();
var cors = require('cors');
app.use(bodyParser.json());
//app.use('/node_modules',express.static('./client/node_modules'));
app.use(cors({ credentials: true }));
/*
app.use('/api',function(req:any, res:Response , next:Function){
 // console.log(req.path);

  let method = req.method && req.method.toUpperCase && req.method.toUpperCase();
  if (req.path === '/login') apiLogin(req, res);
  else if(req.path === '/test') onSuccess(res,{message:"Test from server"});
  else verifyLogin(req,res,next);
});
*/
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../pub', 'index.html'));
});
app.use('/', express.static('./pub'));
api_1.initRestApi(app);
changelly_api_1.initChangelly(app);
shapeshift_api_1.initShapeSift(app);
app.use(apiErrorHandler_1.apiErrorHandler);
var port = 50488;
app.listen(port, function () {
    console.log("Server now running on port " + port);
});
//# sourceMappingURL=server.js.map