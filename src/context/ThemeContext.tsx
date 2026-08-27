import { createContext, useContext } from 'react';
import type { Theme } from '@/hooks/useTheme';

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
  togglePixel: () => void;
  isPixel: boolean;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggle: () => {},
  togglePixel: () => {},
  isPixel: false,
  isDark: true,
});

export const useThemeContext = () => useContext(ThemeContext);