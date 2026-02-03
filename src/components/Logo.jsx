import React from 'react';
import { cn } from '../utils/cn';

export default function Logo({ className, light = false }) {
    return (
        <div className={cn("relative flex flex-col items-center justify-center font-serif select-none", className)}>
            <div className={cn(
                "relative flex flex-col items-center justify-center border-2 px-4 py-2 rounded-[1.5rem] overflow-hidden",
                light ? "border-gold bg-charcoal shadow-xl" : "border-gold/30 bg-gold/5"
            )}>
                {/* Texture/Glint overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                <span className={cn(
                    "text-[0.5rem] uppercase tracking-[0.3em] font-medium leading-none mb-1",
                    light ? "text-gold/80" : "text-gold/60"
                )}>
                    Restaurante
                </span>

                <span className={cn(
                    "text-xl md:text-2xl font-black uppercase tracking-tighter leading-none italic",
                    light ? "text-white" : "text-gold"
                )}>
                    A GINA
                </span>

                {/* Decorative dots */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gold/40" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gold/40" />
            </div>
        </div>
    );
}
