
/**
 * Created by Vlad on 3/29/2017.
 */

import {Application, Request, Response} from "express";
import * as _ from "lodash";
const uuidV1 = require('uuid/v1');
const uuidV4 = require('uuid/v4');
import {UserModel, VOUser} from '../model/model';
//import {onError, onSuccess} from './com';
//import * as JWT from "jsonwebtoken";
import * as request from 'request';


import * as crypto from 'crypto';
import {decryptCTR, encryptCTR, getIp} from '../utils/app-utils';

const hri = require('human-readable-ids').hri;
const  confirmURL ='http://callcenter.front-desk.ca/api/login-confirm/';



export function initLogin(app:Application){


  app.route("/api/login/login").post(function (req: Request, resp: Response) {

    let email = req.body.email;
    let password = req.body.password;
    let deviceid = req.headers['user-agent'];
    let ip = getIp(req);

    let user = {
      email:email,
      password:crypto.createHash('md5').update(password).digest("hex"),
      deviceid:deviceid
    }


    UserModel.findOne({where: {email: user.email, password:user.password }})
      .then(function (user2:VOUser) {
        if (user2) {
          if(user2.confirmed){
            resp.json({success:{
              token:encryptCTR(user2.uid),
              nikname:user2.nickname,
              email:user2.email,
              role:user2.role
            }})
          }else{
            resp.json({
              error:'verification',
              confirmURL:confirmURL+encryptCTR(user2.uid)
            })

          }

        } else {

          resp.json({error:'wrong'});

        }
      })
  })

  app.route("/api/login/register").post(function (req: Request, resp: Response) {

    let email = req.body.email;
    let password = req.body.password;
    let deviceid = req.headers['user-agent'];
    let ip = getIp(req);
    let user = {
      email:email,
      password:crypto.createHash('md5').update(password).digest("hex"),
      deviceid:deviceid,
      nickname:'',
      uid:uuidV1()
    }


    UserModel.findOne({where: {email: email}})
      .then(function (result) {
        if (result) {
          resp.json({error: 'exists', message: email});
        } else {

          createUser(user).then(function (user2:VOUser) {
            console.log(user2);
            user2.uid = encryptCTR(user2.uid);

            sendConfirmationEmail(user2,function (error) {
              console.log(error);
              if(error) resp.json({error:error});
              else  resp.json(user2);
            })

          })
        }
      })
  })


  app.route("/api/login/confirm/:uid").get(function (req: Request, resp: Response) {
    let uid = req.body.uid;
    uid = decryptCTR(uid);
    let ip = getIp(req);

    UserModel.findOne({where: {uid: uid}})
      .then(function (user:VOUser) {
        if(user.confirmed){
          resp.json({success:'confirmed-before'})
        }else{

          UserModel.update({
            confirmed:true,
            uid:uuidV4(),
            nickname:hri.random()
          },{where:{uid:uid}})
            .then(function (result) {
              console.log(result)
              resp.json({success:'confirmed'});
            })
        }

      })

  })

}






function updateUserByUid(user){

  return UserModel.update(user ,{where:{uid:user.uid}})
    .then(function (result) {
      console.log(result)

    })

}

let user ={
  confirmed:1,
  email:'vladstitov@gmail.com',
  uid:'4476d200-6f1a-11e7-b958-a3fb439b8f27'
  //uid:'qazxsw'
}

//updateUserByUid(user);





function createUser(user:VOUser){
  return UserModel.create(user)
}




function sendConfirmationEmail(user, callBack:Function){

  let message = 'Hello ' + user.nickname +
    '. <br/> You have registered at  callcenter.front-desk.ca. <br/>'+
    '<p>To finalize registration please click link below <br/>'+
    '<h2><a href="'+confirmURL+user.uid+
    '">Confirm Registration</a></h2></p><br/>' +
    '<p><b>Note: this link is valid within 24h since you are registered</b> <br/>'+
    'Registration is free and does not contains any contracts </p>'



  let body ={
    user:'uplight.ca@gmail.com',
    pass:'uplight.ca@gmail.com',
    subject:'Email Verification form front-desk.ca',
    message:message,
    to:user.email
  }


  let options ={
    url:'http://callcenter.front-desk.ca/send-email.php',
    method:'POST',
    body:JSON.stringify(body)
  }
 request(options, function (error, object, data) {
   console.log(data)
   callBack(data);
 })

}


/*



function checkUser(password:string, respond:Response, user:any){

  if (_.isNull(user)){
    respond.status(404).send({error: 'User does not exist'});
    return null
  }

  // console.log(user.password,password);

  if(_.isMatch(user, {password:password}))  return user;
  respond.status(403).send({err:'password not match'});
  return null;
}

export function apiLogin(req: Request, respond: Response): void {
 // let  email:string = 'uplight.ca@gmail.com' , password:string = '$2a$10$Op3rW9gYT6uXDlAOrmRsHOheTy6jwwDamZONx.apHaQjzmqj8Tiem';
 // console.log(req.body)
  let params:any = _.pick(req.body, 'username', 'password', 'deviceId');

  if (!params.username || !params.password || !params.deviceId) {
    respond.status(400).send({error: 'username, password, and deviceId  are required parameters'});
    return
  }



  let password =  crypto.createHash('md5').update(params.password).digest("hex");

 // console.log(password);

  let user = UserModel.findOne({where:{ email:params.username}})
    .then(_.partial(checkUser, password, respond))
    .then(_.partial(generateToken, respond))
    //.then(res=>})
    .then(_.partial(onSuccess, respond))
    .catch(_.partial(onError, respond, "Login Failed"));
}


export function selectAll(){
  return   UserModel.findAll({where:{id:1}}).then(function (record) {
    console.log(record)
  })
}


export function checkUser(password:string, respond:Response, user:any){

  if (_.isNull(user)){
    respond.status(404).send({error: 'User does not exist'});
    return null
  }

  // console.log(user.password,password);

  if(_.isMatch(user, {password:password}))  return user;
  respond.status(403).send({err:'password not match'});
  return null;
}

export function generateToken(respond:Response, user:any):string{
  if(!user) return '';
  let token:any ={}
  token.userId = user.id;
  token.id = uuidV4();
  token.iat =  Math.floor(new Date().getTime()/1000);
  token.exp = token.iat + EXPIRATION_TIME;
  let t = JWT.sign(token, MY_SECRET);
 // respond.header('x-access-token', t);
  respond.cookie('token', t, { maxAge: 86400 });
  return  t;
}

/!*
export function readToken(token:string ):any{
  return JWT.verify(token, MY_SECRET,function (err, decoded) {
    console.log(err);
  });
}
*!/

export function verifyLogin(req:any, res:Response, next:Function):void{
  let token = req.body.token || req.query.token || req.headers.authorization?req.headers.authorization.replace('Bearer ',''):'';//req.headers['x-access-token'];
 // console.log('token '+ token);
  if (token) {
    JWT.verify(token, MY_SECRET, function(err:any, decoded:any) {
      console.log(new Date().toLocaleString());
     console.log(err, decoded);
      if (err) {
        res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {

        req.decoded = decoded;

        next();
      }
    });

  } else {
    res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
}
*/


