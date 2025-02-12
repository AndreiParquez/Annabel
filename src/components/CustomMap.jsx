import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41], // Position relative to the point
  popupAnchor: [1, -34],
});

const CustomMap = () => {
  const position = [14.2486504,121.1259126]; // Manila, Philippines (Change to your location)

  return (
    <MapContainer center={position} zoom={60} className="leaflet-container">
<TileLayer
  url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
/>


      {/* Marker for your location */}
      <Marker position={position} icon={customIcon}>
        <Popup>📍 Annabell's Closet - Visit us here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CustomMap;
