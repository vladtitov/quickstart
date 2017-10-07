"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model/model");
const login_email_1 = require("./login-email");
const app_utils_1 = require("../utils/app-utils");
const uuidV1 = require('uuid/v1');
const hri = require('human-readable-ids').hri;
function newNikname(email, password, callBack) {
    let nickname = hri.random();
    app_utils_1.hashPassword(password, function (hashed) {
        password = hashed.hash;
        model_1.UserModel.findOne({ where: { email: email, password: password } })
            .then(function (result) {
            if (result) {
                if (result.confirmed) {
                    model_1.UserModel.update({
                        nickname: nickname
                    }, {
                        where: {
                            email: email,
                            password: password
                        }
                    })
                        .then(function (result) {
                        if (Array.isArray(result)) {
                            if (result[0])
                                callBack({
                                    success: 'password',
                                    message: 'New nickname: ' + nickname,
                                    nickname: nickname
                                });
                        }
                        else
                            callBack({ error: 'nouser', message: 'username or password incorrect' });
                    });
                }
                else
                    callBack({ error: 'notconfirmed', message: 'Please Confirm email first' });
            }
            else
                callBack({ error: 'not registered', message: 'Please Register' });
        });
    });
}
exports.newNikname = newNikname;
function confirmUser(uid, callBack) {
    model_1.UserModel.findOne({ where: { uid: uid } })
        .then(function (result) {
        if (result) {
            let user2 = result.get({ plain: true });
            console.log('confirmUser ', user2);
            if (user2.confirmed) {
                callBack({
                    success: 'confirmed-before',
                    message: 'was confirmed ' + user2.nickname
                });
            }
            else {
                user2.uid = uuidV1();
                user2.status = 'confirmed';
                user2.confirmed = 1;
                model_1.UserModel.update(user2, { where: { id: user2.id } })
                    .then(function (result) {
                    console.log('confirmUser update', result);
                    if (result)
                        callBack({ success: 'confirmed', message: 'Confirmrd ' + user2.nickname });
                    else
                        callBack({ error: 'db error' });
                });
            }
        }
        else {
            callBack({ error: 'notvalid', message: 'URL not valid' });
        }
    });
}
exports.confirmUser = confirmUser;
function resetPassword(uid, newPassword, callBack) {
    app_utils_1.hashPassword(newPassword, function (hashed) {
        newPassword = hashed.hash;
        model_1.UserModel.findOne({ where: { uid: uid } })
            .then(function (result) {
            if (result) {
                model_1.UserModel.update({ uid: uuidV1(), password: newPassword }, { where: { uid: uid } })
                    .then(function (result) {
                    console.log(result);
                    if (Array.isArray(result) && result[0])
                        callBack({
                            success: 'new-password',
                            message: 'Please login with new password'
                        });
                    else
                        callBack({ error: 'dberror', message: 'error reset password' });
                });
            }
            else
                callBack({ error: 'no-uid', message: 'URL expired' });
        });
    });
}
exports.resetPassword = resetPassword;
function requestResetPassword(email, confirmUrl, host, callBack) {
    model_1.UserModel.findOne({ where: { email: email } })
        .then(function (result) {
        if (result) {
            let user1 = result.get({ plain: true });
            let uid = user1.uid;
            console.log('uid ' + uid);
            confirmUrl = confirmUrl + uid;
            let nickname = user1.nickname;
            login_email_1.sendResetPasswordEmail(email, host, confirmUrl, nickname, function (error) {
                if (error) {
                    callBack({ error: 'email send error', message: 'Send email error.' });
                }
                else {
                    model_1.UserModel.update({ status: 'reset-sent' }, { where: { id: user1.id } })
                        .then(function (result) {
                        console.log(result);
                    });
                    callBack({
                        success: 'reset-sent', message: 'Please confirm reset password in email'
                    });
                }
            });
        }
        else {
            callBack({ error: 'wrong', message: 'no user with email ' + email });
        }
    });
}
exports.requestResetPassword = requestResetPassword;
function logout(uid, email, nickname, callBack) {
    let user = {
        uid: uuidV1(),
        status: 'logout'
    };
    model_1.UserModel.update(user, { where: { uid: uid, email: email } })
        .then(function (result) {
        console.log(' logout ', result);
        if (Array.isArray(result) && result[0])
            callBack({
                success: 'logout',
                message: nickname + ' Logged out'
            });
        else
            callBack({ error: 'dberror', message: 'no user with email ' + email });
    });
}
exports.logout = logout;
function loginUser(email, password, confirmUrl, host, callBack) {
    app_utils_1.hashPassword(password, function (hashed) {
        password = hashed.hash;
        model_1.UserModel.findOne({ where: { email: email, password: password } })
            .then(function (result) {
            if (result) {
                let user1 = result.get({ plain: true });
                if (user1.confirmed) {
                    let uid = uuidV1();
                    model_1.UserModel.update({ uid: uid }, { where: { id: user1.id } })
                        .then(function (count) {
                        callBack({ success: 'logedin',
                            message: 'Login success ' + user1.nickname,
                            user: {
                                token: user1.uid,
                                nickname: user1.nickname,
                                email: user1.email,
                                role: user1.role,
                                uid: uid
                            } });
                    });
                }
                else {
                    confirmUrl = confirmUrl + user1.uid;
                    login_email_1.sendConfirmationEmail(email, host, confirmUrl, user1, function (error) {
                        if (error) {
                            callBack({ error: 'sendemail', message: 'Error sending email. Please try again later' });
                            console.error(error);
                            return;
                        }
                        callBack({
                            error: 'verification-required',
                            message: 'Hi ' + user1.nickname + ' Email was sent to ' + user1.email + '. Please click on a link "Confirm Registration" in email body'
                        });
                    });
                }
            }
            else {
                callBack({ error: 'wrong', message: 'email or password incorrect' });
            }
        });
    });
}
exports.loginUser = loginUser;
function registerUser(email, password, ip, confirmUrl, host, callBack) {
    app_utils_1.hashPassword(password, function (hashed) {
        password = hashed.hash;
        model_1.UserModel.findOne({ where: { email: email } })
            .then(function (result) {
            if (result) {
                callBack({ error: 'exists', message: 'Please login' });
                return;
            }
            let newUser = {
                email: email,
                password: password,
                nickname: hri.random(),
                ip: ip,
                uid: uuidV1(),
                status: 'created'
            };
            model_1.UserModel.create(newUser).then(function (result) {
                if (!result) {
                    console.error('error create user ' + JSON.stringify(newUser));
                    callBack({ error: 'dberror', message: 'Database error. Please try again later' });
                    return;
                }
                let createdUser = result.get({ plain: true });
                confirmUrl = confirmUrl + createdUser.uid;
                login_email_1.sendConfirmationEmail(email, host, confirmUrl, createdUser, function (error) {
                    if (error) {
                        model_1.UserModel.destroy({ where: { id: createdUser.id } });
                        callBack({ error: 'sendemail', message: 'Please re register, Registration Error' });
                        return;
                    }
                    callBack({
                        success: 'confirmationsent',
                        message: 'Confirmation sent to ' + email + ' ' + createdUser.nickname,
                        nickname: createdUser.nickname
                    });
                });
            });
        });
    });
}
exports.registerUser = registerUser;
