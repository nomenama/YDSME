import {Router} from "express";
import {createAnnouncement, deleteAnnouncement, deleteEvent, getAnnouncement, getEvents} from "../database/publicQuery.js";
import {Auth} from "../middleware/Auth.js";

const router = Router();

router.get("/announcement", async (req, res) => {
	const content = await getAnnouncement();

	if (content?.length) {
		res.status(200).send(content);
	} else {
		res.status(404).send("No announcements at the moment.");
	}
});

router.post("/delete-announcement", Auth(["EDITOR", "ADMIN"]), async (req, res) => {
	const {id} = req.body;

	const response = await deleteAnnouncement(id);

	if (response?.affectedRows >= 1) {
		res.status(200).send({message: "Announcement deleted"});
	} else {
		res.status(400).send({message: "Error deleting announcement"});
	}
});

router.post("/create-announcement", Auth(["ADMIN", "EDITOR"]), async (req, res) => {
	const {title, content} = req.body;

	const response = await createAnnouncement(title, content);
	console.log(response);
	res.status(200).send({message: "Success"});
});


router.get("/get-events", async (req, res) => {

	const content = await getEvents();

	if (content?.length) {
		res.status(200).send(content);
	} else {
		res.status(404).send("No announcements at the moment.");
	}
});

router.post("/delete-event", Auth(["EDITOR", "ADMIN"]), async (req, res) => {
	const {id} = req.body;

	const response = await deleteEvent(id);

	if (response?.length) {
		res.status(200).send(response);
	} else {
		res.status(400).send({message: "Error deleting event"});
	}
});

export default router;