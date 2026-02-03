import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/menu';
import { Globe, Leaf } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Menu() {
    const { lang, t } = useLanguage();

    const categories = ['starters', 'mains', 'desserts', 'drinks'];

    return (
        <div className="bg-cream min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-charcoal mb-3">
                        {t('menuHighlights.title')}
                    </h1>
                    <p className="text-charcoal-light font-medium italic">
                        {t('menuHighlights.subtitle')}
                    </p>
                </div>

                {/* Categories */}
                <div className="space-y-20">
                    {categories.map((catKey) => {
                        const items = menuData[catKey];
                        return (
                            <section key={catKey}>
                                <div className="flex items-center gap-6 mb-10">
                                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-[0.2em] text-gold">
                                        {t(`menuPage.categories.${catKey}`)}
                                    </h2>
                                    <div className="h-0.5 bg-gold/20 flex-grow" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                                    <AnimatePresence mode="wait">
                                        {items.map((item, idx) => (
                                            <motion.div
                                                key={item[lang].name + lang}
                                                layout
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="group relative"
                                            >
                                                <div className="flex justify-between items-baseline mb-3">
                                                    <h3 className="text-lg font-bold text-charcoal group-hover:text-gold transition-colors flex items-center gap-2">
                                                        {item[lang].name}
                                                        {item[lang].desc.toLowerCase().includes('vegetarian') && <Leaf size={14} className="text-green-600" />}
                                                    </h3>
                                                    <span className="text-gold font-black text-sm tabular-nums ml-4 border-b-2 border-dashed border-gold/20 pb-0.5">
                                                        {item.price}
                                                    </span>
                                                </div>
                                                <p className="text-charcoal-light text-sm leading-relaxed font-medium">
                                                    {item[lang].desc}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </section>
                        );
                    })}
                </div>

                <div className="mt-24 p-10 bg-charcoal rounded-[3rem] text-center shadow-xl border border-gold/20">
                    <p className="text-white/80 font-medium italic text-sm">
                        {t('footer.desc')}
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-2">
                        <p className="text-gold text-xs font-black uppercase tracking-widest">
                            {t('common.availability')}
                        </p>
                        <p className="text-white text-xs opacity-60">
                            {t('menuHighlights.helper')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
