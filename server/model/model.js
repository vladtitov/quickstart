"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
var path = require("path");
var file = path.join(__dirname, '../data/posts.sqlite');
console.log(file);
var optionsSQLITE = {
    benchmark: true,
    logging: console.log,
    dialect: "sqlite",
    storage: file
};
var options = {
    benchmark: true,
    logging: console.log,
    dialect: "mysql",
    host: "front-desk.ca"
};
var sequelizeLite = new ORM('', '', '', optionsSQLITE);
function initUserModel(sequelize) {
    return sequelize.define("registration", {
        email: ORM.STRING,
        password: ORM.TEXT,
        role: ORM.INTEGER,
        createdAt: ORM.DATE,
        updatedAt: ORM.DATE,
        uid: ORM.STRING,
        confirmed: ORM.BOOLEAN,
        lastVisit: ORM.DATE,
        nickname: ORM.STRING
    });
}
function initUserModelLite(sequelize) {
    return sequelize.define("registration", {
        uid: ORM.TEXT,
        email: ORM.TEXT,
        password: ORM.TEXT,
        role: ORM.INTEGER,
        status: ORM.TEXT,
        createdAt: ORM.INTEGER,
        updatedAt: ORM.INTEGER,
        confirmed: ORM.INTEGER,
        lastVisit: ORM.INTEGER,
        nickname: ORM.TEXT
    });
}
exports.UserModel = initUserModelLite(sequelizeLite);
