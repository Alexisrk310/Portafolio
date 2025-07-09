import { motion } from 'framer-motion';

import type { FC } from 'react';
import { Badge } from './Badge';

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
	const isEven = index % 2 === 0;

	return (
		<motion.div
			key={index}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.2 }}
			viewport={{ once: true }}
			className={`relative flex items-center mb-12 ${
				isEven ? 'md:flex-row' : 'md:flex-row-reverse'
			}`}>
			{/* Timeline Dot */}
			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
				viewport={{ once: true }}
				className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full border-4 border-white shadow-lg z-10"
			/>

			{/* Experience Card */}
			<div
				className={`w-full md:w-5/12 ml-20 md:ml-0 ${
					isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
				}`}>
				<motion.div
					whileHover={{ scale: 1.02, y: -5 }}
					className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
					{/* Header */}
					<div className="flex items-start justify-between mb-4">
						<div className="flex items-center space-x-4">
							<div>
								<h3 className="text-xl font-bold text-gray-800">
									{experience.company}
								</h3>
								<p className="text-purple-600 font-semibold">
									{experience.role}
								</p>
							</div>
						</div>
						<Badge className="bg-purple-50 text-purple-700 border-purple-200 text-xs px-2 py-1">
							{experience.type}
						</Badge>
					</div>

					{/* Period and Location */}
					<div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
						<div className="flex items-center space-x-1">
							<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
							<span>{experience.period}</span>
						</div>
						<div className="flex items-center space-x-1">
							<div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
							<span>{experience.location}</span>
						</div>
					</div>

					{/* Description */}
					<p className="text-gray-600 mb-4 leading-relaxed">
						{experience.description}
					</p>

					{/* Achievements */}
					<div className="mb-4">
						<h4 className="text-sm font-semibold text-gray-800 mb-2">
							Key Achievements:
						</h4>
						<ul className="space-y-1">
							{experience.achievements.map((achievement, achIndex) => (
								<motion.li
									key={achIndex}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.4,
										delay: index * 0.2 + achIndex * 0.1,
									}}
									viewport={{ once: true }}
									className="flex items-center space-x-2 text-sm text-gray-600">
									<div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
									<span>{achievement}</span>
								</motion.li>
							))}
						</ul>
					</div>

					{/* Technologies */}
					<div>
						<h4 className="text-sm font-semibold text-gray-800 mb-2">
							Technologies Used:
						</h4>
						<div className="flex flex-wrap gap-2">
							{experience.technologies.map((tech, techIndex) => (
								<Badge
									key={techIndex}
									className="bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 border-purple-100 text-xs px-2 py-1">
									{tech}
								</Badge>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};
