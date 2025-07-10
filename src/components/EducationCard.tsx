import { motion } from 'framer-motion';
import { Badge } from './Badge';

interface EducationItem {
	institution: string;
	degree: string;
	period: string;
	type: string;
	description: string;
	logo?: string;
}

interface Props {
	education: EducationItem;
	index: number;
}

export const EducationCard = ({ education, index }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.2 }}
			viewport={{ once: true }}
			whileHover={{ y: -5 }}
			className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
			<div className="flex items-center space-x-4 mb-4">
				<div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center">
					<img
						src={education.logo || '/placeholder.svg'}
						alt={`${education.institution} logo`}
						width={32}
						height={32}
						className="rounded-lg"
					/>
				</div>
				<div className="flex-1">
					<h4 className="font-bold text-gray-800 text-lg">
						{education.institution}
					</h4>
					<Badge className="bg-purple-50 text-purple-700 border-purple-200 text-xs px-2 py-1 mt-1">
						{education.type}
					</Badge>
				</div>
			</div>

			<h5 className="text-purple-600 font-semibold mb-2">{education.degree}</h5>
			<p className="text-sm text-gray-500 mb-3">{education.period}</p>
			<p className="text-gray-600 text-sm mb-4 leading-relaxed">
				{education.description}
			</p>
		</motion.div>
	);
};
