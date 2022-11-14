import {db} from "./database.js";

export async function getAnnouncement () {
	const [data] = await db.query(`
		SELECT *
		FROM announcements
	`);

	return data[0];
}