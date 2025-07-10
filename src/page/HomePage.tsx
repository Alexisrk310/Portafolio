// app/portfolio/page.tsx

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/CardProjects';
import ContactCard from '@/components/ContactCard';
import { DownloadCVButton } from '@/components/DownloadCVButton';
import { EducationCard } from '@/components/EducationCard';
import { ExperienceItem } from '@/components/ExperienceItem';
import { ExperienceStatItem } from '@/components/ExperienceStatItem';
import FactCardList from '@/components/FactCardList';
import { HeroImage } from '@/components/HeroImage';
import { HeroSection } from '@/components/HeroSection';
import HobbyCard from '@/components/HobbyCard';
import SkillGroupList from '@/components/SkillGroupList';
import SocialCard from '@/components/SocialCard';
import { SocialLinks } from '@/components/SocialLinks';
import StartProjectCard from '@/components/StartProjectCard';
import { contact } from '@/constants/contact';
import { education } from '@/constants/education';
import { experience, experienceStats } from '@/constants/experience';
import { hobbies } from '@/constants/hobbies';
import { myData } from '@/constants/myData';
import { projects } from '@/constants/projects';
import { socialNetworks } from '@/constants/socialNetworks';
import { startProject } from '@/constants/startProject';
import { technologies } from '@/constants/technologies';
import { motion } from 'framer-motion';

export default function HomePage() {
	return (
		<div
			id="inicio"
			className="h-full bg-gradient-to-br from-purple-50 to-indigo-100 pt-20 sm:pt-0">
			<section id="home" className="h-screen flex items-center">
				<div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
					<HeroSection />
					<HeroImage />
				</div>
			</section>
			<SocialLinks />
			<DownloadCVButton />
			{/* Projects Section */}
			<section id="proyectos" className="py-20 px-6 bg-white">
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
			<section id="experiencia" className="py-20 px-6 bg-white">
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
			{/* About Me Section */}
			<section
				id="acerca-de-mi"
				className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<Badge className="bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium mb-4">
							👨‍💻 Acerca de mi
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
							Ven <span className="text-purple-600">Conoceme</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Más allá del código, esto es lo que me define: mi trayectoria, mis
							pasiones y las experiencias que dan forma a mi trabajo.
						</p>
					</motion.div>

					{/* Personal Info & Bio */}
					<div className="grid lg:grid-cols-2 gap-12 mb-20">
						{/* Left - Personal Story */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="space-y-6">
							<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<h3 className="text-2xl font-bold text-gray-800 mb-4">
									Mi historia
								</h3>
								<div className="space-y-4 text-gray-600 leading-relaxed">
									<p>
										¡Hola! Soy Alexis, un apasionado desarrollador full-stack
										especializado en frontend, de Colombia, con más de dos años
										de experiencia creando soluciones digitales que marcan la
										diferencia. Mi incursión en la tecnología comenzó en la
										universidad, cuando creé mi primer sitio web: un portafolio
										sencillo que despertó mi pasión por la programación.
									</p>
									<p>
										Lo que me motiva es la combinación perfecta de creatividad y
										lógica que ofrece la programación. Creo en escribir código
										limpio y fácil de mantener, y en crear experiencias de
										usuario que sean atractivas y funcionales. Cuando no estoy
										programando, me encontrarás explorando nuevas tecnologías,
										contribuyendo al código abierto o compartiendo conocimientos
										con la comunidad de desarrolladores.
									</p>
									<p>
										Siempre me entusiasma asumir nuevos retos y colaborar con
										equipos que comparten mi pasión por la innovación y la
										excelencia. ¡Construyamos algo increíble juntos!
									</p>
								</div>
							</div>
						</motion.div>

						{/* Right - Quick Facts */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="space-y-6">
							<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
								<h3 className="text-2xl font-bold text-gray-800 mb-6">
									Datos Interesantes
								</h3>
								<div className="space-y-4">
									<FactCardList data={myData} />
								</div>
							</div>
						</motion.div>
					</div>

					{/* Education Section */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="mb-20">
						<div className="text-center mb-12">
							<h3 className="text-3xl font-bold text-gray-800 mb-4">
								<span className="text-purple-600">Educación</span> y Cursos
							</h3>
							<p className="text-gray-600 max-w-2xl mx-auto">
								Mi formación académica y mi continuo aprendizaje en tecnología y
								desarrollo.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-6">
							{education.map((item, index) => (
								<EducationCard key={index} education={item} index={index} />
							))}
						</div>
					</motion.div>

					{/* Hobbies & Interests */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}>
						<div className="text-center mb-12">
							<h3 className="text-3xl font-bold text-gray-800 mb-4">
								Pasatiempos e <span className="text-purple-600">intereses</span>
							</h3>
							<p className="text-gray-600 max-w-2xl mx-auto">
								Cuando no estoy programando, estas son las actividades que me
								mantienen inspirado y equilibrado.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
							{hobbies.map((item, index) => (
								<HobbyCard key={index} hobby={item} index={index} />
							))}
						</div>
					</motion.div>
				</div>
			</section>
			{/* Sección de Contacto */}
			<section id="contacto" className="py-20 px-6 bg-white">
				<div className="container mx-auto">
					{/* Encabezado de la sección */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<Badge className="bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium mb-4">
							📞 Contáctame
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
							Trabajemos <span className="text-purple-600">Juntos</span>
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							¿Listo para hacer realidad tus ideas? Siempre estoy entusiasmado
							por hablar de nuevos proyectos y oportunidades. ¡Conectemos y
							creemos algo increíble juntos!
						</p>
					</motion.div>

					{/* Tarjetas de contacto */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{contact.map((item, index) => (
							<ContactCard
								key={index}
								index={index}
								icon={item.icon}
								title={item.title}
								description={item.description}
								value={item.value}
								action={item.action}
								color={item.color}
								buttonText={item.buttonText}
							/>
						))}
					</div>

					{/* Redes sociales */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
						className="text-center mb-16">
						<h3 className="text-2xl font-bold text-gray-800 mb-6">
							Sígueme <span className="text-purple-600">en redes</span>
						</h3>
						<p className="text-gray-600 mb-8 max-w-xl mx-auto">
							Mantente conectado y sigue mi camino. Comparto regularmente ideas,
							proyectos y consejos de tecnología.
						</p>

						<div className="flex flex-wrap justify-center gap-6">
							{socialNetworks.map((social, index) => (
								<SocialCard
									key={index}
									index={index}
									icon={social.icon}
									name={social.name}
									username={social.username}
									followers={social.followers}
									url={social.url}
									color={social.color}
								/>
							))}
						</div>
					</motion.div>

					{/* Estado de disponibilidad */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
						<div className="text-center">
							<div className="flex items-center justify-center mb-4">
								<motion.div
									animate={{ scale: [1, 1.2, 1] }}
									transition={{ duration: 2, repeat: Infinity }}
									className="w-4 h-4 bg-green-500 rounded-full mr-3"></motion.div>
								<span className="text-green-600 font-semibold">
									Disponible para nuevos proyectos
								</span>
							</div>

							<h3 className="text-2xl font-bold text-gray-800 mb-4">
								¿Listo para iniciar tu{' '}
								<span className="text-purple-600">próximo proyecto?</span>
							</h3>

							<p className="text-gray-600 mb-6 max-w-2xl mx-auto">
								Actualmente estoy aceptando nuevos proyectos freelance y
								oportunidades de tiempo completo. Ya sea que necesites una
								aplicación web completa, una app móvil o simplemente quieras
								hablar de una idea, me encantaría escucharte.
							</p>

							<div className="grid md:grid-cols-3 gap-6 mb-8">
								{startProject.map((item, index) => (
									<StartProjectCard
										key={index}
										index={index}
										icon={item.icon}
										value={item.value}
										title={item.title}
									/>
								))}
							</div>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<a
									href="mailto:alexisrk310@gmail.com?subject=Consulta de Proyecto"
									className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full transition-all duration-300 font-medium">
									<span className="mr-2">✉️</span>
									Iniciar un proyecto
								</a>
								<a
									href="tel:+573012266530"
									className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-200 text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-300 font-medium">
									<span className="mr-2">📞</span>
									Agendar una llamada
								</a>
							</div>
						</div>
					</motion.div>

					{/* Nota final */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						viewport={{ once: true }}
						className="text-center mt-16 pt-8 border-t border-gray-200">
						<p className="text-gray-500 text-sm">
							© 2024 Alexis Gutierrez. Construido con ❤️ usando React, Motion y
							Tailwind CSS
						</p>
						<p className="text-gray-400 text-xs mt-2">
							Este portafolio es de código abierto y está disponible en{' '}
							<a
								href="https://github.com/Alexisrk310/Portafolio"
								className="text-purple-600 hover:underline">
								GitHub
							</a>
						</p>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
