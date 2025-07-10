// components/FactCardList.tsx
import { motion } from "framer-motion";
import React from "react";

interface Fact {
	icon: React.ReactNode;
	label: string;
	value: string;
}

interface FactCardListProps {
	data: Fact[];
}

const FactCardList: React.FC<FactCardListProps> = ({ data }) => {
	return (
		<>
			{data.map((fact, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: index * 0.1 }}
					viewport={{ once: true }}
					className="flex items-center space-x-4 p-3 rounded-xl hover:bg-purple-50 transition-colors"
				>
					<div className="text-2xl">{fact.icon}</div>
					<div>
						<div className="text-sm font-semibold text-gray-800">
							{fact.label}
						</div>
						<div className="text-sm text-gray-600">{fact.value}</div>
					</div>
				</motion.div>
			))}
		</>
	);
};

export default FactCardList;
