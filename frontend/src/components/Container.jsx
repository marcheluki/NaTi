import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ContainerExperience from './ContainerExperience';
import '../styles/Container.css';

const Container = () => {
    const [experiencias, setExperiencias] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3002/experiencias');
                console.log(response.data); // Aquí puedes manejar los datos de la respuesta
                setExperiencias(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // El array vacío indica que este efecto se ejecutará solo una vez al montar el componente
    
    return (
        <div>
            <div className="test row">
            {experiencias.map(experiencia => (
                <div key={experiencia.id} className="col-md-4">
                    <ContainerExperience experiencia={experiencia} />
                </div>
            ))}
        </div>
        </div>
    );
};

export default Container;