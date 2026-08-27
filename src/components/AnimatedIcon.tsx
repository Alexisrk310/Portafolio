import { motion, type Transition, type TargetAndTransition } from 'framer-motion';
import {
	Camera,
	Gamepad2,
	BookOpen,
	Users,
	Music2,
	Github,
	TrendingUp,
	FolderCheck,
	Heart,
	type LucideProps,
} from 'lucide-react';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import type { FC } from 'react';

// ── Tipo de animación ─────────────────────────────────────────────────────────
interface IconAnim {
	animate: TargetAndTransition;
	transition: Transition;
}

// ── Animaciones por nombre de icono ──────────────────────────────────────────
const animations: Record<string, IconAnim> = {
	Camera: {
		animate: { rotate: [0, -8, 8, -4, 0] },
		transition: { duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' },
	},
	Gamepad2: {
		animate: { y: [0, -4, 0, -2, 0] },
		transition: { duration: 1.2, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' },
	},
	BookOpen: {
		animate: { scaleX: [1, 1.08, 1], scaleY: [1, 0.95, 1] },
		transition: { duration: 1.8, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' },
	},
	Users: {
		animate: { scale: [1, 1.1, 1] },
		transition: { duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' },
	},
	Music2: {
		animate: { rotate: [0, 5, -5, 3, 0], y: [0, -2, 0] },
		transition: { duration: 1.4, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' },
	},
	Github: {
		animate: { rotate: [0, 360] },
		transition: { duration: 6, repeat: Infinity, ease: 'linear' },
	},
	TrendingUp: {
		animate: { x: [0, 3, 0], y: [0, -3, 0] },
		transition: { duration: 1.6, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' },
	},
	FolderCheck: {
		animate: { scaleY: [1, 1.08, 1] },
		transition: { duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' },
	},
	Heart: {
		animate: { scale: [1, 1.2, 1, 1.1, 1] },
		transition: { duration: 1.2, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' },
	},
	SiGithub: {
		animate: { rotate: [0, 360] },
		transition: { duration: 8, repeat: Infinity, ease: 'linear' },
	},
	FaLinkedin: {
		animate: { y: [0, -4, 0] },
		transition: { duration: 1.8, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' },
	},
	SiInstagram: {
		animate: { scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] },
		transition: { duration: 2, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' },
	},
};

// ── Lucide icon map ───────────────────────────────────────────────────────────
type LucideComponent = FC<LucideProps>;

const lucideMap: Record<string, LucideComponent> = {
	Camera,
	Gamepad2,
	BookOpen,
	Users,
	Music2,
	Github,
	TrendingUp,
	FolderCheck,
	Heart,
};

// ── react-icons map ───────────────────────────────────────────────────────────
type RiComponent = FC<{ size?: number; color?: string; className?: string }>;

const riMap: Record<string, RiComponent> = {
	SiGithub,
	SiInstagram,
	FaLinkedin,
};

// ── Props ─────────────────────────────────────────────────────────────────────
interface AnimatedIconProps {
	iconName: string;
	size?: number;
	color?: string;
	className?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────
export const AnimatedIcon: FC<AnimatedIconProps> = ({
	iconName,
	size = 28,
	color = 'white',
	className = '',
}) => {
	const anim: IconAnim = animations[iconName] ?? {
		animate: { scale: [1, 1.08, 1] },
		transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
	};

	// react-icons (Si* o Fa*)
	const RiIcon = riMap[iconName];
	if (RiIcon) {
		return (
			<motion.span
				className={`inline-flex items-center justify-center ${className}`}
				animate={anim.animate}
				transition={anim.transition}
			>
				<RiIcon size={size} color={color} />
			</motion.span>
		);
	}

	// Lucide
	const LucideIcon = lucideMap[iconName];
	if (!LucideIcon) return null;

	return (
		<motion.span
			className={`inline-flex items-center justify-center ${className}`}
			animate={anim.animate}
			transition={anim.transition}
		>
			<LucideIcon size={size} color={color} />
		</motion.span>
	);
};
