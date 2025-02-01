const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'db',
    user: 'user',
    password: 'password',
    database: 'mydb'
});

async function insertName(name) {
    const connection = await pool.getConnection();
    try {
        await connection.query('INSERT INTO people (name) VALUES (?)', [name]);
    } finally {
        connection.release();
    }
}

async function getNames() {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query('SELECT name FROM people');
        return rows.map(row => row.name);
    } finally {
        connection.release();
    }
}

module.exports = { insertName, getNames };