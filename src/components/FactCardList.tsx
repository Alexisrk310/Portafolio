import { motion } from 'framer-motion';
import React from 'react';
import {
  MapPin,
  Calendar,
  Languages,
  Briefcase,
  CheckCircle2,
  Globe,
  LucideIcon,
} from 'lucide-react';

const iconComponents: Record<string, LucideIcon> = {
  MapPin,
  Calendar,
  Languages,
  Briefcase,
  CheckCircle2,
  Globe,
};

const iconColors: Record<string, string> = {
  MapPin: 'text-cyan-400',
  Calendar: 'text-sky-400',
  Languages: 'text-cyan-400',
  Briefcase: 'text-amber-400',
  CheckCircle2: 'text-green-400',
  Globe: 'text-sky-400',
};

interface Fact {
  iconName?: string;
  icon?: React.ReactNode;
  label: string;
  value: string;
}

interface FactCardListProps {
  data: Fact[];
}

const FactCardList: React.FC<FactCardListProps> = ({ data }) => {
  return (
    <div className="space-y-2">
      {data.map((fact, index) => {
        const IconComp = fact.iconName ? iconComponents[fact.iconName] : null;
        const colorClass = fact.iconName ? (iconColors[fact.iconName] ?? 'text-cyan-400') : '';

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group"
            style={{ background: 'var(--bg-surface)' }}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--bg-elevated)' }}
            >
              {IconComp ? (
                <IconComp className={`h-4 w-4 ${colorClass}`} />
              ) : (
                <span className="text-lg">{fact.icon}</span>
              )}
            </motion.div>
            <div className="min-w-0">
              <div className="text-xs font-mono uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                {fact.label}
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                {fact.value}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FactCardList;
