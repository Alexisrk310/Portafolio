import { motion } from 'framer-motion';
import React from 'react';

interface StartProjectCardProps {
	icon: React.ReactNode;
	value: string;
	title: string;
	index: number;
}

const StartProjectCard: React.FC<StartProjectCardProps> = ({
	icon,
	value,
	title,
	index,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: index * 0.1 }}
			viewport={{ once: true }}
			className="text-center">
			<div className="text-2xl mb-2">{icon}</div>
			<div className="text-purple-600 font-semibold text-lg">{value}</div>
			<div className="text-gray-600 text-sm">{title}</div>
		</motion.div>
	);
};

export default StartProjectCard;
