import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiPrisma,
  SiFirebase,
  SiSupabase,
  SiPython,
  SiLinux,
  SiNginx,
  SiBootstrap,
  SiRedux,
  SiFramer,
  SiVercel,
  SiStripe,
  SiCloudinary,
  SiPostman,
  SiGithubactions,
  SiAstro,
  SiExpo,
  SiEslint,
  SiPrettier,
  SiGnubash,
  SiAxios,
  SiJest,
  SiZod,
  SiAndroidstudio,
  SiMariadb,
  SiRadixui,
} from 'react-icons/si';
import { FaApple, FaJava } from 'react-icons/fa';

interface IconEntry {
  icon: IconType;
  color: string;
}

export const iconMap: Record<string, IconEntry> = {
  'React': { icon: SiReact, color: '#61dafb' },
  'React Native': { icon: SiReact, color: '#61dafb' },
  'Next.js': { icon: SiNextdotjs, color: '#aaaaaa' },
  'TypeScript': { icon: SiTypescript, color: '#3178c6' },
  'JavaScript': { icon: SiJavascript, color: '#f7df1e' },
  'Node.js': { icon: SiNodedotjs, color: '#68a063' },
  'Docker': { icon: SiDocker, color: '#2496ed' },
  'Docker Compose': { icon: SiDocker, color: '#2496ed' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'MongoDB': { icon: SiMongodb, color: '#47a248' },
  'MySQL': { icon: SiMysql, color: '#4479a1' },
  'MariaDB': { icon: SiMariadb, color: '#003545' },
  'Git': { icon: SiGit, color: '#f05032' },
  'Github': { icon: SiGithub, color: '#aaaaaa' },
  'Figma': { icon: SiFigma, color: '#f24e1e' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06b6d4' },
  'Vite': { icon: SiVite, color: '#646cff' },
  'Express': { icon: SiExpress, color: '#aaaaaa' },
  'Prisma': { icon: SiPrisma, color: '#5a67d8' },
  'Firebase': { icon: SiFirebase, color: '#ffca28' },
  'Supabase': { icon: SiSupabase, color: '#3ecf8e' },
  'Supabase Auth': { icon: SiSupabase, color: '#3ecf8e' },
  'Supabase SSR': { icon: SiSupabase, color: '#3ecf8e' },
  'Python': { icon: SiPython, color: '#3776ab' },
  'Linux': { icon: SiLinux, color: '#fcc624' },
  'Nginx': { icon: SiNginx, color: '#009900' },
  'Bootstrap': { icon: SiBootstrap, color: '#7952b3' },
  'Redux': { icon: SiRedux, color: '#764abc' },
  'Framer Motion': { icon: SiFramer, color: '#0055ff' },
  'Vercel': { icon: SiVercel, color: '#aaaaaa' },
  'Stripe': { icon: SiStripe, color: '#635bff' },
  'Cloudinary': { icon: SiCloudinary, color: '#3448c5' },
  'Postman': { icon: SiPostman, color: '#ff6c37' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088ff' },
  'CI/CD': { icon: SiGithubactions, color: '#2088ff' },
  'Astro': { icon: SiAstro, color: '#ff5d01' },
  'Expo': { icon: SiExpo, color: '#aaaaaa' },
  'ESLint': { icon: SiEslint, color: '#4b32c3' },
  'Prettier': { icon: SiPrettier, color: '#f7b93e' },
  'Bash': { icon: SiGnubash, color: '#4eaa25' },
  'Axios': { icon: SiAxios, color: '#5a29e4' },
  'Jest': { icon: SiJest, color: '#c21325' },
  'Zod': { icon: SiZod, color: '#3e67b1' },
  'Android Studio': { icon: SiAndroidstudio, color: '#3ddc84' },
  'Java': { icon: FaJava, color: '#ed8b00' },
  'SQL': { icon: SiPostgresql, color: '#336791' },
  'Radix UI': { icon: SiRadixui, color: '#aaaaaa' },
  'iOS': { icon: FaApple, color: '#aaaaaa' },
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
  showLabel?: boolean;
}

export function TechIcon({ name, size = 16, className = '', showLabel = false }: TechIconProps) {
  const entry = iconMap[name];

  if (!entry) {
    if (showLabel) {
      return (
        <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
          {name}
        </span>
      );
    }
    return null;
  }

  const IconComp = entry.icon;

  if (showLabel) {
    return (
      <span className={`inline-flex items-center gap-1.5 ${className}`}>
        <IconComp size={size} color={entry.color} style={{ flexShrink: 0 }} />
        <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
          {name}
        </span>
      </span>
    );
  }

  return <IconComp size={size} color={entry.color} className={className} />;
}
