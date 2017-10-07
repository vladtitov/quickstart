import {UserModel, VOUser} from '../model/model';
import {sendConfirmationEmail, sendResetPasswordEmail} from './login-email';
import {hashPassword} from '../utils/app-utils';
const uuidV1 = require('uuid/v1');
const hri = require('human-readable-ids').hri;


export function newNikname(email:string, password:string, callBack:Function){

  let nickname =  hri.random();
  hashPassword(password, function (hashed:{hash:string}) {
    password = hashed.hash;
    UserModel.update({
      nickname: nickname
    }, {where: {
      email: email,
      password:password
    }})
      .then(function (result) {
      //  console.log(Array.isArray(result));
        if(Array.isArray(result)){

          if (result[0]) callBack({
            success: 'password',
            message:'New nickname: '+nickname,
            nickname:nickname
          });
          else  callBack({error: 'nouser', message: 'username or password incorrect'})

        }else callBack({error: 'dberror', message: 'Error database, Try later'})

      });
  });
}


export function confirmUser(uid:string, callBack:Function){

  UserModel.findOne({where: {uid: uid}})
    .then(function (result:any) {

      if(result){
        let user2:VOUser  = result.get({plain:true});
        console.log('confirmUser ', user2);
        if(user2.confirmed){
          callBack({
            success:'confirmed-before',
            message:'was confirmed '+user2.nickname})
          // resp.json({success:'confirmed-before', user:{nickname:user2.nickname}});
        }else{

          user2.uid = uuidV1();
          user2.status = 'confirmed';
          user2.confirmed = 1;

          UserModel.update(user2 ,{where:{id:user2.id}})
            .then(function (result) {

              console.log('confirmUser update', result);

              if(result) callBack({ success:'confirmed', message:'Confirmrd '+user2.nickname});
              else callBack({error:'db error'});

            });
        }


      }else{
        callBack({error:'notvalid', message:'URL not valid'});
      }

    })


}



export function resetPassword(uid:string, newPassword:string, callBack:Function){


  hashPassword(newPassword, function (hashed:{hash:string}) {
    newPassword = hashed.hash;

    UserModel.findOne({where: {uid: uid}})
      .then(function (result: VOUser) {
        if (result) {

          UserModel.update({uid: uuidV1(), password: newPassword}, {where: {uid: uid}})
            .then(function (result) {
              console.log(result);

              if (Array.isArray(result) && result[0]) callBack({
                success: 'new-password',
                message: 'Please login with new password'
              });
              else callBack({error: 'dberror', message: 'error reset password'})

            });
        } else callBack({error: 'no-uid', message: 'URL expired'});
      });
  });
}


export function requestResetPassword(email, confirmUrl, host, callBack:Function){


  UserModel.findOne({where: {email:email}})
    .then(function (result:any) {
      if (result) {
        let user1:VOUser  = result.get({plain:true});
        let uid = user1.uid;
        console.log('uid ' + uid);

        confirmUrl = confirmUrl+uid;//       encryptCustom(emailE,result.password);
        let nickname = user1.nickname;

        sendResetPasswordEmail(email, host, confirmUrl, nickname, function (error) {

          if(error){
            callBack({error:'email send error',message:'Send email error.'})
          }else {

            UserModel.update({ status:'reset-sent'} ,{where:{id:user1.id}})
              .then(function (result) {
                console.log(result);
              });

            // updateLastVisitByid(result.id, {status:'reset-sent'}).then(function () {
            callBack({
              success:'reset-sent', message:'Please confirm reset password in email'});
            //})
          }

        })

      } else {
        callBack({error:'wrong', message:'no user with email '+email});

      }
    })
  //resp.json({success: 'OK'});
}


export function logout(uid:string, email:string, nickname:string, callBack:Function){

  let user = {
    uid: uuidV1(),
    status:'logout'
  };

  UserModel.update(user, {where: {uid: uid, email:email}})
    .then(function (result) {
      console.log(' logout ' , result);
      if (Array.isArray(result) && result[0]) callBack({
        success: 'logout',
        message:nickname+' Logged out'
      });
      else callBack({error: 'dberror', message: 'no user with email '+email})

    });
//}else callBack({error:'no uid'});

}



export function loginUser(email:string, password:string, confirmUrl:string, host:string, callBack:Function){


 hashPassword(password, function (hashed:{hash:string}) {
   password = hashed.hash;

//console.log(email, hashed);


  UserModel.findOne({where: {email:email, password:password}})
    .then(function (result:any) {

      if (result) {
        let user1:VOUser  = result.get({plain:true});
        if(user1.confirmed){
          let uid = uuidV1();

          UserModel.update({uid:uid}, {where:{id:user1.id}})
            .then(function (count) {

              callBack({success:'logedin',
                message:'Login success ' + user1.nickname,
                user:{
                  token:user1.uid,
                  nickname:user1.nickname,
                  email:user1.email,
                  role:user1.role,
                  uid:uid
                }});

            })




          //updateLastVisitByid(user2.id,{status:'logedin'});
        }else{
          confirmUrl = confirmUrl+user1.uid;

          sendConfirmationEmail(email, host, confirmUrl, user1,function (error) {
            // console.log(error);
            if (error) {
              callBack({error: 'sendemail', message: 'Error sending email. Please try again later'});
              console.error(error);
              return;
            }
            callBack({
              error:'verification-required',
              message:'Hi '+user1.nickname + ' Email was sent to '+ user1.email+'. Please click on a link "Confirm Registration" in email body'
            })

          });
        }

      } else {

        callBack({error:'wrong', message:'email or password incorrect'});

      }
    });

 });

}

export function registerUser(
                              email:string,
                              password:string,
                              ip:string,
                              confirmUrl:string,
                              host:string,
                              callBack:Function
                            ){
  // console.log(user);



  hashPassword(password, function (hashed:{hash:string}) {
    password = hashed.hash;

    UserModel.findOne({where: {email: email}})
      .then(function (result: VOUser) {
        if (result) {
          callBack({error: 'exists'});
          return;
        }


        let newUser = {
          email: email,
          password: password,
          //deviceid:deviceid,
          nickname: hri.random(),
          ip: ip,
          uid: uuidV1(),
          status: 'created'
        };


        UserModel.create(newUser).then(function (result: any) {
          if (!result) {

            console.error('error create user ' + JSON.stringify(newUser));
            callBack({error: 'dberror', message: 'Database error. Please try again later'});
            return
          }
          // updateLastVisitByid(user2.id, {status:'created'});

          let createdUser: VOUser = result.get({plain: true});
          confirmUrl = confirmUrl + createdUser.uid;//encryptCustom(emailE,passE);

          sendConfirmationEmail(email, host, confirmUrl, createdUser, function (error) {
            // console.log(error);
            if (error) {
              UserModel.destroy({where: {id: createdUser.id}});
              callBack({error: 'sendemail', message: 'Please re register, Registration Error'});
             // console.error('ERROR send confirmation email ' + error);
              return;
            }

            // updateLastVisitByid(createdUser.id, {status:'confirmation sent'});
            callBack({
              success: 'confirmationsent',
              message: 'Confirmation sent to ' + email + ' ' + createdUser.nickname
            });
          });

        });
      });

  });
}