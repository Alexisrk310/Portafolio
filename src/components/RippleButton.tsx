import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function RippleButton({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  ...props
}: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
    onClick?.(e);
  };

  const sizeClasses = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dim)] text-white shadow-md hover:shadow-[0_0_20px_var(--accent-glow)] border-0',
    outline:
      'bg-transparent border text-[var(--accent)] hover:bg-[rgba(6,182,212,0.06)] hover:shadow-[0_0_12px_var(--accent-glow)]',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-white/5',
  };

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={variant === 'outline' ? { borderColor: 'var(--border-accent)' } : undefined}
      className={`
        relative overflow-hidden rounded-full font-semibold
        transition-all duration-300 flex items-center justify-center gap-2
        ${sizeClasses[size]} ${variantClasses[variant]} ${className}
      `}
      onClick={handleClick}
      {...(props as any)}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/20 pointer-events-none"
          style={{
            left: ripple.x - 40,
            top: ripple.y - 40,
            width: 80,
            height: 80,
            animation: 'ripple-expand 0.6s ease-out forwards',
          }}
        />
      ))}
      <style>{`
        @keyframes ripple-expand {
          from { transform: scale(0); opacity: 0.6; }
          to { transform: scale(6); opacity: 0; }
        }
      `}</style>
      {children}
    </motion.button>
  );
}
