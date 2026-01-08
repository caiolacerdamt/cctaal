import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Manifesto = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Sections for the sticky TOC
    const sections = [
        { id: 'inovar', label: 'Inovar' },
        { id: 'diferenciar', label: 'Diferenciar' },
        { id: 'produzir', label: 'Produzir' },
        { id: 'tempo', label: 'O Tempo' },
        { id: 'equacao', label: 'A Equação' },
    ];

    const [activeSection, setActiveSection] = useState('inovar');

    // Simple scroll spy logic (simplified for clarity)
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <article className="bg-[#f9f9f7] min-h-screen font-sans selection:bg-[#7c522e] selection:text-white">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#4a662d] origin-left z-50"
                style={{ scaleX }}
            />

            {/* A. Hero Section: "A Capa" */}
            <section className="relative bg-[#4a662d] text-white py-32 lg:py-48 px-4 overflow-hidden">
                {/* Texture Overlay (Simulated) */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 80 }}
                        transition={{ duration: 1 }}
                        className="mx-auto w-px bg-[#7c522e] mb-8"
                    />

                    <motion.h1
                        className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Como Construir Riquezas em um Mundo que Reescreve a Si Mesmo
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl font-serif italic text-amber-100 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        "Riqueza não é acumulação — é capacidade de organizar o real."
                    </motion.p>
                </div>
            </section>

            {/* B. Content Body */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sticky Sidebar (Left) */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-bold text-gray-400 tracking-[0.2em] mb-6">CAPÍTULOS</h3>
                            <nav className="space-y-4 border-l border-gray-200">
                                {sections.map((section, index) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollTo(section.id)}
                                        className={`block pl-4 text-sm font-medium transition-all duration-300 text-left w-full border-l-2 -ml-[2px] ${activeSection === section.id
                                            ? 'border-[#7c522e] text-[#1a1a1a]'
                                            : 'border-transparent text-gray-400 hover:text-gray-600'
                                            }`}
                                    >
                                        <span className="mr-2 opacity-50 text-xs">0{index + 1}.</span>
                                        {section.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content (Right) */}
                    <div className="lg:col-span-8 lg:col-start-5 prose prose-lg prose-gray max-w-none">

                        {/* Introduction with Drop Cap */}
                        <div className="mb-16">
                            <p className="text-xl md:text-2xl font-serif text-[#1a1a1a] leading-relaxed">
                                <span className="float-left text-7xl font-bold font-serif text-[#7c522e] pr-4 pt-2 leading-[0.8]">V</span>
                                ivemos uma época em que o real deixou de ser estável. Nesse ambiente, enriquecer não é mais apenas "ganhar dinheiro"; é posicionar-se em estruturas que sobrevivem às reconfigurações profundas. A volatilidade deixou de ser um risco para se tornar a própria natureza do terreno onde operamos.
                            </p>
                        </div>

                        {/* 1. Inovar */}
                        <section id="inovar" className="mb-20 scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-6 border-b border-[#7c522e]/30 pb-4">
                                <span className="text-4xl font-bold text-gray-200 font-serif">01</span>
                                <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] m-0">Inovar</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Inovar não é criar novidade, mas alterar a geometria do possível. Inovação é rearranjo, é a alteração da forma como o valor circula.
                            </p>
                            <blockquote className="border-l-4 border-[#4a662d] pl-6 my-8 italic text-xl font-serif text-[#1a1a1a]">
                                "A CCTAAL entende inovação como: releitura do território, reconexão de cadeias produtivas e interoperabilidade tecnológica."
                            </blockquote>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Não buscamos o gadget, mas a infraestrutura. O que nos interessa é a tecnologia que se torna invisível de tão essencial.
                            </p>
                        </section>

                        {/* 2. Diferenciar */}
                        <section id="diferenciar" className="mb-20 scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-6 border-b border-[#7c522e]/30 pb-4">
                                <span className="text-4xl font-bold text-gray-200 font-serif">02</span>
                                <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] m-0">Diferenciar</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                A diferenciação que interessa não é estética, mas estrutural. Um agente só se torna relevante quando ocupa um ponto do sistema que não pode ser ignorado. A CCTAAL trabalha para consolidar ambientes de governança que geram previsibilidade em meio ao caos.
                            </p>
                        </section>

                        {/* 3. Produzir */}
                        <section id="produzir" className="mb-20 scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-6 border-b border-[#7c522e]/30 pb-4">
                                <span className="text-4xl font-bold text-gray-200 font-serif">03</span>
                                <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] m-0">Produzir</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Nada permanece se não há produção. A CCTAAL vê a América Latina não como fornecedora passiva de commodities, mas como território de densidade produtiva ampliada.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mt-4">
                                Onde grão vira tecnologia, onde logística vira vantagem competitiva e onde dados se transformam em soberania de decisão.
                            </p>
                        </section>

                        {/* 4. O Tempo */}
                        <section id="tempo" className="mb-20 scroll-mt-32">
                            <div className="flex items-baseline gap-4 mb-6 border-b border-[#7c522e]/30 pb-4">
                                <span className="text-4xl font-bold text-gray-200 font-serif">04</span>
                                <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] m-0">O Tempo</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                O tempo não é uma linha; é um campo de seleção. A construção de riqueza é um processo de sobrevivência qualificada. O papel da CCTAAL é criar continuidade em um mundo que perdeu o hábito de permanecer.
                            </p>
                        </section>

                        {/* C. The Equation Card */}
                        <section id="equacao" className="my-24 scroll-mt-32">
                            <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-sm relative overflow-hidden border border-[#7c522e] shadow-2xl">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7c522e]/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4a662d]/10 rounded-full blur-3xl"></div>

                                <h3 className="text-[#7c522e] font-sans font-bold text-sm tracking-widest uppercase mb-8 text-center">A Equação Real da Riqueza</h3>

                                <div className="font-mono text-lg md:text-2xl text-white text-center leading-loose">
                                    <span className="block mb-4 md:mb-0 md:inline">Riqueza = </span>
                                    <span className="text-gray-300">(Alterar o possível)</span>
                                    <span className="text-[#7c522e] mx-2">×</span>
                                    <span className="text-gray-300">(Tornar-se inevitável)</span>
                                    <span className="text-[#7c522e] mx-2">×</span>
                                    <br className="hidden md:block" />
                                    <span className="text-gray-300">(Gerar excedente)</span>
                                    <sup className="text-[#7c522e] ml-1">fator temporal</sup>
                                </div>

                                <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-500 font-mono text-center">
                                    <span className="px-3 py-1 border border-gray-800 rounded">Inovação</span>
                                    <span className="px-3 py-1 border border-gray-800 rounded">Diferenciação</span>
                                    <span className="px-3 py-1 border border-gray-800 rounded">Produção</span>
                                    <span className="px-3 py-1 border border-gray-800 rounded">Permanência</span>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <div className="text-center mt-20 pt-20 border-t border-gray-200">
                            <p className="text-2xl md:text-3xl font-serif text-[#1a1a1a] italic leading-relaxed mb-8">
                                "A CCTAAL existe para construir esse tipo de riqueza: riqueza que permanece porque tem forma, função e futuro."
                            </p>
                            <div className="w-16 h-1 bg-[#4a662d] mx-auto opacity-50"></div>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    );
};

export default Manifesto;
