import { motion } from 'framer-motion';

interface Hobby {
	title: string;
	description: string;
	icon: string;
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
			className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
			<div
				className={`w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
				<span className="text-3xl">{hobby.icon}</span>
			</div>
			<h4 className="text-lg font-bold text-gray-800 mb-2">{hobby.title}</h4>
			<p className="text-gray-600 text-sm leading-relaxed">
				{hobby.description}
			</p>
		</motion.div>
	);
};

export default HobbyCard;
