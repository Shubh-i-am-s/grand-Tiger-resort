import React from 'react';
import Hero from '../components/Hero';
import SpecialOffers from '../components/SpecialOffers';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import FloatingUI from '../components/FloatingUI';

export default function HomePage({ onSearchBooking }) {
  return (
    <>
      <FloatingUI />
      <Hero onSearchBooking={onSearchBooking} />
      <SpecialOffers />
      <Gallery />
      <Reviews />
    </>
  );
}
