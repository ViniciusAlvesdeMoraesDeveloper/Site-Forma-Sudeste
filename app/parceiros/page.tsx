"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { contatosPorEstado } from "../dataparceiros/parceiros"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowLeft, Phone, MapPin, Users, Zap, BriefcaseBusiness, TrendingUp } from "lucide-react" // Adicionadas novas props para ícones
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
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors font-medium"
            aria-label="Voltar para a página principal"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para página principal
          </Link>
        </div>
      </div>

      <section
        className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white min-h-screen"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <div className="container mx-auto max-w-7xl">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> {/* ALTERADO o ícone */}
              Expansão de Parcerias
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Seja um Parceiro Fundador da Forma Sudeste</h1> {/* ALTERADO o título */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-pretty">
              Junte-se a nós desde o início e lidere o mercado de educação técnica na sua região.
              Ofereça cursos inovadores com suporte total da Forma Sudeste Escola Técnica.
            </p> {/* ALTERADO a descrição */}
          </header>

          {/* INÍCIO: Seção que substitui a lista de parceiros vazia */}
          <div className="space-y-16">
            <div className="text-center p-12 bg-white rounded-xl shadow-2xl border-t-4 border-orange-500">
              <BriefcaseBusiness className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sua Região nos espera!</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Como uma instituição recém-fundada, estamos construindo nossa rede de Parceiros Fundadores.
                Isso significa que as melhores oportunidades de exclusividade e crescimento na sua cidade
                estão abertas para você agora.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg rounded-full bg-orange-600 hover:bg-orange-700 transition-colors"
                  onClick={() => setShowModal(true)}
                >
                  Descubra as Vantagens de Ser um Parceiro Fundador
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Estrutura de Vantagens da Parceria - Opcional para preencher mais o espaço */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="p-4 rounded-lg bg-orange-50/50">
                  <Zap className="w-6 h-6 text-orange-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Exclusividade Regional</h4>
                  <p className="text-sm text-gray-600">Garanta a representação única da Forma Sudeste na sua cidade.</p>
                </div>
                <div className="p-4 rounded-lg bg-orange-50/50">
                  <BriefcaseBusiness className="w-6 h-6 text-orange-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Suporte Prioritário</h4>
                  <p className="text-sm text-gray-600">Acesso direto ao nosso time para implantação e crescimento rápido.</p>
                </div>
                <div className="p-4 rounded-lg bg-orange-50/50">
                  <Users className="w-6 h-6 text-orange-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Cursos de Alta Demanda</h4>
                  <p className="text-sm text-gray-600">Portfólio atualizado focado nas necessidades do mercado de trabalho.</p>
                </div>
              </div>
            </div>
          </div>
          {/* FIM: Seção que substitui a lista de parceiros vazia */}

          {/* REMOVIDA A SEÇÃO DE LISTAGEM DE PARCEIROS, JÁ QUE contatosPorEstado ESTÁ VAZIO */}
          {/* {contatosPorEstado.map((estado, estadoIndex) => (
            ... código de listagem ...
          ))} */}


          <div className="mt-20 text-center">
            <Card className="inline-block bg-gradient-to-r from-orange-50 to-orange-100/50 border-orange-200 shadow-lg max-w-2xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pronto para liderar o mercado de Educação Técnica?</h3> {/* ALTERADO o texto */}
                <p className="text-gray-600 mb-6 text-pretty">
                  Entre em contato hoje para garantir sua exclusividade na inauguração da nossa rede de parceiros.
                </p> {/* ALTERADO o texto */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <Button
                    size="lg"
                    className="px-8 py-4 text-lg rounded-md hover:bg-orange-600"
                    onClick={() => setShowModal(true)}
                  >
                    Solicitar Contato
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
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