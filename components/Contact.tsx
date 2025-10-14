import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/Modal";

const Contact = () => {
    const contactInfo = [
        {
            icon: MapPin,
            title: "Localização Central", // ALTERADO: Destaca a localização
            info: "Luiz Rodrigues dos Santos, 44\nTodos os Santos - Coronel Fabriciano/MG\nCEP: 35170-061"
        },
        { icon: Phone, title: "Fale Conosco", info: "(31) 98288-3280 \n(31) 98325-6247 \n(31) 99342-2575" }, // ALTERADO: Título
        { icon: Mail, title: "E-mail Direto", info: "contato@formasudeste.com.br" }, // ALTERADO: E-mail e Título
        { icon: Clock, title: "Horário de Atendimento", info: "Segunda a Sexta: 8h às 18h" }
    ];
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <section
            id="contato"
            className="py-20 bg-background"
            itemScope // Inicia o Schema Markup
            itemType="https://schema.org/ContactPage" // Indica que a página é de contato
        >
            <div className="container mx-auto px-4">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Fale com a <span className="text-primary">Forma Sudeste</span> {/* ALTERADO: Nome da instituição */}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Pronto para iniciar sua jornada técnica? Tire suas dúvidas sobre os cursos ou explore oportunidades de parceria. {/* ALTERADO: Foco em jornada técnica e parcerias */}
                    </p>
                </header>

                <div className="gap-12 w-full place-items-center">
                    <ul className="grid lg:grid-cols-2 gap-12 w-full" role="list">
                        {contactInfo.map((item, index) => (
                            <li
                                key={index}
                                className="w-full"
                                itemScope
                                itemProp="contactPoint" // Indica um ponto de contato dentro da página
                                itemType="https://schema.org/ContactPoint"
                            >
                                <Card className="flex group hover:shadow-orange transition-shadow border-none">
                                    <CardContent className="p-6 w-full">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-primary/10 p-3 rounded-lg transition-colors">
                                                <item.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
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

                <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to bg-orange-700 rounded-2xl p-12 text-primary-foreground">
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