import {pool as db} from "../database.js";

export async function getUser(id) {
    const [rows] = await db.query(`
    SELECT *
    FROM users
    WHERE id = ?
    `, [id])
    return rows[0];
}

export async function createUser(firstName, lastName, username, password) {
    const [result] = await db.query(`
       INSERT INTO users (firstName, lastName, username, password)
       VALUES (? , ?, ?, ?)
    `, [firstName, lastName, username, password])
    const id = result.insertId;

    return getUser(id);
}