import ServicePageTemplate from '../components/ServicePageTemplate';

const ProjetosExpansao = () => {
    return (
        <ServicePageTemplate
            title="Projetos e Expansão"
            subtitle="Viabilizando o amanhã."
            mainText="Conectamos investidores, governos e empreendedores para viabilizar projetos de desenvolvimento e expansão internacional do setor agroindustrial. Estruturamos o capital e as parcerias necessárias para transformar grandes ideias em infraestrutura real."
            benefits={[
                "Atração de Investimentos",
                "Joint Ventures",
                "Infraestrutura"
            ]}
            heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
        />
    );
};

export default ProjetosExpansao;
