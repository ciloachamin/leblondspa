import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/public/imgs/logo-leblondespa.png';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#f5f5f5] to-white  py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo y Redes Sociales */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Milani Spa Logo" className="h-10" />
              <span className="text-2xl font-semibold">Milani Spa</span>
            </div>
            <p className="text-gray-600 text-sm">
              Come to the lap of nature for journey into yourself. Discover your true nature by doing spa and explode your potential.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Social Media:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Servicios e Instagram */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Nail styling
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Health Shower
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Spa Masks
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Special Guiding
              </li>
              <li className="flex items-center text-gray-600 hover:text-gray-900">
                <span className="text-orange-400 mr-2">›</span>
                Mind Relax
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-600">Call now: 7765654334</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-600">Email: contact@milani.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-600">Opening time: 11:30 - 20:00</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-600">
                  Address: 219 King street, Melbourne Victoria 300 Australia ABN 11 159 761
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