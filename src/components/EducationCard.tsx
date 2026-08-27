import { motion } from 'framer-motion';

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
			className="rounded-2xl p-6 transition-all duration-300"
			style={{
				background: 'var(--bg-card)',
				border: '1px solid var(--border-subtle)',
			}}
		>
			<div className="flex items-center space-x-4 mb-4">
				<div
					className="w-12 h-12 rounded-xl flex items-center justify-center"
					style={{ background: 'var(--bg-surface)' }}
				>
					<img
						src={education.logo || '/placeholder.svg'}
						alt={`${education.institution} logo`}
						width={32}
						height={32}
						className="rounded-lg"
					/>
				</div>
				<div className="flex-1">
					<h4 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
						{education.institution}
					</h4>
					<span
						className="text-xs px-2 py-1 rounded-full font-medium mt-1 inline-block"
						style={{
							background: 'color-mix(in srgb, var(--accent) 10%, transparent)',
							border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
							color: 'var(--accent)',
						}}
					>
						{education.type}
					</span>
				</div>
			</div>

			<h5 className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>
				{education.degree}
			</h5>
			<p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
				{education.period}
			</p>
			<p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
				{education.description}
			</p>
		</motion.div>
	);
};
