import { useTheme } from '@/hooks/useTheme';
import { ThemeContext } from '@/context/ThemeContext';
import PublicRouter from './router/PublicRoutes';

function App() {
  const { theme, toggle, togglePixel, isPixel, isDark } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggle, togglePixel, isPixel, isDark }}>
      <PublicRouter />
    </ThemeContext.Provider>
  );
}

export default App;
