import React from 'react';
import Rooms from '../components/Rooms';
import FloatingUI from '../components/FloatingUI';

export default function RoomsPage({ onBookRoom }) {
  return (
    <div style={{ paddingTop: '80px' }}>
      <FloatingUI />
      <Rooms onBookRoom={onBookRoom} />
    </div>
  );
}
