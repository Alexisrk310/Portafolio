'use client';

import { motion } from 'framer-motion';
import { Code, Globe, Palette, Smartphone } from 'lucide-react';
import { floatingAnimation } from './Animations';
import { Badge } from './Badge';

export function HeroImage() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, delay: 0.3 }}
			className="relative max-w-full mx-auto">
			{/* Profile Image + Badges */}
			<div className="relative z-10 flex justify-center">
				<div className="relative w-[300px] sm:w-[320px] md:w-[340px]">
					{/* Imagen de perfil */}
					<div className="w-full aspect-square rounded-full bg-gradient-to-br from-purple-400 via-indigo-500 to-purple-600 p-1">
						<div className="w-full h-full rounded-full bg-white p-2">
							<img
								src="/perfil.jpg"
								alt="Alexis Gutierrez-Full Stack Developer"
								className="w-full h-full rounded-full object-cover"
							/>
						</div>
					</div>

					{/* Floating Badges */}
					<motion.div
						animate={{
							y: [0, -10, 0],
							rotate: [0, 5, 0],
							transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
						}}
						className="absolute top-4 left-1/2 -translate-x-[120%]">
						<Badge className="bg-white shadow-lg border border-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
							<Code className="mr-2 h-4 w-4" />
							React
						</Badge>
					</motion.div>

					<motion.div
						animate={{
							y: [0, 12, 0],
							rotate: [0, -3, 0],
							transition: {
								duration: 3.5,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 0.5,
							},
						}}
						className="absolute top-12 left-1/2 translate-x-[100%]">
						<Badge className="bg-purple-600 text-white px-4 py-2 text-sm font-medium shadow-lg">
							<Globe className="mr-2 h-4 w-4" />
							Full Stack
						</Badge>
					</motion.div>

					<motion.div
						animate={{
							y: [0, -8, 0],
							rotate: [0, 2, 0],
							transition: {
								duration: 4,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 1,
							},
						}}
						className="absolute bottom-16 left-1/2 -translate-x-[110%]">
						<Badge className="bg-indigo-100 text-indigo-700 border border-indigo-200 px-4 py-2 text-sm font-medium shadow-lg">
							<Palette className="mr-2 h-4 w-4" />
							UI/UX
						</Badge>
					</motion.div>

					<motion.div
						animate={{
							y: [0, 15, 0],
							rotate: [0, -5, 0],
							transition: {
								duration: 3.2,
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 1.5,
							},
						}}
						className="absolute bottom-6 left-1/2 translate-x-[90%]">
						<Badge className="bg-white shadow-lg border border-purple-100 text-purple-700 px-4 py-2 text-sm font-medium">
							<Smartphone className="mr-2 h-4 w-4" />
							Móvil
						</Badge>
					</motion.div>

					{/* Años de experiencia */}
					<motion.div
						animate={{
							rotate: [0, 360],
							transition: { duration: 20, repeat: Infinity, ease: 'linear' },
						}}
						className="absolute top-1/2 left-1/2 translate-x-[130%] -translate-y-1/2">
						<div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
							<div className="text-center">
								<div className="text-white font-bold text-lg">2+</div>
								<div className="text-purple-100 text-xs font-medium">AÑOS</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}
