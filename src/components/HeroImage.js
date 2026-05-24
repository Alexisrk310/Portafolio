'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Code, Globe, Palette, Smartphone } from 'lucide-react';
import { Badge } from './Badge';
export function HeroImage() {
    return (_jsx(motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, delay: 0.3 }, className: "relative max-w-full mx-auto", children: _jsx("div", { className: "relative z-10 flex justify-center", children: _jsxs("div", { className: "relative w-[300px] sm:w-[320px] md:w-[340px]", children: [_jsx("div", { className: "w-full aspect-square rounded-full bg-gradient-to-br from-purple-400 via-indigo-500 to-purple-600 p-1", children: _jsx("div", { className: "w-full h-full rounded-full bg-white p-2", children: _jsx("img", { src: "/perfil.jpg", alt: "Alexis Gutierrez-Full Stack Developer", className: "w-full h-full rounded-full object-cover" }) }) }), _jsx(motion.div, { animate: {
                            y: [0, -10, 0],
                            rotate: [0, 5, 0],
                            transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                        }, className: "absolute top-4 left-1/2 -translate-x-[120%]", children: _jsxs(Badge, { className: "bg-white shadow-lg border border-purple-100 text-purple-700 px-4 py-2 text-sm font-medium", children: [_jsx(Code, { className: "mr-2 h-4 w-4" }), "React"] }) }), _jsx(motion.div, { animate: {
                            y: [0, 12, 0],
                            rotate: [0, -3, 0],
                            transition: {
                                duration: 3.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 0.5,
                            },
                        }, className: "absolute top-12 left-1/2 translate-x-[100%]", children: _jsxs(Badge, { className: "bg-purple-600 text-white px-4 py-2 text-sm font-medium shadow-lg", children: [_jsx(Globe, { className: "mr-2 h-4 w-4" }), "Full Stack"] }) }), _jsx(motion.div, { animate: {
                            y: [0, -8, 0],
                            rotate: [0, 2, 0],
                            transition: {
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 1,
                            },
                        }, className: "absolute bottom-16 left-1/2 -translate-x-[110%]", children: _jsxs(Badge, { className: "bg-indigo-100 text-indigo-700 border border-indigo-200 px-4 py-2 text-sm font-medium shadow-lg", children: [_jsx(Palette, { className: "mr-2 h-4 w-4" }), "UI/UX"] }) }), _jsx(motion.div, { animate: {
                            y: [0, 15, 0],
                            rotate: [0, -5, 0],
                            transition: {
                                duration: 3.2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 1.5,
                            },
                        }, className: "absolute bottom-6 left-1/2 translate-x-[90%]", children: _jsxs(Badge, { className: "bg-white shadow-lg border border-purple-100 text-purple-700 px-4 py-2 text-sm font-medium", children: [_jsx(Smartphone, { className: "mr-2 h-4 w-4" }), "M\u00F3vil"] }) }), _jsx(motion.div, { animate: {
                            rotate: [0, 360],
                            transition: { duration: 20, repeat: Infinity, ease: 'linear' },
                        }, className: "absolute top-1/2 left-1/2 translate-x-[130%] -translate-y-1/2", children: _jsx("div", { className: "w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-white font-bold text-lg", children: "2+" }), _jsx("div", { className: "text-purple-100 text-xs font-medium", children: "A\u00D1OS" })] }) }) })] }) }) }));
}
