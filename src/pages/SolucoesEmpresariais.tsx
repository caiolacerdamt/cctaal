import { ArrowLeftRight, Stamp, Globe, Search, Plane, FileCheck, Package, TrendingUp } from 'lucide-react';
import ServicePageTemplate from '../components/ServicePageTemplate';

const SolucoesEmpresariais = () => {

    const services = [
        {
            icon: ArrowLeftRight,
            title: "Importação e Exportação",
            description: "Facilitamos operações de comércio exterior, garantindo eficiência, conformidade e segurança em todo o processo de entrada e saída de produtos nos mercados internacionais."
        },
        {
            icon: Stamp,
            title: "Gestão Aduaneira",
            description: "Coordenamos a liberação de mercadorias com total conformidade legal, minimizando riscos, atrasos e custos em todo o processo aduaneiro."
        },
        {
            icon: Globe,
            title: "Assessoria Internacional",
            description: "Consultoria especializada para empresas que buscam expandir globalmente, com foco em análise de mercado, estratégias de entrada e conformidade regulatória."
        },
        {
            icon: Search,
            title: "Prospecção de Fornecedores",
            description: "Identificamos e qualificamos fornecedores internacionais confiáveis, assegurando qualidade, competitividade e transparência na negociação."
        },
        {
            icon: Plane,
            title: "Missões e Feiras",
            description: "Promovemos e participamos de eventos globais que conectam empresas latino-americanas a novos mercados, estimulando inovação e parcerias."
        },
        {
            icon: FileCheck, // Vistos usually involve document checking
            title: "Visto de Negócios Chinês",
            description: "Facilitamos a obtenção de vistos para empresários em viagens à China, cuidando de toda a documentação e trâmites consulares com agilidade."
        },
        {
            icon: Package,
            title: "Consolidação de Carga",
            description: "Unificamos remessas de diferentes origens em uma única carga, reduzindo custos logísticos e tornando o transporte mais ágil e eficiente."
        },
        {
            icon: TrendingUp,
            title: "Estudo de Viabilidade",
            description: "Analisamos a viabilidade técnica e financeira de importações, oferecendo dados precisos que orientam decisões seguras e estratégicas."
        }
    ];

    return (
        <ServicePageTemplate
            title="Soluções Empresariais"
            subtitle="Estratégia e crescimento sustentável."
            mainText="Desenvolvemos estratégias para empresas que buscam crescer de forma sustentável, competitiva e conectada ao mercado internacional. Atuamos na modelagem de negócios que suportam a volatilidade do mercado e aproveitam as janelas de oportunidade globais."
            benefits={[
                "Consultoria Estratégica",
                "Modelagem de Negócios",
                "Análise de Risco"
            ]}
            heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
        >
            {/* New Capacity Grid Section */}
            <div className="border-t border-gray-200 pt-16">
                <div className="mb-12 max-w-3xl">
                    <span className="text-[#7c522e] font-bold tracking-widest text-sm uppercase mb-2 block">Nosso Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                        Ecossistema de Soluções
                    </h2>
                    <p className="text-xl text-gray-600 font-light leading-relaxed">
                        Temos a capacidade única de facilitar o conhecimento, criar conexões comerciais e estabelecer padrões globais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-[#7c522e] hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group cursor-default"
                        >
                            <div className="mb-6">
                                <service.icon
                                    className="text-[#7c522e] text-opacity-80 group-hover:text-opacity-100 group-hover:scale-110 transition-all duration-300"
                                    size={32}
                                    strokeWidth={1.5}
                                />
                            </div>
                            <h3 className="text-lg font-serif font-bold text-primary mb-3 group-hover:text-[#7c522e] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-light group-hover:text-gray-700">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </ServicePageTemplate>
    );
};

export default SolucoesEmpresariais;
