import { Sprout, Wheat, CircleDot, Layers, Coffee, Flower2, Waves } from 'lucide-react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const ComercioInternacional = () => {

    const commodities = [
        {
            icon: Sprout, // Soja
            title: "Soja",
            description: "Referência global na produção e exportação. Atuamos para garantir negociações seguras e competitivas."
        },
        {
            icon: Waves, // Milho (Simulating field)
            title: "Milho",
            description: "Essencial para alimentação e biocombustíveis. Conectamos produtores a compradores com transparência."
        },
        {
            icon: Wheat, // Arroz (Stylized Wheat)
            title: "Arroz",
            description: "Com alta demanda global, o arroz latino-americano se destaca pela qualidade e rastreabilidade."
        },
        {
            icon: Wheat, // Trigo
            title: "Trigo",
            description: "Asseguramos padrões de qualidade e competitividade no fornecimento internacional de trigo para indústrias moageiras."
        },
        {
            icon: CircleDot, // Feijão
            title: "Feijão",
            description: "Produto tradicional que ganha espaço global. Promovemos acordos comerciais sustentáveis."
        },
        {
            icon: Layers, // Açúcar (Cubes)
            title: "Açúcar",
            description: "O Brasil lidera o mercado mundial. Nossa atuação garante estabilidade e segurança nas negociações."
        },
        {
            icon: Coffee, // Café
            title: "Café",
            description: "Símbolo da excelência latino-americana. Conectamos exportadores a compradores globais com rastreabilidade total."
        },
        {
            icon: Flower2, // Orgânicos
            title: "Orgânicos",
            description: "Promovemos a certificação e internacionalização de produtos sustentáveis, fortalecendo a imagem do agro."
        }
    ];

    return (
        <ServicePageTemplate
            title="Comércio Internacional"
            subtitle="Conectando a América Latina ao Mundo."
            heroImage="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2574&auto=format&fit=crop" // Corn/Grains
            overviewTitle="Negociação e Representação Internacional"
            mainText="Atuamos com solidez e credibilidade na intermediação de commodities agrícolas, unindo produtores, exportadores e compradores globais. Nossa operação integra conhecimento de mercado, negociação estratégica e gestão eficiente de contratos."
            benefits={[
                "Intermediação Global",
                "Gestão de Contratos",
                "Logística e Rastreamento",
                "Atuação Híbrida em Mercados"
            ]}
        >
            {/* Commodity Portfolio Section */}
            <div className="border-t border-gray-200 pt-16">
                <div className="mb-12 max-w-3xl">
                    <span className="text-[#4a662d] font-bold tracking-widest text-sm uppercase mb-2 block">Nosso Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                        Commodities Operadas
                    </h2>
                    <p className="text-xl text-gray-600 font-light leading-relaxed">
                        Conectamos a abundância produtiva da América Latina aos centros de demanda mundial.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {commodities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-sm shadow-sm border border-transparent hover:border-[#7c522e] hover:shadow-md transition-all duration-300 group cursor-default"
                        >
                            <div className="mb-4">
                                <div className="w-12 h-12 rounded-full bg-[#f9f9f7] flex items-center justify-center group-hover:bg-[#4a662d]/10 transition-colors">
                                    <item.icon
                                        className="text-[#4a662d] group-hover:scale-110 transition-transform duration-300"
                                        size={24} strokeWidth={1.5}
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-serif font-bold text-primary mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Specific CTA for Trading Desk */}
                <div className="mt-20 bg-[#2d1b12] rounded-sm p-12 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #7c522e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                            Precisa de uma cotação específica ou parceria comercial?
                        </h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Nossa mesa de operações está pronta para oferecer as melhores condições do mercado.
                        </p>
                        <button className="bg-[#7c522e] hover:bg-[#966236] text-white px-8 py-4 rounded-sm font-bold text-lg transition-all shadow-lg hover:shadow-[#7c522e]/30 hover:-translate-y-1">
                            Falar com Mesa de Operações
                        </button>
                    </div>
                </div>
            </div>
        </ServicePageTemplate>
    );
};

export default ComercioInternacional;
