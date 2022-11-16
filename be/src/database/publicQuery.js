import {db} from "./database.js";

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

	if (response[0].affectedRows) {
		return await getAnnouncement();
	} else {
		return [];
	}
}

export async function createAnnouncement (title, content) {
	const [result] = await db.query(`
       INSERT INTO announcements (title, content)
       VALUES (? , ?)
    `, [title, content]);

	const id = result.insertId;
	return await getAnnouncement();
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
	} else {
		return [];
	}
}

export async function createEvent (title, content, startDate, endDate, time, audience) {
	const [result] = await db.query(`
       INSERT INTO events (title, content, startDate, endDate, time, audience)
       VALUES (? , ?, ?, ?, ?, ?)
    `, [title, content, startDate, endDate, time, audience]);

	const id = result.insertId;
	return await getEvents();
}