'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeInUp, staggerContainer } from './Animations';
import { Badge } from './Badge';
import { Button } from './Button';

export function HeroSection() {
	return (
		<motion.div
			variants={staggerContainer}
			initial="initial"
			animate="animate"
			className="space-y-6 pt-24 px-4 sm:px-0 text-center sm:text-left">
			<motion.div variants={fadeInUp}>
				<Badge className="bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium">
					👋 ¡Hola!
				</Badge>
			</motion.div>

			<motion.div variants={fadeInUp} className="space-y-4">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
					Soy <span className="text-purple-600">Alexis Gutierrez</span>,<br />
					<span className="text-gray-700">Desarrollador Frontend</span>
					<br />
					<span className="text-gray-600">en Colombia.</span>
				</h1>
			</motion.div>

			<motion.p
				variants={fadeInUp}
				className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto sm:mx-0 leading-relaxed">
				Programador comprometido con el desarrollo de soluciones tecnológicas
				que faciliten y mejoren la vida de las personas. Me especializo en
				escribir código limpio, estructurado y fácil de mantener, aplicando
				buenas prácticas y principios de desarrollo moderno.
			</motion.p>

			<motion.div
				variants={fadeInUp}
				className="flex flex-col sm:flex-row gap-4 pt-4 max-w-md sm:max-w-none mx-auto sm:mx-0">
				<Button
					size="lg"
					className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center justify-center w-full sm:w-auto">
					<Play className="mr-2 h-5 w-5 fill-current" />
					Mirar mi portafolio
				</Button>
				<Button
					size="lg"
					variant="outline"
					className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full bg-transparent w-full sm:w-auto">
					Contrátame
				</Button>
			</motion.div>
		</motion.div>
	);
}
