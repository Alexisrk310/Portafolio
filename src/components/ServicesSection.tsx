import { motion } from 'framer-motion';
import { Globe, Code2, Cpu, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Full Stack Development',
    description:
      'Apps web completas de principio a fin: UI, API REST, base de datos, autenticación y deploy en producción.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    borderColor: 'var(--border-accent)',
    iconBg: 'rgba(6, 182, 212, 0.08)',
  },
  {
    icon: Code2,
    title: 'Frontend Premium',
    description:
      'Interfaces de alto impacto con React y Next.js. Animaciones fluidas, Core Web Vitals y SEO incluidos.',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind'],
    borderColor: 'var(--border-subtle)',
    iconBg: 'rgba(14, 165, 233, 0.08)',
  },
  {
    icon: Cpu,
    title: 'DevOps & Automatización',
    description:
      'Pipelines CI/CD, containerización con Docker y deploy automatizado. Menos tiempo manual, más entregas.',
    tags: ['Docker', 'GitHub Actions', 'Vercel', 'Bash'],
    borderColor: 'var(--border-subtle)',
    iconBg: 'rgba(6, 182, 212, 0.06)',
  },
  {
    icon: BookOpen,
    title: 'Consultoría Técnica',
    description:
      'Code review, arquitectura de software, refactoring y decisiones tecnológicas alineadas al negocio.',
    tags: ['SOLID', 'Clean Code', 'Git Flow', 'Figma'],
    borderColor: 'var(--border-subtle)',
    iconBg: 'rgba(14, 165, 233, 0.06)',
  },
];

export function ServicesSection() {
  return (
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 relative"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="container mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Servicios{' '}
            <span className="text-gradient">Profesionales</span>
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Soluciones completas — desde el diseño hasta el servidor. Disponible para full-time, part-time o por proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex flex-col p-5 sm:p-6 rounded-2xl border transition-all duration-300"
              style={{
                background: 'var(--bg-elevated)',
                borderColor: service.borderColor,
              }}
            >
              {/* Icono animado */}
              <motion.div
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 self-start"
                style={{ background: service.iconBg }}
              >
                <service.icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
              </motion.div>

              <h3
                className="font-bold text-base mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1 mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                {service.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium"
                    style={{
                      color: 'var(--accent)',
                      background: 'rgba(6, 182, 212, 0.07)',
                      border: '1px solid rgba(6, 182, 212, 0.18)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
