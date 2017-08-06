"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidV1 = require('uuid/v1');
var uuidV4 = require('uuid/v4');
var model_1 = require("../model/model");
var request = require("request");
var app_utils_1 = require("../utils/app-utils");
var hri = require('human-readable-ids').hri;
var confirmIps = {};
function initLogin(app) {
    app.route("/api/login/reset-password-confirm/").post(function (req, resp) {
        var ip = app_utils_1.checkIp(req, 10);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        var password = req.body.password;
        var passwordE = app_utils_1.encryptCTR(password);
        var uid = req.body.uid;
        var user = app_utils_1.decryptCustom(uid);
        model_1.UserModel.findOne({ where: user })
            .then(function (user2) {
            if (user2) {
                user2.password = passwordE;
                model_1.UserModel.update(user, { where: { email: user2.email } })
                    .then(function (user3) {
                    resp.json({
                        success: 'password',
                        user: {
                            nickname: user2.nickname
                        }
                    });
                }).catch(function (error) {
                    console.error(error);
                    resp.json({ error: 'something' });
                });
            }
        });
    });
    app.route("/api/login/reset-password").post(function (req, resp) {
        var ip = app_utils_1.checkIp(req, 10);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        var email = req.body.email;
        var emailE = app_utils_1.encryptCTR(email);
        var host = req.get('host');
        var confirmUrl = req.protocol + '://' + req.get('host') + '/#/confirm-reset-password/';
        model_1.UserModel.findOne({ where: { email: emailE } })
            .then(function (user2) {
            if (user2) {
                confirmUrl = confirmUrl + app_utils_1.encryptCustom(emailE, user2.password);
                sendResetPasswordEmail(email, host, confirmUrl, user2, function (error) {
                    if (error) {
                        resp.json({ error: 'email send error' });
                    }
                    else
                        resp.json({
                            success: "sent",
                            user: {
                                email: email,
                                nickname: user2.nickname
                            }
                        });
                });
            }
            else {
                resp.json({ error: 'wrong' });
            }
        });
        resp.json({ success: 'OK' });
    });
    app.route("/api/login/login").post(function (req, resp) {
        var ip = app_utils_1.checkIp(req, 10);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        var email = req.body.email;
        var password = req.body.password;
        var deviceid = req.headers['user-agent'];
        var user = {
            email: app_utils_1.encryptCTR(email),
            password: app_utils_1.encryptCTR(password),
            deviceid: deviceid
        };
        model_1.UserModel.findOne({ where: { email: user.email, password: user.password } })
            .then(function (user2) {
            if (user2) {
                if (user2.confirmed) {
                    resp.json({ success: {
                            token: app_utils_1.encryptCTR(user2.uid),
                            nikname: user2.nickname,
                            email: app_utils_1.decryptCTR(user2.email),
                            role: user2.role
                        } });
                }
                else {
                    resp.json({
                        error: 'verification'
                    });
                }
            }
            else {
                resp.json({ error: 'wrong' });
            }
        });
    });
    app.route("/api/login/register").post(function (req, resp) {
        var ip = app_utils_1.checkIp(req, 6);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        var email = req.body.email;
        var password = req.body.password;
        var deviceid = req.headers['user-agent'];
        var confirmUrl = req.protocol + '://' + req.get('host') + '/#/login-confirm/';
        var host = req.get('host');
        var passE = app_utils_1.encryptCTR(password);
        var emailE = app_utils_1.encryptCTR(email);
        confirmUrl = confirmUrl + app_utils_1.encryptCustom(emailE, passE);
        var user = {
            email: emailE,
            password: passE,
            deviceid: deviceid,
            nickname: hri.random(),
            uid: uuidV1()
        };
        model_1.UserModel.findOne({ where: { email: user.email } })
            .then(function (result) {
            if (result) {
                resp.json({ error: 'exists' });
            }
            else {
                createUser(user).then(function (user2) {
                    sendConfirmationEmail(email, host, confirmUrl, user2, function (error) {
                        if (error) {
                            resp.json({ error: 'reregister' });
                            console.error(error);
                        }
                        else
                            resp.json({
                                success: 'created',
                                user: {
                                    email: user2.email,
                                    nickname: user2.nickname
                                }
                            });
                    });
                });
            }
        });
    });
    app.route("/api/login/confirm/:uid").get(function (req, resp) {
        var uid = req.params.uid;
        console.log(uid);
        if (!uid) {
            resp.end('hacker');
            return;
        }
        var ip = app_utils_1.checkIp(req, 3);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        var user = app_utils_1.decryptCustom(uid);
        console.log(user);
        console.log(ip);
        model_1.UserModel.findOne({ where: { email: user.email, password: user.password } })
            .then(function (user) {
            if (user) {
                if (user.confirmed) {
                    resp.json({ success: 'confirmed-before' });
                }
                else {
                    model_1.UserModel.update({
                        confirmed: true,
                    }, { where: { email: user.email, password: user.password } })
                        .then(function (result) {
                        console.log(result);
                        resp.json({ success: 'confirmed' });
                    });
                }
            }
            else {
                resp.json({ error: 'Now are you' });
            }
        });
    });
}
exports.initLogin = initLogin;
function updateUserByUid(user) {
    return model_1.UserModel.update(user, { where: { uid: user.uid } })
        .then(function (result) {
        console.log(result);
    });
}
var user = {
    confirmed: 1,
    email: 'vladstitov@gmail.com',
    uid: '4476d200-6f1a-11e7-b958-a3fb439b8f27'
};
function createUser(user) {
    return model_1.UserModel.create(user);
}
function sendResetPasswordEmail(email, host, confirmUrl, user, callBack) {
    var message = 'Hello ' + user.nickname +
        '. <br/> You are requested reset password at  ' + host + '. <br/>' +
        '<p>Click link below <br/>' +
        '<h2><a href="' + confirmUrl +
        '">Re Register</a></h2></p><br/>' +
        '<p><b>Note: this link is valid within 24h since you requested</b> <br/>';
    var body = {
        user: 'uplight.ca@gmail.com',
        pass: 'uplight.ca@gmail.com',
        subject: 'Reset password form ' + host,
        message: message,
        to: email
    };
    var options = {
        url: 'http://callcenter.front-desk.ca/send-email.php',
        method: 'POST',
        body: JSON.stringify(body)
    };
    console.log('sendConfirmationEmail ', options);
    request(options, function (error, object, data) {
        console.log('sendConfirmationEmail  result ', data);
        if (error)
            callBack(error);
        else {
            var result = void 0;
            try {
                result = JSON.parse(data);
            }
            catch (e) {
                callBack(e);
            }
            if (result.success)
                callBack();
        }
    });
}
function sendConfirmationEmail(email, host, confirmUrl, user, callBack) {
    var message = 'Hello ' + user.nickname +
        '. <br/> You have registered at  ' + host + '. <br/>' +
        '<p>To finalize registration please click link below <br/>' +
        '<h2><a href="' + confirmUrl +
        '">Confirm Registration</a></h2></p><br/>' +
        '<p><b>Note: this link is valid within 24h since you are registered</b> <br/>' +
        'Registration is free and does not contains any contracts </p>';
    var body = {
        user: 'uplight.ca@gmail.com',
        pass: 'uplight.ca@gmail.com',
        subject: 'Email Verification form ' + host,
        message: message,
        to: email
    };
    var options = {
        url: 'http://callcenter.front-desk.ca/send-email.php',
        method: 'POST',
        body: JSON.stringify(body)
    };
    console.log('sendConfirmationEmail ', options);
    request(options, function (error, object, data) {
        console.log('sendConfirmationEmail  result ', data);
        if (error)
            callBack(error);
        else {
            var result = void 0;
            try {
                result = JSON.parse(data);
            }
            catch (e) {
                callBack(e);
            }
            if (result.success)
                callBack();
        }
    });
}
