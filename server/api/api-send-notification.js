"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model/model");
var app_utils_1 = require("../utils/app-utils");
var request = require("request");
function apiSendNotification(app) {
    app.route("/api/send-notification").post(function (req, response) {
        var email = req.body.email;
        var message = req.body.message;
        var subject = req.body.subject;
        var deviceid = req.headers['user-agent'];
        var ip = app_utils_1.getIp(req);
        var user = {
            email: email,
            deviceid: deviceid,
            nickname: ''
        };
        model_1.UserModel.findOne({ where: { email: email } })
            .then(function (result) {
            if (result) {
                user.nickname = result.nickname;
                sendNotificationEmail(user, subject, message, function (res) {
                    res.ip = ip;
                    response.json(res);
                });
            }
            else {
                response.json({ error: 'notregistared', message: ' Please register first' });
            }
        });
    });
}
exports.apiSendNotification = apiSendNotification;
function sendNotificationEmail(user, subject, content, callBack) {
    var message = 'Hello ' + user.nickname +
        '. <br/>' + content +
        ' <br/>Notification form callcenter.front-desk.ca. <br/>';
    var body = {
        user: 'uplight.ca@gmail.com',
        pass: 'uplight.ca@gmail.com',
        subject: subject,
        message: message,
        to: user.email
    };
    var options = {
        url: 'http://callcenter.front-desk.ca/send-email.php',
        method: 'POST',
        body: JSON.stringify(body)
    };
    request(options, function (error, object, data) {
        if (error)
            callBack(error);
        else {
            try {
                var result = JSON.parse(data);
                if (result.success && result.success === 'success') {
                    callBack({ success: message });
                }
            }
            catch (e) {
                callBack({ error: e.toString() });
            }
        }
        console.log(data);
    });
}
