

import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";


import "@/styles/globals.css";

import { Toaster } from "@/components/ui/toaster";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  
  title: {
    default: "Forma Sudeste | Cursos Técnicos e o Topo do Sucesso",
    
    template: "%s | Forma Sudeste",
  },
  
  
  description: "A Forma Sudeste Escola Técnica oferece cursos técnicos e de qualificação profissional focados na sua rápida inserção no mercado de trabalho. Encontre a área que te move e comece sua carreira com um diferencial competitivo.",
  
  
  openGraph: {
    title: "Forma Sudeste",
    description: "A Forma Sudeste oferece cursos de graduação e pós-graduação focados no sucesso profissional.",
    url: 'https://seusite.com.br', 
    siteName: 'Forma Sudeste',
    images: [
      {
        url: 'https://seusite.com.br/images/og-image-default.jpg', 
        width: 1200,
        height: 630,
        alt: 'Logo da Forma Sudeste e Símbolo do Sucesso',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  
  
  twitter: {
    card: 'summary_large_image',
    title: 'Forma Sudeste',
    description: 'Encontre sua carreira e alcance o topo do sucesso na Forma Sudeste.',
  },

  
  icons: {
    icon: '/favicon.ico', 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-br">
      <body
       
        className={`${poppins.variable} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}