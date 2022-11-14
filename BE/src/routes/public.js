import {Router} from "express";
import {getAnnouncement} from "../database/publicQuery.js";

const router = Router();

router.get("/announcement", async (req, res) => {
	const {content} = await getAnnouncement();

	if (content?.length) {
		res.status(200).send(content);
	} else {
		res.status(404).send("No announcements at the moment.");
	}
});

export default router;