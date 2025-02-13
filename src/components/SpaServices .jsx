import React, { useState } from 'react';
import { Clock, Plus, ArrowRight } from 'lucide-react';
import service1 from '../assets/public/imgs/limpieza-profunda.png';
import service2 from '../assets/public/imgs/masaje-facial.jpg';
import service3 from '../assets/public/imgs/masajes-relajantes.jpg';
const SpaServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'masajes', name: 'Masajes' },
    { id: 'faciales', name: 'Faciales' },
    { id: 'corporales', name: 'Corporales' },
    { id: 'rituales', name: 'Rituales' }
  ];

  const services = [
    {
      id: 1,
      name: 'Masaje Relajante',
      category: 'masajes',
      duration: '60 min',
      price: 75,
      image: `${service1}`, // Reemplaza con la ruta correcta si la tienes
      description: 'Un masaje suave y relajante que combina técnicas suecas y aromaterapia para aliviar el estrés.',
      benefits: ['Reduce el estrés', 'Mejora la circulación', 'Alivia dolores musculares']
    },
    {
      id: 2,
      name: 'Facial Anti-edad',
      category: 'faciales',
      duration: '75 min',
      price: 95,
      image: `${service2}`, // Reemplaza con la ruta correcta si la tienes
      description: 'Tratamiento facial avanzado que combate los signos del envejecimiento y revitaliza la piel.',
      benefits: ['Reduce arrugas', 'Aumenta colágeno', 'Ilumina la piel']
    },
    {
      id: 3,
      name: 'Ritual de Piedras Calientes',
      category: 'rituales',
      duration: '90 min',
      price: 120,
      image: `${service3}`, // Reemplaza con la ruta correcta si la tienes
      description: 'Una experiencia única que combina masaje con piedras calientes y aceites esenciales.',
      benefits: ['Relajación profunda', 'Desintoxicación', 'Equilibrio energético']
    },
    {
      id: 4,
      name: 'Limpieza Profunda',
      category: 'faciales',
      duration: '75 min',
      price: 85,
      image:`${service1}`, // Reemplaza con la ruta correcta si la tienes
      description: 'Masaje terapéutico enfocado en liberar la tensión muscular profunda y eliminar toxinas acumuladas.',
      benefits: ['Libera tensión muscular', 'Elimina toxinas', 'Mejora la movilidad']
    },
    {
      id: 5,
      name: 'Masaje Facial Anti-Edad',
      category: 'masajes', // Podría ser 'faciales' o 'masajes faciales', decide la categoría más apropiada
      duration: '60 min',
      price: 110,
      image: `${service2}`, // Reemplaza con la ruta correcta si la tienes
      description: 'Un masaje facial especializado que utiliza técnicas y productos para rejuvenecer la piel y reducir líneas de expresión.',
      benefits: ['Reduce líneas de expresión', 'Rejuvenece la piel', 'Mejora la elasticidad']
    },
    {
      id: 6,
      name: 'Masaje Corporal Anti-Edad',
      category: 'corporales', // Podría ser 'corporales' o mantener 'masajes' como categoría general
      duration: '90 min',
      price: 150,
      image: `${service1}`, // Reemplaza con la ruta correcta si la tienes
      description: 'Tratamiento corporal completo diseñado para combatir el envejecimiento de la piel, mejorar la firmeza y la hidratación.',
      benefits: ['Mejora la firmeza de la piel', 'Hidratación profunda', 'Revitaliza la piel']
    }
  ];
  const filteredServices = selectedCategory === 'todos' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4"><span className="text-[#BC9C5E]">Nuestros</span> Servicios</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra amplia gama de tratamientos diseñados para tu bienestar y relajación
          </p>
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                    <div key={index} className="flex items-center text-gray-700">
                      <Plus className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Precio y Botón */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-2xl font-bold">${service.price}</div>
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