import {db} from "./database.js";

export async function getMediaMetadata (databaseTable) {
	const [data] = await db.query(`
		SELECT *
		FROM ${databaseTable}
		ORDER BY created DESC
	`);

	if (data.length) {
		return data;
	}

	return [];
}


export async function createMediaMetadata (databaseTable, title, url) {
	const [result] = await db.query(`
		INSERT INTO ${databaseTable} (title, url)
		VALUES (?, ?)
	`, [title, url]);

	return result.insertId;
}

export async function updateMediaMetadata (databaseTable, title, url) {
	const [media] = await getMediaMetadata(databaseTable);

	if (media?.id) {
		const [result] = await db.query(`
		UPDATE ${databaseTable}
		SET 
			title = ?,
			url = ?
		WHERE id = ${media.id}
	`, [title, url]);

		return result.affectedRows;
	} else {
		return await createMediaMetadata(databaseTable, title, url);
	}


}