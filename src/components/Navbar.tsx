'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { navLinks } from '@/constants/navLinks';

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.nav
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
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

				{/* Desktop Links */}
				<div className="hidden md:flex space-x-8">
					{navLinks.map((section) => (
						<Link
							key={section.name}
							to={section.href}
							className="text-gray-600 hover:text-purple-600 transition-colors font-medium capitalize">
							{section.name}
						</Link>
					))}
				</div>

				{/* Contact Button */}
				<div className="hidden md:block">
					<Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm md:text-base">
						<Mail className="mr-2 h-4 w-4" />
						Contact Me
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-gray-700 hover:text-purple-600 focus:outline-none">
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white px-6 py-4 space-y-4 border-t border-purple-100">
					{navLinks.map((section) => (
						<Link
							key={section.name}
							to={section.href}
							className="block text-gray-700 hover:text-purple-600 font-medium capitalize"
							onClick={() => setIsOpen(false)}>
							{section.name}
						</Link>
					))}
					<Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-full flex justify-center items-center text-sm">
						<Mail className="mr-2 h-4 w-4" />
						Contact Me
					</Button>
				</div>
			)}
		</motion.nav>
	);
}
