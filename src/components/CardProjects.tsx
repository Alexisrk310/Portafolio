import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface Project {
  image?: string;
  title: string;
  description: string;
  category: string;
  link: string;
  github: string;
  tags: string[];
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const maxTags = 4;
  const [expanded, setExpanded] = useState(false);
  const [tagsExpanded, setTagsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <TiltCard className="h-full" glowColor="rgba(6, 182, 212, 0.08)">
        <div
          className="h-full flex flex-col rounded-2xl overflow-hidden border transition-all duration-300"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          {/* Imagen */}
          <div className="relative overflow-hidden aspect-video">
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                  parent.style.background = 'linear-gradient(135deg, var(--bg-elevated), var(--bg-card))';
                  parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-weight:900;color:var(--text-muted)">${project.title.slice(0, 2).toUpperCase()}</div>`;
                }
              }}
            />
            {/* Overlay gradiente sutil */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 50%)' }}
            />

            {/* Badge categoría */}
            <div className="absolute top-3 left-3 flex items-center gap-2 flex-wrap">
              <span
                className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold"
                style={{
                  background: 'var(--bg-elevated)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                }}
              >
                {project.category}
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            <div>
              <h3
                className="text-base font-bold mb-1.5 transition-colors duration-300 group-hover:text-[var(--accent)]"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.description}
              </p>
              {project.description.length > 140 && (
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  className="mt-1 text-xs font-semibold"
                  style={{ color: 'var(--accent)' }}
                >
                  {expanded ? 'Ver menos' : 'Ver más'}
                </button>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
              {(tagsExpanded ? project.tags : project.tags.slice(0, maxTags)).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono"
                  style={{
                    color: 'var(--text-muted)',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > maxTags && (
                <button
                  type="button"
                  onClick={() => setTagsExpanded((prev) => !prev)}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold cursor-pointer"
                  style={{ color: 'var(--accent)' }}
                >
                  {tagsExpanded ? 'Ver menos' : `+${project.tags.length - maxTags} más`}
                </button>
              )}
            </div>

            {/* Botones — siempre visibles (no solo hover) */}
            <div className="flex items-center gap-2 pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
              {project.link && project.link !== '#' && (
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex-1 justify-center"
                  style={{
                    background: 'rgba(6, 182, 212, 0.08)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                  }}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Demo
                </motion.a>
              )}
              {project.github && project.github !== '#' && (
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex-1 justify-center"
                  style={{
                    background: 'var(--bg-elevated)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <Github className="h-3.5 w-3.5" />
                  Código
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};
