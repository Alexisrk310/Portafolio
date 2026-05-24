import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar } from '@/components/Navbar';
import HomePage from '@/page/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function PublicRouter() {
    return (_jsxs(BrowserRouter, { children: [_jsx(Navbar, {}), _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(HomePage, {}) }) })] }));
}
export default PublicRouter;
