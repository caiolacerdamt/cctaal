import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-serif font-bold text-white tracking-tighter">
                            CCTAAL
                        </Link>
                        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                            Câmara do Comércio e Tecnologia do Agro e da América Latina.
                            <br />
                            Conectando ciclos históricos e capacidades produtivas.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg mb-4 text-gray-200">Navegação</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/manifesto" className="hover:text-white transition-colors">A Visão</Link></li>
                            <li><Link to="/intelligence" className="hover:text-white transition-colors">Intelligence</Link></li>
                            <li><Link to="/camara" className="hover:text-white transition-colors">A Câmara</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg mb-4 text-gray-200">Contato</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>contato@cctaal.org</li>
                            <li>São Paulo, Brasil</li>
                            <li>Shanghai, China</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg mb-4 text-gray-200">Legal</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} CCTAAL. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
