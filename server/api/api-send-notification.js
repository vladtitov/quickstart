"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model/model");
const app_utils_1 = require("../utils/app-utils");
const request = require("request");
function apiSendNotification(app) {
    app.route("/api/give-me-all-users-from-db").get(function (req, resp) {
        model_1.UserModel.all().then(function (users) {
            resp.json(users);
        });
    });
    app.route("/api/send-notification").post(function (req, resp) {
        let email = req.body.email;
        let message = req.body.message;
        let subject = req.body.subject;
        let deviceid = req.headers['user-agent'];
        let ip = app_utils_1.checkIp(req, 300);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        let user = {
            email: app_utils_1.encryptCTR(email),
            deviceid: deviceid,
            nickname: ''
        };
        model_1.UserModel.findOne({ where: { email: app_utils_1.encryptCTR(email) } })
            .then(function (result) {
            if (result) {
                if (result.confirmed) {
                    user.nickname = result.nickname;
                    sendNotificationEmai(email, user.nickname, subject, message, function (res) {
                        res.ip = ip;
                        if (res.success) {
                            resp.json({ success: 'success', message: 'Emeil sent to ' + email });
                        }
                        else
                            resp.json({ error: 'Error', message: 'Error send Email to ' + email });
                    });
                }
                else {
                    resp.json({ error: 'need-confirmation' });
                }
            }
            else {
                resp.json({ error: 'notregistared', message: ' Please register first' });
            }
        });
    });
}
exports.apiSendNotification = apiSendNotification;
function sendNotificationEmai(email, nickname, subject, content, callBack) {
    let message = 'Hello ' + nickname + "\n" + content;
    let body = {
        user: 'uplight.ca@gmail.com',
        pass: 'uplight.ca@gmail.com',
        subject: subject,
        message: message,
        to: email
    };
    let options = {
        url: 'http://callcenter.front-desk.ca/send-notification.php',
        method: 'POST',
        body: JSON.stringify(body)
    };
    request(options, function (error, object, data) {
        if (error)
            callBack(error);
        else {
            console.log(data);
            try {
                let result = JSON.parse(data);
                callBack(result);
            }
            catch (e) {
                callBack({ error: e.toString() });
            }
        }
    });
}
