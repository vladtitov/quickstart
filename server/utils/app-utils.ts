
import {Request} from "express";
import * as crypto from 'crypto';
const hri = require('human-readable-ids').hri;

const algorithmCTR = 'aes-256-ctr',
  algorithmGSM= 'aes-256-gcm',
  PASSWORD = '3zTvzr3p67VC61jmV54rIYu1545x4TlY'
export const EXPIRATION_TIME:number = 180;

export function encryptCTR(text){
  var cipher = crypto.createCipher(algorithmCTR, PASSWORD)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}


export function decryptCTR(text){
  var decipher = crypto.createDecipher(algorithmCTR,PASSWORD)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


export function getIp(req:Request){
 return req.headers['x-forwarded-for'] || req.connection.remoteAddress;
}