import {Application, Request, Response} from "express";
import * as _ from "lodash";
import {UserModel, VOUser} from '../model/model';
import {encryptCTR, getIp} from '../utils/app-utils';
import * as request from 'request';



export function apiSendNotification(app:Application){

   app.route("/api/send-notification").post(function (req: Request, response: Response) {

    let email = req.body.email;
    let message = req.body.message;
    let subject = req.body.subject;
    let deviceid = req.headers['user-agent'];
     let ip = getIp(req);


    let user = {
      email:email,
      deviceid:deviceid,
      nickname:''
    }

    UserModel.findOne({where: {email: email}})
      .then(function (result:VOUser) {
        if (result) {
          user.nickname = result.nickname;

          /*UserModel.update({
            confirmed:true,
          },{where:{email:email}});*/

          sendNotificationEmail(user, subject, message, function (res) {
            res.ip=ip;
            response.json(res);
          })

        } else {
          response.json({error: 'notregistared', message:' Please register first'});

        }
      })
  })


}



function sendNotificationEmail(user, subject, content ,  callBack:Function){

  let message = 'Hello ' + user.nickname +
    '. <br/>' +content +
    ' <br/>Notification form callcenter.front-desk.ca. <br/>';

  let body ={
    user:'uplight.ca@gmail.com',
    pass:'uplight.ca@gmail.com',
    subject:subject,
    message:message,
    to:user.email
  }


  let options ={
    url:'http://callcenter.front-desk.ca/send-email.php',
    method:'POST',
    body:JSON.stringify(body)
  }

  request(options, function (error, object, data) {
    if(error) callBack(error);
    else {
      try{
        let result = JSON.parse(data);
        if(result.success && result.success === 'success'){
          callBack({success:message});
        }
      }catch (e){

        callBack({error:e.toString()})
      }
    }
    console.log(data)

  })

}
