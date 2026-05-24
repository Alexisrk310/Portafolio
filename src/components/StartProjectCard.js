import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const StartProjectCard = ({ icon, value, title, index, }) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: index * 0.1 }, viewport: { once: true }, className: "text-center", children: [_jsx("div", { className: "text-2xl mb-2", children: icon }), _jsx("div", { className: "text-purple-600 font-semibold text-lg", children: value }), _jsx("div", { className: "text-gray-600 text-sm", children: title })] }));
};
export default StartProjectCard;
