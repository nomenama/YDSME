import {db} from "./database.js";
import cloudinary from "../utils/cloudinary.js";

export async function getMediaMetadata (uploadPreset) {
	const [data] = await db.query(`
		SELECT *
		FROM ${uploadPreset}
		ORDER BY created DESC
	`);

	if (data.length) {
		return data;
	}
	return [];
}

export async function createMediaMetadata (folder, title, public_id, asset_id, secure_url, signature) {
	const [result] = await db.query(`
		INSERT INTO ${folder} (folder, title, public_id, asset_id, secure_url, signature)
		VALUES (?, ?, ?, ?, ?, ?)
	`, [folder, title, public_id, asset_id, secure_url, signature]);

	return result.insertId;
}

export async function updateMediaMetadata (folder, title, public_id, asset_id, secure_url, signature) {
	const [media] = await getMediaMetadata(folder);
	if (media?.id) {

		const [result] = await db.query(`
		UPDATE ${folder}
		SET 
			folder = ?,
			title = ?,
			public_id = ?,
			asset_id = ?,
			secure_url = ?,
			signature = ?
		WHERE id = ${media.id}
	`, [folder, title, public_id, asset_id, secure_url, signature]);

		const res = await cloudinary.uploader.destroy(media.public_id, media.signature);
		
		return result.affectedRows;
	} else {
		return await createMediaMetadata(folder, title, public_id, asset_id, secure_url);
	}
}

export async function deleteMediaMetadata (folder, public_id) {
	const [result] = await db.query(`
		DELETE FROM ${folder}
		WHERE public_id = ?
	`, [public_id]);

	if (result.affectedRows) {
		return await getMediaMetadata(folder);
	}
}