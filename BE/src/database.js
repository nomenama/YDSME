import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
export const db = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
}).promise();

export async function getUser (username) {
	const [rows] = await db.query(`
    SELECT *
    FROM users
    WHERE username = ?
    `, [username]);
	return rows[0];
}

export async function getUserByName (firstName) {
	const [rows] = await db.query(`
    SELECT *
    FROM users
    WHERE firstName = ?
    `, [firstName]);
	return rows[0];
}

export async function getUserById (id) {
	const [rows] = await db.query(`
    SELECT *
    FROM users
    WHERE id = ?
    `, [id]);
	return rows[0];
}

export async function createUser (firstName, lastName, username, password, email, roles) {
	const [result] = await db.query(`
       INSERT INTO users (firstName, lastName, username, password, email, roles)
       VALUES (? , ?, ?, ?, ?, ?)
    `, [firstName, lastName, username, password, email, JSON.stringify(roles)]);

	const id = result.insertId;
	return await getUserById(id);
}

export async function updateUser (firstName, lastName, email, roles, username) {
	const [result] = await db.query(`
	UPDATE users
	SET
		firstName = ?,
		lastName = ?,
		email = ?,
		roles = ?
	WHERE username = ?
    `, [firstName, lastName, email, JSON.stringify(roles), username]);

	return await getUser(username);
}

export async function deleteUser (id) {
	const response = await db.query(`
       DELETE FROM users WHERE id = ${id}
    `);

	return response[0];
}
