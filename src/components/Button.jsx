import { cn } from "../utils/cn";

export default function Button({
    children,
    variant = 'primary',
    className,
    size = 'md',
    ...props
}) {
    const variants = {
        primary: "bg-gold text-charcoal hover:bg-gold-hover shadow-md",
        secondary: "bg-white text-charcoal border border-cream-dark hover:bg-cream/50",
        outline: "bg-transparent text-gold border-2 border-gold hover:bg-gold/10",
        ghost: "bg-transparent text-charcoal/70 hover:bg-cream-dark/30 hover:text-charcoal"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg font-bold"
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-full font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
