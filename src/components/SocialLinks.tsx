// components/portfolio/SocialLinks.tsx
'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function SocialLinks() {
	const links = [
		{
			icon: <Github className="h-5 w-5" />,
			href: 'https://github.com/Alexisrk310',
		},
		{
			icon: <Linkedin className="h-5 w-5" />,
			href: 'https://www.linkedin.com/in/alexis-miguel-gutierrez-ruiz-542364202/',
		},
		{
			icon: <Mail className="h-5 w-5" />,
			href: 'mailto:alexisrk310@gmail.com',
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, delay: 1 }}
			className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
			<div className="flex flex-col space-y-4">
				{links.map((link, index) => (
					<motion.a
						key={index}
						whileHover={{ scale: 1.1, x: 5 }}
						href={link.href}
						target="_blank"
						className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors">
						{link.icon}
					</motion.a>
				))}
			</div>
		</motion.div>
	);
}
