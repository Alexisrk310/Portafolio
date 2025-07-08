// app/portfolio/page.tsx

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/CardProjects';
import { DownloadCVButton } from '@/components/DownloadCVButton';
import { HeroImage } from '@/components/HeroImage';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { SocialLinks } from '@/components/SocialLinks';
import { projects } from '@/constants/projects';
import { technologies } from '@/constants/technologies';
import { motion } from 'framer-motion';
import {
	Linkedin,
	Github,
	Mail,
	Code,
	Globe,
	Smartphone,
	Palette,
} from 'lucide-react';

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
			<Navbar />
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

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{technologies.map((skillGroup, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
								<div
									className={`w-12 h-12 bg-gradient-to-r ${skillGroup.color} rounded-xl flex items-center justify-center mb-4`}>
									{/* <skillGroup.icon className="h-6 w-6 text-white" /> */}
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-3">
									{skillGroup.category}
								</h3>
								<div className="space-y-2">
									{skillGroup.skills.map((skill, skillIndex) => (
										<motion.div
											key={skillIndex}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{
												duration: 0.4,
												delay: index * 0.1 + skillIndex * 0.05,
											}}
											viewport={{ once: true }}
											className="flex items-center space-x-2">
											<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
											<span className="text-gray-600 text-sm">{skill}</span>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Social Links */}
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 1 }}
				className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
				<div className="flex flex-col space-y-4">
					<motion.a
						whileHover={{ scale: 1.1, x: 5 }}
						href="#"
						className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors">
						<Github className="h-5 w-5" />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1, x: 5 }}
						href="#"
						className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors">
						<Linkedin className="h-5 w-5" />
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1, x: 5 }}
						href="#"
						className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors">
						<Mail className="h-5 w-5" />
					</motion.a>
				</div>
			</motion.div>
		</div>
	);
}
