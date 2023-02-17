import { routeNotFound } from "./routeNotFound.js";
import { userRouter } from "./userRoutes.js";
import morgan from "morgan";
import cors from "cors";
import express from "express";

export const Routers = (app) => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use("/static", express.static("public"));
	app.use(morgan("dev"));
	app.use(cors());
	app.use("/user", userRouter);
	app.use("*", routeNotFound);
};
