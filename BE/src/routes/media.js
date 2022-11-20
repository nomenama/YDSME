import {Router} from "express";
import {Auth} from "../middleware/Auth.js";
import {logger} from "../logger.js";
import fs from "fs";
import {createMediaMetadata, getMediaMetadata, updateMediaMetadata} from "../database/mediaQuery.js";

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


//All Cloudinary media metadata
router.get("/get-metadata", Auth(["MEMBER", "EDITOR", "COMMITTEE", "ADMIN"]), async (req, res) => {
	const {databaseTable} = req.query;
	const response = await getMediaMetadata(databaseTable);

	res.status(200).send(response);
});


router.post("/post-metadata", Auth(["EDITOR"]), async (req, res) => {
	const {title, url, databaseTable} = req.body;
	let response;

	if (databaseTable === "rules") {
		response = await updateMediaMetadata(databaseTable, title, url);
		if (response) {
			res.status(200).send(response);
		}
		return;
	}

	response = await createMediaMetadata(databaseTable, title, url);
	if (response) {
		res.status(200).send(response);
	}

	res.status(400).send({message: "Something is wrong"});
});

export default router;