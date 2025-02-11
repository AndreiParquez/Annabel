import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CustomMap = () => {
  const position = [14.5995, 120.9842]; // Manila, Philippines (Change to your location)

  return (
    <MapContainer center={position} zoom={15} className="leaflet-container">
<TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
/>


      {/* Marker for your location */}
      <Marker position={position}>
        <Popup>📍 Annabell's Closet - Visit us here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CustomMap;
