import {Router} from "express";
import {Auth} from "../middleware/Auth.js";
import {logger} from "../logger.js";

const router = Router();

router.post("/minute", Auth(["EDITOR"]), async (req, res) => {
	if (req.files === null) {
		res.status(400).send({message: "No file uploaded"});
	}

	const file = req.files.file;

	file.mv(`${__dirname}/src/public/minutes/${file.name}`, err => {
		if (err) {
			console.error(err);
			logger.log("upload-failed", err.message);
			return res.status(500).send({message: err});
		}

		res.status(200).send({fileName: file.name, filePath: `/minutes/${file.name}`});
	});
});

export default router;