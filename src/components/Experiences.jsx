import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldAlert, Sparkles } from 'lucide-react';
import './Experiences.css';

const experiences = [
  {
    title: "Guided Nature Walk",
    img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80",
    desc: "Wander through aromatic pine woodlands with our local botanist guide.",
    time: "Morning | 2 Hours"
  },
  {
    title: "Adventure Zip-lining",
    img: "https://images.unsplash.com/photo-1533240332313-0db49b439ad3?auto=format&fit=crop&w=600&q=80",
    desc: "Feel the rush flying over Shivalik woodlands on a 300m zip line.",
    time: "Afternoon | 1 Hour"
  },
  {
    title: "Candle Light Dining",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    desc: "Savor a customized multi-cuisine menu under warm starlight by the pool.",
    time: "Evening | Booking Required"
  },
  {
    title: "Mountain Ridge Trekking",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "Hike the ancient shepherds' path for panoramic views of Kangra Valley.",
    time: "Full Day | Challenging"
  },
  {
    title: "Pine Firepit Bonfires",
    img: "https://images.unsplash.com/photo-1526491109672-74740652b963?auto=format&fit=crop&w=600&q=80",
    desc: "Exchange travel stories around roasting pine-wood logs with mocktails.",
    time: "Nightly | 7:00 PM"
  },
  {
    title: "Acoustic Live Music",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    desc: "Listen to soft classical guitar tunes curated by regional artists.",
    time: "Weekends | Dinner Hour"
  }
];

export default function Experiences() {
  return (
    <section id="experiences" className="experiences-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Exquisite Living</span>
          <h2 className="section-title">Resort <span>Experiences</span></h2>
          <p className="section-desc">
            Make memories outside your suite. From zip-lining through local pine trees to fine-dining by candle light.
          </p>
        </div>

        <div className="experiences-luxury-grid">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              className="experience-luxury-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
            >
              <div className="exp-image-box">
                <img src={exp.img} alt={exp.title} />
                <div className="exp-time-badge glass-panel">{exp.time}</div>
              </div>
              <div className="exp-info">
                <h4>{exp.title}</h4>
                <p>{exp.desc}</p>
                <div className="exp-card-footer">
                  <Sparkles size={12} className="star-highlight" />
                  <span>Interactive Activity</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
