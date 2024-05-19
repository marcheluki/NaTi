import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const ReservaCalendar = ({ experienceId }) => {
    const [date, setDate] = useState(new Date());
    const [fechasExperiencia, setFechasExperiencia] = useState([]);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        const fetchFechasExperiencia = async () => {
            try {
                const formattedDate = date.toISOString().split('T')[0];
                const response = await axios.get(`http://localhost:3002/fechas-experiencia/${experienceId}/${formattedDate}`);
                console.log(response.data);
                setFechasExperiencia(response.data);
            } catch (error) {
                console.error('Error fetching experience dates:', error);
            }
        };

        fetchFechasExperiencia();
    }, [date, experienceId]);

    const handleReserva = async (fechasExperienciaId) => {
        try {
            const response = await axios.post('http://localhost:3002/reserva', {
                fk_fechasexperienciaid: fechasExperienciaId,
                fk_usuarioquereserva: 1 // ID del usuario que reserva
            });
            setMensaje('Reserva creada con éxito');
        } catch (error) {
            console.error('Error creando la reserva:', error);
            setMensaje('Error al crear la reserva');
        }
    };

    return (
        <div className="calendar-container">
            <Calendar
                onChange={setDate}
                value={date}
            />
            <p>Fecha seleccionada: {date.toDateString()}</p>
            {fechasExperiencia.length > 0 ? (
                <div>
                    <h3>Fechas de experiencia disponibles:</h3>
                    <ul>
                        {fechasExperiencia.map(fecha => (
                            console.log(fecha),
                            <li key={fecha.id}>
                                {fecha.fecha}
                                <button onClick={() => handleReserva(fecha.id)} className="btn btn-primary">
                                    Reservar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No hay fechas de experiencia disponibles para este día.</p>
            )}
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default ReservaCalendar;
