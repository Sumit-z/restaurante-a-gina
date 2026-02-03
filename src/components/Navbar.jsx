import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { lang, setLang, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.menu'), path: '/menu' },
        { name: t('nav.reservation'), path: '/reservation' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-cream/95 backdrop-blur-md py-3 shadow-sm border-b border-cream-dark" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center"
                    >
                        <Logo light={scrolled || location.pathname !== '/'} />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95",
                                    scrolled || location.pathname !== '/'
                                        ? (location.pathname === link.path ? "text-gold" : "text-charcoal-light hover:text-gold")
                                        : (location.pathname === link.path ? "text-gold" : "text-white/80 hover:text-white")
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Language Toggle */}
                        <div className={cn(
                            "flex items-center p-1 rounded-full border text-[10px] font-black tracking-tighter uppercase transition-colors",
                            scrolled || location.pathname !== '/' ? "border-cream-dark bg-white/50" : "border-white/20 bg-white/10"
                        )}>
                            <button
                                onClick={() => setLang('pt')}
                                className={cn(
                                    "px-3 py-1.5 rounded-full transition-all",
                                    lang === 'pt' ? "bg-gold text-charcoal shadow-sm" : "text-charcoal/40 hover:text-charcoal"
                                )}
                                style={lang !== 'pt' && scrolled === false && location.pathname === '/' ? { color: 'rgba(255,255,255,0.5)' } : {}}
                            >
                                PT
                            </button>
                            <button
                                onClick={() => setLang('en')}
                                className={cn(
                                    "px-3 py-1.5 rounded-full transition-all",
                                    lang === 'en' ? "bg-gold text-charcoal shadow-sm" : "text-charcoal/40 hover:text-charcoal"
                                )}
                                style={lang !== 'en' && scrolled === false && location.pathname === '/' ? { color: 'rgba(255,255,255,0.5)' } : {}}
                            >
                                EN
                            </button>
                        </div>

                        <Link
                            to="/reservation"
                            className={cn(
                                "px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-md active:scale-95",
                                scrolled || location.pathname !== '/'
                                    ? "bg-gold text-charcoal hover:bg-gold-hover shadow-gold/20"
                                    : "bg-white text-charcoal hover:bg-cream"
                            )}
                        >
                            {t('nav.bookNow')}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        {/* Mobile Lang Toggle */}
                        <button
                            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
                            className={cn(
                                "p-2 rounded-xl transition-colors text-[10px] font-black border uppercase",
                                scrolled || location.pathname !== '/' ? "text-charcoal bg-cream-dark/50 border-cream-dark" : "text-white bg-white/10 border-white/20"
                            )}
                        >
                            {lang.toUpperCase()}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "p-2 rounded-xl transition-colors",
                                scrolled || location.pathname !== '/' ? "text-charcoal bg-cream-dark/50" : "text-white bg-white/10"
                            )}
                        >
                            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cream border-b border-cream-dark overflow-hidden shadow-2xl"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-5 py-4 rounded-2xl text-lg font-bold transition-all",
                                        location.pathname === link.path ? "bg-cream-dark text-gold" : "text-charcoal-light hover:bg-cream-dark/30"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    to="/reservation"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-gold text-charcoal p-5 rounded-2xl font-black uppercase tracking-widest shadow-lg active:scale-95 transition-all"
                                >
                                    {t('nav.bookNow')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
