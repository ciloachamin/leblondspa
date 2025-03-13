'use client'
import React, { useEffect, ReactElement } from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  text: string;
  autoSend?: boolean;
  icon?: ReactElement; // Propiedad para el icono
  className?: string; // Propiedad para clases personalizadas
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
  text,
  autoSend,
  icon,
  className = '', // Valor por defecto vacío
}) => {
  const baseUrl = 'https://wa.me/';

  useEffect(() => {
    if (autoSend) {
      window.location.href = `${baseUrl}${"593" + phoneNumber}?text=${encodeURIComponent(message)}&source=${encodeURIComponent(document.URL)}`;
    }
  }, [autoSend]);

  // Combina las clases predeterminadas con las clases personalizadas
  const buttonClasses = `bg-[#BC9C5E] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#A67C4D] transition-colors ${className}`;

  return (
    <a
      aria-label="Chat on WhatsApp"
      href={`${baseUrl}${"593" + phoneNumber}?text=${encodeURIComponent(message)}`}
      className={buttonClasses} // Aplica las clases combinadas
    >
      {icon && React.cloneElement(icon, { className: "mr-2" })} {/* Renderiza el icono si está presente */}
      {text}
    </a>
  );
};

export default WhatsAppButton;