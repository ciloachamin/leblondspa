import React, { useState } from "react";
import { Clock, Plus, ArrowRight } from "lucide-react";
import service1 from "../assets/public/imgs/cama-hiperbarica-facial.webp";
import service2 from "../assets/public/imgs/plasma-rico-en-fibrina.jpg";
import service3 from "../assets/public/imgs/bioestimuladores-de-colageno.jpg";
import service4 from "../assets/public/imgs/masaje-tailandes.jpg";
import service5 from "../assets/public/imgs/masaje-facial.jpg";
import service6 from "../assets/public/imgs/after-work.jpg";
import service7 from "../assets/public/imgs/after-work-fullbody.webp";
import service8 from "../assets/public/imgs/cleopatra-dark-massage.jpg";
import service9 from "../assets/public/imgs/extraccion-lunares-verrugas.jpg";

const SpaServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "masajes", name: "Masajes" },
    { id: "faciales", name: "Faciales" },
    { id: "corporales", name: "Corporales" },
    { id: "rituales", name: "Rituales" },
    { id: "dermatología", name: "Dermatología" },
  ];

  const services = [
    {
      id: 1,
      name: "Cámara de Oxígeno Hiperbárico",
      category: "corporales",
      duration: "45 min",
      price: 50,
      image: `${service1}`,
      description:
        "Sesión terapéutica con oxígeno puro para mejorar la oxigenación de tejidos y acelerar la recuperación.",
      benefits: [
        "Acelera la recuperación",
        "Mejora la oxigenación de tejidos",
        "Reduce el estrés",
      ],
    },
    {
      id: 2,
      name: "Plasma Rico en Fibrina",
      category: "faciales",
      duration: "60 min",
      price: 100,
      image: `${service2}`,
      description:
        "Tratamiento avanzado para rejuvenecer la piel, estimular el colágeno y mejorar la elasticidad.",
      benefits: [
        "Rejuvenece la piel",
        "Estimula el colágeno",
        "Aumenta la elasticidad",
      ],
    },
    {
      id: 3,
      name: "Bioestimuladores de Colágeno",
      category: "faciales",
      duration: "75 min",
      price: 150,
      image: `${service3}`,
      description:
        "Terapia innovadora para estimular la producción natural de colágeno y mejorar la firmeza de la piel.",
      benefits: [
        "Aumenta la firmeza de la piel",
        "Reduce arrugas",
        "Mejora la textura de la piel",
      ],
    },
    {
      id: 4,
      name: "Masaje Tailandés Relajante",
      category: "masajes",
      duration: "90 min",
      price: 50,
      image: `${service4}`,
      description:
        "Masaje tradicional tailandés diseñado para relajar y equilibrar cuerpo y mente.",
      benefits: [
        "Relajación profunda",
        "Alivia dolores musculares",
        "Equilibra cuerpo y mente",
      ],
    },
    {
      id: 5,
      name: "Limpieza Facial Completa",
      category: "faciales",
      duration: "60 min",
      price: 60,
      image: `${service5}`,
      description:
        "Tratamiento facial completo con vapor de ozono, peeling ultrasónico y limpieza profunda.",
      benefits: [
        "Elimina impurezas",
        "Hidrata la piel",
        "Mejora la luminosidad",
      ],
    },
    {
      id: 6,
      name: "Paquete After Work",
      category: "rituales",
      duration: "20-30 min",
      price: 50,
      image: `${service6}`,
      description:
        "Nuestra sesión After Work es ideal para esas personas cuya jornada laboral es exigente y genera estrés en ciertas zonas del cuerpo como el cuello, los hombros, la nuca, etc.",
      benefits: [
        "Relajación profunda",
        "Hidratación profunda",
        "Alivia el estrés acumulado",
        "Libera tensiones",
        "Copa de vino o whisky",
      ],
    },
    {
      id: 7,
      name: "Paquete After Work FullBody",
      category: "rituales",
      duration: "90 min",
      price: 200,
      image: `${service7}`,
      description:
        "Nuestra sesión After Work FullBody es ideal para esas personas cuya jornada laboral es exigente y genera estrés en ciertas zonas del cuerpo. Incluye masaje de pies, piernas, espalda, cuello, hombros, brazos y manos.",
      benefits: [
        "Relajación profunda",
        "Hidratación profunda",
        "Alivia el estrés acumulado",
        "Libera tensiones",
        "Copa de vino o whisky",
      ],
    },
    {
      id: 8,
      name: "Cleopatra Dark Massage",
      category: "rituales",
      duration: "90 min",
      price: 120,
      image: `${service8}`,
      description:
        "Masaje exclusivo con chocolate que exfolia, hidrata y relaja profundamente. Logrando una piel suave y luminosa.",
      benefits: [
        "Exfolia la piel",
        "Hidrata intensamente",
        "Ambiente confortable",
        "Aromaterapia",
        "Musicoterapia",
        "Copa de vino o whisky",
      ],
    },
    {
      id: 9,
      name: "Extracción de Lunares y Verrugas",
      category: "dermatología",
      duration: "30 min",
      price: 80,
      image: `${service9}`,
      description:
        "Procedimiento seguro y efectivo para la extracción de lunares y verrugas con técnicas especializadas.",
      benefits: [
        "Elimina lunares y verrugas de forma segura",
        "Minimiza cicatrices",
        "Resultados inmediatos",
      ],
    },
  ];

  const filteredServices =
    selectedCategory === "todos"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="bg-white py-16" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#BC9C5E]">Nuestros</span> Servicios
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra amplia gama de tratamientos diseñados para tu
            bienestar y relajación
          </p>
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Lista de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
            >
              {/* Imagen del Servicio */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.duration}
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Beneficios */}
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <Plus className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Precio y Botón */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    {" "}
                    <span className="text-sm mr-1">Desde</span>{" "}
                    <span className="text-2xl font-bold">
                      ${service.price.toFixed(2)}
                    </span>{" "}
                  </div>
                  <button className="flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors">
                    Reservar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpaServices;
