import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Tv, Coffee, Wind, Eye, Check, Star, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import './Rooms.css';

const rooms = [
  {
    id: 'deluxe',
    name: "Deluxe Mountain Room",
    category: "rooms",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    ],
    price: 3500,
    size: "280 sq.ft.",
    occupancy: "2 Adults",
    view: "Valley View",
    rating: 4.8,
    desc: "A warm and inviting space detailed with local Himachali cedar wood elements and modern comforts.",
    amenities: ["Wi-Fi", "HD TV", "Coffee Maker", "Air Conditioning", "24/7 Room Service", "Private Balcony"]
  },
  {
    id: 'premium',
    name: "Premium Mountain View",
    category: "rooms",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
    ],
    price: 4800,
    size: "360 sq.ft.",
    occupancy: "2 Adults + 1 Child",
    view: "Mountain Panorama",
    rating: 4.9,
    desc: "Immerse yourself in spectacular views of the snow-capped Dhauladhar peaks from your private viewing terrace.",
    amenities: ["Wi-Fi", "Satellite TV", "Minibar", "Espresso Machine", "Premium Linens", "Private Viewing Balcony"]
  },
  {
    id: 'suite',
    name: "Executive Suite",
    category: "suites",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
    ],
    price: 6500,
    size: "520 sq.ft.",
    occupancy: "4 Adults",
    view: "Forest View",
    rating: 4.9,
    desc: "The perfect balance of space and comfort. Features a separate lounge area, master bedroom, and deluxe bathroom.",
    amenities: ["Wi-Fi", "2 HD TVs", "Fully Stocked Minibar", "Espresso Machine", "Deep Soaking Tub", "Spacious Lounge Area"]
  },
  {
    id: 'family-suite',
    name: "Grand Family Suite",
    category: "suites",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80"
    ],
    price: 8200,
    size: "680 sq.ft.",
    occupancy: "4 Adults + 2 Kids",
    view: "Mountain & Valley View",
    rating: 5.0,
    desc: "Designed for families seeking ultimate closeness. Interconnected rooms with separate dining spaces and balconies.",
    amenities: ["Wi-Fi", "3 HD TVs", "Microwave & Dining", "Minibar", "Private Play Area", "Double Balcony"]
  },
  {
    id: 'honeymoon-villa',
    name: "Honeymoon Sanctuary Villa",
    category: "villas",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
    ],
    price: 11500,
    size: "850 sq.ft.",
    occupancy: "2 Adults",
    view: "Infinity Sunset View",
    rating: 5.0,
    desc: "Romantic timber villa complete with a cozy brick fireplace, outdoor hot tub, and private stargazing terrace.",
    amenities: ["Wi-Fi", "Bang & Olufsen Sound", "Outdoor Hot Tub", "Fireplace", "Stargazing Deck", "Butler on Call"]
  },
  {
    id: 'pool-villa',
    name: "Private Plunge Pool Villa",
    category: "villas",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
    ],
    price: 15000,
    size: "1200 sq.ft.",
    occupancy: "4 Adults",
    view: "Infinity Dhauladhars",
    rating: 5.0,
    desc: "An unmatched luxury compound. Features a private heated plunge pool, massive sun lounge, and round-the-clock personal butler service.",
    amenities: ["Wi-Fi", "Private Plunge Pool", "Home Theatre System", "Kitchenette", "Sun Lounge Deck", "24/7 Butler Service"]
  }
];

export default function Rooms({ onBookRoom }) {
  const [filter, setFilter] = useState('all');
  const [modalRoom, setModalRoom] = useState(null);
  const [slideIndexes, setSlideIndexes] = useState(
    rooms.reduce((acc, room) => ({ ...acc, [room.id]: 0 }), {})
  );

  const handleNextSlide = (e, roomId, totalImages) => {
    e.stopPropagation();
    setSlideIndexes(prev => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % totalImages
    }));
  };

  const handlePrevSlide = (e, roomId, totalImages) => {
    e.stopPropagation();
    setSlideIndexes(prev => ({
      ...prev,
      [roomId]: (prev[roomId] - 1 + totalImages) % totalImages
    }));
  };

  const filteredRooms = filter === 'all' 
    ? rooms 
    : rooms.filter(room => room.category === filter);

  return (
    <section id="rooms" className="rooms-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Luxurious Living</span>
          <h2 className="section-title">Rooms & <span>Suites</span></h2>
          <p className="section-desc">
            Explore our curated selection of spaces. From cozy deluxe forest suites to spectacular private infinity pool villas.
          </p>
        </div>

        {/* Filters */}
        <div className="rooms-filter-row flex-center">
          {['all', 'rooms', 'suites', 'villas'].map((cat) => (
            <button 
              key={cat} 
              className={`rooms-filter-btn clickable ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All Spaces' : cat}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="rooms-luxury-grid">
          {filteredRooms.map((room) => {
            const currentImgIndex = slideIndexes[room.id] || 0;
            return (
              <motion.div 
                key={room.id}
                className="room-luxury-card glass-panel"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image Slider Wrapper */}
                <div className="room-card-slider">
                  <img 
                    src={room.images[currentImgIndex]} 
                    alt={room.name} 
                    className="room-slider-img"
                  />
                  <div className="room-slider-overlay">
                    <span className="badge-premium room-card-badge">
                      ₹{room.price.toLocaleString('en-IN')} / Night
                    </span>
                    <div className="room-slider-dots">
                      {room.images.map((_, i) => (
                        <span 
                          key={i} 
                          className={`slider-dot ${i === currentImgIndex ? 'active' : ''}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Slide controls */}
                  <button 
                    className="slider-nav-btn prev clickable" 
                    onClick={(e) => handlePrevSlide(e, room.id, room.images.length)}
                    aria-label="Previous image"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button 
                    className="slider-nav-btn next clickable" 
                    onClick={(e) => handleNextSlide(e, room.id, room.images.length)}
                    aria-label="Next image"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Content */}
                <div className="room-luxury-content">
                  <div className="room-card-header">
                    <h3 className="room-card-title">{room.name}</h3>
                    <div className="room-card-rating">
                      <Star size={14} className="star-icon" />
                      <span>{room.rating}</span>
                    </div>
                  </div>
                  
                  <p className="room-card-description">{room.desc}</p>
                  
                  {/* Key specs */}
                  <div className="room-card-specs-row">
                    <div>
                      <span>Size</span>
                      <strong>{room.size}</strong>
                    </div>
                    <div>
                      <span>Capacity</span>
                      <strong>{room.occupancy}</strong>
                    </div>
                    <div>
                      <span>View</span>
                      <strong>{room.view}</strong>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="room-card-actions-row">
                    <button 
                      onClick={() => setModalRoom(room)}
                      className="btn btn-outline clickable"
                      style={{ padding: '0.8rem 1.5rem', width: '50%' }}
                    >
                      <Eye size={14} style={{ marginRight: 6 }} /> Quick View
                    </button>
                    <button 
                      onClick={() => onBookRoom(room.id)}
                      className="btn btn-primary clickable"
                      style={{ padding: '0.8rem 1.5rem', width: '50%' }}
                    >
                      Book Stay
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal View Details */}
      <AnimatePresence>
        {modalRoom && (
          <div className="room-modal-overlay flex-center" onClick={() => setModalRoom(null)}>
            <motion.div 
              className="room-modal-card glass-panel" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="modal-close-cross clickable" onClick={() => setModalRoom(null)}>
                &times;
              </button>
              
              <div className="modal-scrollable-grid">
                <div className="modal-slider-box">
                  <img src={modalRoom.images[0]} alt={modalRoom.name} />
                  <div className="modal-side-images">
                    {modalRoom.images.map((img, idx) => (
                      <img key={idx} src={img} alt="" className="modal-side-thumb" />
                    ))}
                  </div>
                </div>

                <div className="modal-details-info">
                  <span className="badge-premium">{modalRoom.view}</span>
                  <h3 className="modal-title">{modalRoom.name}</h3>
                  <div className="modal-price-box">
                    ₹{modalRoom.price.toLocaleString('en-IN')} <span>/ Night (GST Extra)</span>
                  </div>
                  <p className="modal-desc-long">{modalRoom.desc}</p>

                  <h4 className="modal-section-subtitle">Room Specifications</h4>
                  <div className="modal-specs-table">
                    <div><span>Size:</span> <strong>{modalRoom.size}</strong></div>
                    <div><span>Capacity:</span> <strong>{modalRoom.occupancy}</strong></div>
                    <div><span>Bedding:</span> <strong>King Luxury Bed</strong></div>
                    <div><span>Vibe:</span> <strong>Private & Serene</strong></div>
                  </div>

                  <h4 className="modal-section-subtitle">Included Amenities</h4>
                  <ul className="modal-amenities-bullets">
                    {modalRoom.amenities.map((item, idx) => (
                      <li key={idx} className="modal-amenity-pill">
                        <Check size={12} className="check-icon" /> {item}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => {
                      onBookRoom(modalRoom.id);
                      setModalRoom(null);
                    }}
                    className="btn btn-primary modal-action-btn clickable"
                  >
                    Book Stay Room Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
