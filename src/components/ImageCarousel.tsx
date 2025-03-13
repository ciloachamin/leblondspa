'use client'
import React, { useState, useEffect } from 'react';
import facial from "../assets/public/imgs/facial-scan.png";
import scanner from "../assets/public/imgs/scanner.png";
import escanner1 from "../assets/public/imgs/escanner1.jpg";
import escanner2 from "../assets/public/imgs/escanner2.jpg";

const images = [
    { src: facial, alt: 'Análisis Facial Avanzado' },
    // { src: scanner, alt: 'Dispositivo Scanner HERAAS' },
    { src: escanner1, alt: 'Descripción de imagen 3' },
    { src: escanner2, alt: 'Descripción de imagen 4' },
];

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Cambiar la imagen automáticamente cada 5 segundos
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5000 ms = 5 segundos

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex justify-center items-center">
            {/* Marco decorativo */}
            <div className="absolute -inset-4 border border-dashed border-[#BC9C5E]/30 rounded-xl"></div>

            {/* Imágenes superpuestas */}
            <div className="relative z-10 p-6">
                <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="w-80 md:w-96 rounded-lg shadow-lg transition-opacity duration-500"
                />
                <img
                    src={scanner}
                    alt="Dispositivo Scanner HERAAS"
                    className="absolute -left-10 bottom-0 w-40 transform rotate-6 shadow-lg rounded-lg border-4 border-white"
                />
                {/* Badge informativo */}
                <div className="absolute -right-4 top-10 bg-[#BC9C5E] text-white py-1 px-3 rounded-full text-xs font-medium">
                    Tecnología 6D con IA
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;