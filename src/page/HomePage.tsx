import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from 'lucide-react';

import { ProjectCard } from '@/components/CardProjects';
import { DiscordContact } from '@/components/DiscordContact';
import { DownloadCVButton } from '@/components/DownloadCVButton';
import { EducationCard } from '@/components/EducationCard';
import { ExperienceItem } from '@/components/ExperienceItem';
import FactCardList from '@/components/FactCardList';
import { FilterBar } from '@/components/FilterBar';
import { HeroImage } from '@/components/HeroImage';
import { HeroSection } from '@/components/HeroSection';
import HobbyCard from '@/components/HobbyCard';
import { NeonBadge } from '@/components/NeonBadge';
import { ParticleField } from '@/components/ParticleField';
import { RippleButton } from '@/components/RippleButton';
import { ServicesSection } from '@/components/ServicesSection';
import SkillGroupList from '@/components/SkillGroupList';
import SocialCard from '@/components/SocialCard';
import { SocialLinks } from '@/components/SocialLinks';
import StartProjectCard from '@/components/StartProjectCard';

import { education } from '@/constants/education';
import { experience } from '@/constants/experience';
import { hobbies } from '@/constants/hobbies';
import { myData } from '@/constants/myData';
import { projects } from '@/constants/projects';
import { socialNetworks } from '@/constants/socialNetworks';
import { startProject } from '@/constants/startProject';
import { technologies } from '@/constants/technologies';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div id="inicio" style={{ background: 'var(--bg-base)' }}>

      {/* ═══ HERO ═══ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <ParticleField />
        <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-20 lg:py-0">
          <HeroSection />
          <div className="flex justify-center lg:justify-end">
            <HeroImage />
          </div>
        </div>
      </section>

      <SocialLinks />
      <DownloadCVButton />

      {/* ═══ SERVICIOS ═══ */}
      <ServicesSection />

      {/* ═══ PROYECTOS ═══ */}
      <section id="proyectos" className="py-20 sm:py-24 px-4 sm:px-6" style={{ background: 'var(--bg-base)' }}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Apps en{' '}
              <span className="text-gradient">Producción</span>
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              No son demos. Son sitios con dominio propio, pasarelas de pago reales y clientes que los usan hoy.
            </p>
          </motion.div>

          <FilterBar active={activeFilter} onChange={setActiveFilter} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {filtered.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12"
          >
            <RippleButton
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/Alexisrk310', '_blank')}
            >
              <Github className="h-4 w-4" />
              Ver todos en GitHub
              <ArrowRight className="h-4 w-4" />
            </RippleButton>
          </motion.div>
        </div>
      </section>

      <div className="divider-gradient mx-4 sm:mx-6" />

      {/* ═══ SKILLS ═══ */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 relative" style={{ background: 'var(--bg-surface)' }}>
        <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Stack{' '}
              <span className="text-gradient">Técnico</span>
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Tecnologías que uso en producción — no que "conozco". Frontend, backend, móvil, IA y DevOps.
            </p>
          </motion.div>
          <SkillGroupList technologies={technologies} />
        </div>
      </section>

      <div className="divider-gradient mx-4 sm:mx-6" />

      {/* ═══ EXPERIENCIA ═══ */}
      <section id="experiencia" className="py-20 sm:py-24 px-4 sm:px-6" style={{ background: 'var(--bg-base)' }}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Trayectoria{' '}
              <span className="text-gradient">Profesional</span>
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              5 empresas, 3 años de experiencia real — revisión de PRs, equipos con estándares de producción y clientes satisfechos.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <ExperienceItem key={index} experience={exp} index={index} />
            ))}
          </div>

        </div>
      </section>

      <div className="divider-gradient mx-4 sm:mx-6" />

      {/* ═══ SOBRE MÍ ═══ */}
      <section id="acerca-de-mi" className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-x-hidden" style={{ background: 'var(--bg-surface)' }}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              El dev detrás del{' '}
              <span className="text-gradient">código</span>
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              24 años, Cartagena, Colombia. Construyo en serio — con código limpio, sin excusas y en tiempo.
            </p>
          </motion.div>

          {/* Perfil + Facts */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="h-full rounded-2xl p-6 sm:p-8 glass-dark"
              style={{ border: '1px solid var(--border-subtle)' }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5" style={{ color: 'var(--text-primary)' }}>
                Quién soy
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  Dev colombiano de 24 años. Llevo 3 años construyendo apps que{' '}
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>se usan en producción</span>{' '}
                  — no proyectos de demo. He trabajado con restaurantes, marcas de moda, artistas, empresas de logística y más.
                </p>
                <p>
                  Me especializo en el stack{' '}
                  <span style={{ color: 'var(--accent)', fontWeight: 500 }}>React / Next.js + Node.js</span>.
                  Escribo código limpio, aplico principios{' '}
                  <span style={{ color: 'var(--accent)', fontWeight: 500 }}>SOLID</span>{' '}
                  y entrego sin que nadie me tenga que perseguir.
                </p>
                <p>
                  Actualmente{' '}
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>disponible y en búsqueda activa</span>{' '}
                  de nuevas oportunidades, abierto a roles remotos, híbridos o presenciales, full-time o freelance, desde Colombia.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
                {['Código limpio', 'SOLID', 'Apps en producción', 'REST APIs', 'Trabajo en equipo'].map((tag) => (
                  <NeonBadge key={tag} label={tag} color="cyan" />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="h-full rounded-2xl p-6 sm:p-8 glass-dark"
              style={{ border: '1px solid var(--border-subtle)' }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6" style={{ color: 'var(--text-primary)' }}>
                Datos Interesantes
              </h3>
              <FactCardList data={myData} />
            </motion.div>
          </div>

          {/* Educación */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Educación y <span className="text-gradient">Cursos</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {education.map((item, index) => (
                <EducationCard key={index} education={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Pasatiempos e <span className="text-gradient">intereses</span>
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {hobbies.map((item, index) => (
                <HobbyCard key={index} hobby={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-gradient mx-4 sm:mx-6" />

      {/* ═══ CONTACTO ═══ */}
      <section id="contacto" className="py-20 sm:py-24 px-4 sm:px-6 overflow-x-hidden" style={{ background: 'var(--bg-base)' }}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              ¿Buscas un dev que{' '}
              <span className="text-gradient">entregue?</span>
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Disponible para roles full-time, freelance o por proyecto. Respondo en menos de 24 horas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto mb-12 sm:mb-16">
            {/* Info de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'alexisrk310@gmail.com',
                  href: 'mailto:alexisrk310@gmail.com',
                  color: 'text-cyan-400',
                  bg: 'bg-cyan-500/10',
                },
                {
                  icon: Phone,
                  label: 'WhatsApp',
                  value: '+57 301 226 6530',
                  href: 'https://wa.me/573012266530',
                  color: 'text-green-400',
                  bg: 'bg-green-500/10',
                },
                {
                  icon: MapPin,
                  label: 'Ubicación',
                  value: 'Cartagena, Colombia · Remoto',
                  href: '#',
                  color: 'text-sky-400',
                  bg: 'bg-sky-500/10',
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: '/in/alexis-miguel-gutierrez-ruiz',
                  href: 'https://www.linkedin.com/in/alexis-miguel-gutierrez-ruiz-542364202/',
                  color: 'text-cyan-400',
                  bg: 'bg-cyan-500/10',
                },
              ].map(({ icon: Icon, label, value, href, color, bg }) => (
                <motion.a
                  key={label}
                  whileHover={{ x: 4 }}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-dark group transition-all"
                  style={{ border: '1px solid var(--border-subtle)' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`h-5 w-5 ${color}`} />
                  </motion.div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      {label}
                    </p>
                    <p className={`font-medium text-sm truncate group-hover:${color} transition-colors`} style={{ color: 'var(--text-primary)' }}>
                      {value}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto flex-shrink-0 transition-colors" style={{ color: 'var(--text-muted)' }} />
                </motion.a>
              ))}

              {/* Redes sociales */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                  Sígueme en redes
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialNetworks.map((social, index) => (
                    <SocialCard
                      key={index}
                      index={index}
                      iconName={social.iconName}
                      name={social.name}
                      username={social.username}
                      followers={social.followers}
                      url={social.url}
                      color={social.color}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <DiscordContact />
            </motion.div>
          </div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 glass-dark text-center neon-border-cyan"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Listo para empezar{' '}
              <span className="text-gradient">esta semana</span>
            </h3>
            <p className="text-sm mb-6 sm:mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Remoto desde Colombia · GMT-5. Full-time, part-time o por proyecto. Primera llamada gratis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 sm:mb-8">
              {startProject.map((item, index) => (
                <StartProjectCard key={index} index={index} iconName={(item as any).iconName} value={item.value} title={item.title} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RippleButton
                variant="primary"
                size="lg"
                onClick={() => window.open('mailto:alexisrk310@gmail.com?subject=Consulta de Proyecto', '_blank')}
              >
                <Mail className="h-4 w-4" />
                Iniciar un proyecto
              </RippleButton>
              <RippleButton
                variant="outline"
                size="lg"
                onClick={() => window.open('https://wa.me/573012266530', '_blank')}
              >
                <Phone className="h-4 w-4" />
                Agendar una llamada
              </RippleButton>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-14 sm:mt-16 pt-6 sm:pt-8"
            style={{ borderTop: '1px solid var(--border-subtle)' }}
          >
            <p className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
              © 2026 Alexis Gutierrez · Full Stack Developer
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
              Código fuente disponible en{' '}
              <a
                href="https://github.com/Alexisrk310/Portafolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
