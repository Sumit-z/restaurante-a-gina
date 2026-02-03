import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    const contactInfo = [
        {
            icon: <MapPin className="text-gold" size={24} />,
            title: t('contactPage.infoTitles.location'),
            details: ["Parque Mayer", "1250-096 Lisbon, Portugal"]
        },
        {
            icon: <Phone className="text-gold" size={24} />,
            title: t('contactPage.infoTitles.call'),
            details: ["+351 21 342 0296"]
        },
        {
            icon: <Mail className="text-gold" size={24} />,
            title: t('contactPage.infoTitles.email'),
            details: ["geral@restauranteagina.pt", "reservas@restauranteagina.pt"]
        }
    ];

    return (
        <div className="bg-cream min-h-screen pt-40 pb-20 px-4">
            {/* Contact Content */}
            <section className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-black text-charcoal mb-6">{t('contactPage.title')}</h1>
                    <p className="text-charcoal-light max-w-2xl mx-auto text-lg leading-relaxed font-medium italic">
                        {t('contactPage.desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {contactInfo.map((info, idx) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-12 rounded-[3.5rem] text-center border border-cream-dark shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="bg-cream w-20 h-20 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
                                {info.icon}
                            </div>
                            <h3 className="text-xl font-black text-charcoal mb-4 uppercase tracking-widest">{info.title}</h3>
                            {info.details.map((detail, i) => (
                                <p key={i} className="text-charcoal-light font-medium">{detail}</p>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Map & Hours Section */}
            <section className="mt-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Opening Hours Card */}
                <div className="bg-charcoal p-12 md:p-16 rounded-[4rem] shadow-2xl border border-gold/10 text-white">
                    <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-gold uppercase tracking-[0.2em]">
                        {t('contactPage.hoursTitle')}
                    </h2>
                    <div className="space-y-6">
                        {[
                            { day: t('common.daily'), hours: "12:00 - 23:30", highlight: true },
                        ].map((item) => (
                            <div key={item.day} className={`flex justify-between items-center pb-4 border-b border-white/10 ${item.highlight ? 'text-gold' : ''}`}>
                                <span className={`font-bold uppercase tracking-widest text-xs ${item.highlight ? 'text-gold' : 'text-white/60'}`}>{item.day}</span>
                                <span className="font-black tabular-nums">{item.hours}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-10 border-t border-white/10 flex items-center gap-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{t('contactPage.follow')}</span>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/restauranteagina" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-gold hover:text-charcoal p-4 rounded-2xl transition-all shadow-xl">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/restauranteagina" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-gold hover:text-charcoal p-4 rounded-2xl transition-all shadow-xl">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Map Embed */}
                <div className="h-[600px] w-full bg-cream-dark rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.123456789!2d-9.146!3d38.719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQzJzA4LjQiTiA5wrAwOCc0NS42Ilc!5e0!3m2!1sen!2spt!4v1700000000000!5m2!1sen!2spt"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.9)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lisbon Location"
                    />
                </div>
            </section>
        </div>
    );
}
