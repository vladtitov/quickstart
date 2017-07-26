"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidV1 = require('uuid/v1');
var uuidV4 = require('uuid/v4');
var model_1 = require("../model/model");
var crypto = require("crypto");
var request = require("request");
var hri = require('human-readable-ids').hri;
var EXPIRATION_TIME = 180;
var algorithmCTR = 'aes-256-ctr', algorithmGSM = 'aes-256-gcm', PASSWORD = '3zTvzr3p67VC61jmV54rIYu1545x4TlY', confirmURL = 'http://callcenter.front-desk.ca/api/login-confirm/';
function initLogin(app) {
    app.route("/api/login/login").post(function (req, res) {
        var email = req.body.email;
        var password = req.body.password;
        var deviceid = req.headers['user-agent'];
        var user = {
            email: email,
            password: crypto.createHash('md5').update(password).digest("hex"),
            deviceid: deviceid
        };
        model_1.UserModel.findOne({ where: { email: user.email, password: user.password } })
            .then(function (user2) {
            if (user2) {
                if (user2.confirmed) {
                    res.json({ success: {
                            token: encryptCTR(user2.uid),
                            nikname: user2.nickname,
                            email: user2.email,
                            role: user2.role
                        } });
                }
                else {
                    res.json({
                        error: 'verification',
                        confirmURL: confirmURL + encryptCTR(user2.uid)
                    });
                }
            }
            else {
                res.json({ error: 'wrong' });
            }
        });
    });
    app.route("/api/login/register").post(function (req, res) {
        var email = req.body.email;
        var password = req.body.password;
        var deviceid = req.headers['user-agent'];
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
                res.json({ error: 'exists', message: email });
            }
            else {
                createUser(user).then(function (user2) {
                    console.log(user2);
                    user2.uid = encryptCTR(user2.uid);
                    sendEmail(user2, function (error) {
                        console.log(error);
                        if (error)
                            res.json({ error: error });
                        else
                            res.json(user2);
                    });
                });
            }
        });
    });
    app.route("/api/login/confirm/:uid").get(function (req, res) {
        var uid = req.body.uid;
        uid = decryptCTR(uid);
        model_1.UserModel.findOne({ where: { uid: uid } })
            .then(function (user) {
            if (user.confirmed) {
                res.json({ success: 'confirmed-before' });
            }
            else {
                model_1.UserModel.update({
                    confirmed: true,
                    uid: uuidV4(),
                    nickname: hri.random()
                }, { where: { uid: uid } })
                    .then(function (result) {
                    console.log(result);
                    res.json({ success: 'confirmed' });
                });
            }
        });
    });
}
exports.initLogin = initLogin;
function encryptCTR(text) {
    var cipher = crypto.createCipher(algorithmCTR, PASSWORD);
    var crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
exports.encryptCTR = encryptCTR;
function decryptCTR(text) {
    var decipher = crypto.createDecipher(algorithmCTR, PASSWORD);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}
exports.decryptCTR = decryptCTR;
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
function sendEmail(user, callBack) {
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
