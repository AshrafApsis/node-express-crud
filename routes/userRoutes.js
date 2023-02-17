import express from "express";
import { bulkCreateUsers, createUser, deleteUser, getUser, getUserOne, updateUser } from "../controller/user.controller.js";

const Router = express.Router();

Router.route("/").post(createUser).get(getUser);
Router.route("/bulk").post(bulkCreateUsers);


Router.route("/:id").get(getUserOne).delete(deleteUser).put(updateUser);


export { Router as userRouter };
