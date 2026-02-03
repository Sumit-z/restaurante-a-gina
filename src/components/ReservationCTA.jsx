import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

export default function ReservationCTA() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-cream relative overflow-hidden">
            {/* Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CEA34D 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                <Star size={12} fill="currentColor" />
                                Reserve em 60 Segundos
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-8 leading-tight">
                                {t('reservationCta.title')}
                            </h2>
                            <p className="text-charcoal-light text-lg mb-10 leading-relaxed font-medium">
                                {t('reservationCta.desc')}
                            </p>

                            <ul className="space-y-6 mb-12">
                                {t('reservationCta.features').map((feature, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="shrink-0 mt-1">
                                            <div className="bg-gold text-charcoal p-1 rounded-full">
                                                <CheckCircle2 size={16} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-black text-charcoal">{feature.title}</h4>
                                            <p className="text-sm text-charcoal-light">{feature.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/reservation">
                                    <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-gold/20">
                                        {t('reservationCta.cta')}
                                    </Button>
                                </Link>
                                <a
                                    href="https://wa.me/351912345678"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-green-500/20 hover:scale-[1.02] transition-all"
                                >
                                    {t('reservationCta.whatsapp')}
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
                                alt="Table set for group"
                                className="w-full h-[500px] object-cover"
                            />

                            {/* Rating Badge Overlay */}
                            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-2xl text-center border border-cream-dark">
                                <div className="text-gold font-black text-2xl mb-1">4.5★</div>
                                <div className="text-[10px] font-black uppercase tracking-tighter text-charcoal-light opacity-60">500+ Avaliações</div>
                            </div>
                        </motion.div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-8 -right-8 w-48 h-48 bg-gold/5 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
