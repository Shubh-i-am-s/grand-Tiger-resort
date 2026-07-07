import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Flower2, Utensils, Dumbbell, Baby, Users2, Gem, Flame, Wifi, Car } from 'lucide-react';
import './Amenities.css';

const amenitiesData = [
  {
    icon: <Waves size={24} />,
    title: "Infinity Pool",
    desc: "Heated sky plunge pool framed by panoramic peaks of the Dhauladhars."
  },
  {
    icon: <Flower2 size={24} />,
    title: "Himalayan Spa",
    desc: "Therapeutic wellness massages using custom oils, cedar wood scents, and herbs."
  },
  {
    icon: <Utensils size={24} />,
    title: "Fine Dining",
    desc: "Exquisite multi-cuisine plates prepared by master chefs under local wooden carvings."
  },
  {
    icon: <Dumbbell size={24} />,
    title: "Modern Gym",
    desc: "Fully equipped athletic center to keep up with your fitness regime."
  },
  {
    icon: <Baby size={24} />,
    title: "Kids Zone",
    desc: "Monitored luxury indoor playroom with toys and creative painting kits."
  },
  {
    icon: <Users2 size={24} />,
    title: "Conference Hall",
    desc: "State-of-the-art corporate event spaces with custom catering options."
  },
  {
    icon: <Gem size={24} />,
    title: "Wedding Venue",
    desc: "Cinematic outdoor garden settings tailored for elegant sunset ceremonies."
  },
  {
    icon: <Flame size={24} />,
    title: "Bonfire Lounge",
    desc: "Outdoor stone firepits overlooking mountain paths under the starry night."
  },
  {
    icon: <Wifi size={24} />,
    title: "Free High-speed Wi-Fi",
    desc: "Consistent gigabit coverage across all cottages and suites."
  },
  {
    icon: <Car size={24} />,
    title: "Secure Valet Parking",
    desc: "Private parking garages and around-the-clock secure vehicle protection."
  }
];

export default function Amenities() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

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

        <motion.div 
          className="amenities-luxury-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {amenitiesData.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="amenity-luxury-card glass-panel"
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                borderColor: 'var(--secondary)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div className="amenity-icon-box">
                {item.icon}
              </div>
              <h3 className="amenity-title">{item.title}</h3>
              <p className="amenity-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
