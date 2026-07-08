import React from 'react';
import Amenities from '../components/Amenities';
import Dining from '../components/Dining';
import FloatingUI from '../components/FloatingUI';

export default function AmenitiesPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <FloatingUI />
      <Amenities />
      <Dining />
    </div>
  );
}
