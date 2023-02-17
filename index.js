"use strict";

import express from "express";

import { sequelize } from "./db.js";

import { Routers } from "./routes/router.js";
import { server } from "./utils/server.js";

const app = express();

// sequelize.sync({ alter: false });

server(app);

Routers(app);
