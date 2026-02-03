import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone, Mail, User, CheckCircle2, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export default function Reservation() {
    const { t } = useLanguage();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        guests: '2',
        phone: '',
        email: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e, type) => {
        e.preventDefault();

        const message = `New Reservation Request:
Name: ${formData.name}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Phone: ${formData.phone}
Email: ${formData.email}
Notes: ${formData.notes || 'None'}`;

        if (type === 'whatsapp') {
            const whatsappUrl = `https://wa.me/351912345678?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        } else {
            const mailtoUrl = `mailto:info@restauranteagina.pt?subject=New Reservation - ${formData.name}&body=${encodeURIComponent(message)}`;
            window.location.href = mailtoUrl;
        }

        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="bg-cream min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full text-center p-12 bg-white rounded-[3rem] shadow-xl border border-cream-dark"
                >
                    <div className="bg-gold/10 text-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={48} />
                    </div>
                    <h1 className="text-3xl font-black text-charcoal mb-4">{t('reservationPage.success.title')}</h1>
                    <p className="text-charcoal-light mb-8 text-lg font-medium leading-relaxed">
                        {t('reservationPage.success.desc').replace('{name}', formData.name.split(' ')[0])}
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>{t('reservationPage.success.cta')}</Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-cream min-h-screen pt-40 pb-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                {/* Left Side: Info */}
                <div className="lg:w-2/5">
                    <div className="inline-flex items-center gap-2 bg-gold/10 text-gold font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-6">
                        <Clock size={14} />
                        {t('reservationPage.badge')}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-charcoal mb-8 leading-tight">{t('reservationPage.title')}</h1>
                    <p className="text-charcoal-light mb-12 text-lg font-medium leading-relaxed">
                        {t('reservationPage.desc')}
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-5">
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-cream-dark text-gold shrink-0">
                                <ShieldCheck size={28} />
                            </div>
                            <div>
                                <p className="font-bold text-charcoal">{t('reservationPage.features.confirmation')}</p>
                                <p className="text-sm text-charcoal-light">{t('reservationPage.features.confirmationDesc')}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-5">
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-cream-dark text-gold shrink-0">
                                <Calendar size={28} />
                            </div>
                            <div>
                                <p className="font-bold text-charcoal">{t('reservationPage.features.flexible')}</p>
                                <p className="text-sm text-charcoal-light">{t('reservationPage.features.flexibleDesc')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:w-3/5 bg-white p-8 md:p-14 rounded-[3.5rem] shadow-2xl border border-cream-dark relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -mr-10 -mt-10" />

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        {/* Name */}
                        <div className="col-span-1 md:col-span-2 space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-charcoal-light flex items-center gap-2 px-1">
                                <User size={14} className="text-gold" /> {t('reservationPage.form.fullName')}
                            </label>
                            <input
                                type="text" required name="name" value={formData.name} onChange={handleChange}
                                placeholder="Ex: Manuel Silva"
                                className="w-full bg-cream/30 border-2 border-transparent rounded-[1.5rem] px-6 py-4 focus:bg-white focus:border-gold outline-none transition-all font-medium text-charcoal"
                            />
                        </div>

                        {/* Date */}
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-charcoal-light flex items-center gap-2 px-1">
                                <Calendar size={14} className="text-gold" /> {t('reservationPage.form.date')}
                            </label>
                            <input
                                type="date" required name="date" value={formData.date} onChange={handleChange}
                                className="w-full bg-cream/30 border-2 border-transparent rounded-[1.5rem] px-6 py-4 focus:bg-white focus:border-gold outline-none transition-all font-medium text-charcoal"
                            />
                        </div>

                        {/* Time */}
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-charcoal-light flex items-center gap-2 px-1">
                                <Clock size={14} className="text-gold" /> {t('reservationPage.form.time')}
                            </label>
                            <input
                                type="time" required name="time" value={formData.time} onChange={handleChange}
                                className="w-full bg-cream/30 border-2 border-transparent rounded-[1.5rem] px-6 py-4 focus:bg-white focus:border-gold outline-none transition-all font-medium text-charcoal"
                            />
                        </div>

                        {/* Guests */}
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-charcoal-light flex items-center gap-2 px-1">
                                <Users size={14} className="text-gold" /> {t('reservationPage.form.guests')}
                            </label>
                            <select
                                name="guests" value={formData.guests} onChange={handleChange}
                                className="w-full bg-cream/30 border-2 border-transparent rounded-[1.5rem] px-6 py-4 focus:bg-white focus:border-gold outline-none transition-all font-bold text-charcoal"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <option key={n} value={n}>{n} {t('reservationPage.form.persons')}</option>)}
                            </select>
                        </div>

                        {/* Phone */}
                        <div className="space-y-3">
                            <label className="text-xs font-black uppercase tracking-widest text-charcoal-light flex items-center gap-2 px-1">
                                <Phone size={14} className="text-gold" /> {t('reservationPage.form.phone')}
                            </label>
                            <input
                                type="tel" required name="phone" value={formData.phone} onChange={handleChange}
                                placeholder="+351 --- --- ---"
                                className="w-full bg-cream/30 border-2 border-transparent rounded-[1.5rem] px-6 py-4 focus:bg-white focus:border-gold outline-none transition-all font-medium text-charcoal"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="col-span-1 md:col-span-2 grid grid-cols-1 gap-4 pt-6">
                            <Button
                                onClick={(e) => handleSubmit(e, 'whatsapp')}
                                size="lg"
                                className="bg-gold text-charcoal hover:bg-gold-hover py-5 text-sm uppercase tracking-widest rounded-3xl"
                            >
                                {t('reservationPage.form.submitWhatsapp')}
                            </Button>
                            <button
                                onClick={(e) => handleSubmit(e, 'email')}
                                className="text-charcoal-light font-bold text-xs uppercase tracking-widest hover:text-gold transition-colors py-2"
                            >
                                {t('reservationPage.form.submitEmail')}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 pt-8 border-t border-cream-dark text-center">
                        <p className="text-[10px] font-black uppercase tracking-tighter text-charcoal-light opacity-60">
                            {t('reservationPage.form.policy')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
