import {Router} from "express";
import {Auth} from "../middleware/Auth.js";
import {logger} from "../logger.js";
import fs from "fs";
import {createMediaMetadata, getMediaMetadata, updateMediaMetadata} from "../database/mediaQuery.js";
import cloudinary from "../utils/cloudinary.js";

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


//Cloudinary media
router.post("/upload", Auth(["EDITOR"]), async (req, res) => {
	try {
		const {uploadPreset, title, file} = req.body;

		if (uploadPreset === "club_rules") {
			const {asset_id, public_id, secure_url, folder, signature} = await cloudinary.uploader.upload(file, {
				upload_preset: uploadPreset
			});


			const response = await updateMediaMetadata(folder, title, public_id, asset_id, secure_url, signature);
			if (response) {
				res.status(200).send({message: "File Updated"});
			}
			return;
		}

		const {asset_id, public_id, secure_url, folder, signature} = await cloudinary.uploader.upload(file, {
			upload_preset: uploadPreset
		});

		if (asset_id) {
			const response = await createMediaMetadata(folder, title, public_id, asset_id, secure_url, signature);
			res.status(200).send({message: "Success"});
		} else {
			res.status(500).send({message: "Error"});
		}

	} catch (err) {
		res.status(500).send({message: err});
	}
});

router.get("/get-metadata", Auth(["MEMBER", "EDITOR", "COMMITTEE", "ADMIN"]), async (req, res) => {
	const {databaseTable} = req.query;
	const response = await getMediaMetadata(databaseTable);

	res.status(200).send(response);
});


export default router;