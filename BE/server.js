// noinspection JSUnresolvedVariable,JSUnresolvedFunction

import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import {logger} from "./src/logger.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import * as http from "http";
import fileUpload from "express-fileupload";
import userRoutes from "./src/routes/users.js";
import publicRoutes from "./src/routes/public.js";
import mediaRoutes from "./src/routes/media.js";
import {allowedCors} from "./src/allowedCors/index.js";
import {Server} from "socket.io";
import {createMessage, getMessages} from "./src/database/chatQuery.js";

dotenv.config();
const app = express();
app.use(cors(allowedCors));
app.use(bodyParser.urlencoded({extended: true, limit: "10mb"}));
app.use(bodyParser.json({limit: "10mb"}));
app.use(cookieParser());
app.use(fileUpload({}));

const server = http.createServer(app);

app.use("/api/public", publicRoutes);
app.use("/api/user", userRoutes);
app.use("/api/media", mediaRoutes);


//error handling and logging
app.use((err, req, res) => {
	logger.log("error", err.stack);
	res.status(500).send({message: "Something broke! Please try again or contact administrator."});
});

const io = new Server(server, {
	cors: {
		origin: "https://yorkmodelengineers.co.uk"
	}
});

const users = {};
let messageHistory = [];

io.on("connection", (socket) => {

	socket.on("joining", ({name}) => {
		users[socket.id] = {
			name,
			id: socket.id
		};
		io.emit("users", Object.values(users));

		socket.broadcast.emit("message", {
			author: "BOT",
			message: `${name} has joined the chat.`,
			time: String(new Date(Date.now())),
			file: ""
		});
	});

	socket.emit("message_history", messageHistory);

	socket.on("send", (msgObj) => {
		messageHistory.push(msgObj);
		io.emit("message", msgObj);
	});

	socket.on("disconnect", () => {
		const user = users[socket.id];
		delete users[socket.id];
		io.emit("disconnected", user);
	});
});

server.listen(process.env.PORT, () => {
	logger.log("info", `Server listening on port ${process.env.PORT}`);
});