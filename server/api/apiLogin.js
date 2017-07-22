"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var uuidV1 = require('uuid/v1');
var model_1 = require("../model/model");
var crypto = require("crypto");
var request = require("request");
var EXPIRATION_TIME = 180;
var MY_SECRET = 'my secrete 2';
/**
 * Created by Vlad on 3/29/2017.
 */
function initLogin(app) {
    app.route("/api/login/register").post(function (req, res) {
        var email = req.body.email;
        var password = req.body.password;
        var deviceid = req.headers['user-agent'];
        var user = {
            email: email,
            password: crypto.createHash('md5').update(password).digest("hex"),
            deviceid: deviceid,
            uid: uuidV1()
        };
        model_1.UserModel.findOne({ where: { email: email } })
            .then(function (result) {
            if (result) {
                res.json({ error: 'exists', message: email });
            }
            else {
                createUser(user).then(function (result) {
                    console.log(result);
                    res.json(result);
                });
            }
        });
    });
}
exports.initLogin = initLogin;
function checkUser(password, respond, user) {
    if (_.isNull(user)) {
        respond.status(404).send({ error: 'User does not exist' });
        return null;
    }
    // console.log(user.password,password);
    if (_.isMatch(user, { password: password }))
        return user;
    respond.status(403).send({ err: 'password not match' });
    return null;
}
function createUser(user) {
    return model_1.UserModel.create(user);
}
function sendEmail(user) {
    var message = 'Hello ' + user.email +
        '. <br/> You have registered at  front-desk.ca <br/>' +
        'to finalize registration please click url below <br/>' +
        '<a href="http://callcenter.front-desk.ca/api/login/confirm/'
        + user.uid + '">Confirm Registration</a> <br/>' +
        'Please note this link is valid till 24h since you are registered <br/>' +
        'Registration is free and does not contains any contracts';
    var body = {
        user: 'uplight.ca@gmail.com',
        pass: 'uplight.ca@gmail.com',
        subject: 'Email Verification form front-desk.ca',
        message: message,
        to: user.email
    };
    var options = {
        url: 'http://aesoft.front-desk.ca/send.php',
        method: 'POST',
        body: JSON.stringify(body)
    };
    request(options, function (error, object, data) {
        console.log(data);
    });
}
/*
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
//# sourceMappingURL=apiLogin.js.map