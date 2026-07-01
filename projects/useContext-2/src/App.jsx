import React from 'react';
import { ToastProvider } from './context/ToastContext';
import MainLayout from './components/MainLayout';
import NotificationCenter from './components/NotificationCenter';
import ToastContainer from './components/ToastContainer';

export default function App() {
  return (
    <ToastProvider>
      {/* Visual rendering of active alert list floating on screen */}
      <ToastContainer />
      
      {/* Standard prop passing for layout wrapper */}
      <MainLayout title="Dashboard Settings Portal">
        <p>Welcome back! Switch modules or test global workflows below.</p>
        <NotificationCenter />
      </MainLayout>
    </ToastProvider>
  );
}