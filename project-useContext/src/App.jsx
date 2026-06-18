import { ThemeProvider } from './contexts/ThemeContext';
import { TypographyProvider } from './contexts/TypographyContext';
import Header from './components/Header';
import SettingsPanel from './components/SettingsPanel';
import PreviewCard from './components/PreviewCard';
import './index.css';

function App() {
  return (
    /* We wrap our app in both providers. 
      Everything inside has access to BOTH Contexts.
    */
    <ThemeProvider>
      <TypographyProvider>
        
        <div className="app-container">
          <Header />
          <main style={{ padding: '2rem', display: 'flex', gap: '4rem' }}>
            <SettingsPanel />
            <PreviewCard />
          </main>
        </div>

      </TypographyProvider>
    </ThemeProvider>
  );
}

export default App;