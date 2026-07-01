import React from 'react';

export default function MainLayout({ title, children }) {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
        <h2>{title}</h2>
      </header>
      <main>{children}</main>
    </div>
  );
}