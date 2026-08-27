'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, Briefcase, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from './Animations';
import { GlowText } from './GlowText';
import { TypingAnimation } from './TypingAnimation';
import { RippleButton } from './RippleButton';

const stats = [
  { icon: Briefcase, value: '3+', label: 'Años exp.' },
  { icon: Globe, value: 'Remoto', label: 'Disponible' },
];

const currentMonthYear = new Intl.DateTimeFormat('es-ES', {
  month: 'long',
  year: 'numeric',
}).format(new Date());
const formattedMonthYear =
  currentMonthYear.charAt(0).toUpperCase() + currentMonthYear.slice(1);

export function HeroSection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-6 pt-24 sm:pt-0 px-4 sm:px-0 text-center sm:text-left relative z-10"
    >
      {/* Disponibilidad */}
      <motion.div variants={fadeInUp} className="flex items-center gap-2 justify-center sm:justify-start">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
        </span>
        <span
          className="text-xs font-mono font-medium tracking-wider uppercase"
          style={{ color: 'var(--text-muted)' }}
        >
          Disponible para contratar · {formattedMonthYear}
        </span>
      </motion.div>

      {/* Nombre */}
      <motion.div variants={fadeInUp} className="space-y-2">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
          <GlowText text="Alexis" as="span" className="text-5xl sm:text-6xl lg:text-7xl" />
          <span className="text-5xl sm:text-6xl lg:text-7xl font-black" style={{ color: 'var(--text-primary)' }}> Gutierrez</span>
        </h1>

        {/* Rol fijo + typing */}
        <div
          className="text-xl sm:text-2xl lg:text-3xl font-bold min-h-[2.5rem] flex items-center justify-center sm:justify-start gap-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          <span className="font-mono text-base" style={{ color: 'var(--text-muted)' }}>&gt;</span>
          <span style={{ color: 'var(--accent)' }}>
            <TypingAnimation
              words={[
                'Full Stack Developer',
                'React & Next.js',
                'Node.js + APIs REST',
              ]}
              speed={70}
              deleteSpeed={45}
              delay={2200}
              className="text-xl sm:text-2xl lg:text-3xl font-bold"
            />
          </span>
        </div>
      </motion.div>

      {/* Propuesta de valor */}
      <motion.p
        variants={fadeInUp}
        className="text-base sm:text-lg max-w-xl mx-auto sm:mx-0 leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        3 años construyendo{' '}
        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
          apps en producción
        </span>{' '}
        para clientes reales — de la UI al servidor.{' '}
        <span className="font-semibold" style={{ color: 'var(--accent)' }}>
          Entrego, no solo demuestro.
        </span>
      </motion.p>

      {/* Botones CTA */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row gap-4 pt-2 justify-center sm:justify-start"
      >
        <RippleButton
          variant="primary"
          size="lg"
          onClick={() => window.open('/cv/HV-ALEXIS-GUTIERREZ.pdf')}
        >
          <Download className="h-5 w-5" />
          Descargar CV
        </RippleButton>

        <RippleButton
          variant="outline"
          size="lg"
          onClick={() => {
            document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Ver Proyectos
          <ArrowRight className="h-4 w-4" />
        </RippleButton>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={fadeInUp}
        className="flex items-center justify-center sm:justify-start gap-8 pt-2"
      >
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center sm:items-start gap-0.5">
            <div className="flex items-center gap-1.5">
              <Icon className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
              <span className="font-bold text-lg leading-none" style={{ color: 'var(--text-primary)' }}>
                {value}
              </span>
            </div>
            <span
              className="text-xs font-medium uppercase tracking-wide"
              style={{ color: 'var(--text-muted)' }}
            >
              {label}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
