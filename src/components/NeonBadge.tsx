import { motion } from 'framer-motion';

type NeonColor = 'cyan' | 'green' | 'neutral';

interface NeonBadgeProps {
  label: string;
  color?: NeonColor;
  animated?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export function NeonBadge({
  label,
  color = 'cyan',
  animated = false,
  icon,
  onClick,
  active = false,
  className = '',
}: NeonBadgeProps) {
  const styles = {
    cyan: {
      border: 'var(--border-accent)',
      text: 'var(--accent)',
      bg: 'rgba(6, 182, 212, 0.07)',
      activeShadow: '0 0 12px var(--accent-glow)',
    },
    green: {
      border: 'rgba(34, 197, 94, 0.35)',
      text: '#22c55e',
      bg: 'rgba(34, 197, 94, 0.07)',
      activeShadow: '0 0 12px rgba(34, 197, 94, 0.3)',
    },
    neutral: {
      border: 'var(--border-subtle)',
      text: 'var(--text-secondary)',
      bg: 'var(--bg-elevated)',
      activeShadow: 'none',
    },
  };

  const s = styles[color];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium
        border transition-all duration-300 select-none
        ${onClick ? 'cursor-pointer' : ''}
        ${animated ? 'animate-pulse' : ''}
        ${className}
      `}
      style={{
        borderColor: active ? s.border : s.border,
        color: s.text,
        background: s.bg,
        boxShadow: active ? s.activeShadow : undefined,
      }}
    >
      {icon && <span>{icon}</span>}
      {label}
    </motion.div>
  );
}
