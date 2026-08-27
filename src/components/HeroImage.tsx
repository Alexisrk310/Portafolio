'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiDocker,
} from 'react-icons/si';
import { NeonBadge } from './NeonBadge';

const floatingBadges = [
  {
    icon: <SiReact className="h-3.5 w-3.5 text-cyan-400" />,
    label: 'React',
    color: 'cyan' as const,
    pos: 'top-4 -left-14 sm:-left-16',
    delay: 0,
    duration: 3,
  },
  {
    icon: <SiNodedotjs className="h-3.5 w-3.5 text-green-400" />,
    label: 'Node.js',
    color: 'cyan' as const,
    pos: 'top-10 -right-14 sm:-right-16',
    delay: 0.5,
    duration: 3.5,
  },
  {
    icon: <SiTypescript className="h-3.5 w-3.5 text-blue-400" />,
    label: 'TypeScript',
    color: 'neutral' as const,
    pos: 'bottom-20 -left-14 sm:-left-16',
    delay: 1,
    duration: 4,
  },
  {
    icon: <SiDocker className="h-3.5 w-3.5 text-sky-400" />,
    label: 'Docker',
    color: 'cyan' as const,
    pos: 'bottom-8 -right-14 sm:-right-16',
    delay: 1.5,
    duration: 3.2,
  },
];

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
      className="relative flex justify-center items-center py-12 sm:py-0"
    >
      <div className="relative w-[240px] sm:w-[280px] md:w-[320px]">

        {/* Halo de fondo */}
        <div className="absolute inset-0 rounded-full blur-3xl scale-125 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(14,165,233,0.06) 60%, transparent 100%)' }} />

        {/* Anillo estático con gradiente cyan/sky */}
        <div
          className="relative rounded-full p-[3px]"
          style={{
            background: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #38bdf8, #0ea5e9)',
          }}
        >
          <div className="rounded-full p-[3px]" style={{ background: 'var(--bg-base)' }}>
            <img
              src="/perfil.jpg"
              alt="Alexis Gutierrez — Full Stack Developer"
              className="w-full aspect-square rounded-full object-cover"
              loading="eager"
              decoding="async"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.src =
                  'data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22300%22 height%3D%22300%22 viewBox%3D%220 0 300 300%22%3E%3Crect width%3D%22300%22 height%3D%22300%22 fill%3D%22%231e2536%22%2F%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 font-size%3D%22110%22 font-weight%3D%22bold%22 fill%3D%22%2306b6d4%22%3EAG%3C%2Ftext%3E%3C%2Fsvg%3E';
              }}
            />
          </div>
        </div>

        {/* Floating Tech Badges */}
        {floatingBadges.map((badge) => (
          <motion.div
            key={badge.label}
            className={`absolute ${badge.pos} z-10`}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: badge.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: badge.delay,
            }}
          >
            <NeonBadge
              label={badge.label}
              color={badge.color}
              icon={badge.icon}
              className="shadow-lg backdrop-blur-sm"
            />
          </motion.div>
        ))}

        {/* Badge de años — estático, sin rotación */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full gradient-animated flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.4)]">
            <div className="text-center">
              <div className="text-white font-black text-lg leading-none">3+</div>
              <div className="text-white/75 text-[8px] font-mono uppercase tracking-wider">años</div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
