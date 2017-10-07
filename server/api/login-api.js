"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_utils_1 = require("../utils/app-utils");
const login_db_1 = require("./login-db");
function initLogin(app) {
    app.route("/api/login/reset-password-confirm/")
        .post(function (req, resp) {
        let ip = app_utils_1.checkIp(req, 100);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        let password = req.body.password;
        let uid = req.body.uid;
        login_db_1.resetPassword(uid, password, function (result) {
            resp.json(result);
        });
    });
    app.route("/api/login/reset-password").post(function (req, resp) {
        let ip = app_utils_1.checkIp(req, 100);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        let email = req.body.email;
        let host = req.get('host');
        let confirmUrl = req.protocol + '://' + req.get('host') + '/#/confirm-reset-password/';
        login_db_1.requestResetPassword(email, confirmUrl, host, function (result) {
            resp.json(result);
        });
    });
    app.route("/api/login/logout").post(function (req, resp) {
        let ip = app_utils_1.checkIp(req, 100);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        let email = req.body.email;
        let uid = req.body.uid;
        let nickname = req.body.nickname;
        login_db_1.logout(uid, email, nickname, function (result) { resp.json(result); });
    });
    app.route("/api/login/login").post(function (req, resp) {
        let ip = app_utils_1.checkIp(req, 100);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        let email = req.body.email;
        let password = req.body.password;
        let deviceid = req.headers['user-agent'];
        let confirmUrl = req.protocol + '://' + req.get('host') + '/#/login-confirm/';
        let host = req.get('host');
        login_db_1.loginUser(email, password, confirmUrl, host, function (result) {
            resp.json(result);
        });
    });
    app.route("/api/login/new-nickname").post(function (req, resp) {
        let ip = app_utils_1.checkIp(req, 100);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        let email = req.body.email;
        let password = req.body.password;
        let deviceid = req.headers['user-agent'];
        login_db_1.newNikname(email, password, function (result) { resp.json(result); });
    });
    app.route("/api/login/register").post(function (req, resp) {
        let ip = app_utils_1.checkIp(req, 60);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        let email = req.body.email;
        let password = req.body.password;
        let deviceid = req.headers['user-agent'];
        let host = req.get('host');
        let confirmUrl = req.protocol + '://' + host + '/#/login-confirm/';
        login_db_1.registerUser(email, password, ip, confirmUrl, host, function (result) {
            resp.json(result);
        });
    });
    app.route("/api/login/confirm/:uid").get(function (req, resp) {
        let uid = req.params.uid;
        console.log('login/confirm' + uid);
        if (!uid) {
            resp.end('hacker');
            return;
        }
        let ip = app_utils_1.checkIp(req, 100);
        if (!ip) {
            resp.json({ error: 'annoying' });
            return;
        }
        login_db_1.confirmUser(uid, function (result) {
            resp.json(result);
        });
    });
}
exports.initLogin = initLogin;
