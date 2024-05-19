// routes/experienciasRoute.js
import { getAllExperiences, getExperience } from '../db.js';

const experienciasRoute = async (req, res) => {
  try {
    const experiences = await getAllExperiences();
    console.log('Experiences:', experiences);
    res.json(experiences);
  } catch (error) {
    console.error('Error in experienciasRoute:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const experienciaRoute = async (req, res) => {
    const { id } = req.params;
    try {
      const experience = await getExperience(id);
      if (experience) {
        res.json(experience);
      } else {
        res.status(404).json({ error: 'Experience not found' });
      }
    } catch (error) {
      console.error('Error in getExperienceRoute:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
export { experienciasRoute, experienciaRoute};

