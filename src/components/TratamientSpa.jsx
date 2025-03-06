import React, { useState } from "react";
import { Check, Droplet, Target, Sparkles } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

import service1 from "../assets/public/imgs/limpieza-profunda.png";
import service2 from "../assets/public/imgs/masaje-facial.jpg";

const TratamientSpa = () => {
  const [activeStep, setActiveStep] = useState(0);

  const treatmentSteps = [
    {
      icon: <Droplet className="w-8 h-8 text-[#BC9C5E]" />,
      title: "Evaluación Personalizada",
      description: "Análisis detallado de tu tipo de piel y condición del acné",
    },
    {
      icon: <Target className="w-8 h-8 text-[#BC9C5E]" />,
      title: "Tratamiento Especializado",
      description:
        "Protocolo de tratamiento adaptado a tus necesidades específicas",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#BC9C5E]" />,
      title: "Seguimiento y Recuperación",
      description:
        "Monitoreo continuo y plan de mantenimiento para resultados duraderos",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-[#f5f5f5] to-white py-10 px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tratamientos Específicos */}
                <div className="mt-16 text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">
                    Técnicas Especializadas
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      "Limpieza Facial Profunda",
                      "Peelings Químicos",
                      "Terapia Láser",
                      "Tratamientos Tópicos",
                      "Mesoterapia",
                      "Dermoabrasión"
                    ].map((treatment, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all"
                      >
                        <Check className="w-6 h-6 text-[#BC9C5E] mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-900">{treatment}</h4>
                      </div>
                    ))}
                  </div>
                </div>
      </div>
    </div>
  );
};

export default TratamientSpa;
