"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
var options = {
    benchmark: true,
    logging: console.log,
    dialect: "mysql",
    host: "front-desk.ca"
};
var sequelize = new ORM('frontdes_callcenter', 'frontdes', 'xzsawq2!', options);
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
exports.UserModel = initUserModel(sequelize);
