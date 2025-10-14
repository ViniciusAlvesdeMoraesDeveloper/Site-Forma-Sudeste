"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Wrench, ArrowDown } from "lucide-react";
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

            {/* Banner Section - Alterado para mencionar a Forma Sudeste */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
                        Cursos <span className="text-orange-200">Técnicos</span>
                    </h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Cursos oferecidos em parceria com a Forma Sudeste, para sua formação técnica e profissional.
                    </p>
                </div>
            </section>

            <main className="flex-grow bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cursosParaExibir.map((curso: any, index: number) => (
                            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader className="bg-orange-100 p-6 rounded-t-lg flex flex-col items-center">
                                    <div className="text-orange-600 mb-2">
                                        <Wrench className="h-10 w-10" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-gray-800 text-center">
                                        {curso.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    
                                    
                                    <p className="text-gray-700 leading-relaxed text-sm text-center">
                                        {curso.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Botão "Carregar mais" visível apenas se houver mais cards */}
                    {temMaisCursos && (
                        <div className="mt-16 text-center">
                            <Button
                                size="lg"
                                className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-12 py-6 text-lg font-semibold rounded-full group"
                                onClick={handleLoadMore}
                            >
                                Carregar mais Cursos
                                <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                            </Button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}