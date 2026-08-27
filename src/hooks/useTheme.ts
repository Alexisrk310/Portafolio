import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light' | 'pixel-dark' | 'pixel-light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme | null;
    return saved ?? 'dark';
  });

  const isPixel = theme.startsWith('pixel');
  const isDark = theme === 'dark' || theme === 'pixel-dark';

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light', 'pixel-dark', 'pixel-light', 'pixel');
    root.classList.add(theme);
    if (isPixel) root.classList.add('pixel');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme, isPixel]);

  const toggle = () =>
    setTheme((prev) => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'dark';
      if (prev === 'pixel-dark') return 'pixel-light';
      return 'pixel-dark';
    });

  const togglePixel = () =>
    setTheme((prev) => {
      if (prev === 'dark') return 'pixel-dark';
      if (prev === 'light') return 'pixel-light';
      if (prev === 'pixel-dark') return 'dark';
      return 'light';
    });

  return { theme, toggle, togglePixel, isPixel, isDark };
}