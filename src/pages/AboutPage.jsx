import React from 'react';
import About from '../components/About';
import FloatingUI from '../components/FloatingUI';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <FloatingUI />
      <About />
    </div>
  );
}
