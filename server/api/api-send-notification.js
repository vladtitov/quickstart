"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model/model");
const app_utils_1 = require("../utils/app-utils");
const login_email_1 = require("./login-email");
function apiSendNotification(app) {
    app.route("/api/send-notification").post(function (req, resp) {
        let email = req.body.email;
        let uid = req.body.uid;
        let message = req.body.message;
        let subject = req.body.subject;
        let deviceid = req.headers['user-agent'];
        let ip = app_utils_1.checkIp(req, 300);
        if (!ip) {
            resp.json({ error: 'annoying', message: 'ip hacker' });
            return;
        }
        model_1.UserModel.findOne({ where: { email: email } })
            .then(function (result) {
            if (result) {
                if (result.confirmed) {
                    login_email_1.sendNotificationEmai(email, result.nickname, subject, message, function (res) {
                        res.ip = ip;
                        if (res.success) {
                            resp.json({ success: 'success', message: 'Emeil sent to ' + email });
                        }
                        else
                            resp.json({ error: 'Error', message: 'Error send Email to ' + email });
                    });
                }
                else {
                    resp.json({ error: 'need-confirmation', message: 'Please confirm your email' });
                }
            }
            else {
                resp.json({ error: 'notregistared', message: ' Please register first' });
            }
        });
    });
}
exports.apiSendNotification = apiSendNotification;
