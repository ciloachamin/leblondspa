import React, { useState } from "react";
import { Droplet, Target, Sparkles, ArrowRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import service1 from "../assets/public/imgs/acne-despues.png";
import service2 from "../assets/public/imgs/acne-antes.png";

const CollagenBioestimulators = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Rejuvenecimiento Celular",
      subtitle: "Estimulación Profunda",
      description: "Tratamiento avanzado que reactiva la producción natural de colágeno, restaurando la elasticidad y firmeza de tu piel.",
      icon: <Droplet className="w-12 h-12 text-white" />,
      color: "bg-gradient-to-br from-teal-500 to-emerald-600"
    },
    {
      title: "Regeneración Intensiva",
      subtitle: "Transformación Visible",
      description: "Protocolo especializado que combate signos de envejecimiento, mejorando la textura y luminosidad de tu piel desde el interior.",
      icon: <Target className="w-12 h-12 text-white" />,
      color: "bg-gradient-to-br from-purple-600 to-indigo-700"
    },
    {
      title: "Hidratación Definitiva",
      subtitle: "Nutrición Celular",
      description: "Estrategia integral que potencia la capacidad de retención de agua, generando una piel completamente revitalizada y radiante.",
      icon: <Sparkles className="w-12 h-12 text-white" />,
      color: "bg-gradient-to-br from-pink-500 to-rose-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Services Navigation */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
              Bioestimuladores
            </h1>
            <h2 className="text-2xl font-light text-gray-600">
              Colágeno Inteligente
            </h2>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={index}
                onClick={() => setActiveService(index)}
                className={`
                  cursor-pointer 
                  flex items-center 
                  p-4 rounded-xl 
                  transition-all duration-300
                  ${activeService === index 
                    ? 'ring-4 ring-offset-2 ' + service.color 
                    : 'hover:bg-gray-100'}
                `}
              >
                <div className={`
                  p-3 rounded-full mr-4 
                  ${service.color} 
                  shadow-lg transform transition-transform 
                  ${activeService === index ? 'scale-110' : 'scale-100'}
                `}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.subtitle}
                  </p>
                </div>
                {activeService === index && (
                  <ArrowRight className="ml-auto text-gray-700" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center md:text-left">
            <button className="
              bg-gray-900 
              text-white 
              px-8 py-3 
              rounded-full 
              hover:bg-gray-800 
              transition-colors 
              flex items-center 
              justify-center 
              mx-auto md:mx-0
            ">
              Reservar Tratamiento
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Before/After Visualization */}
        <div className="hidden md:block rounded-xl overflow-hidden shadow-2xl">
          <BeforeAfterSlider
            afterImage={service1}
            beforeImage={service2}
          />
        </div>
      </div>
    </div>
  );
};

export default CollagenBioestimulators;