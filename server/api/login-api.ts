
/**
 * Created by Vlad on 3/29/2017.
 */


import {Application, Request, Response} from "express";
//import * as _ from "lodash";

//const uuidV4 = require('uuid/v4');

//import {onError, onSuccess} from './com';
//import * as JWT from "jsonwebtoken";

//import * as crypto from 'crypto';
import {checkIp, decryptCTR, decryptCustom, encryptCTR, encryptCustom} from '../utils/app-utils';
import {
  confirmUser, loginUser, logout, newNikname, registerUser, requestResetPassword,
  resetPassword
} from './login-db';




//let confirmIps ={};





export function initLogin(app:Application){

  app.route("/api/login/reset-password-confirm/")
    .post(function (req: Request, resp: Response) {
    let ip = checkIp(req, 100);

    if(!ip){
      resp.json({error: 'annoying'});
      return;
    }

    let password = req.body.password;
    let uid = req.body.uid;

    resetPassword(uid, password, function (result) {
      resp.json(result);
    });

  });


  app.route("/api/login/reset-password").post(function (req: Request, resp: Response) {
    let ip = checkIp(req, 100);

    if(!ip){
      resp.json({error: 'annoying'});
      return;
    }
    let email = req.body.email;
    //let emailE = encryptCTR(email);
    let host = req.get('host');
    let confirmUrl =  req.protocol + '://' + req.get('host')  + '/#/confirm-reset-password/';

    requestResetPassword(email, confirmUrl, host, function (result) {
      resp.json(result);
    });
  });

  app.route("/api/login/logout").post(function (req: Request, resp: Response) {
    let ip = checkIp(req, 100);

    if(!ip){
      resp.json({error: 'annoying'});
      return;
    }
    let email = req.body.email;
    let uid = req.body.uid;
    let nickname = req.body.nickname;

   logout(uid, email, nickname, function (result) { resp.json(result); });
  });



  app.route("/api/login/login").post(function (req: Request, resp: Response) {

    let ip = checkIp(req, 100);

    if(!ip){
      resp.json({error: 'annoying'});
      return;
    }

    let email = req.body.email;
    let password = req.body.password;
    let deviceid = req.headers['user-agent'];

    let confirmUrl =  req.protocol + '://' + req.get('host')  + '/#/login-confirm/';
    let host =  req.get('host');


    loginUser(email, password, confirmUrl, host, function (result) {
      resp.json(result);
    })

  });


  app.route("/api/login/new-nickname").post(function (req: Request, resp: Response) {

    let ip = checkIp(req, 100);

    if(!ip){
      resp.json({error: 'annoying'});
      return;
    }

    let email = req.body.email;
    let password = req.body.password;
    let deviceid = req.headers['user-agent'];

    newNikname(email, password, function (result) {resp.json(result);})

  });


  app.route("/api/login/register").post(function (req: Request, resp: Response) {

    let ip = checkIp(req, 60);

    if(!ip){
      resp.json({error: 'annoying'});
      return;
    }


    let email = req.body.email;
    let password = req.body.password;
    let deviceid = req.headers['user-agent'];

    let host =  req.get('host');

    let confirmUrl =  req.protocol + '://' + host  + '/#/login-confirm/';
    //let emailE= encryptCTR(email);

    registerUser(email, password, ip, confirmUrl, host, function (result) {
      resp.json(result);
    });


  });


  app.route("/api/login/confirm/:uid").get(function (req: Request, resp: Response) {
    let uid = req.params.uid;
    console.log('login/confirm' + uid);
  // uid = decryptCTR(uid);
    if(!uid){
      resp.end('hacker');
      return;
    }

    let ip = checkIp(req, 100);

    if(!ip){
      resp.json({error: 'annoying'});
      return;
    }

    confirmUser(uid,function (result) {
      resp.json(result);
    });
  })

}
