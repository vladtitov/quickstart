"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidV1 = require('uuid/v1');
var uuidV4 = require('uuid/v4');
var model_1 = require("../model/model");
var request = require("request");
var crypto = require("crypto");
var app_utils_1 = require("../utils/app-utils");
var hri = require('human-readable-ids').hri;
var confirmURL = 'http://callcenter.front-desk.ca/api/login-confirm/';
function initLogin(app) {
    app.route("/api/login/login").post(function (req, resp) {
        var email = req.body.email;
        var password = req.body.password;
        var deviceid = req.headers['user-agent'];
        var ip = app_utils_1.getIp(req);
        var user = {
            email: email,
            password: crypto.createHash('md5').update(password).digest("hex"),
            deviceid: deviceid
        };
        model_1.UserModel.findOne({ where: { email: user.email, password: user.password } })
            .then(function (user2) {
            if (user2) {
                if (user2.confirmed) {
                    resp.json({ success: {
                            token: app_utils_1.encryptCTR(user2.uid),
                            nikname: user2.nickname,
                            email: user2.email,
                            role: user2.role
                        } });
                }
                else {
                    resp.json({
                        error: 'verification',
                        confirmURL: confirmURL + app_utils_1.encryptCTR(user2.uid)
                    });
                }
            }
            else {
                resp.json({ error: 'wrong' });
            }
        });
    });
    app.route("/api/login/register").post(function (req, resp) {
        var email = req.body.email;
        var password = req.body.password;
        var deviceid = req.headers['user-agent'];
        var ip = app_utils_1.getIp(req);
        var user = {
            email: email,
            password: crypto.createHash('md5').update(password).digest("hex"),
            deviceid: deviceid,
            nickname: '',
            uid: uuidV1()
        };
        model_1.UserModel.findOne({ where: { email: email } })
            .then(function (result) {
            if (result) {
                resp.json({ error: 'exists', message: email });
            }
            else {
                createUser(user).then(function (user2) {
                    console.log(user2);
                    user2.uid = app_utils_1.encryptCTR(user2.uid);
                    sendConfirmationEmail(user2, function (error) {
                        console.log(error);
                        if (error)
                            resp.json({ error: error });
                        else
                            resp.json(user2);
                    });
                });
            }
        });
    });
    app.route("/api/login/confirm/:uid").get(function (req, resp) {
        var uid = req.params.uid;
        if (!uid) {
            resp.end('hacker');
            return;
        }
        var ip = app_utils_1.getIp(req);
        console.log(uid);
        console.log(ip);
        model_1.UserModel.findOne({ where: { uid: uid } })
            .then(function (user) {
            if (user) {
                if (user.confirmed) {
                    resp.json({ success: 'confirmed-before' });
                }
                else {
                    model_1.UserModel.update({
                        confirmed: true,
                        uid: uuidV4(),
                        nickname: hri.random()
                    }, { where: { uid: uid } })
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
function sendConfirmationEmail(user, callBack) {
    var message = 'Hello ' + user.nickname +
        '. <br/> You have registered at  callcenter.front-desk.ca. <br/>' +
        '<p>To finalize registration please click link below <br/>' +
        '<h2><a href="' + confirmURL + user.uid +
        '">Confirm Registration</a></h2></p><br/>' +
        '<p><b>Note: this link is valid within 24h since you are registered</b> <br/>' +
        'Registration is free and does not contains any contracts </p>';
    var body = {
        user: 'uplight.ca@gmail.com',
        pass: 'uplight.ca@gmail.com',
        subject: 'Email Verification form front-desk.ca',
        message: message,
        to: user.email
    };
    var options = {
        url: 'http://callcenter.front-desk.ca/send-email.php',
        method: 'POST',
        body: JSON.stringify(body)
    };
    request(options, function (error, object, data) {
        console.log(data);
        callBack(data);
    });
}
