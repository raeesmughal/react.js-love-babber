import { useTheme } from '../contexts/ThemeContext';
import { useTypography } from '../contexts/TypographyContext';

export default function PreviewCard() {
  // The card simply reacts to whatever the global state currently is
  const { isDarkMode, accentColor } = useTheme();
  const { fontFamily, fontSize } = useTypography();

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
      color: isDarkMode ? '#f9fafb' : '#111827',
      padding: '2rem',
      borderRadius: '12px',
      fontFamily: fontFamily,
      fontSize: fontSize,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      marginTop: '2rem'
    }}>
      <h3 style={{ color: accentColor, marginBottom: '1rem' }}>
        Interactive Preview
      </h3>
      <p>
        This card is styled entirely by the global context. Notice how clean 
        the component code is because we aren't passing props manually!
      </p>
      <button style={{
        backgroundColor: accentColor,
        color: '#fff',
        border: 'none',
        padding: '0.75rem 1.5rem',
        borderRadius: '6px',
        marginTop: '1rem',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        Primary Button
      </button>
    </div>
  );
}