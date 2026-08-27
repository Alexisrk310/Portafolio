import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { LucideIcon } from 'lucide-react';
import { TechIcon, iconMap } from './TechIcon';

interface SkillGroup {
  category: string;
  color: string;
  icon: LucideIcon;
  skills: string[];
}

interface Props {
  technologies: SkillGroup[];
}

const SkillGroupList: FC<Props> = ({ technologies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologies.map(({ category, color, icon: Icon, skills }, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="group rounded-2xl p-5 border transition-all duration-300 card-glow"
          style={{
            background: 'var(--bg-elevated)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          {/* Header de categoría */}
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-10 h-10 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center shadow-md`}>
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Icon className="h-5 w-5 text-white" />
              </motion.div>
            </div>
            <h3 className="text-base font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              {category}
            </h3>
            <span
              className="ml-auto text-xs font-mono px-2 py-0.5 rounded-full"
              style={{ background: 'var(--border-subtle)', color: 'var(--text-muted)' }}
            >
              {skills.length}
            </span>
          </div>

          {/* Skills — con icono de marca si existe, texto si no */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              const hasIcon = !!iconMap[skill];
              return (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.06, y: -1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border cursor-default transition-all duration-200"
                  style={{
                    background: 'var(--bg-surface)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  {hasIcon && <TechIcon name={skill} size={13} />}
                  <span
                    className="text-[11px] font-mono font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {skill}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillGroupList;
