import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Navbar />
        <main className="main-content">
          <Dashboard />
        </main>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;