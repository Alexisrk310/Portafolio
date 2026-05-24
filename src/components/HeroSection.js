'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { fadeInUp, staggerContainer } from './Animations';
import { Badge } from './Badge';
import { Button } from './Button';
export function HeroSection() {
    return (_jsxs(motion.div, { variants: staggerContainer, initial: "initial", animate: "animate", className: "space-y-6 pt-24 px-4 sm:px-0 text-center sm:text-left", children: [_jsx(motion.div, { variants: fadeInUp, children: _jsx(Badge, { className: "bg-purple-100 text-purple-700 border-purple-200 px-4 py-2 text-sm font-medium", children: "\uD83D\uDC4B \u00A1Hola!" }) }), _jsx(motion.div, { variants: fadeInUp, className: "space-y-4", children: _jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight", children: ["Soy ", _jsx("span", { className: "text-purple-600", children: "Alexis Gutierrez" }), ",", _jsx("br", {}), _jsx("span", { className: "text-gray-700", children: "Ingeniero de Software" }), _jsx("br", {}), _jsx("span", { className: "text-gray-600", children: "en Colombia." })] }) }), _jsx(motion.p, { variants: fadeInUp, className: "text-base sm:text-lg text-gray-600 max-w-2xl mx-auto sm:mx-0 leading-relaxed", children: "Ingeniero de Software especializado en Frontend. Me enfoco en crear aplicaciones web escalables, utilizar arquitecturas modernas y ofrecer experiencias de usuario de alto rendimiento aplicando principios de c\u00F3digo limpio." }), _jsxs(motion.div, { variants: fadeInUp, className: "flex flex-col sm:flex-row gap-4 pt-4 max-w-md sm:max-w-none mx-auto sm:mx-0", children: [_jsxs(Button, { onClick: () => {
                            window.open('/cv/HV-ALEXIS-GUTIERREZ.pdf');
                        }, size: "lg", className: "bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center justify-center w-full sm:w-auto", children: [_jsx(Play, { className: "mr-2 h-5 w-5 fill-current" }), "Descargar CV"] }), _jsx(Button, { size: "lg", variant: "outline", onClick: () => {
                            document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
                        }, className: "border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full bg-transparent w-full sm:w-auto", children: "Ver Proyectos" })] })] }));
}
