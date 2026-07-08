import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const galleryData = [
  {
    id: 1,
    category: "rooms",
    title: "Luxury Room",
    image: "/WhatsApp Image 2026-07-08 at 18.07.15.jpeg"
  },
  {
    id: 3,
    category: "restaurant",
    title: "Dining Area",
    image: "/WhatsApp Image 2026-07-08 at 18.07.42.jpeg"
  },
  {
    id: 4,
    category: "pool",
    title: "Resort Pool",
    image: "/WhatsApp Image 2026-07-08 at 18.08.01.jpeg"
  },
  {
    id: 5,
    category: "events",
    title: "Celebration Venue",
    image: "/WhatsApp Image 2026-07-08 at 18.12.46.jpeg"
  },
  {
    id: 7,
    category: "rooms",
    title: "Jungle Suite",
    image: "/WhatsApp Image 2026-07-08 at 18.13.10.jpeg"
  },
  {
    id: 8,
    category: "nature",
    title: "Lush Outdoors",
    image: "/WhatsApp Image 2026-07-08 at 18.13.21.jpeg"
  },
  {
    id: 9,
    category: "restaurant",
    title: "Fine Dining",
    image: "/WhatsApp Image 2026-07-08 at 18.13.34.jpeg"
  },
  {
    id: 10,
    category: "pool",
    title: "Evening Views",
    image: "/WhatsApp Image 2026-07-08 at 18.13.48.jpeg"
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = filter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  const categories = [
    { label: 'All Portfolio', val: 'all' },
    { label: 'Suites & Rooms', val: 'rooms' },
    { label: 'Infinity Pool', val: 'pool' },
    { label: 'Fine Dining', val: 'restaurant' },
    { label: 'Nature', val: 'nature' },
    { label: 'Celebrations', val: 'events' },
    { label: 'Spa Wellness', val: 'spa' }
  ];

  return (
    <section id="gallery" className="gallery-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Visual Splendor</span>
          <h2 className="section-title">Resort <span>Gallery</span></h2>
          <p className="section-desc">
            Peek into the serene experiences waiting for you. Take a visual walk through our pools, restaurants, gardens, and premium suites.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="gallery-filter-bar flex-center">
          {categories.map((cat) => (
            <button
              key={cat.val}
              className={`gallery-filter-btn clickable ${filter === cat.val ? 'active' : ''}`}
              onClick={() => setFilter(cat.val)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          className="gallery-masonry"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="gallery-item clickable"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setLightboxImage(item.image)}
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-item-hover">
                  <ZoomIn size={24} className="hover-zoom-icon" />
                  <h4>{item.title}</h4>
                  <span>{item.category.toUpperCase()}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="lightbox-overlay flex-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button className="lightbox-close clickable" onClick={() => setLightboxImage(null)}>
              <X size={32} />
            </button>
            <motion.div
              className="lightbox-image-box"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImage} alt="Fullscreen View" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
