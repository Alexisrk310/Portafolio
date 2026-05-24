// components/portfolio/SocialLinks.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
export function SocialLinks() {
    const links = [
        {
            icon: _jsx(Github, { className: "h-5 w-5" }),
            href: 'https://github.com/Alexisrk310',
        },
        {
            icon: _jsx(Linkedin, { className: "h-5 w-5" }),
            href: 'https://www.linkedin.com/in/alexis-miguel-gutierrez-ruiz-542364202/',
        },
        {
            icon: _jsx(Mail, { className: "h-5 w-5" }),
            href: 'mailto:alexisrk310@gmail.com',
        },
    ];
    return (_jsx(motion.div, { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 1 }, className: "fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block", children: _jsx("div", { className: "flex flex-col space-y-4", children: links.map((link, index) => (_jsx(motion.a, { whileHover: { scale: 1.1, x: 5 }, href: link.href, rel: "noopener noreferrer", target: "_blank", className: "w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 transition-colors", children: link.icon }, index))) }) }));
}
