import { useTheme } from '../contexts/ThemeContext';
import { useTypography } from '../contexts/TypographyContext';

export default function SettingsPanel() {
  // We need the setter functions here to change the global state
  const { isDarkMode, setIsDarkMode, setAccentColor } = useTheme();
  const { setFontFamily, setFontSize } = useTypography();

  return (
    <div className="settings-panel">
      <h3>Global Controls</h3>
      
      {/* Theme Controls */}
      <div className="control-group">
        <label>
          <input 
            type="checkbox" 
            checked={isDarkMode} 
            onChange={(e) => setIsDarkMode(e.target.checked)} 
          />
          Enable Dark Mode
        </label>
      </div>

      <div className="control-group">
        <label>Accent Color: </label>
        <input 
          type="color" 
          onChange={(e) => setAccentColor(e.target.value)} 
        />
      </div>

      {/* Typography Controls */}
      <div className="control-group">
        <label>Font Family: </label>
        <select onChange={(e) => setFontFamily(e.target.value)}>
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="monospace">Monospace</option>
        </select>
      </div>
    </div>
  );
}