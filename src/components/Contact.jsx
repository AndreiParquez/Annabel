import { FaFacebook } from "react-icons/fa";
import CustomMap from "../components/CustomMap";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-xl font-bold text-gray-800 mb-4">📞 Contact Us</h1>
      <p className="text-gray-600  mb-4">Feel free to reach out or visit us at our store!</p>

      {/* Facebook Link */}
      <a
        href="https://www.facebook.com/yourfbpage"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        <FaFacebook className="mr-2 text-2xl" /> Visit our Facebook
      </a>

      {/* Embedded Leaflet Map */}
      <div className="w-full max-w-2xl h-96 mt-6">
        <CustomMap />
        
      </div>
    </div>
  );
};

export default Contact;
