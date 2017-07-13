/**
 * Created by Vlad on 7/12/2017.
 */
import {Application, Response, Request} from "express";

import * as request from 'request';

export function initEther(app: Application): void {


  let config = {
    "symbol":"ETH",
    "network":"ETH",
    "displayName":"Ethereum",
    "hdIndex":60,
    "sort":2,
    "urlBalance":"https://api.etherscan.io/api?module=account&action=balance&address={{address}}=latest",
    "urlBalances":"https://api.etherscan.io/api?module=account&action=balancemulti&address={{address}}&tag=latest",
    "urlTransactions":"http://api.etherscan.io/api?module=account&action=txlist&address={{address}}",
    "urlTransactionStatus":"https://api.etherscan.io/api?module=transaction&action=getstatus&txhash={{transaction_id}}",
    "urlTransactionInternal":"https://api.etherscan.io/api?module=account&action=txlistinternal&txhash={{transaction_id}}",
    "urlSendTransaction":"",
    "urlNonce":"",
    "generator":"ETH",
    "transactionType":"ETH"
  }



  app.route("/api/ether/balance/:address").get(function (req: Request, res: Response) {

    let address = req.params.address;

    let url = config.urlBalance.replace('{{address}}',address)

    request.get(url,function (err,r,body){

      res.end(body);
    })



  });



  app.route("/api/exchange/shapeshift/getcoins").get(function (req: Request, res: Response) {

    request.get('https://shapeshift.io/getcoins',function (err,r,body){
      res.end(body);
    })
  });



  app.route("/api/exchange/shapeshift/rate/:from_to").get(function (req: Request, res: Response) {

    request.get('https://shapeshift.io/rate/'+req.params.from_to,function (err,r,body){
      res.end(body);
    })
  });


  app.route("/api/exchange/shapeshift/marketinfo/:from_to/").get(function (req: Request, res: Response) {

    request.get('https://shapeshift.io/marketinfo/'+req.params.from_to,function (err,r,body){
      res.end(body);
    })
  });

  app.route("/api/exchange/shapeshift/shift").post(function (req: Request, res: Response) {

    var options = {
      uri: 'https://shapeshift.io/shift/',
      method: 'POST',
      json:req.body
    };

    request(options, function (err, response, body) {
      if(err){
        res.json({error:err})
      }else{
        res.end(body)
      }

    });

  });

  app.route("/api/exchange/shapeshift/validateAddress/:address/:coin").get(function (req: Request, res: Response) {

    request.get('https://shapeshift.io/validateAddress/'+req.params.address+'/'+req.params.coin,function (err,r,body){
      res.end(body);
    })

  });

}
