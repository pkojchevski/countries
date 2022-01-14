import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import React from 'react';

const CountryMap:React.FC<{latlng: string[]}>= ({latlng}) => {
  
    return (
      // it s very slow...
        <MapContainer center={latlng} zoom={13} >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
      </MapContainer>
    )

}

export default CountryMap


