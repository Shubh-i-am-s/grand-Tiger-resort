import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Flower2, Utensils, Dumbbell, Baby, Users2, Gem, Flame, Wifi, Car, ArrowUpRight, Wind } from 'lucide-react';
import './Amenities.css';

const amenitiesData = [
  {
    id: "safari",
    icon: <Car size={24} />,
    title: "Jungle Safari Booking",
    desc: "Seamless booking for Kanha core and buffer zones with expert naturalists.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
    className: "bento-large"
  },
  {
    id: "pool",
    icon: <Waves size={24} />,
    title: "Swimming Pool",
    desc: "Relaxing outdoor pool surrounded by lush jungle greenery.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    className: "bento-medium"
  },
  {
    id: "dining",
    icon: <Utensils size={24} />,
    title: "Multi-Cuisine Restaurant",
    desc: "Serving Indian, Continental, and authentic local tribal delicacies.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    className: "bento-medium"
  },
  {
    id: "bonfire",
    icon: <Flame size={24} />,
    title: "Night Bonfires",
    desc: "Warm up and share safari stories.",
    className: "bento-small"
  },
  {
    id: "ev",
    icon: <Car size={24} />,
    title: "EV Charging",
    desc: "Dedicated charging station.",
    className: "bento-small"
  },
  {
    id: "wifi",
    icon: <Wifi size={24} />,
    title: "Free Wi-Fi",
    desc: "High-speed internet access.",
    className: "bento-small"
  },
  {
    id: "parking",
    icon: <Car size={24} />,
    title: "Free Parking",
    desc: "Safe and secure vehicle parking.",
    className: "bento-small"
  },
  {
    id: "ac",
    icon: <Wind size={24} />,
    title: "A.C. Rooms",
    desc: "Climate-controlled comfort in all rooms and suites regardless of the season.",
    className: "bento-wide"
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
            Indulge in modern comforts specifically designed to make your Kanha jungle experience absolute bliss.
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
