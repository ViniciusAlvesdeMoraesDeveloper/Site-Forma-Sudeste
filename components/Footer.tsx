"use client";
import React from 'react';
import { useState } from 'react';
import { Facebook, Instagram, Music2, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import ModalGeral from './ModalGeral';
import ModalTermosDeUso from './ModalTermoUso';



const politicaDePrivacidadeContent: React.ReactNode = (
  <>
    <h2 className="text-xl font-bold mb-4">Política de Privacidade - Forma Sudeste </h2>
    <p>Esta é a política de privacidade que descreve como a Forma Sudeste coleta e usa os dados dos seus parceiros e usuários.</p>
    <p className="mt-2"><strong>Coleta de dados:</strong> Coletamos informações como seu nome, email e dados de uso necessários para formalizar e gerenciar nossas parcerias.</p>
  </>
);

const cookiesContent: React.ReactNode = (
  <>
    <h2 className="text-xl font-bold mb-4">Política de Cookies - Forma Sudeste</h2>
    <p>Nós utilizamos cookies para garantir o bom funcionamento do site e para uma melhor experiência de navegação, otimizando o acesso de nossos parceiros e alunos.</p>
    <p className="mt-2"><strong>O que são cookies:</strong> Pequenos arquivos de texto armazenados no seu navegador.</p>
  </>
);

const Footer = () => {
  const [modalAberto, setModalAberto] = useState<string | null>(null);

  const quickLinks = [
    { text: 'Sobre a Forma Sudeste', href: '/about' },
    { text: 'Nossos Cursos Técnicos', href: '/cursos' },
    
    
  ];

  // ATENÇÃO: Os links sociais precisam ser atualizados para os da Forma Sudeste!
  const socialLinks = [
    { icon: Instagram, href: "" }, // Link de Exemplo
    { icon: Linkedin, href: "" }, // Adicionado LinkedIn, relevante para parcerias
    { icon: Youtube, href: "" }, // Link de Exemplo
  ];

  const handleOpenModal = (modalType: string) => {
    setModalAberto(modalType);
  };

  const handleCloseModal = () => {
    setModalAberto(null);
  };

  return (
    <footer className="bg-[#0B093F] text-white left-0 right-0">
      <div className="container mx-auto px-4 py-8">
        {/* Seção das Três Colunas Principais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-16">

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  // ATENÇÃO: Altere para o caminho da sua imagem
                  src="/logo-formasudeste.webp"
                  alt="Forma Sudeste Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Forma Sudeste Educação e Negócios</span>
            </div>
            <p className="text-gray-300 mb-4 leading-normal">
              Formação técnica de excelência. Junte-se a rede de parceiros da Forma Sudeste e invista no futuro profissional.
              Diplomas técnicos reconhecidos e focados no mercado.
            </p>
            <div className="text-white flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank" // Adicionado para abrir em nova aba
                  rel="noopener noreferrer" // Prática de segurança
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Links Rápidos */}
          <div className="md:ml-8 lg:ml-40">
            <h3 className="text-lg font-semibold mb-2">Acesso Rápido</h3>
            <ul className="space-y-1 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors" // Alterei para 'hover:text-white' para maior contraste
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contato */}
          <div id="contato">
            <h3 className="text-lg font-semibold mb-2">Contato do Polo/Parcerias</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                Luiz Rodrigues dos Santos, 44
                <br />
                Todos os Santos - Coronel Fabriciano/MG
                <br />
                CEP: 35170-061
              </p>
              <p>
                <strong>Telefone:</strong> (31) 97314-4070
                {/* RECOMENDADO: Use um número específico para Parcerias se possível */}
              </p>
              <p>
                <strong>E-mail:</strong> gerenciageraltecminas@gmail.com
                {/* RECOMENDADO: Use um e-mail de domínio próprio e/ou um específico para parcerias (ex: parcerias@formasudeste.com.br) */}
              </p>
              <p>
                <strong>Horário de Atendimento:</strong>
                <br />
                Seg-Sex: 8h às 18h
                <br />
                Sáb: 8h às 12h
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé inferior com os links dos modais */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              © 2024 Forma Sudeste. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a
                href="/ModalGeral"
                onClick={(e) => { e.preventDefault(); handleOpenModal('privacidade'); }}
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleOpenModal('termos'); }}
                className="hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleOpenModal('cookies'); }}
                className="hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Renderização condicional dos modais */}
      {modalAberto === 'privacidade' && (
        <ModalGeral
          title="Política de Privacidade - Forma Sudeste"
          content={politicaDePrivacidadeContent}
          onClose={handleCloseModal}
        />
      )}

      {modalAberto === 'cookies' && (
        <ModalGeral
          title="Política de Cookies - Forma Sudeste"
          content={cookiesContent}
          onClose={handleCloseModal}
        />
      )}

      {modalAberto === 'termos' && (
        <ModalTermosDeUso onClose={handleCloseModal} />
      )}
    </footer>
  );
};

export default Footer; 