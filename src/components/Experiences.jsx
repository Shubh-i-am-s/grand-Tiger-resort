import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldAlert, Sparkles } from 'lucide-react';
import './Experiences.css';

const experiences = [
  {
    title: "Kanha Jungle Safari",
    img: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=600&q=80",
    desc: "Embark on a thrilling open-jeep safari to spot Royal Bengal Tigers and Barasinghas.",
    time: "Morning & Evening"
  },

  {
    title: "Nature & Bird Watching",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
    desc: "Explore the 3-acre lush resort grounds spotting native birds and flora.",
    time: "Early Morning"
  },
  {
    title: "Wildlife Photography",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "Guided photography sessions in the core and buffer zones of Kanha.",
    time: "Full Day | On Request"
  },
  {
    title: "Evening Bonfire",
    img: "https://images.unsplash.com/photo-1526491109672-74740652b963?auto=format&fit=crop&w=600&q=80",
    desc: "Share wildlife sightings around a cozy campfire under the starry jungle sky.",
    time: "Nightly | 7:00 PM"
  },
  {
    title: "Tribal Folk Dance",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    desc: "Enjoy traditional tribal dance performances celebrating the spirit of the forest.",
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
