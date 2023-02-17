'use strict';

import { Sequelize } from "sequelize";


export const sequelize = new Sequelize({
	host: "localhost",
	dialect: "mysql",
	port: 3306,
	database: "ezzclothing",
	username: "root",
	password: "",
});



sequelize.authenticate().then((value) => console.log("Connect Database Sucessfuly")).catch((e) => console.log(e, "ERROR"));






