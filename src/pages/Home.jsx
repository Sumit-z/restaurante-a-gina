import { motion } from 'framer-motion';
import { Star, ArrowRight, Utensils, Heart, MapPin, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import MenuHighlights from '../components/MenuHighlights';
import ReservationCTA from '../components/ReservationCTA';
import heroImage from '../assets/hero.png';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center text-white">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Restaurant Atmosphere"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-charcoal/60" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 max-w-4xl px-4 text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gold/30 text-gold font-bold tracking-widest uppercase text-xs mb-6"
                    >
                        <Star size={14} fill="currentColor" />
                        {t('hero.badge')}
                    </motion.div>
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        {t('hero.title')} <br />
                        <span className="text-gold italic">{t('hero.titleSpan')}</span>
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-medium"
                    >
                        {t('hero.desc')}
                    </motion.p>
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/reservation">
                            <Button size="lg" className="w-full sm:w-auto flex items-center gap-2 group">
                                {t('hero.reserveCta')}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link to="/menu">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                {t('hero.viewMenu')}
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Perfected Squiggly divider */}
                <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
                    <svg
                        className="relative block w-[calc(100%+1.3px)] h-[60px]"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V120H1200V0C1113,66.76,989.49,106.05,820,86.5c-34.6-11.5-68.3-23.34-104.45-29.34C644.45,45.36,575.42,52.24,506.15,70.24c-70.66,18.38-144.36,39.62-218.2,35.26-70.47-4.19-136.44-32.13-206.8-37.5C26.3,64.21,11.3,58.82,0,46.29Z"
                            className="fill-cream"
                        ></path>
                    </svg>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">{t('trust.title')}</h2>
                        <p className="text-charcoal-light font-medium tracking-wide italic">{t('trust.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors text-gold">
                                <Utensils size={32} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 uppercase tracking-widest text-charcoal">{t('trust.catch.title')}</h3>
                            <p className="text-charcoal-light text-sm leading-relaxed px-4 font-medium">{t('trust.catch.desc')}</p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group text-center"
                        >
                            <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors text-gold">
                                <ChefHat size={32} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 uppercase tracking-widest text-charcoal">{t('trust.recipes.title')}</h3>
                            <p className="text-charcoal-light text-sm leading-relaxed px-4 font-medium">{t('trust.recipes.desc')}</p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group text-center"
                        >
                            <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors text-gold">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 uppercase tracking-widest text-charcoal">{t('trust.atmosphere.title')}</h3>
                            <p className="text-charcoal-light text-sm leading-relaxed px-4 font-medium">{t('trust.atmosphere.desc')}</p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group text-center"
                        >
                            <div className="bg-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors text-gold">
                                <MapPin size={32} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 uppercase tracking-widest text-charcoal">{t('trust.location.title')}</h3>
                            <p className="text-charcoal-light text-sm leading-relaxed px-4 font-medium">{t('trust.location.desc')}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* NEW: Menu Highlights */}
            <MenuHighlights />

            {/* NEW: Reservation CTA */}
            <ReservationCTA />

            {/* Bottom CTA Banner (Refining previous one) */}
            <section className="py-12 bg-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.98 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-12 bg-white rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-cream-dark shadow-sm"
                    >
                        <div>
                            <div className="flex gap-1 text-gold mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('trust.ctaTitle')}</h2>
                            <p className="text-charcoal-light text-lg">
                                {t('trust.ctaDesc')}
                            </p>
                        </div>
                        <div className="shrink-0 flex flex-col gap-2 items-center">
                            <Link to="/reservation">
                                <Button size="lg">{t('trust.ctaButton')}</Button>
                            </Link>
                            <p className="text-[10px] text-charcoal-light font-bold uppercase tracking-tighter">{t('trust.ctaSmall')}</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
