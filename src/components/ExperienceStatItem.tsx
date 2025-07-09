import { motion } from 'framer-motion';
import type { FC, ReactNode } from 'react';

interface ExperienceStatItemProps {
	stat: {
		icon: ReactNode;
		number: string | number;
		label: string;
	};
	index: number;
}

export const ExperienceStatItem: FC<ExperienceStatItemProps> = ({
	stat,
	index,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.05 }}
			className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
			<div className="text-3xl mb-2">{stat.icon}</div>
			<div className="text-3xl font-bold text-purple-600 mb-1">
				{stat.number}
			</div>
			<div className="text-gray-600 text-sm font-medium">{stat.label}</div>
		</motion.div>
	);
};
