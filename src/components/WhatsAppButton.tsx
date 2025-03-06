'use client'
import React, { useEffect } from 'react';
import { CalendarDays } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  text: string;
  autoSend?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message, text, autoSend }) => {
  const baseUrl = 'https://wa.me/';

  useEffect(() => {
    if (autoSend) {
      window.location.href = `${baseUrl}${"593" + phoneNumber}?text=${encodeURIComponent(message)}&source=${encodeURIComponent(document.URL)}`;
    }
  }, [autoSend]);

  return (
    
    <a aria-label="Chat on WhatsApp" href={`${baseUrl}${"593" + phoneNumber}?text=${encodeURIComponent(message)}`} className=" inline-flex items-center justify-center px-8 py-4 
                             bg-[#BC9C5E] text-white text-lg font-semibold 
                             rounded-lg hover:bg-[#BC9C5E]/90 transition-all 
                             duration-300 mx-auto md:mx-0">
                    <CalendarDays className="mr-2" />
      {text}
    </a>
  );
};

export default WhatsAppButton;
