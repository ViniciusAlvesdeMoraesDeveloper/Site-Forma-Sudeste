"use client"; // Adicione esta linha para habilitar hooks do React

import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Target, Users, Smartphone } from "lucide-react";
import parceria from "@/public/assets/parceria.jpg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const router = useRouter();

 
  const features = [
    {
      icon: Award,
      title: "Inovação e Foco Técnico",
      description: "O Colégio Técnico Forma Sudeste é uma instituição recém-criada com a missão de oferecer o que há de mais atual em educação técnica, garantindo a formação de profissionais prontos para o mercado."
    },
    {
      icon: Users,
      title: "Parceria Estratégica",
      description: "Atuamos para viabilizar parcerias exclusivas, permitindo que nossos parceiros expandam seu portfólio de cursos técnicos com a segurança e o suporte de uma instituição focada no futuro da educação."
    },
    {
      icon: BookOpen,
      title: "Expansão de Portfólio",
      description: "Amplie sua oferta educacional com cursos técnicos de alta demanda sem o investimento inicial em infraestrutura própria, focando apenas na captação de alunos e na qualidade da entrega."
    },
    {
      icon: Target,
      title: "Visão de Futuro",
      description: "Nossa parceria se baseia na projeção de resultados a longo prazo, oferecendo um modelo de negócio sustentável e alinhado com as necessidades do mercado de trabalho do Sudeste."
    }
  ];

  
  const contactSections = [
    {
      title: "Equipe Técnica Forma Sudeste",
      contacts: [
        {
          
          number: "(31) 981076323",
          href: "https://wa.me/5531993422575?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20parcerias%20com%20o%20Col%C3%A9gio%20T%C3%A9cnico%20Forma%20Sudeste.%20Poderiam%20me%20ajudar%3F"
        },
      ]
    }
  ];

  return (
    <div className='flex flex-col min-h-screen'>

      <Header />

      <main className='flex-grow'>
        <section id="sobre" className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  O Futuro da Educação Técnica
                  <span className="block text-purple-700">Começa Aqui</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  O Colégio Técnico Forma Sudeste nasceu para ser o parceiro ideal na expansão da sua oferta de cursos técnicos. Focados em um modelo de parceria ágil e moderno, oferecemos o suporte completo para que sua instituição possa oferecer educação técnica de alta qualidade, garantindo resultados rápidos e um diferencial competitivo no mercado do Sudeste.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        {/* ÍCONE COM COR ROXA (purple-700) */}
                        <feature.icon className="h-12 w-12 text-purple-700 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <Image
                    src={parceria}
                    alt="Estudantes do Colégio Técnico Forma Sudeste" 
                    width={800}
                    height={600}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                
                <Card className="absolute -bottom-6 -left-6 bg-background shadow-lg border-none"> 
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-700 mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Foco em Parcerias</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Fale com a Equipe Técnica</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Entre em contato conosco através do WhatsApp e descubra como expandir sua oferta de educação técnica em parceria com o Colégio Técnico Forma Sudeste.
              </p>
            </div>

            {contactSections.map((section, index) => (
              <div key={index} className="mb-16">
                <div className="text-center mb-8">
                  
                  <h3 className="text-2xl font-bold text-purple-700 mb-2">{section.title}</h3>
                  
                  <div className="w-20 h-1 bg-purple-700 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div
                    className={`grid gap-6 grid-cols-1 max-w-md mx-auto`}
                  >
                    {section.contacts.map((contact, contactIndex) => (
                      <Card
                        key={contactIndex}
                        className="group border-2 border-purple-700/20 shadow-lg hover:shadow-xl hover:border-purple-700/40 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                          <div className="flex-1">
                           
                            <div className="bg-purple-700/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-700/20 transition-colors">
                              
                              <Smartphone className="h-10 w-10 text-purple-700" />
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-2 tracking-wide">{contact.number}</h4>
                            <p className="text-muted-foreground mb-6 text-sm">
                              Clique para iniciar uma conversa sobre parcerias no WhatsApp
                            </p>
                          </div>

                          <Link href={contact.href} passHref className="w-full">
                            
                            <Button className="w-full bg-purple-700 hover:bg-purple-700/90 text-white py-3 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                              <Smartphone className="mr-2 h-4 w-4" />
                              Iniciar Conversa
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>
      </main>


      <Footer />

    </div>
  )
}

export default About