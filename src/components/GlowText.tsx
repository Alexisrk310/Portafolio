import { motion } from 'framer-motion';

interface GlowTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
  glow?: boolean;
}

export function GlowText({ text, className = '', as: Tag = 'span', glow = true }: GlowTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Tag
        className={`text-gradient-cyan font-black tracking-tight ${glow ? 'glow-text' : ''} ${className}`}
      >
        {text}
      </Tag>
    </motion.div>
  );
}
