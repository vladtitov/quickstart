"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var hri = require('human-readable-ids').hri;
var algorithmCTR = 'aes-256-ctr', algorithmGSM = 'aes-256-gcm', PASSWORD = '3zTvzr3p67VC61jmV54rIYu1545x4TlY';
exports.EXPIRATION_TIME = 180;
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
function getIp(req) {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}
exports.getIp = getIp;
