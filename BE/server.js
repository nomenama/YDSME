// noinspection JSUnresolvedVariable,JSUnresolvedFunction

import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import {logger} from "./src/logger.js";
import {getUser} from "./src/routes/users.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/user", async (req, res) => {
    const user = await getUser(1);
    res.status(201).send(user);
})


//error handling and logging
app.use((err, req, res, next) => {
    logger.log("error", err.stack);
    res.status(500).send("Something broke! Please try again or contact administrator.");
})

app.listen(process.env.PORT, () => {
    logger.log("info", `Server listening on port ${process.env.PORT}`);
});