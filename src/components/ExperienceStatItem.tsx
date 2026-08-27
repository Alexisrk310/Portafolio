import { motion } from 'framer-motion';
import type { FC } from 'react';
import { AnimatedIcon } from './AnimatedIcon';

interface ExperienceStatItemProps {
	stat: {
		iconName: string;
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
			className="text-center p-6 rounded-2xl"
			style={{
				background: 'var(--bg-card)',
				border: '1px solid var(--border-subtle)',
			}}
		>
			<div className="flex justify-center mb-3">
				<div
					className="w-12 h-12 rounded-xl flex items-center justify-center"
					style={{
						background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
						border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
					}}
				>
					<AnimatedIcon iconName={stat.iconName} size={22} color="var(--accent)" />
				</div>
			</div>
			<div
				className="text-3xl font-bold mb-1"
				style={{ color: 'var(--accent)' }}
			>
				{stat.number}
			</div>
			<div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
				{stat.label}
			</div>
		</motion.div>
	);
};
