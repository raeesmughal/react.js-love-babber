import React, { useContext, useEffect } from 'react';
import { ToastContext } from '../context/ToastContext';

// ─── INDIVIDUAL TOAST (Receives data via PROPS) ───
function ToastItem({ id, message, type, onRemove }) {
  // useEffect handles the lifecycle of each toast: auto-deleting after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id);
    }, 4000);

    return () => clearTimeout(timer); // Clean up timer if component unmounts early
  }, [id, onRemove]);

  const styles = {
    padding: '12px 20px',
    borderRadius: '6px',
    color: '#fff',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    backgroundColor: type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db',
  };

  return (
    <div style={styles}>
      <span>{message}</span>
      <button onClick={() => onRemove(id)} style={{ background: 'none', border: 'none', color: '#fff', marginLeft: '15px', cursor: 'pointer', fontWeight: 'bold' }}>×</button>
    </div>
  );
}

// ─── MAIN CONTAINER (Consumes Context) ───
export default function ToastContainer() {
  const { toasts, removeToast } = useContext(ToastContext);

  const containerStyles = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 9999,
    maxWidth: '350px',
    width: '100%',
  };

  return (
    <div style={containerStyles}>
      {toasts.map((toast) => (
        // Props passing happens here to give individual items their data
        <ToastItem 
          key={toast.id} 
          {...toast} 
          onRemove={removeToast} 
        />
      ))}
    </div>
  );
}