import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
export const Button = ({ size = 'sm', variant = 'solid', className = '', ...props }) => {
    const base = 'rounded-full font-medium transition-all flex items-center justify-center';
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        lg: 'px-8 py-3 text-base',
    };
    const variants = {
        solid: 'bg-purple-600 text-white hover:bg-purple-700',
        outline: 'border border-purple-200 text-purple-600 bg-transparent hover:bg-purple-50',
    };
    return (_jsx("button", { className: clsx(base, sizes[size], variants[variant], className), ...props, children: props.children }));
};
