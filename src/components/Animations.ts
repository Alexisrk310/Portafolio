// components/portfolio/animations.ts

import { easeInOut, easeOut } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const floatingAnimation = {
	y: [0, -20, 0],
	transition: {
		duration: 3,
		repeat: Infinity,
		ease: easeInOut,
	},
};

export const fadeInUp: Variants = {
	initial: { opacity: 0, y: 60 },
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: easeOut,
		},
	},
};

export const staggerContainer: Variants = {
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};
