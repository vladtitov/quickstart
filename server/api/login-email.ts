
import * as request from 'request';



export function sendResetPasswordEmail(
  email,
  host:string,
  confirmUrl:string,
  nickname:string,
  callBack:Function
){



  let message = 'Hello ' + nickname +
    '. <br/> You are requested reset password at  '+ host +'. <br/>'+
    '<p>Click link below <br/>'+
    '<h2><a href="'+confirmUrl+
    '">Re Register</a></h2></p><br/>' +
    '<p><b>Note: this link is valid within 24h since you requested</b> <br/>';


  let body ={
    user:'uplight.ca@gmail.com',
    pass:'uplight.ca@gmail.com',
    subject:'Reset password form '+host,
    message:message,
    to:email
  };


  let options ={
    url:'http://callcenter.front-desk.ca/send-email.php',
    method:'POST',
    body:JSON.stringify(body)
  };

  console.log('sendConfirmationEmail ',options);
  request(options, function (error, object, data) {
    console.log('sendConfirmationEmail  result ',data);
    if(error) callBack(error);
    else{
      let result;
      try{
        result = JSON.parse(data);

      }catch (e){
        callBack(e);
      }
      if(result.success) callBack();
    }

  })

}



export function sendConfirmationEmail(email, host:string, confirmUrl:string, user, callBack:Function){



  let message = 'Hello ' + user.nickname +
    '. <br/> You have registered at  '+host+'. <br/>'+
    '<p>To finalize registration please click link below <br/>'+
    '<h2><a href="'+confirmUrl+
    '">Confirm Registration</a></h2></p><br/>' +
    '<p><b>Note: this link is valid within 24h since you are registered</b> <br/>'+
    'Registration is free and does not contains any contracts </p>';



  let body ={
    user:'uplight.ca@gmail.com',
    pass:'uplight.ca@gmail.com',
    subject:'Email Verification from '+host,
    message:message,
    to:email
  };


  let options ={
    url:'http://callcenter.front-desk.ca/send-email.php',
    method:'POST',
    body:JSON.stringify(body)
  };

  console.log('sendConfirmationEmail ',options);
  request(options, function (error, object, data) {
    console.log('sendConfirmationEmail  result ',data);
    if(error) callBack(error);
    else{
      let result;
      try{
        result = JSON.parse(data);

      }catch (e){
        callBack(e);
      }
      if(result.success) callBack();
    }

  })

}



export function sendNotificationEmai(email, nickname,  subject, content ,  callBack:Function){

  let message = 'Hello ' + nickname + "\n" +content;

  let body ={
    user:'uplight.ca@gmail.com',
    pass:'uplight.ca@gmail.com',
    subject:subject,
    message:message,
    to:email
  }


  let options ={
    url:'http://callcenter.front-desk.ca/send-notification.php',
    method:'POST',
    body:JSON.stringify(body)
  }

  request(options, function (error, object, data) {
    if(error) callBack(error);
    else {
      console.log(data);
      try{
        let result = JSON.parse(data);
        callBack(result);
      }catch (e){

        callBack({error:e.toString()})
      }
    }
    //  console.log(data)

  })

}


