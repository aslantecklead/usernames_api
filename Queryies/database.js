import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

export async function getAllNames() {
    try {
        const [rows] = await pool.query('SELECT * FROM Usernames');
        return rows;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function addNewName(username, registeredAt) {
    try {
        const [result] = await pool.query(
            'INSERT INTO Usernames (Username, RegisteredAt) VALUES (?, ?)',
            [username, registeredAt]
        );
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
