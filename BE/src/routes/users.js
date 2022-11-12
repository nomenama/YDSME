import {Router} from "express";
import {getUser, createUser, deleteUser} from "../database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {useAuth} from "../middleware/useAuth.js";

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
		const {id, firstName, lastName, roles} = user;
		const token = jwt.sign({id, firstName, lastName, roles}, privateKey, {expiresIn: "12h"}, {});

		res.cookie("token", token, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000 //1 day
		});
		res.status(200).json({id, firstName, lastName, roles});
	} else {
		res.status(401).json({error: "Unauthorised"});
	}
});

router.post("/create-user", useAuth([5048]), async (req, res) => {
	const {firstName, lastName, username, password, roles} = req.body;
	const salt = bcrypt.genSaltSync(10);
	const hashPassword = await bcrypt.hash(password, salt);

	const user = await createUser(firstName, lastName, username, hashPassword, roles);
	res.status(201).send(user);
});

/*router.delete("/delete-user", async (req, res) => {
	const user = await deleteUser(3);
	res.status(201)
});*/

export default router;