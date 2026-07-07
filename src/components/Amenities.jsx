import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Flower2, Utensils, Dumbbell, Baby, Users2, Gem, Flame, Wifi, Car, ArrowUpRight } from 'lucide-react';
import './Amenities.css';

const amenitiesData = [
  {
    id: "pool",
    icon: <Waves size={24} />,
    title: "Infinity Sky Pool",
    desc: "Heated plunge pool framed by panoramic peaks of the Dhauladhars.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    className: "bento-large"
  },
  {
    id: "spa",
    icon: <Flower2 size={24} />,
    title: "Himalayan Spa",
    desc: "Therapeutic wellness massages using custom oils, cedar wood scents, and herbs.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    className: "bento-medium"
  },
  {
    id: "dining",
    icon: <Utensils size={24} />,
    title: "Fine Dining",
    desc: "Exquisite multi-cuisine plates prepared by master chefs under local wooden carvings.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    className: "bento-medium"
  },
  {
    id: "gym",
    icon: <Dumbbell size={24} />,
    title: "Modern Gym",
    desc: "Fully equipped athletic center.",
    className: "bento-small"
  },
  {
    id: "kids",
    icon: <Baby size={24} />,
    title: "Kids Zone",
    desc: "Monitored luxury indoor playroom.",
    className: "bento-small"
  },
  {
    id: "wedding",
    icon: <Gem size={24} />,
    title: "Wedding Venue",
    desc: "Cinematic outdoor garden settings.",
    className: "bento-small"
  },
  {
    id: "conference",
    icon: <Users2 size={24} />,
    title: "Conference Hall",
    desc: "State-of-the-art corporate event spaces.",
    className: "bento-small"
  },
  {
    id: "bonfire",
    icon: <Flame size={24} />,
    title: "Bonfire Lounge",
    desc: "Outdoor stone firepits overlooking mountain paths under the starry night.",
    className: "bento-wide"
  },
  {
    id: "wifi",
    icon: <Wifi size={24} />,
    title: "Gigabit Wi-Fi",
    desc: "High-speed coverage everywhere.",
    className: "bento-small"
  },
  {
    id: "parking",
    icon: <Car size={24} />,
    title: "Secure Valet",
    desc: "Round-the-clock vehicle protection.",
    className: "bento-small"
  }
];

export default function Amenities() {
  return (
    <section id="amenities" className="amenities-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Exquisite Facilities</span>
          <h2 className="section-title">Resort <span>Amenities</span></h2>
          <p className="section-desc">
            Indulge in modern comforts specifically designed to make your Himalayan experience absolute bliss.
          </p>
        </div>

        <div className="bento-grid">
          {amenitiesData.map((item, idx) => (
            <motion.div 
              key={item.id} 
              className={`bento-card ${item.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover="hover"
            >
              {item.image && (
                <div 
                  className="bento-bg-img" 
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              )}
              <div className={`bento-content ${item.image ? 'has-bg' : ''}`}>
                <div className="bento-header">
                  <div className="bento-icon-box">
                    {item.icon}
                  </div>
                  {item.image && (
                    <motion.div 
                      className="bento-explore-icon"
                      variants={{
                        hover: { scale: 1.1, backgroundColor: 'var(--primary)', color: 'var(--text-light)', borderColor: 'var(--primary)' }
                      }}
                    >
                      <ArrowUpRight size={18} />
                    </motion.div>
                  )}
                </div>
                <div className="bento-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
