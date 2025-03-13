import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import logo from "../assets/public/imgs/logo-leblondespa.png";
const TikTokIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);
const Footer = () => {
  // Handler for opening Google Maps
  const openGoogleMaps = () => {
    const address = "Gran Colombia 2-44, Cuenca, Ecuador";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  // Handler for opening WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "593987220199"; // Ecuador country code + phone number without 0
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  // Handler for sending email
  const sendEmail = () => {
    window.location.href = "mailto:lblonestetica@gmail.com";
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
                <a
                  href="https://www.instagram.com/leblondespa?igsh=MXA2Y3VkdGZrMmlwaw%3D%3D"
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@leblondspa"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Servicios e Instagram */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Nuestros Servicios</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Mascarillas de Spa
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Limpieza facial
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Rejuvenecimiento Facial
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Biostimuladores de colageno
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Remedial Massage Daishy
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Extraccion de lunares y verrugas
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
