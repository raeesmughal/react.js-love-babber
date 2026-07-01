import React from 'react';
import { useToast } from '../hooks/useToast';

export default function NotificationCenter() {
  const addToast = useToast(); // Using our custom hook!

  const buttonStyle = (color) => ({
    padding: '10px 15px',
    marginRight: '10px',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: color,
    cursor: 'pointer',
    fontWeight: 'bold'
  });

  return (
    <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
      <h4>Simulate App Actions Below:</h4>
      <p>Clicking these buttons uses the custom hook to broadcast an alert out to the Context Provider.</p>
      
      <button onClick={() => addToast('Payment processed successfully!', 'success')} style={buttonStyle('#2ecc71')}>
        Trigger Success
      </button>
      
      <button onClick={() => addToast('Database connection failed.', 'error')} style={buttonStyle('#e74c3c')}>
        Trigger Error
      </button>
      
      <button onClick={() => addToast('New update available.', 'info')} style={buttonStyle('#3498db')}>
        Trigger Info
      </button>
    </div>
  );
}