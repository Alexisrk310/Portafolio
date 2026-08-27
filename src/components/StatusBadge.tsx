import { motion } from 'framer-motion';

interface StatusBadgeProps {
  label?: string;
  className?: string;
}

export function StatusBadge({ label = 'Disponible para trabajar', className = '' }: StatusBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-full
        bg-green-500/10 border border-green-500/30
        text-green-400 text-sm font-medium
        ${className}
      `}
    >
      <span
        className="w-2 h-2 rounded-full bg-green-400 status-dot flex-shrink-0"
      />
      {label}
    </motion.div>
  );
}
