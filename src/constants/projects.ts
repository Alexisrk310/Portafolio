export const projects = [
	{
		title: 'Clip Factory',
		description:
			'Plataforma de automatización de contenido con IA que detecta streamers en vivo en Twitch, YouTube, Kick y Dailymotion, graba transmisiones, genera clips por análisis de audio y chat, los edita en formato vertical con subtítulos IA (Faster-Whisper), thumbnails con detección facial, títulos virales multi-LLM y los publica automáticamente en YouTube Shorts, TikTok y Dailymotion. Incluye dashboard con analytics, A/B testing de thumbnails y arquitectura de microservicios con Docker.',
		image: '/projects/clip-factory.png?height=250&width=400',
		tags: ['Python', 'FastAPI', 'Celery', 'PostgreSQL', 'Redis', 'Docker', 'Remotion', 'Faster-Whisper', 'FFmpeg', 'Groq', 'Prometheus'],
		category: 'Automatización',
		link: '#',
		github: '#',
		featured: true,
	},
	{
		title: 'AdForge Intelligence',
		description:
			'SaaS de performance marketing potenciado por IA. Un asistente guía paso a paso la creación de campañas publicitarias: genera estrategias con Llama 3.3 70B, crea creatividades con IA generativa, publica automáticamente en Meta Ads vía Graph API y muestra analítica en tiempo real con métricas de CPA, ROAS y CTR. Gestión completa de clientes, briefs y control de campañas activas sin salir de la plataforma.',
		image: '/projects/adforge-intelligence.png?height=250&width=400',
		tags: ['Next.js', 'TypeScript', 'Supabase', 'Groq', 'Meta Ads API', 'Zustand', 'Recharts', 'Zod'],
		category: 'Full Stack',
		link: 'https://adforge-intelligence.vercel.app/',
		github: '#',
		featured: true,
	},
	{
		title: 'PlayWithKoko',
		description:
			'Plataforma educativa gamificada con más de 26 mini-juegos interactivos (Hangman, Memorama, Escape Room, Boss Battle, Puzzle y más) donde los profesores crean actividades con vocabulario personalizado y los alumnos aprenden jugando sin necesidad de registrarse. Animaciones 3D con Three.js, sistema de ranking en tiempo real, certificados y dashboard completo para el profesor.',
		image: '/projects/playwithkokoo.png?height=250&width=400',
		tags: ['Next.js', 'TypeScript', 'Supabase', 'Three.js', 'Framer Motion', 'GSAP', 'Zustand', 'Zod'],
		category: 'Full Stack',
		link: 'https://playwithkokoo.vercel.app/',
		github: '#',
		featured: true,
	},
	{
		title: 'RadioCTG',
		description:
			'Estación de radio online en vivo con estética pixel art caribeña. Streaming de audio sincronizado para todos los oyentes, chat en tiempo real, sistema de likes con ranking público, sugerencias de canciones por artistas, planes de pago con Stripe (precios regionalizados por país), escenas visuales interactivas seleccionables y panel de administración con control de rotación y eventos premiere.',
		image: '/projects/radioctg.png?height=250&width=400',
		tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'FFmpeg WASM', 'Realtime', 'Pixel Art'],
		category: 'Full Stack',
		link: 'https://radioctg.vercel.app/',
		github: '#',
		featured: true,
	},
	{
		title: 'Marfil Shoes',
		description:
			'E-commerce para marca colombiana de sandalias premium con catálogo dinámico, filtros por categoría, carrito de compras con checkout vía WhatsApp, ofertas con countdown, panel de administración completo con CRUD de productos e imágenes, PWA instalable, SEO avanzado con Schema.org y validación de carrito server-side.',
		image: '/projects/marfil-shoes.png?height=250&width=400',
		tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'SWR', 'Framer Motion', 'PWA', 'SEO'],
		category: 'Full Stack',
		link: 'https://marfil-shoes.vercel.app/',
		github: '#',
		featured: true,
	},
	{
		title: 'Cielo Técnica',
		description:
			'Sitio web comercial y panel de administración para empresa de remodelación y acabados en Cartagena. Catálogo de productos con cotización vía WhatsApp, formulario de contacto con envío de emails (Resend API), newsletter automatizado semanal con cron jobs, panel admin con CRUD completo, gestión de leads y suscriptores. Testing integral con Vitest, MSW y Playwright.',
		image: '/projects/cielo-tecnica.png?height=250&width=400',
		tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'Redux Toolkit', 'Resend', 'Vercel Functions', 'Playwright'],
		category: 'Full Stack',
		link: 'https://cielo-tecnica.vercel.app/',
		github: '#',
	},
	{
		title: 'Malú Premium',
		description:
			'E-commerce real en producción para una marca colombiana de fajas modeladoras. Integra pasarela de pago, catálogo dinámico con filtros, SEO optimizado y animaciones premium. Clientes reales comprando todos los días.',
		image: '/projects/malupremium.png?height=250&width=400',
		tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'SEO', 'E-commerce'],
		category: 'Full Stack',
		link: 'https://malupremium.com/',
		github: '#',
		featured: true,
	},
	{
		title: 'ThunderXis',
		description:
			'Plataforma de pedidos online para restaurante en producción. Autenticación completa, carrito de compras, dashboard de administración, reportes en PDF/Excel, gráficos de ventas y pago integrado con MercadoPago.',
		image: '/projects/thunderxis.png?height=250&width=400',
		tags: ['Next.js', 'TypeScript', 'Supabase', 'MercadoPago', 'Zustand', 'Recharts', 'jsPDF', 'ExcelJS'],
		category: 'Full Stack',
		link: 'https://thunderxis.store',
		github: 'https://github.com/Alexisrk310/thunderxis',
		featured: true,
	},
	{
		title: 'DJ Zesko',
		description:
			'Sitio oficial de DJ Zesko en producción. Reproductor de audio integrado, animaciones 3D avanzadas, agenda de shows en vivo, sección de reservas y experiencia visual inmersiva en modo oscuro.',
		image: '/projects/djzesko.png?height=250&width=400',
		tags: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion', 'Three.js', 'GSAP'],
		category: 'Frontend',
		link: 'https://djzesko.com/',
		github: '#',
	},
	{
		title: 'Translogistica SLA',
		description:
			'Sitio web corporativo en producción para empresa de logística nacional. Configuré SEO técnico, publicación en dominio propio, correos corporativos y doy mantenimiento activo. Posicionado en Google.',
		image: '/projects/translogisticasla.png?height=250&width=400',
		tags: ['Next.js', 'TailwindCSS', 'SEO', 'React Hook Form', 'Vercel'],
		category: 'Frontend',
		link: 'https://translogisticasla.com/',
		github: 'https://github.com/Alexisrk310/SLATRANSLOGISTICA',
	},
	{
		title: 'Foodies',
		description:
			'App full stack de pedidos de comida online. Incluye autenticación, gestión de productos, carrito, pago con MercadoPago, dashboard con gráficos de ventas y exportación de reportes en PDF y Excel.',
		image: '/projects/foodies.png?height=250&width=400',
		tags: ['Next.js', 'TypeScript', 'Supabase', 'MercadoPago', 'Recharts', 'Framer Motion', 'Zod'],
		category: 'Full Stack',
		link: 'https://shop-food-seven.vercel.app/',
		github: 'https://github.com/Alexisrk310/shop-food',
		featured: true,
	},
	{
		title: 'Barber Shop — Full Stack',
		description:
			'Sistema de agendamiento de citas para barbería. Los clientes se registran, eligen servicio y barbero. Backend con API REST en Node.js + Express + Prisma. Autenticación con JWT y Google Auth.',
		image: '/projects/barber-frontend.png?height=250&width=400',
		tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Google Auth'],
		category: 'Full Stack',
		link: 'https://frontend-web-barber.vercel.app/',
		github: 'https://github.com/Alexisrk310/frontend-web-barber',
	},
	{
		title: 'Inmobiliaria Cyan',
		description:
			'Plataforma web para búsqueda y visualización de propiedades. Filtros dinámicos, galería de imágenes de alta calidad y rendimiento ultrarrápido con Vite.',
		image: '/projects/inmobiliaria.png?height=250&width=400',
		tags: ['React', 'Vite', 'TailwindCSS', 'React Router'],
		category: 'Full Stack',
		link: 'https://inmobiliaria-cyan.vercel.app/',
		github: '#',
	},
	{
		title: 'Menú Digital QR',
		description:
			'Menú digital interactivo para restaurantes con código QR. Rutas públicas y privadas, animaciones fluidas y diseño 100% mobile-first. Supabase como backend.',
		image: '/projects/menu-restaurant.png?height=250&width=400',
		tags: ['React', 'TypeScript', 'Vite', 'Supabase', 'QR Code', 'Framer Motion'],
		category: 'Full Stack',
		link: 'https://menu-restaurant-xi-ten.vercel.app/',
		github: 'https://github.com/Alexisrk310/menu-restaurant',
	},
	{
		title: 'Rafa Express',
		description:
			'Restaurante online con menú interactivo y pasarela de pago ePayco. Flujo de compra optimizado para que el cliente reciba su pedido a domicilio en pocos pasos.',
		image: '/projects/rafaexpress.png?height=250&width=400',
		tags: ['React', 'TailwindCSS', 'React Hook Form', 'ePayco'],
		category: 'Frontend',
		link: 'https://landing-page-template-opal.vercel.app/',
		github: 'https://github.com/Alexisrk310/landing-page-template',
	},
	{
		title: 'Cartagena Tours',
		description:
			'Sitio bilingüe (ES/EN) para una agencia de tours en Cartagena de Indias. Catálogo de experiencias con filtros por categoría, SEO técnico con JSON-LD y hreflang, animaciones con GSAP y ScrollTrigger (galería bento, fan de fotos con scroll), reserva por WhatsApp con pasarela de pago lista detrás de un feature flag, y suite de tests unitarios (Vitest) y end-to-end (Playwright).',
		image: '/projects/cartagena-tours.png?height=250&width=400',
		tags: ['Next.js', 'TypeScript', 'next-intl', 'GSAP', 'TailwindCSS', 'Vitest', 'Playwright'],
		category: 'Full Stack',
		link: 'https://tours-deploy.vercel.app',
		github: 'https://github.com/Alexisrk310/cartagena-tours',
		featured: true,
	},
];
