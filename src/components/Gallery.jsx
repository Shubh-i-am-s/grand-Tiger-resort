import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import './Gallery.css';

const galleryData = [
  {
    id: 1,
    category: "rooms",
    title: "Executive Suite Bed",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "pool",
    title: "Infinity Sky Pool",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "restaurant",
    title: "Shivalik dining table",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "nature",
    title: "Scenic Valley Sunrise",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    category: "events",
    title: "Sunset Wedding Venue",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    category: "spa",
    title: "Himalayan Herbal Spa",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    category: "rooms",
    title: "Honeymoon Villa Deck",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    category: "pool",
    title: "Heated Plunge Pool",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
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
