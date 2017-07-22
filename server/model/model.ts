
import * as ORM from "sequelize";
import {Sequelize, LoggingOptions} from "sequelize";
import {initPostModel} from './initModel';


//const dbUrl: string = "postgres://postgres:postgres@localhost:5432/complete-typescript-course";


/*
const options: any = {
  benchmark: true,
  logging:console.log,
  dialect: "sqlite",
  storage: "server/data/posts.sqlite"
};*/

const options: any = {
  benchmark: true,
  logging:console.log,
  dialect: "mysql",
  host: "front-desk.ca"
};


const sequelize: Sequelize = new ORM('frontdes_callcenter','frontdes','xzsawq2!', options);
//const sequelize: Sequelize = new ORM('','','',options);

function initUserModel(sequelize: Sequelize) {
  return sequelize.define("registration", {
    email:  ORM.STRING,
    password: ORM.TEXT,
    createdAt:ORM.DATE,
    updatedAt:ORM.DATE,
    uid:ORM.STRING,
    confirmed:ORM.BOOLEAN,
    lastVisit:ORM.DATE,
    nickname:ORM.STRING
  });
}

export const UserModel =  initUserModel(sequelize);
//export const PostModel =  initPostModel(sequelize);


//UserModel.hasMany(PostModel, {foreignKey: "userId"});

//PostModel.belongsTo(UserModel, {foreignKey: "userId"});*/