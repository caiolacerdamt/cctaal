import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstitutionalSplit = () => {
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Side */}
                <div className="h-[500px] lg:h-auto relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2574&auto=format&fit=crop"
                        alt="Technology in Port"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                </div>

                {/* Text Side */}
                <div className="flex items-center p-12 lg:p-24 bg-background">
                    <div>
                        <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-2 block">Institucional</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">O que é a CCTAAL?</h2>

                        <div className="w-20 h-1 bg-secondary mb-8 mt-4"></div>

                        <h3 className="text-xl md:text-2xl font-light text-dark mb-6 leading-tight">
                            Câmara de Comércio e Tecnologia do Agro da América Latina.
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            A CCTAAL nasceu com o propósito de representar e fortalecer a tecnologia do Agro no cenário global, promovendo comércio, inovação e integração entre países, empresas e investidores. Atuamos como elo estratégico entre oportunidades internacionais e o desenvolvimento sustentável da América Latina.
                        </p>

                        <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-wide border-b-2 border-primary pb-1">
                            Conheça Nossa Estrutura <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstitutionalSplit;
