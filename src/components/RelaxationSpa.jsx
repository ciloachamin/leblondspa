import React from "react";
import service1 from "../assets/public/imgs/limpieza-profunda.png";
import service2 from "../assets/public/imgs/masaje-facial.jpg";
import service3 from "../assets/public/imgs/masajes-relajantes.jpg";
import WhatsAppButton from "./WhatsAppButton";
const RelaxationSpa = () => {
  return (
    <div className="bg-gradient-to-b from-[#bc9d5e8c] to-white py-16 px-5" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16" >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left md:w-1/2 space-y-4">
            <h2 className="text-sm text-[#4A5759] font-semibold">
              Experiencia y Bienestar en Cada Tratamiento
            </h2>
            <h1 className="text-4xl font-bold text-[#BC9C5E] leading-tight">
              Soluciones efectivas para tu piel {" "}
              <span className="text-black">Le Blond Spa</span>
            </h1>

            <p className="text-gray-600">
              En Le Blond Spa, estamos dedicados a ofrecerte soluciones
              integrales para el cuidado de tu piel y relajación. Desde
              tratamientos para combatir el acné hasta experiencias de
              relajación, cada servicio está diseñado pensando en tu bienestar.
            </p>
            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-2 ">
              <WhatsAppButton
                phoneNumber={`0987220199`}
                text={`Contactanos`}
                message={`Hola,. ¿Podría agendar una cita?`}
                autoSend={false}
                // icon={<CalendarDays />}
                className="" 
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-8 md:mt-0 md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={service1} // Replace with your image URL
                alt="Relaxation 1"
                className="rounded-full shadow-lg border-4 border-white"
              />
            </div>
            <div className="relative">
              <img
                src={service2} // Replace with your image URL
                alt="Relaxation 2"
                className="rounded-full shadow-lg border-4 border-white"
              />
            </div>
            <div className="relative col-span-2">
              <img
                src={service3}
                alt="Relaxation 3"
                className="rounded-full shadow-lg border-4 border-white mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelaxationSpa;
