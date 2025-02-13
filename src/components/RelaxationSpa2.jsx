import React from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
const RelaxationSpa = () => {
  return (
    <div className="bg-gradient-to-b from-[#f5f5f5] to-white py-10 px-5">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Expertos en Tratamientos del{" "}
          <span className="text-[#BC9C5E]">Acné</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Somos expertos en tratamientos del acné, con años de experiencia y
          resultados comprobados.
        </p>
      </div>
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900"></h1>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row lg:items-center">
          {/* Left Section */}
          <div className="text-center md:text-left md:w-1/2 space-y-4">
            <h2 className="text-sm text-[#4A5759] font-semibold">
              ¿Cansado de luchar contra el acné sin ver resultados?
            </h2>
            <h1 className="text-4xl font-bold text-[#BC9C5E] leading-tight">
              Tratamientos Ofrecidos{" "}
              <span className="text-black">Le Blond Spa</span>
            </h1>
            <p className="text-gray-600">
              Ofrecemos una amplia gama de tratamientos, incluyendo: limpiezas
              faciales profundas, peelings químicos, terapia con láser,
              tratamientos tópicos avanzados, y más." (Adapta esta lista a tus
              tratamientos reales).
            </p>
            <button className="bg-[#BC9C5E] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition">
              Contact us
            </button>
          </div>

          {/* Right Section */}
          <div className="mt-8 md:mt-0 md:w-1/2   gap-4">
            <BeforeAfterSlider
              afterImage={"src/assets/public/imgs/limpieza-profunda.png"}
              beforeImage={"src/assets/public/imgs/masaje-facial.jpg"}
            ></BeforeAfterSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelaxationSpa;
