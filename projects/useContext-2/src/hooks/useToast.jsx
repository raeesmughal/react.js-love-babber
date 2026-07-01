import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';

export function useToast() {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  // Return just the trigger function so components don't have to worry about state arrays
  return context.addToast;
}