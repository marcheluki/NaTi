import db from './db.js';

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