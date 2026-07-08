import React from 'react';
import BookingWizard from '../components/BookingWizard';
import FloatingUI from '../components/FloatingUI';

export default function TariffPage({ initialData }) {
  return (
    <div style={{ paddingTop: '80px' }}>
      <FloatingUI />
      <BookingWizard initialData={initialData} />
    </div>
  );
}
