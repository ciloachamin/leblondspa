import React from "react";
import facial from "../assets/public/imgs/facial-scan.png";
import scanner from "../assets/public/imgs/scanner.png";
import { CalendarDays } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-while to-[#f5f5f5] relative overflow-hidden">
      {/* Decorative leaves top left */}
      <div className="absolute top-0 left-0 w-48 h-48 text-[#4A5759] opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M10,50 Q30,20 50,50 T90,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M20,70 Q40,40 60,70 T100,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[#4A5759]">ESCÁNER FACIAL</span>
            <br />
            <span className="text-[#BC9C5E]">HERAS</span>
          </h1>

          <div className="flex flex-col space-y-4 items-center">
            {/* Scanner device image */}
            <img
              src={scanner}
              alt="Escáner Facial"
              className="w-3/5 top-1/2 transform "
            />
            <p className="text-gray-600 text-lg md:text-xl">
              Descubre tu piel como nunca antes con nuestro analizador 3D con
              IA.
            </p>

            <button
              className="inline-flex items-center justify-center px-8 py-4 
                             bg-[#BC9C5E] text-white text-lg font-semibold 
                             rounded-lg hover:bg-[#BC9C5E]/90 transition-all 
                             duration-300 mx-auto md:mx-0"
            >
              <CalendarDays className="mr-2" />
              ¡RESERVA TU CITA!
            </button>
          </div>
        </div>

        {/* Right content - Images */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <div className="relative">
            {/* Face scan illustration */}
            <img src={facial} alt="Análisis Facial" className="w-64 md:w-80" />
          </div>
        </div>
      </div>

      {/* Decorative leaves bottom right */}
      <div className="absolute bottom-0 right-0 w-48 h-48 text-[#4A5759] opacity-20 transform rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M10,50 Q30,20 50,50 T90,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M20,70 Q40,40 60,70 T100,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
