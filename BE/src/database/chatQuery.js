import {db} from "./database.js";

export async function createMessage (author, message, time, file) {
	const [result] = await db.query(`
		INSERT INTO Chats (author, message, time, file)
		VALUES (?, ?, ?, ?)
	`, [author, message, time, file]);

	return result.insertId;
}

export async function getMessages () {
	const [data] = await db.query(`
		SELECT *
		FROM Chats
		ORDER BY created DESC
		LIMIT 50
	`);

	if (data.length) {
		return data.reverse();
	}
	return [];
}