"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ORM = require("sequelize");
//const dbUrl: string = "postgres://postgres:postgres@localhost:5432/complete-typescript-course";
/*
const options: any = {
  benchmark: true,
  logging:console.log,
  dialect: "sqlite",
  storage: "server/data/posts.sqlite"
};*/
var options = {
    benchmark: true,
    logging: console.log,
    dialect: "mysql",
    host: "front-desk.ca"
};
var sequelize = new ORM('frontdes_callcenter', 'frontdes', 'xzsawq2!', options);
//const sequelize: Sequelize = new ORM('','','',options);
function initUserModel(sequelize) {
    return sequelize.define("registration", {
        email: ORM.STRING,
        password: ORM.TEXT,
        createdAt: ORM.DATE,
        updatedAt: ORM.DATE,
        uid: ORM.STRING,
        confirmed: ORM.BOOLEAN,
        lastVisit: ORM.DATE,
        nickname: ORM.STRING
    });
}
exports.UserModel = initUserModel(sequelize);
//export const PostModel =  initPostModel(sequelize);
//UserModel.hasMany(PostModel, {foreignKey: "userId"});
//PostModel.belongsTo(UserModel, {foreignKey: "userId"});*/ 
//# sourceMappingURL=model.js.map