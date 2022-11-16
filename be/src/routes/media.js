import {Router} from "express";
import {Auth} from "../middleware/Auth.js";
import {logger} from "../logger.js";
import fs from "fs";

const router = Router();

router.post("/", Auth(["EDITOR"]), async (req, res) => {
	const folderName = req.query.folderName;

	if (req.files === null) res.status(400).send({message: "No file uploaded"});
	if (!folderName) res.status(400).send({message: "No folderName specified"});

	//create folder if not existed
	let folder = `./src/public/${folderName}`;
	if (!fs.existsSync(folder)) {
		fs.mkdirSync(folder);
	}

	const file = req.files.file;
	await file.mv(`./src/public/${folderName}/${file.name}`, err => {
		if (err) {
			logger.log("error", err.message);
			return res.status(500).send({message: err});
		}
		res.status(200).send({fileName: file.name, filePath: `/minutes/${file.name}`});
	});
});

export default router;