import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const HobbyCard = ({ hobby, index }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.5, delay: index * 0.1 }, viewport: { once: true }, whileHover: { scale: 1.05, rotate: 2 }, className: "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center", children: [_jsx("div", { className: `w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-2xl flex items-center justify-center mx-auto mb-4`, children: _jsx("span", { className: "text-3xl", children: hobby.icon }) }), _jsx("h4", { className: "text-lg font-bold text-gray-800 mb-2", children: hobby.title }), _jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: hobby.description })] }));
};
export default HobbyCard;
