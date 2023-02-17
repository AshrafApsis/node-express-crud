"use strict";

import { User } from "../models/user.model.js";
import Response from "../utils/Response.js";
import bcrypt from 'bcryptjs'

const createUser = async (req, res) => {
	try {
		let { firstName, lastName, email, password } = req.body;

		password = await generateHash(password);
		console.log(password, "BODY");


		await User.create({
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,

		}).then((value) =>

			res.status(201).json(Response.sendResponse(true, { ...value.dataValues }, "User Created Succesfuly"))
		);


	} catch (error) {
		console.log(error.message);
		res.status(500).json({ isSuccess: false, message: `${error.message}`, data: error });

	}
};

const getUser = async (req, res) => {
	try {
		await User.findAll().then((value) => {
			res.status(200).json({
				isSuccess: true,
				message: "User Fetch",
				data: value,
			});
		});
	} catch (error) {

		res.status(500).json({
			isSuccess: false,
			message: error,
			data: {},
		});
	}
};

const getUserOne = async (req, res) => {
	try {
		const { id } = req.params;

		if (id) {
			let data = await User.findOne({ where: { id: req.params.id } });
			if (data) {

				res.status(200).json(Response.sendResponse(true, data, "User Fetch Succesfuly"))
			} else {
				res.status(404).json(Response.sendResponse(false, {}, "No user found"))

			}
		} else {
			res.status(406).json({
				isSuccess: false,
				message: "User Id is required",
				data: {},
			});
		}
	} catch (error) {
		res.status(500).json(Response.sendResponse(false, {}, error))
	}
};

const deleteUser = async (req, res) => {
	try {
		let deletedUser;
		let data = await User.findOne({ where: { id: req.params.id } });
		if (data) {
			deletedUser = await User.destroy({ where: { id: req.params.id } });
			if (deleteUser) {
				res.status(200).json({
					isSuccess: true,
					message: "User Deleted Successfully",
					data: {},
				});
			}
		} else {
			res.status(404).json({
				isSuccess: false,
				message: "No user found",
				data: {},
			});
		}
	} catch (error) {
		res.status(500).json({
			isSuccess: false,
			message: error,
			data: {},
		});
	}
};

const updateUser = async (req, res) => {
	try {
		let id = req.params.id;



		if (id) {
			if (await isUserExists(id)) {
				let data = await User.update({ ...req.body }, { where: { id: id } });
				res.status(200).json({
					isSuccess: true,
					message: "Updated Sucesfuly",
					data: {},
				});
			} else {
				res.status(404).json({
					isSuccess: false,
					message: "User not found",
					data: {},
				});
			}
		} else {
			res.status(406).json({
				isSuccess: false,
				message: "User Id  is required",
				data: {},
			});
		}
	} catch (error) {
		res.status(500).json({
			isSuccess: false,
			message: error,
			data: {},
		});
	}
};

const isUserExists = async (id) => {
	try {
		let data = await User.findOne({ where: { id: id } });
		if (data) {
			return true;
		}
	} catch (error) {
		res.status(500).json({
			isSuccess: false,
			message: error,
			data: {},
		});
	}
};


const bulkCreateUsers = async (req, res) => {
	try {


		let data = await User.bulkCreate(req.body);

		res.status(200).json({
			isSuccess: false,
			message: "Success",
			data: data.length,
		});

	} catch (error) {
		res.status(500).json({
			isSuccess: false,
			message: error,
			data: {},
		});
	}
}


async function generateHash(password) {
	// bcrypt.compareSync();
	return bcrypt.hashSync(password);
}


export { createUser, getUser, getUserOne, deleteUser, updateUser, bulkCreateUsers };
