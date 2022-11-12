import {Router} from "express";
import {getUser, createUser, deleteUser} from "../database.js";
import bcrypt from "bcrypt";

const router = Router();

router.post("/", async (req, res) => {
	const {username, password} = req.body;

	const user = await getUser(username);
	if (!user) {
		res.status(404).json({"error": "User not found"});
	}

	const isMatch = await bcrypt.compare(password, user.password);
	if (isMatch) {
		//sent jwt http only cookie here
		res.status(201).send(user);
	} else {
		res.status(401).json({error: "Unauthorised"});
	}
});

router.post("/create-user", async (req, res) => {
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