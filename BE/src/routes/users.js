import {Router} from "express";
import {getUser, createUser, deleteUser, getUserByName} from "../database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {Auth} from "../middleware/Auth.js";

const router = Router();

router.post("/", async (req, res) => {
	const {username, password} = req.body;
	const privateKey = process.env.ACCESS_TOKEN_SECRET;

	const user = await getUser(username);
	if (!user) {
		res.status(404).json({"error": "User not found"});
		return;
	}
	const isMatch = await bcrypt.compare(password, user.password);
	if (isMatch) {
		const {id, firstName, lastName, email, roles} = user;
		const token = jwt.sign({id, firstName, lastName, email, roles}, privateKey, {expiresIn: "12h"}, {});

		res.cookie("token", token, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000 //1 day
		});
		res.status(200).json({id, firstName, lastName, email, roles});
	} else {
		res.status(401).json({error: "Unauthorised"});
	}
});

router.get("/get-user", Auth(["ADMIN"]), async (req, res) => {
	const name = req.query.name;
	const user = await getUserByName(name);
	if (!user) {
		res.status(404).json({"error": "User not found"});
	} else {
		const {id, firstName, lastName, email, username, roles} = user;
		res.status(200).json({id, firstName, lastName, email, username, roles});
	}
});

//Only admin can create new user
router.post("/create-user", Auth(["ADMIN"]), async (req, res) => {
	const {firstName, lastName, username, password, email, roles} = req.body;
	const salt = bcrypt.genSaltSync(10);
	const hashPassword = await bcrypt.hash(password, salt);

	const user = await createUser(firstName, lastName, username, hashPassword, email, roles);
	res.status(201).send({message: "User created"});
});

router.delete("/delete-user/:id", Auth(["ADMIN"]), async (req, res) => {
	const {id} = req.params;

	const response = await deleteUser(id);
	if (response?.affectedRows >= 1) {
		res.status(200).send({message: "User deleted"});
	} else {
		res.status(200).send({message: "success"});
	}
});

export default router;