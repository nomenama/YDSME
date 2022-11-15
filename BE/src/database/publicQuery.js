import {db} from "./database.js";
import {getUserById} from "./userQuery.js";

export async function getAnnouncement () {
	const [data] = await db.query(`
		SELECT *
		FROM announcements
		ORDER BY created DESC
	`);
	return data;
}

export async function deleteAnnouncement (id) {
	const response = await db.query(`
       DELETE FROM announcements WHERE id = ?
    `, [id]);

	return response[0];
}

export async function createAnnouncement (title, content) {
	const [result] = await db.query(`
       INSERT INTO announcements (title, content)
       VALUES (? , ?)
    `, [title, content]);

	const id = result.insertId;
	return await getUserById(id);
}

export async function getEvents () {
	const [result] = await db.query(`
		SELECT * 
		FROM events
		ORDER BY created DESC
	`);

	return result;
}

export async function deleteEvent (id) {
	const response = await db.query(`
       DELETE FROM events WHERE id = ?
    `, [id]);

	if (response[0].affectedRows) {
		return await getEvents();
	}
}