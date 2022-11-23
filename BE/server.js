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

dotenv.config();
const app = express();
app.use(cors(allowedCors));
app.use(bodyParser.urlencoded({extended: true, limit: "10mb"}));
app.use(bodyParser.json({limit: "10mb"}));
app.use(cookieParser());
app.use(fileUpload({}));

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: process.env.NODE_ENV === "development"
			? "http://localhost:3000"
			: process.env.REQUEST_ORIGIN,
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket) => {
	console.log(`${socket.id} connected.`);

	socket.on("join_room", (data) => {
		socket.join(data);
		console.log(`${data.name} joined the chat.`);
	});

	socket.on("send_message", (data) => {
		socket.to(data.room).emit("receive_message", data);
		console.log(data);
	});

	socket.on("disconnect", () => {
		console.log(`A user has left the chat.`);
	});
});

app.use("/api/public", publicRoutes);
app.use("/api/user", userRoutes);
app.use("/api/media", mediaRoutes);


//error handling and logging
app.use((err, req, res) => {
	logger.log("error", err.stack);
	res.status(500).send({message: "Something broke! Please try again or contact administrator."});
});

server.listen(process.env.PORT, () => {
	logger.log("info", `Server listening on port ${process.env.PORT}`);
});