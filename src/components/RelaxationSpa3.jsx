import React, { useState } from 'react';
import { Check, Droplet, Target, Sparkles } from 'lucide-react';
import BeforeAfterSlider from "./BeforeAfterSlider";
import service1 from "../assets/public/imgs/limpieza-profunda.png";
import service2 from "../assets/public/imgs/masaje-facial.jpg";

const AcneTreatmentSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const treatmentSteps = [
    {
      icon: <Droplet className="w-8 h-8 text-[#BC9C5E]" />,
      title: "Evaluación Personalizada",
      description: "Análisis detallado de tu tipo de piel y condición del acné"
    },
    {
      icon: <Target className="w-8 h-8 text-[#BC9C5E]" />,
      title: "Tratamiento Especializado",
      description: "Protocolo de tratamiento adaptado a tus necesidades específicas"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#BC9C5E]" />,
      title: "Seguimiento y Recuperación",
      description: "Monitoreo continuo y plan de mantenimiento para resultados duraderos"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Tratamiento Especializado de <span className="text-[#BC9C5E]">Acné</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Soluciones avanzadas y personalizadas para recuperar la salud y belleza de tu piel.
              </p>
            </div> */}

            {/* Treatment Process Steps */}
            <div className="space-y-4">
              {treatmentSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                    activeStep === index 
                    ? 'bg-[#BC9C5E]/10 border-l-4 border-[#BC9C5E]' 
                    : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[#BC9C5E] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#A67C4D] transition-colors">
              Agendar Consulta
            </button>
          </div>

          {/* Right Content - Before/After Slider */}
          <div className="relative">
            <div className="bg-[#BC9C5E]/10 absolute inset-0 rounded-2xl -rotate-3"></div>
            <div className="relative z-10">
              <BeforeAfterSlider
                beforeImage={service1}
                afterImage={service2}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

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

export default AcneTreatmentSection;