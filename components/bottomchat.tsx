'use client';

import { Phone } from "lucide-react";
import { MessageCircle} from "lucide-react"; 

export default function WhatsAppButton() {
  const phoneNumber = "5531981076323"; 
  const message =
    "Olá! Gostaria de falar com um consultor sobre a oportunidade de ser Parceiro da Forma Sudeste.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Falar no WhatsApp"

    >
      <MessageCircle className="w-6 h-6" />
    </a>


  );
}
