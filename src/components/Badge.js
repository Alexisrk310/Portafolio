import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export const Badge = ({ className = '', ...props }) => {
    return (_jsx("div", { className: clsx('inline-flex items-center rounded-full px-3 py-1 text-sm font-medium', className), ...props }));
};
