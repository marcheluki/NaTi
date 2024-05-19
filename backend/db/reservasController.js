import db from './db.js';

const createReserva = async (fk_fechasexperienciaid, fk_usuarioquereserva) => {
  try {
    const result = await db.query(
      'INSERT INTO Reserva (fk_fechasexperienciaid, fk_usuarioquereserva) VALUES ($1, $2) RETURNING *',
      [fk_fechasexperienciaid, fk_usuarioquereserva]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating reservation:', error);
    throw new Error('Internal Server Error');
  }
};

const getReservaById = async (id) => {
  try {
    const result = await db.query('SELECT * FROM Reserva WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      throw new Error('Reservation not found');
    }
  } catch (error) {
    console.error('Error fetching reservation:', error);
    throw new Error('Internal Server Error');
  }
};

const getFechasExperienciaByDay = async (id, date) => {
  try {
    const result = await db.query(
      'SELECT * FROM Fechas_Experiencia WHERE fk_idexperiencia = $1 AND DATE(fecha) = $2',
      [id, date]
    );
    return result.rows;
  } catch (error) {
    console.error('Error fetching experience dates:', error);
    throw new Error('Internal Server Error');
  }
};

export { createReserva, getReservaById, getFechasExperienciaByDay };