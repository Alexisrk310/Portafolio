import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

type AccentColor = 'cyan' | 'violet' | 'fuchsia' | 'green' | 'amber';

interface SectionLabelProps {
  icon: LucideIcon;
  text: string;
  color?: AccentColor;
}

const colorMap: Record<AccentColor, { text: string; bg: string; glow: string }> = {
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    glow: 'shadow-[0_0_10px_rgba(6,182,212,0.3)]',
  },
  violet: {
    text: 'text-violet-400',
    bg: 'bg-violet-500/10',
    glow: 'shadow-[0_0_10px_rgba(124,58,237,0.3)]',
  },
  fuchsia: {
    text: 'text-fuchsia-400',
    bg: 'bg-fuchsia-500/10',
    glow: 'shadow-[0_0_10px_rgba(217,70,239,0.3)]',
  },
  green: {
    text: 'text-green-400',
    bg: 'bg-green-500/10',
    glow: 'shadow-[0_0_10px_rgba(34,197,94,0.3)]',
  },
  amber: {
    text: 'text-amber-400',
    bg: 'bg-amber-500/10',
    glow: 'shadow-[0_0_10px_rgba(245,158,11,0.3)]',
  },
};

export function SectionLabel({ icon: Icon, text, color = 'cyan' }: SectionLabelProps) {
  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-current/20 text-xs font-mono uppercase tracking-widest mb-4 ${c.text} ${c.bg} ${c.glow}`}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon className="h-3.5 w-3.5" />
      </motion.div>
      {text}
    </motion.div>
  );
}
