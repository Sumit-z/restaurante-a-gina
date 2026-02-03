import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-charcoal text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center mb-6">
                            <Logo light={true} />
                        </Link>
                        <p className="text-white/60 mb-8 leading-relaxed font-medium italic">
                            "{t('footer.desc')}"
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/restauranteagina" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/restauranteagina" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold font-black uppercase tracking-widest text-xs mb-8">{t('footer.nav')}</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-white/60 hover:text-white transition-colors">{t('nav.home')}</Link></li>
                            <li><Link to="/menu" className="text-white/60 hover:text-white transition-colors">{t('nav.menu')}</Link></li>
                            <li><Link to="/reservation" className="text-white/60 hover:text-white transition-colors">{t('nav.reservation')}</Link></li>
                            <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-gold font-black uppercase tracking-widest text-xs mb-8">{t('footer.visit')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/60">
                                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                                <span>Parque Mayer, Lisbon<br />1250-096 Portugal</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60">
                                <Phone size={18} className="text-gold" />
                                <span>+351 21 342 0296</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60">
                                <Mail size={18} className="text-gold" />
                                <span>geral@restauranteagina.pt</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-gold font-black uppercase tracking-widest text-xs mb-8">{t('footer.hours')}</h4>
                        <ul className="space-y-4">
                            <li className="flex justify-between text-white/60">
                                <span>{t('common.daily')}:</span>
                                <span className="text-white font-bold">12:00 - 23:30</span>
                            </li>
                            <li className="mt-6">
                                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                                    {t('common.online')}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40 font-bold uppercase tracking-widest">
                    <p>© 2025 Restaurante A Gina. {t('footer.allRights')}.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
