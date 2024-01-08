import {useEffect} from "react";
import { MapContainer, TileLayer, Popup, Marker,useMap } from "react-leaflet";
import { useCountriesContext } from "../context/CountriesContext";


function Map() {
  const {currentLatLong} = useCountriesContext()
  const RecenterAutomatically = () => {
    const map = useMap();
     useEffect(() => {
       map.setView(currentLatLong);
     }, [currentLatLong]);
     return null;
   }
  return (
    <div id="map" className="map">
      <MapContainer
        center={currentLatLong}
        zoom={7}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "300px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={currentLatLong}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          <RecenterAutomatically />
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
