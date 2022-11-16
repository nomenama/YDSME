import {Router} from "express";
import {createAnnouncement, createEvent, deleteAnnouncement, deleteEvent, getAnnouncement, getEvents} from "../database/publicQuery.js";
import {Auth} from "../middleware/Auth.js";

const router = Router();

router.get("/announcement", async (req, res) => {
	const content = await getAnnouncement();

	if (content) {
		res.status(200).send(content);
	} else {
		res.status(404).send("No announcements at the moment.");
	}
});

router.post("/delete-announcement", Auth(["EDITOR", "ADMIN"]), async (req, res) => {
	const {id} = req.body;
	const response = await deleteAnnouncement(id);

	if (response) {
		res.status(200).send(response);
	} else {
		res.status(400).send({message: "Error deleting announcement"});
	}
});

router.post("/create-announcement", Auth(["ADMIN", "EDITOR"]), async (req, res) => {
	const {title, content} = req.body;

	const response = await createAnnouncement(title, content);
	res.status(200).send(response);
});


router.get("/get-events", async (req, res) => {

	const content = await getEvents();

	if (content) {
		res.status(200).send(content);
	} else {
		res.status(404).send("No events at the moment.");
	}
});

router.post("/delete-event", Auth(["EDITOR", "ADMIN"]), async (req, res) => {
	const {id} = req.body;

	const response = await deleteEvent(id);

	if (response) {
		res.status(200).send(response);
	} else {
		res.status(400).send({message: "Error deleting event"});
	}
});

router.post("/create-event", Auth(["EDITOR", "ADMIN"]), async (req, res) => {
	const {title, content, startDate, endDate, time, audience} = req.body;

	const response = await createEvent(title, content, startDate, endDate, time, audience);

	if (response) {
		res.status(200).send(response);
	} else {
		res.status(400).send({message: "Error creating event"});
	}
});

export default router;