import React, { useState } from "react";
import { FlaskRound, Zap, Timer, ThumbsUp, ArrowRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

import afterImage from "../assets/public/imgs/bioestimulador-despues.jpg";
import beforeImage from "../assets/public/imgs/bioestimulador-antes.jpg";

const BioestimuladoresModerno = () => {
  const [activeTab, setActiveTab] = useState(0);

  const etapas = [
    {
      icon: <FlaskRound className="w-6 h-6" />,
      title: "Diagnóstico",
      description:
        "Evaluación personalizada y selección del bioestimulador ideal para tu tipo de piel",
      tiempo: "30 min",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Aplicación",
      description:
        "Procedimiento rápido y con mínimas molestias realizado por especialistas",
      tiempo: "45-60 min",
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Desarrollo",
      description:
        "Estimulación progresiva de colágeno y elastina durante las siguientes semanas",
      tiempo: "4-8 semanas",
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Resultados",
      description:
        "Piel más firme, tersa y rejuvenecida con efectos durante 12-24 meses",
      tiempo: "1-2 años",
    },
  ];

  const bioestimuladores = [
    { nombre: "Radiesse", ventaja: "Resultados inmediatos y duraderos" },
    { nombre: "Sculptra", ventaja: "Efecto natural y progresivo" },
    { nombre: "Ellansé", ventaja: "Mayor durabilidad y firmeza" },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado con tabs */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejuvenecimiento con{" "}
            <span className="text-[#BC9C5E]">Bioestimuladores</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Tratamiento revolucionario que activa la capacidad natural del
            cuerpo para regenerar colágeno, devolviendo juventud y firmeza a tu
            piel.
          </p>

          {/* Tabs para bioestimuladores */}
          {/* <div className="inline-flex bg-gray-100 p-1 rounded-full">
            {bioestimuladores.map((bio, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === index
                    ? "bg-[#BC9C5E] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {bio.nombre}
              </button>
            ))}
          </div> */}
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Columna izquierda - Proceso */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
              <p className="text-[#BC9C5E] font-medium mb-4">
                {bioestimuladores[activeTab].ventaja}
              </p>
              <p className="text-gray-600">
                Los bioestimuladores actúan
                desde el interior, estimulando la producción natural de colágeno
                para lograr un rejuvenecimiento progresivo y duradero.
              </p>
            </div>

            {/* Timeline de etapas */}
            <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
              {etapas.map((etapa, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-[-30px] bg-white border-2 border-[#BC9C5E] text-[#BC9C5E] p-1 rounded-full">
                    {etapa.icon}
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{etapa.title}</h4>
                      <span className="text-xs bg-gray-100 text-gray-600 py-1 px-2 rounded-full">
                        {etapa.tiempo}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{etapa.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Imagen y CTA */}
          <div className="lg:col-span-6">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <BeforeAfterSlider
                afterImage={afterImage}
                beforeImage={beforeImage}
                width="400px"
                height="400px"
              />
              <div className="mt-6 space-y-4">
                <h4 className="font-semibold text-lg">
                  ¿Por qué elegir bioestimuladores?
                </h4>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 text-[#BC9C5E] mr-2" />
                    Resultados naturales
                  </li>
                  <li className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 text-[#BC9C5E] mr-2" />
                    Sin tiempo de inactividad
                  </li>
                  <li className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 text-[#BC9C5E] mr-2" />
                    Efectos duraderos
                  </li>
                  <li className="flex items-center text-sm">
                    <ArrowRight className="w-4 h-4 text-[#BC9C5E] mr-2" />
                    Procedimiento seguro
                  </li>
                </ul>
                <button className="w-full bg-[#BC9C5E] hover:bg-[#A67C4D] text-white font-medium py-3 rounded-lg transition-all flex justify-center items-center gap-2">
                  Agendar Valoración
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioestimuladoresModerno;
