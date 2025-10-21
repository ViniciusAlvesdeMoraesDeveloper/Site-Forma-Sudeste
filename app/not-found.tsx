'use client'; 
// A remoção do usePathname evita o erro de hydration, já que não é necessário aqui.
// import { usePathname } from "next/navigation"; 
import Link from 'next/link';

// Componente visual sutil para reforçar a mensagem
const BrokenLinkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-16 w-16 text-red-500 mx-auto mb-6 opacity-90" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={1.5}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M13 10V3L4 14h7v7l9-11h-7z" 
    />
  </svg>
);


const NotFound = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
      <div className="text-center p-10 max-w-md mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 transition-all duration-500 hover:shadow-3xl">
        
        <BrokenLinkIcon /> {/* Ícone visual */}

        <h1 className="text-7xl font-extrabold text-gray-900 mb-4 tracking-tight">
          404
        </h1>
        <p className="text-2xl text-gray-700 font-medium mb-4">
          Conteúdo Não Encontrado
        </p>
        <p className="text-base text-gray-500 mb-8 leading-relaxed">
          O endereço que você tentou acessar não existe. Pedimos desculpas pelo inconveniente.
        </p>

        <Link href="/" passHref>
          <button 
                className="w-full sm:w-auto bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg 
                           transition duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md">
            Voltar para a Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;