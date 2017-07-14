/**
 * Created by Vlad on 7/12/2017.
 */
import {Application, Response, Request} from "express";

import * as request from 'request';

export function initEther(app: Application): void {


  let config = {
    "REP":"0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5",
    "GNO":"0x6810e776880c02933d47db1b9fc05908e5386b96",
    "GNT":"0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
    "DGD":"0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
    "ICN":"0x888666CA69E0f178DED6D75b5726Cee99A87D698"
  }


  app.route("/api/ETH/balance/:address").get(function (req: Request, res: Response) {

    let address = req.params.address;

    let url = 'https://api.etherscan.io/api?module=account&action=balancemulti&address={{address}}&tag=latest';
      url = url.replace('{{address}}',address);

    request.get(url,function (err,r,body){

      res.end(body);
    })

  });


  app.route("/api/token/balance/:token/:address").get(function (req: Request, res: Response) {


    let contractAddress = config[req.params.token];
    let address = req.params.address;

    if(address && contractAddress){
      let url = 'https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress={{contractAddress}}&address={{address}}&tag=latest';
      url = url
      .replace('{{contractAddress}}', contractAddress)
      .replace('{{address}}', address);

      request.get(url,function (err,r,body){

        res.end(body);
      })
    }else{
      res.end('{"error":"not supported"}');
    }

  });

  app.route("/api/token/sendTransaction").post(function (req: Request, res: Response) {

    let rawTransaction = req.body;

    var options = {
      uri: '',
      method: 'POST',
      json:rawTransaction
    };

    request(options,function (err,r,body){

      res.end(body);
    })
  });

}
