import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const SocialCard = ({ icon, name, username, followers, url, color, index, }) => {
    return (_jsxs(motion.a, { href: url, target: "_blank", rel: "noopener noreferrer", initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.5, delay: index * 0.1 }, viewport: { once: true }, whileHover: { scale: 1.05, y: -5 }, className: "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 min-w-[200px]", children: [_jsx("div", { className: `w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center mx-auto mb-4`, children: _jsx("span", { className: "text-2xl", children: icon }) }), _jsx("h4", { className: "font-bold text-gray-800 mb-1", children: name }), _jsx("p", { className: "text-purple-600 font-medium text-sm mb-1", children: username }), _jsx("p", { className: "text-gray-500 text-xs", children: followers })] }));
};
export default SocialCard;
