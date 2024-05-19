import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MapComponent from './Map.jsx';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/ExperiencePage.css';
import ReservaCalendar from './ReservaCalendar.jsx';

const ExperiencePage = () => {
    const { id } = useParams();
    const [experience, setExperience] = useState(null);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const fetchExperience = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/experiencia/${id}`);
                setExperience(response.data);
            } catch (error) {
                console.error('Error fetching experience:', error);
            }
        };

        fetchExperience();
    }, [id]);

    if (!experience) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{experience.titulo}</h1>
            <p>{experience.descripcion}</p>
            <div>
                {experience.imagenes.map((image, index) => (
                    <img key={index} src={image} alt={`Imagen ${index + 1}`} />
                ))}
            </div>
            <p>Valoración: {experience.valoracion}</p>
            <p>Precio: ${experience.precio}</p>
            <p>Lugar: {experience.lugar}</p>
            
            
            <div className="calendar-container">
            

            <ReservaCalendar experienceId={id} />


            
            </div>

                <MapComponent
                    center={{ lat: experience.latitud, lng: experience.longitud }}
                    zoom={15}
                    markers={[{ lat: experience.latitud, lng: experience.longitud }]}
                />
        </div>
    );
};

export default ExperiencePage;
