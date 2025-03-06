import React, { useState } from "react";
import { Check, Droplet, Target, Sparkles } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

import service1 from "../assets/public/imgs/acne-despues.png";
import service2 from "../assets/public/imgs/acne-antes.png";

const RelaxationSpa = () => {
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
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">
          Expertos en Tratamientos del{" "}
          <span className="text-[#BC9C5E]">Acné</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Descubre cómo podemos ayudarte a recuperar la salud y belleza de tu
          piel con tratamientos personalizados y efectivos.
        </p>
      </div>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900"></h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row lg:items-center gap-12">
          {/* Left Section */}
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            {/* Treatment Process Steps */}
            <div className="space-y-4">
              {treatmentSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 ${
                    activeStep === index
                      ? "bg-[#BC9C5E]/10 border-l-4 border-[#BC9C5E]"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.icon}
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-[#BC9C5E] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#A67C4D] transition-colors">
              Agendar Consulta
            </button>
          </div>

          {/* Right Section */}
          <div className="mt-8 md:mt-0 md:w-1/2   gap-4">
            <BeforeAfterSlider
              afterImage={service1}
              beforeImage={service2}
            ></BeforeAfterSlider>
          </div>     
        </div>
      </div>
    </div>
  );
};

export default RelaxationSpa;
