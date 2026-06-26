import React from 'react';
import useTheme from '../hooks/useTheme';
import useAuth from '../hooks/useAuth';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1>CustomHookHQ</h1>
      <div className="nav-actions">
        <button onClick={toggleTheme} className="btn-secondary">
          Mode: {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
        </button>

        {user ? (
          <div className="auth-zone">
            <span>Welcome, <strong>{user.name}</strong></span>
            <button onClick={logout} className="btn-danger">Logout</button>
          </div>
        ) : (
          <button onClick={() => login('Agent Smith')} className="btn-primary">
            Login as Admin
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;