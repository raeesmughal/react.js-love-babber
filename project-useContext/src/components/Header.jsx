import { useTheme } from '../contexts/ThemeContext';
import { useTypography } from '../contexts/TypographyContext';

export default function Header() {
  // Destructure exactly what we need from our custom hooks
  const { isDarkMode, accentColor } = useTheme();
  const { fontFamily } = useTypography();

  return (
    <header style={{ 
      backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
      borderBottom: `4px solid ${accentColor}`,
      padding: '1rem 2rem',
      fontFamily: fontFamily
    }}>
      <h2>Design System UI</h2>
    </header>
  );
}