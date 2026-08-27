'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '@/constants/navLinks';
import { useThemeContext } from '@/context/ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const { toggle, togglePixel, isPixel, isDark } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl border-b border-cyan-500/10 shadow-sm'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'var(--nav-bg)' } : {}}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#inicio"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2.5 group"
        >
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold font-mono tracking-wider" style={{ color: 'var(--text-primary)' }}>
              alexis<span className="text-gradient-cyan">.dev</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
              Full Stack
            </span>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((section) => (
            <a
              key={section.name}
              href={section.href}
              onClick={() => setActiveLink(section.name)}
              className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group"
              style={{
                color: activeLink === section.name ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              {section.name}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-cyan-400 transition-all duration-300"
                style={{ width: activeLink === section.name ? '80%' : '0' }}
              />
            </a>
          ))}
        </div>

        {/* Controles derecha — Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            className="relative w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300"
            style={{
              background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              borderColor: 'var(--border-subtle)',
            }}
            aria-label="Cambiar tema"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-4 w-4 text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-4 w-4 text-sky-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Pixel Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePixel}
            className="relative w-9 h-9 flex items-center justify-center border transition-all duration-300"
            style={{
              background: isPixel ? 'rgba(0,255,65,0.12)' : isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              borderColor: isPixel ? 'var(--accent)' : 'var(--border-subtle)',
              borderRadius: isPixel ? 0 : '0.75rem',
            }}
            aria-label="Modo pixel art"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" style={{ color: isPixel ? 'var(--accent)' : 'var(--text-secondary)' }}>
              <rect x="3" y="1" width="2" height="2" fill="currentColor" />
              <rect x="11" y="1" width="2" height="2" fill="currentColor" />
              <rect x="1" y="3" width="2" height="2" fill="currentColor" />
              <rect x="5" y="3" width="6" height="2" fill="currentColor" />
              <rect x="13" y="3" width="2" height="2" fill="currentColor" />
              <rect x="1" y="5" width="14" height="2" fill="currentColor" />
              <rect x="1" y="7" width="2" height="2" fill="currentColor" />
              <rect x="5" y="7" width="2" height="2" fill="currentColor" />
              <rect x="9" y="7" width="2" height="2" fill="currentColor" />
              <rect x="13" y="7" width="2" height="2" fill="currentColor" />
              <rect x="1" y="9" width="14" height="2" fill="currentColor" />
              <rect x="3" y="11" width="4" height="2" fill="currentColor" />
              <rect x="9" y="11" width="4" height="2" fill="currentColor" />
              <rect x="3" y="13" width="2" height="2" fill="currentColor" />
              <rect x="11" y="13" width="2" height="2" fill="currentColor" />
            </svg>
          </motion.button>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:alexisrk310@gmail.com?subject=¡Hola Alexis, quiero contactarte!"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, var(--accent), var(--accent-dim))',
              boxShadow: '0 0 14px var(--accent-glow)',
            }}
          >
            <Mail className="h-4 w-4" />
            Contáctame
          </motion.a>
        </div>

        {/* Mobile: theme + pixel + menu */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            className="w-8 h-8 rounded-lg flex items-center justify-center border"
            style={{ borderColor: 'var(--border-subtle)', background: 'var(--bg-elevated)' }}
            aria-label="Cambiar tema"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-sky-400" />
            )}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={togglePixel}
            className="w-8 h-8 flex items-center justify-center border"
            style={{
              borderColor: isPixel ? 'var(--accent)' : 'var(--border-subtle)',
              background: isPixel ? 'rgba(0,255,65,0.12)' : 'var(--bg-elevated)',
              borderRadius: isPixel ? 0 : '0.5rem',
            }}
            aria-label="Modo pixel art"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" style={{ color: isPixel ? 'var(--accent)' : 'var(--text-secondary)' }}>
              <rect x="3" y="1" width="2" height="2" fill="currentColor" />
              <rect x="11" y="1" width="2" height="2" fill="currentColor" />
              <rect x="1" y="3" width="2" height="2" fill="currentColor" />
              <rect x="5" y="3" width="6" height="2" fill="currentColor" />
              <rect x="13" y="3" width="2" height="2" fill="currentColor" />
              <rect x="1" y="5" width="14" height="2" fill="currentColor" />
              <rect x="1" y="7" width="2" height="2" fill="currentColor" />
              <rect x="5" y="7" width="2" height="2" fill="currentColor" />
              <rect x="9" y="7" width="2" height="2" fill="currentColor" />
              <rect x="13" y="7" width="2" height="2" fill="currentColor" />
              <rect x="1" y="9" width="14" height="2" fill="currentColor" />
              <rect x="3" y="11" width="4" height="2" fill="currentColor" />
              <rect x="9" y="11" width="4" height="2" fill="currentColor" />
              <rect x="3" y="13" width="2" height="2" fill="currentColor" />
              <rect x="11" y="13" width="2" height="2" fill="currentColor" />
            </svg>
          </motion.button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t backdrop-blur-xl"
            style={{ borderColor: 'var(--border-subtle)', background: 'var(--nav-bg)' }}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((section, i) => (
                <motion.a
                  key={section.name}
                  href={section.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center px-4 py-2.5 rounded-xl transition-all font-medium text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={() => setIsOpen(false)}
                >
                  {section.name}
                </motion.a>
              ))}
              <div className="pt-2 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                <a
                  href="mailto:alexisrk310@gmail.com?subject=¡Hola Alexis!"
                  className="flex items-center justify-center gap-2 w-full px-6 py-2.5 rounded-full text-white font-semibold text-sm"
                  style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-dim))' }}
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="h-4 w-4" />
                  Contáctame
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
