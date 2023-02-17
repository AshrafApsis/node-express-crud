'use strict';
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db.js";



class User extends Model { }

User.init({

	userId: {
		type: DataTypes.UUID,
		allowNull: false,
		defaultValue: DataTypes.UUIDV4
	},

	firstName: {
		type: DataTypes.STRING,
		allowNull: false,

	},
	lastName: {
		type: DataTypes.STRING,

	},
	email: {
		type: DataTypes.STRING,

	},
	password: {
		type: DataTypes.STRING
	},
	fullName: {
		type: DataTypes.VIRTUAL,
		get() {
			return `${this.firstName} ${this.lastName}`;
		},
		set(value) {
			throw new Error('Do not try to set the `fullName` value!');
		}
	}

}, {
	sequelize,
	modelName: "User",
	tableName: "users",


});


export { User };