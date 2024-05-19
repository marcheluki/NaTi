import React from 'react';
import '../styles/ContainerExperience.css';
import { Link } from 'react-router-dom';

const ContainerExperience = ({experiencia}) => {
    return (
        <div className="mb-5 card-width container-experience">
            <div class="card">
            <img src="https://www.viajandoporelmundomundial.com/wp-content/uploads/2022/04/campos-de-tulipanes-de-holanda9.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{experiencia.titulo}</h5>
            <p className="card-text">{experiencia.descripcion}</p>
            <p className="card-text">Valoración: {experiencia.valoracion}</p>
            <p className="card-text">Precio: ${experiencia.precio}</p>
            <p className="card-text">Lugar: {experiencia.lugar}</p>
            <Link to={`/experience/${experiencia.id}`} className="btn btn-primary">Visitar experiencia</Link>
            </div>
            </div>
        </div>
    );
}

export default ContainerExperience;