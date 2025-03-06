import React, { useState } from "react";
import { Star, Clock, CheckCircle, ArrowRight, Users } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

import afterImage from "../assets/public/imgs/bioestimulador-despues.jpg";
import beforeImage from "../assets/public/imgs/bioestimulador-antes.jpg";

const BioestimuladoresResultados = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const productos = [
    {
      nombre: "Radiesse",
      descripcion: "Bioestimulador con hidroxiapatita cálcica",
      duracion: "12-18 meses",
      areas: ["Mejillas", "Líneas de marioneta", "Mandíbula", "Manos"],
      ventajas: ["Resultados inmediatos", "Estimulación natural", "Remodelación dérmica"]
    },
    {
      nombre: "Sculptra",
      descripcion: "Ácido poli-L-láctico (PLLA)",
      duracion: "hasta 24 meses",
      areas: ["Mejillas", "Sienes", "Mandíbula", "Líneas faciales"],
      ventajas: ["Resultados graduales", "Muy natural", "Larga duración"]
    },
    {
      nombre: "Ellansé",
      descripcion: "Policaprolactona (PCL)",
      duracion: "hasta 36 meses",
      areas: ["Rostro completo", "Cuello", "Escote", "Manos"],
      ventajas: ["Efecto inmediato y prolongado", "Alta biocompatibilidad", "Máxima duración"]
    }
  ];

  const testimonios = [
    "Después de 2 meses, mi piel luce completamente renovada y más firme.",
    "El cambio es sutil pero impactante, todos me dicen que me veo más joven.",
    "Es increíble cómo mejora con el tiempo. Después de 3 meses, los resultados son espectaculares."
  ];

  return (
    <div className="bg-white py-12 px-4">
      {/* Hero section con BeforeAfter en el centro */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Columna izquierda - Título y descripción */}
          <div className="lg:text-right space-y-4">
            <h2 className="text-3xl font-bold">
              Bioestimuladores de <span className="text-[#BC9C5E]">Colágeno</span>
            </h2>
            <p className="text-gray-600">
              Tecnología avanzada que reactiva los procesos naturales de regeneración de tu piel
            </p>
            <div className="flex flex-col lg:items-end space-y-2">
              <div className="flex items-center justify-end">
                <Clock className="w-5 h-5 text-[#BC9C5E] mr-2" />
                <span className="text-sm font-medium">Duración: 1-3 años</span>
              </div>
              <div className="flex items-center justify-end">
                <CheckCircle className="w-5 h-5 text-[#BC9C5E] mr-2" />
                <span className="text-sm font-medium">Sin tiempo de recuperación</span>
              </div>
            </div>
          </div>
          
          {/* Columna central - BeforeAfter */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <BeforeAfterSlider afterImage={afterImage} beforeImage={beforeImage} />
          </div>
          
          {/* Columna derecha - Beneficios */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Beneficios</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-[#BC9C5E] mr-2 mt-0.5" />
                <span>Estímulo natural de colágeno y elastina</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-[#BC9C5E] mr-2 mt-0.5" />
                <span>Mejora de textura y luminosidad de la piel</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-[#BC9C5E] mr-2 mt-0.5" />
                <span>Redefinición del contorno facial</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-[#BC9C5E] mr-2 mt-0.5" />
                <span>Resultados progresivos y naturales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección de productos */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Nuestros Bioestimuladores Premium
        </h3>

        {/* Selectores de productos */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {productos.map((producto, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selectedProduct === index
                  ? "bg-[#BC9C5E] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedProduct(index)}
            >
              {producto.nombre}
            </button>
          ))}
        </div>

        {/* Detalle del producto seleccionado */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Columna 1 - Descripción */}
            <div>
              <h4 className="text-xl font-semibold text-[#BC9C5E] mb-3">
                {productos[selectedProduct].nombre}
              </h4>
              <p className="text-gray-600 mb-4">
                {productos[selectedProduct].descripcion}
              </p>
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-[#BC9C5E] mr-2" />
                <span>Duración: {productos[selectedProduct].duracion}</span>
              </div>
              <button className="bg-[#BC9C5E] text-white py-2 px-6 rounded-lg hover:bg-[#A67C4D] transition-all flex items-center gap-2">
                Solicitar Información
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Columna 2 - Áreas de tratamiento */}
            <div>
              <h4 className="text-lg font-medium mb-3">Áreas de Tratamiento</h4>
              <div className="grid grid-cols-2 gap-3">
                {productos[selectedProduct].areas.map((area, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg shadow-sm flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#BC9C5E] mr-2" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna 3 - Ventajas */}
            <div>
              <h4 className="text-lg font-medium mb-3">Ventajas</h4>
              <ul className="space-y-3">
                {productos[selectedProduct].ventajas.map((ventaja, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#BC9C5E] mr-2 mt-0.5" />
                    <span>{ventaja}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de testimonios */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#BC9C5E]/10 rounded-xl p-8">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-[#BC9C5E] mr-2" />
            <h3 className="text-xl font-semibold">Lo que dicen nuestros pacientes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#BC9C5E]" fill="#BC9C5E" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">"{testimonio}"</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="bg-white border border-[#BC9C5E] text-[#BC9C5E] py-2 px-6 rounded-lg hover:bg-[#BC9C5E] hover:text-white transition-all">
              Ver Más Testimonios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioestimuladoresResultados;