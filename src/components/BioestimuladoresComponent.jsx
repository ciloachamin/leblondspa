import React, { useState } from "react";
import { Sparkles, Clock, Shield, Award, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

import afterImage from "../assets/public/imgs/bioestimulador-despues.jpg";
import beforeImage from "../assets/public/imgs/bioestimulador-antes.jpg";

const BioestimuladoresComponent = () => {
  const [activeOption, setActiveOption] = useState(0);

  const bioestimuladores = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#BC9C5E]" />,
      title: "Radiesse",
      description: "Bioestimulador de colágeno con resultados inmediatos y duraderos",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#BC9C5E]" />,
      title: "Sculptra",
      description: "Ácido poli-L-láctico para una regeneración gradual y natural",
    },
    {
      icon: <Award className="w-8 h-8 text-[#BC9C5E]" />,
      title: "Ellansé",
      description: "Efectos inmediatos y bioestimulación prolongada para resultados óptimos",
    },
  ];

  const beneficios = [
    "Aumento natural del volumen facial",
    "Mejora de la elasticidad y firmeza",
    "Resultados progresivos y duraderos",
    "Tratamiento mínimamente invasivo",
    "Personalizado según necesidades",
  ];

  return (
    <div className="bg-white py-16 px-5">
      {/* Cabecera elegante */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#BC9C5E]">Bioestimuladores</span> Faciales
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Rejuvenecimiento avanzado que estimula la producción natural de colágeno para una piel más firme, tersa y luminosa.
        </p>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Columna izquierda - Antes/Después */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <BeforeAfterSlider afterImage={afterImage} beforeImage={beforeImage} />
            <div className="bg-gray-50 py-3 px-4 flex justify-between items-center">
              <span className="text-gray-500 text-sm">Desliza para ver resultados</span>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-[#BC9C5E] mr-2" />
                <span className="text-sm font-medium">Duración: 12-18 meses</span>
              </div>
            </div>
          </div>

          {/* Columna derecha - Tipos y Beneficios */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold border-b border-[#BC9C5E]/30 pb-2 mb-6">
              Nuestros Bioestimuladores
            </h3>

            {/* Opciones de Bioestimuladores */}
            <div className="space-y-4">
              {bioestimuladores.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-lg transition-all cursor-pointer ${
                    activeOption === index
                      ? "bg-[#BC9C5E]/10 border-l-4 border-[#BC9C5E]"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveOption(index)}
                >
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Beneficios */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Beneficios</h4>
              <ul className="space-y-2">
                {beneficios.map((beneficio, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-[#BC9C5E] mr-2" />
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-[#BC9C5E] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#A67C4D] transition-colors w-full">
              Consulta Gratuita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioestimuladoresComponent;