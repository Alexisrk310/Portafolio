import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export const ExperienceStatItem = ({ stat, index, }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.5, delay: index * 0.1 }, viewport: { once: true }, whileHover: { scale: 1.05 }, className: "text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100", children: [_jsx("div", { className: "text-3xl mb-2", children: stat.icon }), _jsx("div", { className: "text-3xl font-bold text-purple-600 mb-1", children: stat.number }), _jsx("div", { className: "text-gray-600 text-sm font-medium", children: stat.label })] }));
};
