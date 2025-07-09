import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { LucideIcon } from 'lucide-react';

interface SkillGroup {
	category: string;
	color: string;
	icon: LucideIcon;
	skills: string[];
}

interface Props {
	technologies: SkillGroup[];
}

const SkillGroupList: FC<Props> = ({ technologies }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{technologies.map(({ category, color, icon: Icon, skills }, index) => (
				<motion.div
					key={category}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: index * 0.1 }}
					viewport={{ once: true }}
					whileHover={{ scale: 1.03 }}
					className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-zinc-700 transition-all duration-300">
					<div
						className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mb-5`}>
						<Icon className="h-6 w-6 text-white" />
					</div>
					<h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
						{category}
					</h3>
					<ul className="space-y-2">
						{skills.map((skill) => (
							<li key={skill} className="flex items-start space-x-2">
								<span className="mt-1 w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0" />
								<span className="text-sm text-gray-700 dark:text-gray-300">
									{skill}
								</span>
							</li>
						))}
					</ul>
				</motion.div>
			))}
		</div>
	);
};

export default SkillGroupList;
