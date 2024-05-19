import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  const position = [51.505, -0.09]; // Coordenadas de ejemplo: Londres

  return (
    <MapContainer center={position} zoom={13} style={{ height: 400, width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Un popup simple para mostrar información. <br /> Fácilmente personalizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

