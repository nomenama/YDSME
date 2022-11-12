// noinspection JSUnresolvedVariable,JSUnresolvedFunction

import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import {logger} from "./src/logger.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./src/routes/users.js";

dotenv.config();
const app = express();
app.use(cors({origin: process.env.REQUEST_ORIGIN, credentials: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/user", userRoutes);


//error handling and logging
app.use((err, req, res, next) => {
	logger.log("error", err.stack);
	res.status(500).send("Something broke! Please try again or contact administrator.");
});

app.listen(process.env.PORT, () => {
	logger.log("info", `Server listening on port ${process.env.PORT}`);
});