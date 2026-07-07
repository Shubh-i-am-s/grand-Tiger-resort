import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Heart, Shield } from 'lucide-react';
import './About.css';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Storytelling Text */}
          <div className="about-text-panel">
            <motion.span className="section-subtitle" variants={itemVariants}>
              Heritage & Serenity
            </motion.span>
            <motion.h2 className="section-title left" variants={itemVariants}>
              Our Story. Inspired by <span>Himachal’s Pure Soul</span>.
            </motion.h2>
            
            <motion.p className="about-narrative-lead" variants={itemVariants}>
              Perched peacefully at the foothills of Shivalik and framed by the epic snow-clad Dhauladhar peaks, Dee Jay Resort is a sanctuary for the modern traveler.
            </motion.p>
            
            <motion.p className="about-narrative-text" variants={itemVariants}>
              Located in Dhaliara near India's famous heritage village of Pragpur, our resort bridges rich Himachali architecture with contemporary hospitality. Every space is handcrafted to invoke natural peace, starting from our locally-sourced slate ceilings to customized wood carvings.
            </motion.p>

            <motion.p className="about-narrative-text" variants={itemVariants}>
              Whether visiting the holy shrines of Chintpurni, strolling through cobblestone heritage roads, or simply relaxing in our infinity pool overlooking the Beas River reservoir, we promise a stay of absolute restoration.
            </motion.p>

            {/* Quick stats counter blocks */}
            <motion.div className="about-achievements" variants={itemVariants}>
              <div className="achievement-block">
                <div className="achievement-icon-circle"><Award size={20} /></div>
                <div>
                  <h5>Excellence Winner</h5>
                  <p>Himachal State Tourism Award</p>
                </div>
              </div>
              <div className="achievement-block">
                <div className="achievement-icon-circle"><Heart size={20} /></div>
                <div>
                  <h5>98.6% Guest Love</h5>
                  <p>Highest rated lodge in Kangra valley</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Handcrafted Parallax Image Gallery Layout */}
          <div className="about-parallax-gallery">
            <motion.div 
              className="about-gallery-container"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main Image */}
              <div className="about-img-frame main-frame">
                <img 
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80" 
                  alt="Dee Jay Mountain Lodge" 
                />
              </div>

              {/* Offset Image Card */}
              <motion.div 
                className="about-img-frame offset-frame glass-panel"
                style={{ y: 20 }}
                whileHover={{ y: 0, transition: { duration: 0.3 } }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80" 
                  alt="Scenic Pool Overlook" 
                />
              </motion.div>

              {/* Float Badge */}
              <motion.div 
                className="about-float-stamp glass-panel"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="stamp-ring">
                  <Compass size={24} className="stamp-icon" />
                  <div>
                    <h4>14+ Years</h4>
                    <p>Himalayan Sanctuary</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
