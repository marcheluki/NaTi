import { createReserva, getReservaById } from '../db/reservasController.js';
import { getAllExperiences, getExperience } from '../db/experienciasController.js';
const createReservaRoute = async (req, res) => {
  const { fk_fechasexperienciaid, fk_usuarioquereserva } = req.body;
  try {
    const reserva = await createReserva(fk_fechasexperienciaid, fk_usuarioquereserva);
    res.status(201).json(reserva);
  } catch (error) {
    console.error('Error in createReservaRoute:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const getReservaByIdRoute = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const reserva = await getReservaById(id);
    if (reserva) {
      res.json(reserva);
    } else {
      res.status(404).json({ error: 'Reservation not found' });
    }
  } catch (error) {
    console.error('Error in getReservaByIdRoute:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { createReservaRoute, getReservaByIdRoute };
