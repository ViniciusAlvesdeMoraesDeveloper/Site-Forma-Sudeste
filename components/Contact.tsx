import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/Modal";

const Contact = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Localização Central",
            info: "Luiz Rodrigues dos Santos, 44\nTodos os Santos - Coronel Fabriciano/MG\nCEP: 35170-061"
        },
        { icon: Phone, title: "Fale Conosco", info: "(31) 981076323 " },
        { icon: Mail, title: "E-mail Direto", info: "gerenciageraltecminas@gmail.com" },
        { icon: Clock, title: "Horário de Atendimento", info: "Segunda a Sexta: 8h às 18h" }
    ];
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <section
            id="contato"
            className="py-20 bg-background"
            itemScope
            itemType="https://schema.org/ContactPage"
        >
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Fale com a <span className="text-purple-600">Forma Sudeste</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Pronto para iniciar sua jornada técnica? Tire suas dúvidas sobre os cursos ou explore oportunidades de parceria.
                    </p>
                </header>

                <div className="gap-12 w-full place-items-center">
                    <ul className="grid lg:grid-cols-2 gap-12 w-full" role="list">
                        {contactInfo.map((item, index) => (
                            <li
                                key={index}
                                className="w-full"
                                itemScope
                                itemProp="contactPoint"
                                itemType="https://schema.org/ContactPoint"
                            >
                                <Card className="flex group hover:shadow-purple-400 transition-shadow border-none h-full min-h-[160px]">
                                    <CardContent className="p-6 w-full h-full flex">
                                        <div className="flex items-start gap-4 w-full">
                                            <div className="bg-purple-600/10 p-3 rounded-lg transition-colors flex-shrink-0">
                                                <item.icon className="h-6 w-6 text-purple-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h2 itemProp="contactType" className="font-semibold text-lg mb-2 text-foreground">
                                                    {item.title}
                                                </h2>
                                                <p itemProp="description" className="text-muted-foreground whitespace-pre-line">
                                                    {item.info}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to bg-purple-900 rounded-2xl p-12 text-primary-foreground"> {/* Alterado de-orange-500 e bg-orange-700 para roxo */}
                    <h2 className="text-3xl font-bold mb-4">Parceria de Sucesso: Maximize sua Escola!</h2>
                    <p className="text-xl mb-8 opacity-90">Junte-se à Forma Sudeste e ofereça cursos técnicos práticos e de alta demanda para seus alunos com o suporte de uma instituição moderna e em crescimento.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-muted"
                            onClick={() => {
                                setIsMenuOpen(false);
                                setShowModal(true);
                            }}
                        >
                            Solicitar Proposta de Parceria
                        </Button>
                        <Modal
                            isOpen={showModal}
                            onClose={() => setShowModal(false)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;