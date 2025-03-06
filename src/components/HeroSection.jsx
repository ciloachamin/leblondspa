import React from "react";
import facial from "../assets/public/imgs/facial-scan.png";
import scanner from "../assets/public/imgs/scanner.png";
import { Scan, Clock, ArrowRight, Sparkles } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-while to-[#f5f5f5] via-gray-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#BC9C5E]/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#4A5759]/5 blur-3xl"></div>
      </div>
      
      {/* Grid de puntos decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="h-full w-full grid grid-cols-12 gap-4">
          {[...Array(120)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-[#BC9C5E]/40"></div>
          ))}
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Columna izquierda */}
          <div className="space-y-8 z-10">
            {/* Logo del spa */}
            <div className="inline-block mb-6">
              <div className="flex items-center border-b border-[#BC9C5E] pb-1">
                <Sparkles className="w-4 h-4 text-[#BC9C5E] mr-2" />
                <h3 className="tracking-widest text-sm font-medium text-[#4A5759]">LE BLOND SPA</h3>
              </div>
            </div>
            
            {/* Títulos */}
            <div>
              <h4 className="text-[#4A5759] text-lg mb-2 font-light tracking-wider">TECNOLOGÍA AVANZADA</h4>
              <h1 className="text-5xl font-bold mb-6 tracking-tight">
                <span className="text-[#4A5759]">ESCÁNER FACIAL</span>{" "}
                <span className="text-[#BC9C5E]">HERAAS</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-lg">
                Descubre el futuro del cuidado facial con nuestro sistema de análisis de piel 6D potenciado por inteligencia artificial.
              </p>
            </div>
            
            {/* Características */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Scan className="w-5 h-5 text-[#BC9C5E] mb-2" />
                <h3 className="font-medium text-[#4A5759]">Análisis Completo</h3>
                <p className="text-sm text-gray-500">Evaluación en 6 dimensiones</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Clock className="w-5 h-5 text-[#BC9C5E] mb-2" />
                <h3 className="font-medium text-[#4A5759]">Proceso Rápido</h3>
                <p className="text-sm text-gray-500">Solo 15 minutos</p>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-2 justify-around">
              <WhatsAppButton
                phoneNumber={`0987220199`}
                text={`RESERVAR AHORA`}
                message={`Hola, me interesa el escaneo facial con HERAAS en LE Blond Spa. ¿Podría agendar una cita?`}
                autoSend={false}
              />
            </div>
          </div>
          
          {/* Columna derecha */}
          <div className="relative flex justify-center items-center">
            {/* Marco decorativo */}
            <div className="absolute -inset-4 border border-dashed border-[#BC9C5E]/30 rounded-xl"></div>
            
            {/* Imágenes superpuestas */}
            <div className="relative z-10 p-6">
              <img
                src={facial}
                alt="Análisis Facial Avanzado"
                className="w-80 md:w-96 rounded-lg shadow-lg"
              />
              <img
                src={scanner}
                alt="Dispositivo Scanner HERAAS"
                className="absolute -left-10 bottom-0 w-40 transform rotate-6 shadow-lg rounded-lg border-4 border-white"
              />
              
              {/* Badge informativo */}
              <div className="absolute -right-4 top-10 bg-[#BC9C5E] text-white py-1 px-3 rounded-full text-xs font-medium">
                Tecnología 6D con IA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;