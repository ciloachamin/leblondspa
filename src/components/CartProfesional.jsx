import React from "react";
import especialista from "../assets/public/imgs/especialista1.png";
import { Phone, Mail, Star, Calendar } from "lucide-react";
const CartProfesional = () => {
const professional = {
  id: 1,
  name: "DMC. Jimena Saquicela",
  specialty: "Especialista en el cuidado de la piel",
  image: "/api/placeholder/400/400",
  rating: 4.9,
  email: "jimenasaquizla@gmail.com",
  phone: "+593 600 987 654",
  experience: "Más de 30 años de experiencia",
  description:
    "Soy una especialista reconocida en tratamientos dermoestéticos. Nuestro enfoque combina tecnología de vanguardia, como peelings químicos y terapia láser, con un cuidado personalizado que asegura resultados efectivos y duraderos. Nuestro compromiso es transformar la piel de sus pacientes y mejorar su confianza.",
};

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Nuestros <span className="text-[#BC9C5E]">Profesionales</span>
      </h1>

      <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-96 mx-2">
        <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5  h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
          <div
            className="absolute inset-0 w-full h-full object-cover object-center bg-[#f5f5f5] bg-opacity-30 bg-cover bg-bottom"
            style={{ backgroundImage: `url( ${especialista})` }} // Reemplaza con la URL de tu imagen or use your image path
          ></div>
          <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
            <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
              {professional.name}
            </h3>

            <h4 className="w-full text-xl text-gray-100 leading-tight">Soy </h4>
          </div>

          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>

        <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 lg:w-4/5  flex items-center -mt-6 md:mt-0">
          <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
            <h4 className="hidden md:block text-xl text-gray-400">Soy</h4>

            <h3 className="hidden md:block font-bold text-2xl text-gray-700">
              {professional.name}
            </h3>
            <p className=" text-[#BC9C5E] font-semibold text-lg mb-5">
              {professional.specialty}
            </p>

            <p className="text-gray-600 text-justify">
              {professional.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-600 mt-6">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span>{professional.experience}</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5 text-[#BC9C5E]" />
                  <span>{professional.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProfesional;
