// src/components/DownloadCVButton.tsx

import { motion } from 'framer-motion';

import { Download } from 'lucide-react';
import { Button } from './Button';

export const DownloadCVButton = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 1.2 }}
			className="fixed right-6 bottom-6 z-40">
			<Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full shadow-lg">
				<Download className="mr-2 h-4 w-4" />
				Descargar CV
			</Button>
		</motion.div>
	);
};
