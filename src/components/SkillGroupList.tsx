import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Badge } from './Badge';

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
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
			{technologies.map(({ category, color, icon: Icon, skills }, index) => (
				<motion.div
					key={category}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}
					viewport={{ once: true }}
					className="bg-white dark:bg-zinc-900 rounded-2xl p-5 shadow-md border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition-all duration-300">
					<div className="flex items-center gap-3 mb-4">
						<div
							className={`w-10 h-10 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center shadow-sm`}>
							<Icon className="h-5 w-5 text-white" />
						</div>
						<h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 tracking-tight">
							{category}
						</h3>
					</div>
					<div className="flex flex-wrap gap-2">
						{skills.map((skill) => (
							<Badge
								key={skill}
								className="bg-gray-50 text-gray-700 border-gray-200 dark:bg-zinc-800 dark:text-gray-300 dark:border-zinc-700 text-xs px-2.5 py-1 font-medium shadow-sm transition-colors hover:border-purple-300 hover:bg-purple-50">
								{skill}
							</Badge>
						))}
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default SkillGroupList;
