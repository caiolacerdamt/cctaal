import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-cctaal.png';
import LanguageSelector from './LanguageSelector';

const Header = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    // Define navigation structure
    const navigation = [
        {
            name: t('nav.what_we_do'),
            href: '#', // Not a direct link, but a trigger
            dropdown: [
                { name: t('nav.business_solutions'), href: '/solucoes' },
                { name: t('nav.international_trade'), href: '/comercio' },
                { name: t('nav.tech_innovation'), href: '/tecnologia' },
                { name: t('nav.market_intelligence'), href: '/market-intelligence' },
            ]
        },
        // { name: t('nav.vision'), href: '/manifesto' },
        { name: t('nav.chamber'), href: '/camara' },
        { name: t('nav.intelligence'), href: '/intelligence' },
        { name: t('nav.news'), href: '/noticias' },
    ];

    return (
        <header className="sticky top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24"> {/* Increased height from h-20 for bigger logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="CCTAAL Logo" className="h-16 w-auto object-contain" />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                            >
                                {item.dropdown ? (
                                    <button
                                        className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                                            // Check if any child route is active
                                            item.dropdown.some(sub => sub.href === location.pathname)
                                                ? 'text-primary'
                                                : 'text-gray-600'
                                            }`}
                                    >
                                        {item.name}
                                        <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                    </button>
                                ) : (
                                    <Link
                                        to={item.href!}
                                        className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.href ? 'text-primary' : 'text-gray-600'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {item.dropdown && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-primary shadow-xl rounded-sm overflow-hidden border border-[#7c522e]/30 z-50"
                                        >
                                            <div className="py-2">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.href}
                                                        className="block px-4 py-3 text-sm text-white hover:bg-white/10 hover:border-l-4 hover:border-secondary transition-all"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-sm font-medium text-sm hover:bg-opacity-90 transition-all shadow-sm">
                            {t('nav.become_member')}
                        </Link>
                        <LanguageSelector />
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        <LanguageSelector />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 absolute w-full h-screen overflow-y-auto">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                {item.dropdown ? (
                                    <>
                                        <div className="px-3 py-3 text-base font-bold text-primary border-b border-gray-100">
                                            {item.name}
                                        </div>
                                        <div className="pl-4">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`block px-3 py-3 text-sm font-medium rounded-md ${location.pathname === subItem.href
                                                        ? 'text-primary bg-primary/5'
                                                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={item.href!}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-3 py-3 text-base font-medium rounded-md ${location.pathname === item.href
                                            ? 'text-primary bg-primary/5'
                                            : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 px-3">
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-primary text-white px-6 py-3 rounded-sm font-medium text-sm hover:bg-opacity-90 transition-all block text-center"
                            >
                                {t('nav.become_member')}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
