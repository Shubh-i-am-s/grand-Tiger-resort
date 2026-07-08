import React from 'react';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import FloatingUI from '../components/FloatingUI';

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <FloatingUI />
      <Contact />
      <FAQ />
    </div>
  );
}
