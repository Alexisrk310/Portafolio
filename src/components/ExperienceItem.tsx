import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Badge } from './Badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
	experience: {
		company: string;
		role: string;
		logo?: string;
		type: string;
		period: string;
		location: string;
		description: string;
		achievements: string[];
		technologies: string[];
	};
	index: number;
}

export const ExperienceItem: FC<ExperienceItemProps> = ({
	experience,
	index,
}) => {
	return (
		<motion.div
			key={index}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			className="mb-8 w-full group">
			<div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-zinc-800">
				<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
					<div className="flex items-start gap-4">
						<div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-purple-100 dark:border-zinc-700">
							<Building2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
						</div>
						<div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
								{experience.role}
							</h3>
							<h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-1">
								{experience.company}
							</h4>
						</div>
					</div>
					<div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-500 dark:text-gray-400">
						<div className="flex items-center gap-1.5">
							<Calendar className="w-4 h-4" />
							<span className="font-medium">{experience.period}</span>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-1.5">
								<MapPin className="w-4 h-4" />
								<span>{experience.location}</span>
							</div>
							<Badge className="bg-gray-100 text-gray-700 border-transparent dark:bg-zinc-800 dark:text-gray-300">
								{experience.type}
							</Badge>
						</div>
					</div>
				</div>

				<div className="pl-0 md:pl-16">
					<p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed text-sm md:text-base">
						{experience.description}
					</p>

					{experience.achievements && experience.achievements.length > 0 && (
						<div className="mb-6">
							<h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 uppercase tracking-wider">
								Logros Destacados
							</h4>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
								{experience.achievements.map((achievement, achIndex) => (
									<li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
										<span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
										<span className="leading-relaxed">{achievement}</span>
									</li>
								))}
							</ul>
						</div>
					)}

					<div className="flex flex-wrap gap-2">
						{experience.technologies.map((tech, techIndex) => (
							<Badge
								key={techIndex}
								className="bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800/30 transition-colors text-xs px-2.5 py-1">
								{tech}
							</Badge>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};
