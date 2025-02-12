import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for missing marker in Netlify
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Custom Marker Icon
const customIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Jawg Lagoon Tile Layer
const jawgTileUrl = "https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=UnZ1ippezbB8hMtDDovx5AYuVBtCIaovaqDqMdjT2xr0nAEb39Btn0YEhgiTvEBl";
const jawgAttribution =
  '';

const position = [14.2431389,121.1131382]; // Manila, Philippines

const CustomMap = () => {
  return (
    <MapContainer center={position} zoom={20} className="leaflet-container">
      {/* Jawg Lagoon Tile Layer */}
      <TileLayer url={jawgTileUrl} attribution={jawgAttribution} />

      {/* Marker */}
      <Marker position={position} icon={customIcon}>
        <Popup>📍 Annabell's Closet - Visit us here!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CustomMap;
