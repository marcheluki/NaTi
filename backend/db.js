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

const getAllExperiences = async () => {
  try {
    const result = await db.query('SELECT * FROM Experiencia');
    return result.rows;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    throw error;
  }
};

const getExperience = async (id) => {
  try {
    const result = await db.query('SELECT * FROM Experiencia WHERE id = $1', [id]);
    return result.rows[0]; // Return the single experience
  } catch (error) {
    console.error('Error fetching experience:', error);
    throw error;
  }
};

export { getAllExperiences, getExperience };
