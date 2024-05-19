// db.js
import pg from 'pg';
import "dotenv/config"

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});

db.connect()
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Database connection error', err.stack));

export default db;
