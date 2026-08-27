import { motion } from 'framer-motion';
import React from 'react';
import { Zap, Rocket, Globe, LucideIcon } from 'lucide-react';

const iconComponents: Record<string, LucideIcon> = {
  Zap,
  Rocket,
  Globe,
};

const iconColors: Record<string, string> = {
  Zap: 'text-cyan-400',
  Rocket: 'text-sky-400',
  Globe: 'text-cyan-400',
};

interface StartProjectCardProps {
  iconName?: string;
  icon?: React.ReactNode;
  value: string;
  title: string;
  index: number;
}

const StartProjectCard: React.FC<StartProjectCardProps> = ({ iconName, icon, value, title, index }) => {
  const IconComp = iconName ? iconComponents[iconName] : null;
  const colorClass = iconName ? (iconColors[iconName] ?? 'text-cyan-400') : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2 p-4 rounded-xl"
      style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: 'var(--bg-surface)' }}
      >
        {IconComp ? (
          <IconComp className={`h-5 w-5 ${colorClass}`} />
        ) : (
          <span className="text-xl">{icon}</span>
        )}
      </motion.div>
      <div className="font-bold text-lg" style={{ color: 'var(--accent)' }}>{value}</div>
      <div className="text-xs font-mono text-center" style={{ color: 'var(--text-secondary)' }}>{title}</div>
    </motion.div>
  );
};

export default StartProjectCard;
