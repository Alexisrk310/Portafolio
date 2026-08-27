import { motion } from 'framer-motion';
import { AnimatedIcon } from './AnimatedIcon';

interface Hobby {
	title: string;
	description: string;
	iconName: string;
	color: string;
}

interface Props {
	hobby: Hobby;
	index: number;
}

const HobbyCard = ({ hobby, index }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.05, rotate: 2 }}
			className="rounded-2xl p-6 transition-all duration-300 text-center"
			style={{
				background: 'var(--bg-card)',
				border: '1px solid var(--border-subtle)',
			}}
		>
			<div
				className={`w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
			>
				<AnimatedIcon iconName={hobby.iconName} size={28} color="white" />
			</div>
			<h4 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
				{hobby.title}
			</h4>
			<p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
				{hobby.description}
			</p>
		</motion.div>
	);
};

export default HobbyCard;
