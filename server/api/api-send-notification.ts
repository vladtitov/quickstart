import {Application, Request, Response} from "express";
import * as _ from "lodash";
import {UserModel, VOUser} from '../model/model';
import {checkIp, encryptCTR} from '../utils/app-utils';
import * as request from 'request';
import {sendNotificationEmai} from './login-email';



export function apiSendNotification(app:Application){
 /* app.route("/api/give-me-all-users-from-db").get(function (req: Request, resp: Response){

    UserModel.all().then(function (users) {
      resp.json(users);
    })
  })*/

   app.route("/api/send-notification").post(function (req: Request, resp: Response) {

    let email = req.body.email;
    let uid =  req.body.uid;
    let message = req.body.message;
    let subject = req.body.subject;
    let deviceid = req.headers['user-agent'];

    let ip = checkIp(req, 300);

    if(!ip){
      resp.json({error: 'annoying', message:'ip hacker'});
      return;
    }

    UserModel.findOne({where: {email: email}})
      .then(function (result:VOUser) {
       // console.log(result);

        if (result) {
          if(result.confirmed){

            //user.nickname = result.nickname;

            /*UserModel.update({
              confirmed:true,
            },{where:{email:email}});*/

            sendNotificationEmai(email, result.nickname, subject, message, function (res) {
              res.ip=ip;

              if(res.success){
                resp.json({success:'success', message:'Emeil sent to ' + email});
              }else resp.json({error:'Error', message:'Error send Email to ' + email});
            })
          }else{
            resp.json({error:'need-confirmation', message:'Please confirm your email'});
          }

        } else {
          resp.json({error: 'notregistared', message:' Please register first'});

        }
      })
  })


}



