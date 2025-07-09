// app/portfolio/page.tsx

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/CardProjects';
import { DownloadCVButton } from '@/components/DownloadCVButton';
import { ExperienceItem } from '@/components/ExperienceItem';
import { ExperienceStatItem } from '@/components/ExperienceStatItem';
import { HeroImage } from '@/components/HeroImage';
import { HeroSection } from '@/components/HeroSection';
import SkillGroupList from '@/components/SkillGroupList';
import { SocialLinks } from '@/components/SocialLinks';
import { experience, experienceStats } from '@/constants/experience';
import { projects } from '@/constants/projects';
import { technologies } from '@/constants/technologies';
import { motion } from 'framer-motion';

export default function HomePage() {
	return (
		<div className="h-full bg-gradient-to-br from-purple-50 to-indigo-100 pt-20 sm:pt-0">
			<section id="home" className="h-screen flex items-center">
				<div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
					<HeroSection />
					<HeroImage />
				</div>
			</section>
			<SocialLinks />
			<DownloadCVButton />
			{/* Projects Section */}
			<section id="projects" className="py-20 px-6 bg-white">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<Badge className="bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium mb-4">
							💼 Mis proyectos
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
							<span className="text-purple-600">Proyectos</span> Profesionales
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Aquí hay algunos de mis proyectos recientes que destacan mis
							habilidades en desarrollo full-stack, diseño UI/UX y tecnologías
							web modernas.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<ProjectCard key={index} project={project} index={index} />
						))}
					</div>

					{/* View All Projects Button */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className="text-center mt-12">
						<Button
							size="lg"
							className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full"
							onClick={() =>
								window.open('https://github.com/Alexisrk310', '_blank')
							}>
							View All Projects
							<motion.div
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
								className="ml-2">
								→
							</motion.div>
						</Button>
					</motion.div>
				</div>
			</section>

			{/* Skills & Technologies Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<Badge className="bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium mb-4">
							🚀 Habilidades
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
							Tecnologias{' '}
							<span className="text-purple-600">Framework y Librerias</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Trabajo con tecnologías de vanguardia para construir soluciones
							escalables y eficientes
						</p>
					</motion.div>

					<section className="px-4 py-10 max-w-7xl mx-auto">
						<SkillGroupList technologies={technologies} />
					</section>
				</div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="py-20 px-6 bg-white">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<Badge className="bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium mb-4">
							💼 Trayectoria Profesional
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
							Experiencia <span className="text-purple-600">Laboral</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Mi trayectoria profesional a través de diferentes empresas y
							roles, creando soluciones innovadoras y liderando equipos de
							desarrollo.
						</p>
					</motion.div>

					<div className="max-w-4xl mx-auto">
						{/* Timeline */}
						<div className="relative">
							{/* Timeline Line */}
							<div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-400 via-indigo-400 to-purple-400"></div>

							{experience.map((exp, index) => (
								<ExperienceItem key={index} experience={exp} index={index} />
							))}
						</div>
					</div>

					{/* Stats Section */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="mt-20">
						<div className="grid md:grid-cols-4 gap-6">
							{experienceStats.map((stat, index) => (
								<ExperienceStatItem key={index} stat={stat} index={index} />
							))}
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
