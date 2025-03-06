import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import logo from "../assets/public/imgs/logo-leblondespa.png";
const Footer = () => {

   // Handler for opening Google Maps
   const openGoogleMaps = () => {
    const address = 'Gran Colombia 2-44, Cuenca, Ecuador';
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Handler for opening WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '593987220199'; // Ecuador country code + phone number without 0
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  // Handler for sending email
  const sendEmail = () => {
    window.location.href = 'mailto:lblonestetica@gmail.com';
  };

  return (
    <footer className="bg-gradient-to-b from-[#f5f5f5] to-white  py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo y Redes Sociales */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Le Blond Spa Logo" className="h-10" />
              <span className="text-2xl font-semibold">Le Blond Spa</span>
            </div>
            <p className="text-gray-600 text-sm">
              Especialistas en cuidado de la piel, rejuvenecimiento facial y en
              tratamientos para acné.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">
                Redes Sociales:
              </p>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/leblonspa"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Twitter className="w-5 h-5" />
                </a> */}
                <a
                  href="https://www.instagram.com/leblondespa?igsh=MXA2Y3VkdGZrMmlwaw%3D%3D"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                {/* <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-5 h-5" />
                </a> */}
              </div>
            </div>
          </div>

          {/* Servicios e Instagram */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Nuestros Servicios</h3>
            <ul className="space-y-3">
              {/* <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Nail styling
              </li> */}
              {/* <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Health Shower
              </li> */}
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Mascarillas de Spa
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Orientación Especial
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Relajación Mental
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contáctanos</h3>
            <ul className="space-y-4">
              <li
                className="flex items-start space-x-3 cursor-pointer hover:bg-gray-100 rounded-lg"
                onClick={openWhatsApp}
              >
                <Phone className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-600">098 722 0199</span>
              </li>
              <li
                className="flex items-start space-x-3 cursor-pointer hover:bg-gray-100  rounded-lg"
                onClick={sendEmail}
              >
                <Mail className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-600">lblonestetica@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-600">
                  Lunes a Domingo: 9:00 - 16:00
                </span>
              </li>
              <li
                className="flex items-start space-x-3 cursor-pointer hover:bg-gray-100  rounded-lg"
                onClick={openGoogleMaps}
              >
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-600">
                  Gran Colombia 2-44, Cuenca, Ecuador
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
