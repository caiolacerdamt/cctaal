import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-serif font-bold text-white tracking-tighter">
                            CCTAAL
                        </Link>
                        <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                            <Trans i18nKey="footer.description" components={{ 0: <br /> }}>
                                Câmara do Comércio e Tecnologia do Agro e da América Latina.
                                <br />
                                Viabilizando ciclos históricos e capacidades produtivas.
                            </Trans>
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg mb-4 text-gray-200">{t('footer.nav_title')}</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/intelligence" className="hover:text-white transition-colors">{t('nav.intelligence')}</Link></li>
                            <li><Link to="/noticias" className="hover:text-white transition-colors">{t('nav.news')}</Link></li>
                            <li><Link to="/camara" className="hover:text-white transition-colors">{t('nav.chamber')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg mb-4 text-gray-200">{t('footer.contact_title')}</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>contato@cctaal.com</li>
                            <li>Brasília, Distrito Federal</li>
                            <li>Brasil</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg mb-4 text-gray-200">{t('footer.legal_title')}</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a></li>
                            <li><Link to="/privacidade" className="hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} CCTAAL. {t('footer.rights_reserved')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
