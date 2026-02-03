import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

// Import images (using the ones we have)
import bacalhauImg from '../assets/bacalhau.png';
import ameijoasImg from '../assets/ameijoas.png'; // Using this for Gambas as they are both seafood classics

export default function MenuHighlights() {
    const { t } = useLanguage();

    const highlights = [
        {
            id: 'gambas',
            image: ameijoasImg,
            price: '15.00€'
        },
        {
            id: 'bacalhau',
            image: bacalhauImg,
            price: '20.00€'
        },
        {
            id: 'tomahawk',
            image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
            price: '80.00€'
        }
    ];

    return (
        <section className="py-24 bg-charcoal relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6"
                        >
                            <Star size={14} fill="currentColor" />
                            Signature Selection
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-white mb-6"
                        >
                            {t('menuHighlights.title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/60 text-lg font-medium italic"
                        >
                            {t('menuHighlights.subtitle')}
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/menu" className="group flex items-center gap-3 bg-white/5 hover:bg-gold text-white hover:text-charcoal px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border border-white/10 hover:border-gold">
                            {t('menuHighlights.cta')}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="bg-cream rounded-[2.5rem] overflow-hidden p-3 transition-transform hover:-translate-y-2 duration-500 shadow-2xl">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                                    <img
                                        src={item.image}
                                        alt={item.id}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-xl">
                                        <p className="text-charcoal font-black text-sm">{item.price}</p>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <div className="bg-gold text-charcoal px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                            {t(`menuHighlights.dishes.${item.id}.badge`)}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-black text-charcoal mb-2 group-hover:text-gold transition-colors">
                                        {t(`menuHighlights.dishes.${item.id}.name`)}
                                    </h3>
                                    <p className="text-charcoal-light text-sm font-medium leading-relaxed italic">
                                        {t(`menuHighlights.dishes.${item.id}.desc`)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                        {t('menuHighlights.helper')}
                    </p>
                </div>
            </div>
        </section>
    );
}
