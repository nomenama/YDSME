import {Router} from "express";
import {Auth} from "../middleware/Auth.js";
import {getMessages} from "../database/chatQuery.js";

const router = Router();

router.get("/get-messages", Auth(["MEMBER", "ADMIN", "EDITOR", "COMMITTEE"]), async (req, res) => {
	const content = await getMessages();

	if (content) {
		res.status(200).send(content);
	} else {
		res.status(404).send("No messages at the moment");
	}
});

export default router;