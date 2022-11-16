import {Router} from "express";
import {getUser, createUser, deleteUser, getUserByName, updateUser} from "../database/userQuery.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {Auth} from "../middleware/Auth.js";
import fs from "fs";

const router = Router();

router.post("/", async (req, res) => {
	const {username, password} = req.body;
	const privateKey = fs.readFileSync("./certs/private.pem");

	const user = await getUser(username);
	if (!user) {
		res.status(404).json({"message": "User not found"});
		return;
	}
	const isMatch = await bcrypt.compare(password, user.password);
	if (isMatch) {
		const {id, firstName, lastName, email, roles} = user;
		const token = jwt.sign(
			{id, firstName, lastName, email, roles},
			privateKey,
			{expiresIn: "6h", algorithm: "RS256"},
			{}
		);

		res.cookie("token", token, {
			httpOnly: true,
			maxAge: 6 * 60 * 60 * 1000
		});
		res.status(200).json({id, firstName, lastName, email, roles});
	} else {
		res.status(401).json({message: "Unauthorised"});
	}
});

router.post("/logout", async (req, res) => {
	res.clearCookie("token");
});

//Only admin can get and create new user
router.get("/get-user", Auth(["ADMIN"]), async (req, res) => {
	const name = req.query.name;
	const user = await getUserByName(name);
	if (!user) {
		res.status(404).json({"message": "User not found"});
	} else {
		const {id, firstName, lastName, email, username, roles} = user;
		res.status(200).json({id, firstName, lastName, email, username, roles});
	}
});

router.post("/create-user", Auth(["ADMIN"]), async (req, res) => {
	const {firstName, lastName, username, password, email, roles} = req.body;
	const salt = bcrypt.genSaltSync(10);
	const hashPassword = await bcrypt.hash(password, salt);

	const user = await createUser(firstName, lastName, username, hashPassword, email, roles);
	res.status(201).send({message: "User created"});
});

router.put("/update-user", Auth(["ADMIN"]), async (req, res) => {
	const {firstName, lastName, username, email, roles} = req.body;

	const user = await updateUser(firstName, lastName, email, roles, username);
	if (user) {
		res.status(200).send({message: "User updated"});
	} else {
		res.status(500).send({message: "Something wrong!"});
	}
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