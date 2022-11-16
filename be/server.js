// noinspection JSUnresolvedVariable,JSUnresolvedFunction

import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import {logger} from "./src/logger.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRoutes from "./src/routes/users.js";
import publicRoutes from "./src/routes/public.js";
import mediaRoutes from "./src/routes/media.js";
import {allowedCors} from "./src/allowedCors/index.js";

dotenv.config();
const app = express();
app.use(cors(allowedCors));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(fileUpload({}));

app.use("/public", publicRoutes);
app.use("/user", userRoutes);
app.use("/upload", mediaRoutes);


//error handling and logging
app.use((err, req, res, next) => {
	logger.log("error", err.stack);
	res.status(500).send({message: "Something broke! Please try again or contact administrator."});
});

app.listen(process.env.PORT, () => {
	process.env.NODE_ENV === "development"
		? console.log(`Server listening on port ${process.env.PORT}`)
		: logger.log("info", `Server listening on port ${process.env.PORT}`);
});