// components/portfolio/Navbar.tsx
'use client';

import { motion } from 'framer-motion';

import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function Navbar() {
	return (
		<motion.nav
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<motion.div
					whileHover={{ scale: 1.05 }}
					className="flex items-center space-x-2">
					<div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
						<span className="text-white font-bold text-lg">A</span>
					</div>
					<span className="text-2xl font-bold text-gray-800">Portafolio</span>
				</motion.div>

				{/* Links */}
				<div className="hidden md:flex space-x-8">
					{[
						'Inicio',
						'Proyectos',
						'Experiencia',
						'Acerca de mi',
						'Blog',
						'Contacto',
					].map((section) => (
						<Link
							key={section}
							to={`#${section}`}
							className="text-gray-600 hover:text-purple-600 transition-colors font-medium capitalize">
							{section}
						</Link>
					))}
				</div>

				{/* Contact Button */}
				<Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
					<Mail className="mr-2 h-4 w-4" />
					Contact Me
				</Button>
			</div>
		</motion.nav>
	);
}
