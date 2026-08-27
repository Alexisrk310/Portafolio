import { motion } from 'framer-motion';
import type { FC } from 'react';
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
			whileHover={{ y: -2 }}
			className="mb-8 w-full"
		>
			<div
				className="rounded-2xl p-6 sm:p-8 transition-all duration-300"
				style={{
					background: 'var(--bg-card)',
					border: '1px solid var(--border-subtle)',
				}}
			>
				<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
					<div className="flex items-start gap-4">
						<div
							className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
							style={{
								background: 'var(--bg-surface)',
								border: '1px solid var(--border-subtle)',
							}}
						>
							<Building2 className="w-6 h-6" style={{ color: 'var(--accent)' }} />
						</div>
						<div>
							<h3
								className="text-xl font-bold transition-colors"
								style={{ color: 'var(--text-primary)' }}
							>
								{experience.role}
							</h3>
							<h4
								className="text-lg font-medium mt-1"
								style={{ color: 'var(--text-secondary)' }}
							>
								{experience.company}
							</h4>
						</div>
					</div>
					<div className="flex flex-col items-start md:items-end gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
						<div className="flex items-center gap-1.5">
							<Calendar className="w-4 h-4" />
							<span className="font-medium">{experience.period}</span>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-1.5">
								<MapPin className="w-4 h-4" />
								<span>{experience.location}</span>
							</div>
							<span
								className="text-xs px-2.5 py-1 rounded-full font-medium"
								style={{
									background: 'var(--bg-surface)',
									border: '1px solid var(--border-subtle)',
									color: 'var(--text-secondary)',
								}}
							>
								{experience.type}
							</span>
						</div>
					</div>
				</div>

				<div className="pl-0 md:pl-16">
					<p
						className="mb-5 leading-relaxed text-sm md:text-base"
						style={{ color: 'var(--text-secondary)' }}
					>
						{experience.description}
					</p>

					{experience.achievements && experience.achievements.length > 0 && (
						<div className="mb-6">
							<h4
								className="text-sm font-semibold mb-3 uppercase tracking-wider"
								style={{ color: 'var(--text-primary)' }}
							>
								Logros Destacados
							</h4>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
								{experience.achievements.map((achievement, achIndex) => (
									<li
										key={achIndex}
										className="flex items-start gap-2 text-sm"
										style={{ color: 'var(--text-secondary)' }}
									>
										<span
											className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
											style={{ background: 'var(--accent)' }}
										/>
										<span className="leading-relaxed">{achievement}</span>
									</li>
								))}
							</ul>
						</div>
					)}

					<div className="flex flex-wrap gap-2">
						{experience.technologies.map((tech, techIndex) => (
							<span
								key={techIndex}
								className="text-xs px-2.5 py-1 rounded-full font-medium"
								style={{
									background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
									border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
									color: 'var(--accent)',
								}}
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};
