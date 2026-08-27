import { motion } from 'framer-motion';

const categories = ['Todos', 'Full Stack', 'Frontend', 'Backend', 'Automatización'];

interface FilterBarProps {
  active: string;
  onChange: (cat: string) => void;
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
    >
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onChange(cat)}
            className="px-4 py-1.5 rounded-full text-sm font-mono font-medium border transition-all duration-200"
            style={{
              background: isActive ? 'var(--accent)' : 'var(--bg-elevated)',
              color: isActive ? '#ffffff' : 'var(--text-secondary)',
              borderColor: isActive ? 'var(--accent)' : 'var(--border-subtle)',
              boxShadow: isActive ? '0 0 14px var(--accent-glow)' : undefined,
            }}
          >
            {cat}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
