"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Wrench, ArrowDown, Clock, Users, Award, Building2, Handshake } from "lucide-react";
import tecnicos from "@/components/coursetecnico/tecnico.json";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function CursosTecnicosPage() {
    
    const [cardsVisible, setCardsVisible] = useState(6);
    const cursosParaExibir = tecnicos.slice(0, cardsVisible);
    const temMaisCursos = tecnicos.length > cardsVisible;
    
    const handleLoadMore = () => {
        setCardsVisible(prev => prev + 6);
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />

            {/* Banner Section Focado em Parcerias */}
            <section className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-purple-600 text-white py-24 mt-16 overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                            <Handshake className="h-12 w-12 text-white" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
                        Parcerias <span className="text-purple-200">Estratégicas</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed font-medium">
                        Desenvolvemos talentos técnicos qualificados para impulsionar sua empresa e fortalecer a cadeia produtiva da região
                    </p>
                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                            <Building2 className="h-5 w-5" />
                            <span>Mão de obra especializada</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                            <Users className="h-5 w-5" />
                            <span>Formação sob medida</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                            <Award className="h-5 w-5" />
                            <span>Certificação reconhecida</span>
                        </div>
                    </div>
                </div>
            </section>

            <main className="flex-grow bg-gradient-to-b from-gray-50 to-gray-100 py-16">
                <div className="container mx-auto px-4">
                    {/* Header da seção de cursos */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Cursos Técnicos para Desenvolvimento Regional
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Formamos profissionais alinhados às demandas do mercado, criando oportunidades de parceria para empresas que buscam mão de obra qualificada
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cursosParaExibir.map((curso: any, index: number) => (
                            <Card 
                                key={index} 
                                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl"
                            >
                                {/* Efeito de gradiente no hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <CardHeader className="relative bg-gradient-to-r from-purple-500 to-purple-500 p-8 rounded-t-2xl">
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                            <Wrench className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-center pt-4">
                                        <CardTitle className="text-2xl font-black text-white text-center leading-tight">
                                            {curso.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                
                                <CardContent className="p-8 relative">
                                    <div className="space-y-4">
                                        <p className="text-gray-700 leading-relaxed text-base text-center font-medium mb-4">
                                            {curso.description}
                                        </p>
                                        
                                        {/* Descrição focada em parcerias */}
                                        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                                            <p className="text-sm text-gray-700 font-medium">
                                                <strong>Oportunidade de Parceria:</strong> Formamos técnicos qualificados prontos para atender às necessidades específicas do seu setor, com potencial para programas de estágio, contratação direta e desenvolvimento conjunto de competências.
                                            </p>
                                        </div>
                                        
                                        {/* Benefícios para parceiros */}
                                        <div className="grid grid-cols-2 gap-3 text-xs">
                                            <div className="flex items-center gap-1 text-green-600">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span>Mão de obra qualificada</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-blue-600">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                <span>Redução de custos</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-purple-600">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                <span>Inovação tecnológica</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-purple-600">
                                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                <span>Desenvolvimento regional</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Botão "Carregar mais" */}
                    {temMaisCursos && (
                        <div className="mt-20 text-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-purple-500 to-purple-500 hover:from-purple-600 hover:to-purple-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 px-16 py-7 text-lg font-bold rounded-full group transform hover:scale-105"
                                onClick={handleLoadMore}
                            >
                                Conhecer Mais Cursos
                                <ArrowDown className="ml-3 h-6 w-6 group-hover:translate-y-2 transition-transform duration-300" />
                            </Button>
                            <p className="text-gray-500 mt-4 text-sm">
                                Explore todas as oportunidades de parceria em formação técnica
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}