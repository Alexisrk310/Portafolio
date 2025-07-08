import { motion } from 'framer-motion';
import { Globe, Github } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

interface Project {
	image?: string;
	title: string;
	description: string;
	category: string;
	link: string;
	github: string;
	tags: string[];
}

interface ProjectCardProps {
	project: Project;
	index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
	return (
		<motion.div
			key={index}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
			whileHover={{ y: -10 }}
			className="group">
			<div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
				{/* Imagen del Proyecto */}
				<div className="relative overflow-hidden">
					<img
						src={project.image || '/placeholder.svg'}
						alt={project.title}
						width={400}
						height={250}
						className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

					{/* Badge Categoría */}
					<div className="absolute top-4 left-4">
						<Badge className="bg-purple-600 text-white px-3 py-1 text-xs font-medium">
							{project.category}
						</Badge>
					</div>

					{/* Acciones al hacer hover */}
					<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<div className="flex space-x-3">
							<Button
								size="sm"
								className="bg-white text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-full"
								onClick={() => window.open(project.link, '_blank')}>
								<Globe className="mr-2 h-4 w-4" />
								Live Demo
							</Button>
							<Button
								size="sm"
								variant="outline"
								className="bg-white/90 border-white text-gray-700 hover:bg-white px-4 py-2 rounded-full"
								onClick={() => window.open(project.github, '_blank')}>
								<Github className="mr-2 h-4 w-4" />
								Code
							</Button>
						</div>
					</div>
				</div>

				{/* Contenido del Proyecto */}
				<div className="p-6">
					<h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
						{project.title}
					</h3>
					<p className="text-gray-600 text-sm mb-4 leading-relaxed">
						{project.description}
					</p>

					{/* Tecnologías */}
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag, tagIndex) => (
							<Badge
								key={tagIndex}
								className="bg-purple-50 text-purple-700 border-purple-100 text-xs px-2 py-1">
								{tag}
							</Badge>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};
