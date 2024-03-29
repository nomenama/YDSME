import {Router} from "express";
import {Auth} from "../middleware/Auth.js";
import {
    createMediaMetadata,
    deleteMediaMetadata,
    getMediaMetadata,
    updateMediaMetadata
} from "../database/mediaQuery.js";
import cloudinary from "../utils/cloudinary.js";

const router = Router();

//Cloudinary media
router.post("/upload", Auth(["EDITOR"]), async (req, res) => {

    try {
        const {uploadPreset, title, file} = req.body;

        if (uploadPreset === "Club_Rules" || uploadPreset === "Agendas") {
            const {asset_id, public_id, secure_url, folder, signature} = await cloudinary.uploader.upload(file, {
                upload_preset: uploadPreset
            });

            const response = await updateMediaMetadata(folder, title, public_id, asset_id, secure_url, signature);
            if (response) {
                res.status(200).send({message: "File Updated"});
            }
            return;
        }

        const res = await cloudinary.uploader.upload(file, {
            upload_preset: uploadPreset
        });

        const {asset_id, public_id, secure_url, folder, signature} = res;

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

router.get("/get-media", Auth(["MEMBER", "EDITOR", "COMMITTEE", "ADMIN"]), async (req, res) => {
    const {uploadPreset} = req.query;
    const response = await getMediaMetadata(uploadPreset);

    res.status(200).send(response);
});

router.delete("/delete-media", Auth(["EDITOR", "ADMIN"]), async (req, res) => {
    const {folder, public_id, signature} = req.query;
    try {
        const {result} = await cloudinary.uploader.destroy(public_id, signature);
        const databaseResult = await deleteMediaMetadata(folder, public_id);

        res.status(200).send(databaseResult);

    } catch (err) {
        res.status(500).send(err);
    }
});

export default router;