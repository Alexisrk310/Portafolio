import { motion } from 'framer-motion';
import React from 'react';

interface SocialCardProps {
	icon: React.ReactNode;
	name: string;
	username: string;
	followers: string;
	url: string;
	color: string;
	index: number;
}

const SocialCard: React.FC<SocialCardProps> = ({
	icon,
	name,
	username,
	followers,
	url,
	color,
	index,
}) => {
	return (
		<motion.a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.05, y: -5 }}
			className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 min-w-[200px]">
			<div
				className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
				<span className="text-2xl">{icon}</span>
			</div>

			<h4 className="font-bold text-gray-800 mb-1">{name}</h4>

			<p className="text-purple-600 font-medium text-sm mb-1">{username}</p>

			<p className="text-gray-500 text-xs">{followers}</p>
		</motion.a>
	);
};

export default SocialCard;
