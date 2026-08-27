import { motion } from 'framer-motion';
import React from 'react';
import { AnimatedIcon } from './AnimatedIcon';

interface SocialCardProps {
	iconName: string;
	name: string;
	username: string;
	followers: string;
	url: string;
	color: string;
	index: number;
}

const SocialCard: React.FC<SocialCardProps> = ({
	iconName,
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
			className="rounded-2xl p-4 transition-all duration-300 min-w-[160px] block"
			style={{
				background: 'var(--bg-card)',
				border: '1px solid var(--border-subtle)',
			}}
		>
			<div
				className={`w-10 h-10 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mx-auto mb-3`}
			>
				<AnimatedIcon iconName={iconName} size={20} color="white" />
			</div>

			<h4 className="font-bold text-sm text-center" style={{ color: 'var(--text-primary)' }}>
				{name}
			</h4>

			<p className="font-medium text-xs text-center mt-0.5" style={{ color: 'var(--accent)' }}>
				{username}
			</p>

			<p className="text-xs text-center mt-0.5" style={{ color: 'var(--text-muted)' }}>
				{followers}
			</p>
		</motion.a>
	);
};

export default SocialCard;
