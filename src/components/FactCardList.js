import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// components/FactCardList.tsx
import { motion } from "framer-motion";
const FactCardList = ({ data }) => {
    return (_jsx(_Fragment, { children: data.map((fact, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: index * 0.1 }, viewport: { once: true }, className: "flex items-center space-x-4 p-3 rounded-xl hover:bg-purple-50 transition-colors", children: [_jsx("div", { className: "text-2xl", children: fact.icon }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-semibold text-gray-800", children: fact.label }), _jsx("div", { className: "text-sm text-gray-600", children: fact.value })] })] }, index))) }));
};
export default FactCardList;
