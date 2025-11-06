"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowLeft, Phone, MapPin, Users, Zap, BriefcaseBusiness, TrendingUp, Star, Crown, Target, Rocket, Shield, DollarSign } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { ArrowRight } from "lucide-react"
import Modal from "../../components/Modal"

const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return ""
  const cleaned = ("" + phoneNumber).replace(/\D/g, "")
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/)
  if (match) {
    return `(${match[2]}) ${match[3]}-${match[4]}`
  }
  return phoneNumber
}

export default function ParceirosPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Header />
      {/* Hero Section Mais Impactante */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-600 min-h-[80vh] flex items-center overflow-hidden mt-8">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold mb-8 border border-white/30">
              <Crown className="w-6 h-6" />
              Oportunidade Exclusiva para Líderes
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-2xl">
              Seja <span className="text-purple-100">Parceiro Fundador</span>
            </h1>

            <p className="text-2xl md:text-3xl text-purple-100 leading-relaxed max-w-4xl mx-auto mb-10 font-medium drop-shadow-lg">
              Lidere o mercado de educação técnica na sua região com suporte total e exclusividade territorial
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"

                className="px-12 py-6 text-xl rounded-full bg-white text-purple-600 hover:bg-purple-50 font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                onClick={() => setShowModal(true)}
              >
                <Rocket className="mr-3 w-6 h-6" />
                Quero Ser Parceiro
              </Button>

              <Button
                size="lg"
                className="px-10 py-6 text-xl rounded-full border-2 border-white bg-transparent text-white hover:bg-white/20 font-semibold backdrop-blur-sm transition-all duration-300"
                onClick={() => setShowModal(true)}
              >
                <Target className="mr-2 w-5 h-5" />
                Ver Vantagens
              </Button>
            </div>

            {/* Estatísticas Impactantes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">100%</div>
                <div className="text-purple-200 text-sm font-semibold">Exclusividade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">30+</div>
                <div className="text-purple-200 text-sm font-semibold">Cursos Técnicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">1º</div>
                <div className="text-purple-200 text-sm font-semibold">Lugar na Região</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Oportunidade */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center p-16 bg-white rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-purple-600/10 rounded-full -translate-x-12 translate-y-12"></div>

            <div className="relative z-10">
              <BriefcaseBusiness className="w-20 h-20 text-purple-500 mx-auto mb-8 p-4 bg-purple-50 rounded-2xl" />
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                  Sua Cidade é Nossa Próxima Fronteira!
                </span>
              </h2>

              <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                Como instituição em expansão, estamos selecionando <strong>Parceiros Fundadores</strong> estratégicos
                para dominar o mercado de educação técnica. As melhores áreas ainda estão disponíveis - e essa janela
                de oportunidade fecha em breve.
              </p>

              {/* Cards de Vantagens Melhorados */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Crown className="w-12 h-12 mb-4 text-purple-200" />
                  <h4 className="text-xl font-black mb-3">Exclusividade Total</h4>
                  <p className="text-purple-100 leading-relaxed">
                    Seja o único representante Forma Sudeste na sua região com área protegida.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                  <DollarSign className="w-12 h-12 mb-4 text-cyan-200" />
                  <h4 className="text-xl font-black mb-3">Investimento Zero</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Sem taxas de franquia. Modelo de negócio com retorno acelerado.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Shield className="w-12 h-12 mb-4 text-emerald-200" />
                  <h4 className="text-xl font-black mb-3">Suporte Completo</h4>
                  <p className="text-green-100 leading-relaxed">
                    Da implantação à operação, nossa equipe especializada está com você.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full sm:w-auto px-10 py-6 text-lg rounded-full bg-gradient-to-r from-purple-600 to-purple-600 hover:from-purple-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-black mt-4"
                onClick={() => setShowModal(true)}
              >
                <TrendingUp className="mr-3 w-6 h-6" />
                Garanta Exclusividade
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Chamada Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16 border border-white/20">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Star className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Vagas Limitadas para <span className="text-purple-400">Parceiros Fundadores</span>
            </h3>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              As melhores localidades estão sendo disputadas. Não perca a chance de ser o pioneiro
              na educação técnica da sua região.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="px-12 py-6 text-lg rounded-full bg-purple-500 hover:bg-purple-400 text-gray-900 font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                onClick={() => setShowModal(true)}
              >
                <Target className="mr-2 w-5 h-5" />
                Reservar Minha Área
              </Button>

              <Button
                size="lg"
                className="px-10 py-6 text-lg rounded-full border-2 border-white bg-transparent text-white hover:bg-white/10 font-semibold transition-all duration-300"
                onClick={() => {
                  const phoneNumber = "5531973144070"; // Substitua pelo número da empresa
                  const message = "Olá! Gostaria de falar com um consultor sobre a oportunidade de ser Parceiro da Forma Sudeste.";
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <Phone className="mr-2 w-5 h-5" />
                Falar com Consultor
              </Button>
            </div>

            {/* Urgência */}
            <div className="mt-12 p-6 bg-purple-500/20 rounded-2xl border border-purple-400/30">
              <p className="text-purple-300 font-semibold text-lg">
                ⚠️ Últimas vagas disponíveis para o lançamento da rede
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}