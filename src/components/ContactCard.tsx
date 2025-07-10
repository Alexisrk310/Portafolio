import { motion } from 'framer-motion';
import React from 'react';

interface ContactCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	value: string;
	action: string;
	color: string;
	buttonText: string;
}

const ContactCard: React.FC<ContactCardProps & { index: number }> = ({
	icon,
	title,
	description,
	value,
	action,
	color,
	buttonText,
	index,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.2 }}
			viewport={{ once: true }}
			whileHover={{ y: -10 }}
			className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
			<div
				className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
				<span className="text-3xl">{icon}</span>
			</div>

			<h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>

			<p className="text-gray-600 text-sm mb-4 leading-relaxed">
				{description}
			</p>

			<div className="mb-6">
				<p className="text-purple-600 font-semibold text-lg">{value}</p>
			</div>

			<a
				href={action}
				target={title === 'Ubicación' ? '_blank' : '_self'}
				rel={title === 'Ubicación' ? 'noopener noreferrer' : ''}
				className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full transition-all duration-300 text-sm font-medium">
				{buttonText}
			</a>
		</motion.div>
	);
};

export default ContactCard;
