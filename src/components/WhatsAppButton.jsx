import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "351912345678"; // Example Portuguese number
    const message = encodeURIComponent("Hello! I would like to make a reservation at Restaurante A Gina.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center border-4 border-cream shadow-charcoal/20"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle size={32} fill="currentColor" />
            <span className="absolute -top-1 -right-1 bg-gold text-charcoal text-[9px] font-black px-2 py-0.5 rounded-full border border-cream uppercase tracking-tighter">
                Online
            </span>
        </a>
    );
}
